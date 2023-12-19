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
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import GridDark from '../../../assets/images/grid_dark.svg'
import GridLight from '../../../assets/images/grid_light.svg'

const isDark = useDark()
const image = computed(() => {
  return isDark.value ? `url(${GridDark})` : `url(${GridLight})`
})
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
    background-image: v-bind('image');
  }
}
@media (prefers-color-scheme: light) {
  .magicpattern {
    background-image: url('../../../assets/images/grid_light.svg');
  }
}
</style>
