<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" name="loading" class="icon loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'vui-button',
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
}
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .content {
      order: 2;
      line-height: 1em;
    }
    > .icon {
      order: 1;
      margin-right: .3em;
    }
    &.icon-right {
      > .content {
        order: 1
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>