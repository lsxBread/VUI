<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-toast'
  }
</script>

<style lang="scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  $toast-shadow: 0 0 3px 0 rgba(0,0,0,.5);
  .toast {
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    color: white;
    padding: 0 16px;
  }
</style>