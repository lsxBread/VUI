import Vue from 'vue'
import Button from './button'
import Icon from './Icon'
import ButtonGroupp from './ButtonGroup'
import Input from './Input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroupp)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading2: false
  }
})