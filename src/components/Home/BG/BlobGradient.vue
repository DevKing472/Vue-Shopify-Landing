<template>
  <img src="../../../assets/images/blog_grad.webp" class="blob" />
</template>

<script setup lang="ts"></script>

<style scoped>
.blob {
  position: absolute;
  width: 100%;
  height: 800px;
  top: 10%;
  z-index: -1;
  opacity: 0.2;
  border-radius: 50% 50% 0 0;
  filter: blur(10px);
}
</style>
