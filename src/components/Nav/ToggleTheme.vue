<template>
  <div>
    <uButton @click="toggleDark()" size="small" label="Toggle Theme">
      <template #icon>
        <PhMoon v-if="!isDark" size="24"></PhMoon>
        <PhSun v-else size="24"></PhSun>
      </template>
    </uButton>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { PhMoon, PhSun } from '@phosphor-icons/vue'
const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
