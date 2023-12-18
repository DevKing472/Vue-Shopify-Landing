<template>
  <div class="card">
    <div class="card-header">
      <slot name="icon" class="icon-bg"></slot>
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
}

:slotted(svg) {
  fill: var(--card-icon-fill);
  background-color: var(--card-icon-bg);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.card::before,
.card::after {
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  z-index: 3;
}

.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
  z-index: 1;
}

.card:hover::before {
  opacity: 1;
  transform: scale(1.009); /* scale up a bit */
  box-shadow: 0 0 1px var(--primary);
}
</style>
