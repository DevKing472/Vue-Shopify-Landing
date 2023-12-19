<template>
  <code class="code-parent">
    <div class="code-body">
      <span v-for="(word, index) in code.split(' ')" :key="index" class="code-space">
        <span v-if="keyWords.includes(word)" class="keyword">{{ word }}</span>
        <span v-else class="non-keyword" :class="word.slice(0, 4)">{{ word }}</span>
        <span v-if="index !== code.split(' ').length - 1"> </span>
      </span>
    </div>
    <div class="copy">
      <span class="copy-icon" @click="copyCommand">
        <PhCopy size="16" color="var(--accent-2)" />
      </span>
      <span v-if="copied" class="copied-el" v-motion-roll-right>Copied</span>
    </div>
  </code>
</template>

<script setup lang="ts">
import { PhCopy } from '@phosphor-icons/vue'
import { ref } from 'vue'
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const copied = ref(false)
const copyCommand = () => {
  navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 3000)
}
const keyWords = ['npm', 'git']
</script>

<style scoped>
.code-parent {
  display: flex;
  align-items: center;
  background-color: var(--primary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  position: relative;
  font-size: 0.9rem;
  color: var(--text);
  width: 100%;
  gap: 1rem;
  overflow: hidden;
}

.keyword {
  color: var(--accent-2);
}

.copy-icon {
  position: absolute;
  right: 0.5rem;
  top: 0.8rem;
  cursor: pointer;
  margin-left: 2rem;
}

.copy-icon:hover {
  opacity: 0.8;
}

.code-body {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.copied-el {
  position: absolute;
  right: -4rem;
  top: 0.3rem;
  cursor: pointer;
  margin-left: 2rem;
  color: var(--accent-2);
  font-size: 0.8rem;
  background-color: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
}

@media screen and (max-width: 768px) {
  .code-parent {
    width: min(95%, 1600px);
    display: flex;
    justify-content: center;
  }
  .code-space:has(.http) {
    width: 200px;
    text-wrap: nowrap;
    overflow-x: scroll;
  }

  .copy-icon {
    margin: 0;
  }

  .copied-el {
    right: 0;
  }
}

@media screen and (max-width: 321px) {
  .code-space:has(.http) {
    width: 120px;
  }
}
</style>
