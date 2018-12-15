import Vue from 'vue'
import Button from './button'
import Icon from './Icon'
import ButtonGroupp from './ButtonGroup'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Toast from './Toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroupp)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading2: false,
    message: 'hi'
  },
  methods: {
    showToast: function() {
      this.$toast('<a href="http://google.com">Link</a>', {
        closeButton: {
          text: "Close",
          callback: () => {
            console.log("hhahaahah")
          }
        },
        enableHtml: false,
        position: 'middle'
      })
    } 
  }
})