<template>
  <div class="feature-container" ref="cardContainer" v-move="moveHandler">
    <div
      class="grid-item"
      v-for="(card, index) in cardData"
      :key="index"
      v-motion
      v-motion-fade-visible
    >
      <UCard ref="cards" class="card">
        <template #icon>
          <component :is="card.icon" size="32" weight="thin"></component>
        </template>
        <template #header>
          <h4>{{ card.header }}</h4>
        </template>
        <p>
          {{ card.body }}
        </p>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PhFileVue,
  PhBridge,
  PhWebhooksLogo,
  PhDatabase,
  PhCloudArrowUp
} from '@phosphor-icons/vue'
import { ref, type ComponentPublicInstance } from 'vue'

const cardContainer = ref()
const cards = ref()

const moveHandler = ({ event }: { event: MouseEvent }) => {
  cards.value.forEach((card: ComponentPublicInstance) => {
    const cardRect = card.$el.getBoundingClientRect()
    const cardX = event.clientX - cardRect.left
    const cardY = event.clientY - cardRect.top
    card.$el.style.setProperty('--mouse-x', `${cardX}px`)
    card.$el.style.setProperty('--mouse-y', `${cardY}px`)
  })
}

const cardData = [
  {
    icon: PhFileVue,
    header: 'Vue JS 💚',
    body: 'All the features from Vue JS you love, including Vue Router, Pinia, and more!'
  },
  {
    icon: PhBridge,
    header: 'App Bridge',
    body: 'Interact with Shopify Components from your Vue app using Shopify App Bridge.'
  },
  {
    icon: PhWebhooksLogo,
    header: 'Custom Hooks',
    body: 'Make authenticated requests to Shopify Admin API using vueAuthenticatedFetch.'
  },
  {
    icon: PhDatabase,
    header: 'Database',
    body: 'Various available database options including MySQL, Postgres, and more!'
  },
  {
    icon: PhCloudArrowUp,
    header: 'Docker',
    body: 'Docker ready! deploy your app on any platform with ease'
  }
]
</script>

<style scoped>
.feature-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  place-content: center;
}
</style>
