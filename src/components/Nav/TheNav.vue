<template>
  <nav>
    <div class="nav-container">
      <div class="left-side">
        <a href="https://github.com/Mini-Sylar/shopify-app-vue-template" target="_blank">
          <UButton type="outline" label="Star This Repo" size="small">
            <template #icon><PhStar color="var(--accent-2)" size="24" /></template>
          </UButton>
        </a>
      </div>
      <div class="right-side">
        <ToggleTheme />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { PhStar } from '@phosphor-icons/vue'
import ToggleTheme from './ToggleTheme.vue'
</script>

<style scoped>
nav {
  width: 100%;
  height: 0;
}
.nav-container {
  position: relative;
  width: min(90%, 1600px);
  margin: 0 auto;
  inset: 0;
  display: flex;
  justify-content: space-between;
  justify-self: center;
  padding: 1rem;
  z-index: 3;
}

@media screen and (max-width: 768px) {
  .right-side:deep(.u-label-text) {
    display: none;
  }

  .right-side:deep(.u-icon-slot) {
    margin: 0;
  }
}
</style>
