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
  export default {
    name: 'vui-col',
    data () {
      return {
        gutter: 0
      }
    },
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    computed: {
      colClass () {
        const { span, offset } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
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
  }

</style>