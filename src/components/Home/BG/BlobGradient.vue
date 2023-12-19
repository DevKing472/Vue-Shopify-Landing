<template>
  <div class="blob"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.blob {
  position: absolute;
  width: 100%;
  height: 800px;
  top: 10%;
  z-index: -1;
  background-image: url('../../../assets/images/blog_grad.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.2;
  border-radius: 50% 50% 0 0;
  filter: blur(10px);
}
</style>
