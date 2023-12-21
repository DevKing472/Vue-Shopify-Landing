<template>
  <img :src="image" class="blob" />
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import BlogGradDark from '../../../assets/images/blog_grad.webp'
import BlogGradLight from '../../../assets/images/mesh_grad_bg_light.png'
const isDark = useDark()
const image = computed(() => {
  return isDark.value ? BlogGradDark : BlogGradLight
})

const opacityVal = computed(() => {
  return isDark.value ? '0.25' : '0.05'
})
</script>

<style scoped>
.blob {
  position: absolute;
  width: 100%;
  height: 800px;
  top: 10%;
  z-index: -1;
  opacity: v-bind('opacityVal');
  border-radius: 50% 50% 0 0;
  filter: blur(10px) brightness(0.5);
}
</style>
