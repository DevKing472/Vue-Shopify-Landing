<template>
  <div>
    <HomeNav></HomeNav>
    <HomeHero></HomeHero>
    <HomeFeatures></HomeFeatures>
    <HomeGetStarted></HomeGetStarted>
    <HomeSampleApps></HomeSampleApps>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script setup lang="ts">
import HomeHero from '@/components/Home/HomeHero.vue'
import HomeFeatures from '@/components/Home/HomeFeatures.vue'
import HomeGetStarted from '@/components/Home/HomeGetStarted.vue';
import HomeSampleApps from '@/components/Home/HomeSampleApps.vue';
import HomeFooter from '@/components/Home/HomeFooter.vue';
import HomeNav from '@/components/Home/HomeNav.vue';
</script>

<style scoped></style>
