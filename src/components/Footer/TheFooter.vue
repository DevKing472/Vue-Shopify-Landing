<template>
  <footer>
    <div class="main-container">
      <div class="heading-container">
        <div class="left-side">
          <h3 style="margin-bottom: 1rem">Stay Informed</h3>
          <p style="max-width: 70%">
            Have any issues or concerns? Open an issue. Interested in what I do with my free time?
            Check out my github
          </p>
          <a
            href="https://github.com/Mini-Sylar/shopify-app-vue-template/issues/new/choose"
            target="_blank"
          >
            <UButton type="outline" label="Open An Issue" size="small">
              <template #icon><PhGithubLogo color="var(--accent-2)" /></template>
            </UButton>
          </a>
        </div>
        <div class="button-container">
          <a href="https://github.com/Mini-Sylar" target="_blank">
            <UButton type="fancy" label="Follow me on github" size="large">
              <template #icon><PhPersonArmsSpread color="var(--accent-2)" /></template>
            </UButton>
          </a>
        </div>
      </div>
      <div class="socials-container">
        <div class="left-side-socials">
          <p style="margin-bottom: 0">
            Built with
            <span><PhHeart color="var(--accent-2)" /></span> by
            <a href="https://www.github.com/mini-sylar" target="_blank">Mini-Sylar</a>
          </p>
          <h6 style="font-weight: 400; margin-top: 0">
            Disclaimer: I am in no shape or form associated with Shopify, I just love building stuff
          </h6>
        </div>
        <div class="right-side-socials">
          <div class="top"></div>
          <div class="bottom">
            <p style="font-weight: 400; margin-top: 0">
              &copy; {{ currentYear }} Mini-Sylar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { PhGithubLogo, PhPersonArmsSpread, PhHeart } from '@phosphor-icons/vue'
const currentYear = new Date().getFullYear()
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, var(--background), var(--clr-4));
  padding-bottom: 3rem;
}

a {
  color: var(--accent-2);
}
.heading-container {
  display: flex;
  min-height: 15rem;
  align-items: center;
  margin-bottom: 4rem;
}
.button-container {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;
  align-items: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.socials-container {
  display: flex;
  justify-content: space-between;
}

.left-side-socials,
.right-side-socials {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}

.right-side-socials {
  align-items: flex-end;
}
</style>
