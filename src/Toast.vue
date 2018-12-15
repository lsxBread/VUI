<template>
  <div class="toast" ref='toast' :class="toastClasses">
    <slot v-if='!enableHtml'></slot>
    <div v-else v-html='$slots.default[0]'></div>

    <div class="line" ref='line'></div>
    <span class='close' v-if='closeButton' @click='onClickClose'>
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'g-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 5
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
          }, this.autoCloseDelay * 1000)
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
  @keyframes fade-in {
    0% {opacity: 0; transform: translateY(100%)} 
    100% {opacity: 1; transform: translateY(0%)} 
  }
  .toast {
    animation: fade-in 1s;
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
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
    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }
    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%);
    }
  }
</style>