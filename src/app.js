import Vue from 'vue'
import Button from './button'
import Icon from './Icon'
import ButtonGroupp from './ButtonGroup'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Toast from './Toast'
import plugin from './plugin'
import Tabs from './Tabs'
import TabsHead from './TabsHead'
import TabsBody from './TabsBody'
import TabsItem from './TabsItem'
import TabsPanel from './TabsPanel'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroupp)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectedTabs: 'news'
  },
  methods: {
  }
})