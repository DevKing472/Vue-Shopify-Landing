<template>
  <section>
    <div class="main-container">
      <div class="header-container">
        <a href="#sample-app">
          <UButton type="fancy" label="Sample Apps" size="small">
            <template #icon><PhSquaresFour color="var(--accent-2)" /></template>
          </UButton>
        </a>
        <h3 style="margin-top: 1rem; margin-bottom: 0">Apps Built Using This Template</h3>
        <p>Here are some public apps built using this template</p>
      </div>
      <div class="sample-apps">
        <UCard id="sample-app">
          <template #icon>
            <PhChatCenteredDots />
          </template>
          <template #header>
            <h4>mNotify BMS SMS Notification</h4>
          </template>
          <template #default>
            <img :src="image" class="preview-app" />
            <p style="text-align: center">
              mNotify BMS SMS Notification is an approved shopify app which passed all checks
            </p>
          </template>
        </UCard>
      </div>
    </div>
    <BlobGradient />
  </section>
</template>

<script setup lang="ts">
import { PhSquaresFour, PhChatCenteredDots } from '@phosphor-icons/vue'
import BlobGradient from '@/components/Home/BG/BlobGradient.vue'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import SampleDark from '@/assets/images/sample_dark.jpg?url'
import SampleLight from '@/assets/images/sample_light.jpg?url'

const isDark = useDark()
const image = computed(() => {
  return isDark.value ? SampleDark : SampleLight
})
</script>

<style scoped>
section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, var(--bleed-in), var(--background));
  position: relative;
  z-index: 1;
}
.header-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.preview-app {
  width: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
</style>
