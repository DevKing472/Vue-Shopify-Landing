<template>
  <TheNav></TheNav>
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </main>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheNav from '@/components/Nav/TheNav.vue'
import TheFooter from './components/Footer/TheFooter.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
