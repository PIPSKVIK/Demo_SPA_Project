import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyA9pAeulxjf8qST_aOeqfccROqtvd37vCY',
      authDomain: 'itc-ads-f1c40.firebaseapp.com',
      databaseURL: 'https://itc-ads-f1c40.firebaseio.com',
      projectId: 'itc-ads-f1c40',
      storageBucket: 'itc-ads-f1c40.appspot.com',
      messagingSenderId: '220504987973',
      appId: '1:220504987973:web:637432ebb728ff6333062c',
      measurementId: 'G-Q5P63N8NFG'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
