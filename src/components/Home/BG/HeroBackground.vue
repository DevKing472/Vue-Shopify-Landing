<template>
  <div class="magicpattern">
    <FromCenter></FromCenter>
    <FromBottomRight></FromBottomRight>
    <FromTopRight></FromTopRight>
    <FromBottomLeft></FromBottomLeft>
    <FromTopLeft></FromTopLeft>
  </div>
</template>

<script setup lang="ts">
import FromCenter from './FromCenter.vue'
import FromBottomRight from './FromBottomRight.vue'
import FromTopRight from './FromTopRight.vue'
import FromBottomLeft from './FromBottomLeft.vue'
import FromTopLeft from './FromTopLeft.vue'
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .magicpattern {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat;
    background-image: url('../../../assets/images/grid_dark.svg');
  }
}
@media (prefers-color-scheme: light) {
  .magicpattern {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat;
    background-image: url('../../../assets/images/grid_light.svg');
  }
}
</style>
