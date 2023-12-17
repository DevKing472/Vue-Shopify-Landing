<template>
  <section class="hero-section">
    <div class="main-container">
      <div class="icon-section">
        <VueIcon />
        <span class="icon-divider"><h1>+</h1></span>
        <ShopifyIcon />
      </div>
      <div class="pitch-container">
        <h1 class="text-size-h1">Build Amazing Apps Today</h1>
        <h4>Kickstart your shopify app with Vue.JS with this template</h4>
        <UButton label="Get Started" type="outline">
          <template #icon>
            <PhGithubLogo />
          </template>
        </UButton>
      </div>
    </div>
    <HeroBackground class="section-bg" />
  </section>
</template>

<script setup lang="ts">
import HeroBackground from '@/components/Home/BG/HeroBackground.vue'
import ShopifyIcon from '../Icons/ShopifyIcon.vue'
import VueIcon from '../Icons/VueIcon.vue'
import { PhGithubLogo } from '@phosphor-icons/vue'
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.icon-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.pitch-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.text-size-h1{
  margin-bottom: 0;
}
</style>
