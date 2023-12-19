<template>
  <section>
    <div class="main-container">
      <div class="heading-container">
        <a href="#steps">
          <UButton label="Scaffold your app!" :type="'fancy'" size="small">
            <template #icon>
              <PhSparkle color="var(--accent-2)" />
            </template>
          </UButton>
        </a>
        <h3 style="margin-top: 1rem; margin-bottom: 0">Get Started In 3 Easy Steps</h3>
        <p style="margin-bottom: 2rem">Yes, It's that easy</p>
      </div>
      <div class="steps-container" id="steps">
        <div class="left-side">
          <ul class="steps">
            <li class="step" v-for="(step, index) in steps" :key="index">
              <div class="number">
                <component :is="step.icon" size="24" color="var(--accent-2)"></component>
              </div>
              <div class="description">
                <h5>{{ step.title }}</h5>
                <p class="description-text" v-html="step.description"></p>
                <UCodeBlock :code="step.command"></UCodeBlock>
              </div>
            </li>
          </ul>
        </div>
        <div class="right-side">
          <UCard class="color-card">
            <template #header>
              <div style="display: flex; align-items: center; gap: 1rem">
                <PhConfetti size="24" color="var(--accent-2)" />
                <h5>Step 4?</h5>
              </div>
            </template>
            <h4 style="text-align: center">Congratulations <span v-motion-pop-visible>🎊</span></h4>
            <div class="congratulations" v-motion v-motion-fade-visible></div>
            <p style="text-align: center">Your app is ready to go!</p>
          </UCard>
        </div>
      </div>
      <div
        class="what-next"
        style="display: flex; justify-content: center; flex-direction: column; align-items: center"
      >
        <h3 style="margin-bottom: 0; text-align: center">What Next?</h3>
        <p style="text-align: center">
          Now that your app is ready, see the <span>Read Me</span> or refer to the official
          <span>Shopify Documentation</span> to start building
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhNumberCircleOne,
  PhNumberCircleTwo,
  PhNumberCircleThree,
  PhConfetti,
  PhSparkle
} from '@phosphor-icons/vue'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import congratulationDark from '../../assets/images/congratulations_dark.png'
import congratulationLight from '../../assets/images/congratulations_light.png'

const isDark = useDark()

const image = computed(() => {
  return isDark.value ? `url(${congratulationDark})` : `url(${congratulationLight})`
})

const steps = [
  {
    icon: PhNumberCircleOne,
    title: 'Clone The Repo',
    description: `Clone the repo from <a class="repo-link" href="https://github.com/Mini-Sylar/shopify-app-vue-template" target="_blank">here<a/> or use the command below`,
    command: 'git clone https://github.com/Mini-Sylar/shopify-app-vue-template.git'
  },
  {
    icon: PhNumberCircleTwo,
    title: 'Install Dependencies',
    description: 'Install the dependencies',
    command: 'npm install'
  },
  {
    icon: PhNumberCircleThree,
    title: 'Start The Server',
    description: `On first run, you'll have to configure your app using the snippet below`,
    command: 'npm run dev'
  }
]
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, var(--primary), var(--bleed-in));
  padding-block: 4rem;
}

.steps-container {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

.left-side {
  flex: 1;
}

.right-side {
  flex: 0.5;
}

.steps {
  list-style: none;
  padding-inline-start: 0;
}

.step {
  display: flex;
  margin-block-end: 3rem;
  gap: 3rem;
}

h5,
.description-text {
  margin-block: 0;
}

h5,
.description-text {
  margin-block: 1rem;
}

.number {
  line-height: 1.5;
}

.congratulations {
  width: 100%;
  height: 15rem;
  background-image: v-bind('image');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

:deep(.repo-link) {
  color: var(--accent-2);
}

.color-card {
  box-shadow: 0 0 1px 0.2rem var(--accent-2);
}

@media (prefers-color-scheme: light) {
  .congratulations {
    background-image: url('../../assets/images/congratulations_light.png');
  }
}

@media screen and (max-width: 768px) {
  .heading-container {
    text-align: center;
  }

  .steps-container {
    flex-direction: column;
    width: 100%;
  }

  .left-side {
    width: 100%;
  }
  .right-side {
    width: 100%;
  }

  .step {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    gap: 1rem;
    text-align: center;
  }

  .description {
    width: 100%;
  }
}
</style>
