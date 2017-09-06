import 'babel-polyfill'
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import App from './App'
import fastClick from 'fastclick'

import 'assets/stylus/index.styl'

fastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('assets/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
