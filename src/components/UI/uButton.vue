<template>
  <button
    type="button"
    class="u-button"
    :disabled="disabled"
    :class="{
      'u-button--primary': type === 'primary',
      'u-button--secondary': type === 'secondary',
      'u-button--outline': type === 'outline',
      'u-button--small': size === 'small',
      'u-button--medium': size === 'medium',
      'u-button--large': size === 'large'
    }"
  >
    <div class="u-button-slot-container">
      <span class="u-icon-slot" v-if="$slots.icon">
        <slot name="icon"> </slot>
      </span>
      <span class="u-label-text" v-if="label" style="margin: 0 auto">
        <slot>
          {{ label }}
        </slot>
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'outline' | 'fancy'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    label?: string
  }>(),
  {
    type: 'primary',
    size: 'medium',
    disabled: false,
    label: ''
  }
)
</script>

<style scoped>
.u-button {
  background-color: var(--text);
  color: var(--primary);
  font-weight: 500;
  border: 1px solid var(--primary);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.u-button:hover {
  background-color: var(--secondary);
  color: var(--background);
  border: 1px solid var(--secondary);
}

.u-button:disabled {
  background-color: var(--accent);
  color: var(--background);
  border: 1px solid var(--accent);
}

.u-button:disabled:hover {
  background-color: var(--accent);
  color: var(--background);
  border: 1px solid var(--accent);
}

.u-button:active {
  background-color: var(--secondary);
  color: var(--background);
  transform: scale(0.95);
}

.u-button--outline {
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--primary);
}

.u-button--outline:hover {
  background-color: var(--primary);
  color: var(--text);
  border: 1px solid var(--primary);
}

.u-button--outline:disabled {
  background-color: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.u-button--outline:disabled:hover {
  background-color: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.u-button--small {
  padding: 0.5rem 1rem;
}

.u-button--medium {
  padding: 0.8rem 1.5rem;
}

.u-button--large {
  padding: 1rem 2rem;
}

.u-icon-slot {
  display: flex;
  align-items: center;
  margin-inline-end: 0.5rem;
}

.u-icon-slot > * {
  width: 1em;
  height: 1em;
  color: black;
}

.u-button-slot-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
