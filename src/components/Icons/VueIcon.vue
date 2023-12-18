<template>
  <div v-drag="dragHandler" ref="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 261.76 226.69"
      v-motion
      :initial="{ y: 0 }"
      :enter="{
        y: 2,
        transition: {
          type: 'spring',
          stiffness: 5,
          damping: 0,
          bounce: 0,
          repeat: Infinity,
          repeatType: 'mirror'
        }
      }"
    >
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
        fill="#41b883"
      />
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
        fill="#34495e"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMotionProperties, useSpring, type PermissiveMotionProperties } from '@vueuse/motion'
import type { DragHandler } from '@/types/gesture.types'

const icon = ref()
const { motionProperties } = useMotionProperties(icon, {
  cursor: 'grab',
  x: 0,
  y: 0
})
const { set } = useSpring(motionProperties as PermissiveMotionProperties)

const dragHandler: DragHandler = ({ movement: [x, y], dragging }) => {
  if (!dragging) {
    set({ x: 0, y: 0, cursor: 'grab' })
    return
  }

  set({
    cursor: 'grabbing',
    x,
    y
  })
}
</script>

<style scoped>
svg {
  width: 10rem;
  height: 100%;
  filter: drop-shadow(0px 0px 50px #2d8f85);
}
</style>
