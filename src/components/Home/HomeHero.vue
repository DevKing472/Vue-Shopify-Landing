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
        <a
          :href="url"
          style="margin: 0 auto"
          target="_blank"
          class="glow-button"
          v-motion
          :enter="{
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 8,
              bounce: 0.5
            }
          }"
          :hovered="{
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 10,
              bounce: 0.5
            }
          }"
        >
          <UButton label="Clone Template" type="outline" style="position: relative; z-index: -1">
            <template #icon>
              <PhGithubLogo />
            </template>
          </UButton>
        </a>
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

const url = 'https://github.com/Mini-Sylar/shopify-app-vue-template'
</script>

<style scoped>
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.hero-section {
  position: absolute;
  height: 100%;
  width: 100%;
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

.text-size-h1 {
  margin-bottom: 0;
}
.glow-button {
  position: relative;
  z-index: 1;
  border-radius: 0.5rem;
}

.glow-button::before,
.glow-button::after {
  content: '';
  position: absolute;
  inset: -0.2rem;
  z-index: -1;
  background: conic-gradient(
    from var(--gradient-angle),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3)
  );
  border-radius: inherit;
  animation: rotation 4s linear infinite;
}

.glow-button::after {
  filter: blur(3.5rem);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
</style>
