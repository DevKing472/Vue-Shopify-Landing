<template>
  <section>
    <div class="main-container">
      <div class="heading-container">
        <a href="#what-next">
          <uButton type="fancy" :label="'Your app is ready'" size="small">
            <template #icon>
              <PhConfetti color="var(--accent-2)"></PhConfetti>
            </template>
          </uButton>
        </a>
        <h3 id="what-next" style="margin-top: 1rem; text-align: center; margin-bottom: 0">
          What Next?
        </h3>
        <p style="text-align: center">
          Now that you're all set up, you can start building your app. Here are a few resources for
          you
        </p>
      </div>
      <div class="button-container">
        <a
          href="https://github.com/Mini-Sylar/shopify-app-vue-template?tab=readme-ov-file#getting-started"
          target="_blank"
        >
          <uButton label="Read Me" type="outline"> </uButton>
        </a>
        <span style="padding-inline: 2rem">or</span>
        <a href="https://shopify.dev/docs/apps/tools/cli/existing" target="_blank">
          <uButton label="Shopify Docs"></uButton>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhConfetti } from '@phosphor-icons/vue'
</script>

<style scoped>
section {
  padding-block: 4rem;
  background-color: var(--bleed-in);
}
.heading-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
}

@media screen and (max-width: 500px) {
  span {
    display: none;
  }
  .button-container {
    margin: 0 auto;
    gap: 1rem;
  }
}
</style>
