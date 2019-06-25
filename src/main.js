import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

Vue.filter('somefilter', function (value) {
  return value.split('').reverse().join('')
})

Vue.directive('color', function (el) {
 el.style.color="red"
})


new Vue({
  el: '#app',
  render: h => h(App)
})
