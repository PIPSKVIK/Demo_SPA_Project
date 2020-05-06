export default {
  state: {
    ads: [
      {
        title: 'squirrel',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '100'
      },
      {
        title: 'sky',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '200'
      },
      {
        title: 'planet',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '300'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = 'dsdsdsdsdsdsd'

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) { // замыкание для получения id
      return adId => { // вернем некоторую функцию, которая принимает параметр adId - это стрелочная функция
        return state.ads.find(ad => ad.id === adId) // вернем state.ads и у этого массива вызываем метод find() где на каждой итерации будим принимать элемент ad и у него будем проверять. Если у ad.id === совпадает idId который мы передали в функцию (то возвращаем нужный нам ad из всего массива)
      }
    }
  }
}
