<template>
  <div>
    {{ isDark }}
    <uButton @click="toggleDark()">
      <template #icon>
        <PhMoon></PhMoon>
      </template>
    </uButton>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { PhMoon } from '@phosphor-icons/vue'
const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
