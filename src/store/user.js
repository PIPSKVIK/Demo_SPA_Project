import * as fb from 'firebase'

class User {
  constructor (id) { // Будем создавать новый объект используя таку конструкци.
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) { // Регистрируем нового пользователя
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password) // Обязательно юзаем этот метод
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) { // Логин зарегистрировавшего пользователя.
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password) // обязательно к использованию этот метод
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message) // Это в самой консоле будет такое сообщение
        throw error //  throw позволяет генерировать исключения, определяемые пользователем. При этом выполнение текущей функции будет остановлено
      }
    },
    autoLoginUser ({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    },
    logoutUser ({ commit }, payload) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLoggIn (state) { // Этот метод, нам будет позволяит прятать ненужные кнопки, когда user залогинелся!
      return state.user !== null // возвращаем, если юзер на равен nuul, то пользвователь зарегистрирован!
    } // Проверять это будем в App компоненте, так как у нас все!
  }
}
