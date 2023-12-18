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
}
:slotted(svg) {
  fill: #c5c5c5;
  background-color: #303030;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
