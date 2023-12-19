<template>
  <section>
    <div class="main-container">
      <div class="heading-container">
        <a href="#features">
          <UButton label="Ready to go!" :type="'fancy'" size="small">
            <template #icon>
              <PhSparkle color="var(--accent-2)" />
            </template>
          </UButton>
        </a>
        <h3 style="margin-top: 1rem; margin-bottom: 0; text-align: center">
          What's in This Template?
        </h3>
        <p>All you need to build a shopify app</p>
      </div>
      <FeatureList id="features" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhSparkle } from '@phosphor-icons/vue'
import FeatureList from './Features/FeatureList.vue'
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, var(--bleed-in), var(--primary));
  padding-block: 2rem;
}
.heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

</style>
