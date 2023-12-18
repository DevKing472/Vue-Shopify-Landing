<template>
  <div class="feature-container">
    <div class="grid-item" v-for="(card, index) in cardData" :key="index">
      <UCard>
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
import { PhSparkle, PhAlien } from '@phosphor-icons/vue'
const cardData = [
  {
    icon: PhAlien,
    header: 'Vue 3',
    body: 'Vue 3 is the latest version of Vue.js. It brings a lot of new features and performance improvements.'
  },
  {
    icon: PhSparkle,
    header: 'Vue Router',
    body: 'Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.'
  },
  {
    icon: PhAlien,
    header: 'Pinia',
    body: 'Pinia is a modern, typed and performant Store for Vue.'
  }
]
</script>

<style scoped></style>
