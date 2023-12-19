<template>
  <nav>
    <div class="right-side">
      <a href="https://github.com/Mini-Sylar/shopify-app-vue-template" target="_blank">
        <UButton type="outline" label="Star This Repo" size="small">
          <template #icon><PhStar color="yellow" /></template>
        </UButton>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { PhStar } from '@phosphor-icons/vue'
</script>

<style scoped>
nav {
  position: absolute;
  width: min(90%, 1600px);
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  z-index: 3;
}
</style>
