<template>
  <section>
    <div class="main-container">
      <div class="heading-container">
        <a href="#">
          <UButton label="Scaffold your app!" :type="'fancy'" size="small">
            <template #icon>
              <PhSparkle color="var(--accent-2)" />
            </template>
          </UButton>
        </a>
        <h3 style="margin-top: 1rem; margin-bottom: 0">Get Started In 3 Easy Steps</h3>
        <p>Yes, It's that easy</p>
      </div>
      <div class="steps-container">
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
            <div class="congratulations"></div>
            <p style="text-align: center">Your app is ready to go!</p>
          </UCard>
        </div>
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
    command: 'npm run dev -- --reset'
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

.description-text {
  margin-block: 1rem;
}

.number {
  line-height: 1.5;
}

.congratulations {
  width: 100%;
  height: 15rem;
  background-image: url('../../assets/images/congratulations_dark.png');
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
</style>
