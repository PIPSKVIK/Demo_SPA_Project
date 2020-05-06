import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ru from 'vuetify/es5/locale/ru'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru'
  },
  icons: {
    iconfont: 'mdi'
  }
})
