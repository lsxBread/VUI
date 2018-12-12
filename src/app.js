import Vue from 'vue'
import Button from './button'
import Icon from './Icon'
import ButtonGroupp from './ButtonGroup'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroupp)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading2: false
  }
})