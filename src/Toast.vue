<template>
<div class="wrapper" :class="toastClasses">
  <div class='toast' ref='toast'> 
    <slot v-if='!enableHtml'></slot>
    <div v-else v-html='$slots.default[0]'></div>
    <div class="line" ref='line'></div>
    <span class='close' v-if='closeButton' @click='onClickClose'>
      {{closeButton.text}}
    </span>
  </div>
</div>
</template>

<script>
  export default {
    name: 'g-toast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 10,
        validator(value) {
          return (value === false || typeof value === 'number') 
        }
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          } 
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    mounted () {
      this.execAutoClose()
      this.updateStyles()
    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        })
      },
      close () {
        this.$el.remove()
        this.$emit('beforeClose')
        this.$destroy()
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    }
  }
</script>

<style lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  $toast-shadow: 0 0 3px 0 rgba(0,0,0,.5);
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%)} 
    100% {opacity: 1; transform: translateY(0%)} 
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%)} 
    100% {opacity: 1; transform: translateY(0%)} 
  }
  @keyframes fade-in {
    0% {opacity: 0;} 
    100% {opacity: 1;} 
  }
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      > .toast {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        animation: slide-down 1s;
      }
    }
    &.position-bottom {
      bottom: 0;
      > .toast {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        animation: slide-up 1s;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      animation: fade-in 1s;
    }
  }
  .toast {
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    border-radius: 4px;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    color: white;
    padding: 0 16px;
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      border-left: 1px solid white;
      margin-left: 16px;
    }
  }
</style>