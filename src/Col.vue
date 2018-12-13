<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true 
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'vui-col',
    data () {
      return {
        gutter: 0
      }
    },
    props: {
      span: { type: [Number, String] },
      offset: { type: [Number, String] },
      ipad: { type: Object, validator },
      narrowPc: { type: Object, validator },
      pc: { type: Object, validator },
      widePc: { type: Object, validator }
    },
    methods: {
      createClass (obj, string = '') {
        if (!obj) {return []}
        let array = []
        if (obj.span) { array.push(`col-${string}${obj.span}`) }
        if (obj.offset) { array.push(`offset-${string}${obj.offset}`) }
        return array
      }
    },
    computed: {
      colClass () {
        const { span, offset, ipad, narrowPc, pc, widePc } = this
        return [
          ...this.createClass({span, offset}),
          ...this.createClass(ipad, 'ipad-'),
          ...this.createClass(narrowPc, 'narrow-pc-'),
          ...this.createClass(pc, 'pc-'),
          ...this.createClass(widePc, 'wide-pc-')
        ]
      },
      colStyle () {
        return {
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: `${this.gutter / 2}px`
        }
      }
    }
  }
</script>

<style lang="scss">
  .col {
    $class-prefix: col-;

    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      $class-prefix: col-ipad-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
    @media (min-width: 769px) {
      $class-prefix: col-narrow-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
    @media (min-width: 1200px) {
      $class-prefix: col-wide-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      } 
    }
  }
</style>
      