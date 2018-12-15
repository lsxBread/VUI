import Toast from './Toast'

let curretToast

export default {
  install (Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (curretToast) {
        curretToast.close()
      }
      curretToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          curretToast = null
        }
      })
    }
  }
}

// helpers
function createToast ({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('beforeClose', onClose)
  document.body.appendChild(toast.$el)
  return toast
}