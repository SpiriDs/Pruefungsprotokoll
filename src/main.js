// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './store'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },

  data () {
    return {
      msg: '',
      date: new Date(),
      protokoll: {
        date: '',
        pruefer: '',
        beisitzer: ''
      }
    }
  }
})
