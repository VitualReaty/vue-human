<template>
  <div class="mn-columns">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-columns'
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-columns {
    display: flex;
    flex-wrap: wrap;

    // When `mobile` media query, padding is 0, and use single column forcely.
    // When equal and more than `tablet` media query, padding is 0.5rem.
    @include min-screen(tablet) {
      margin: 0 $mn-column-grid-gutters * -0.5;
    }
  }
</style>
