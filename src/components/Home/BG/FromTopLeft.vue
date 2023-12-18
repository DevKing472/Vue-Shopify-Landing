<template>
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 126.89">
    <g id="Center_Right">
      <polyline
        v-motion
        :initial="{
          strokeDashoffset: 50,
          opacity: 0,
          stroke: '#2d8f85'
        }"
        :enter="{
          strokeDashoffset: 240,
          opacity: 1,
          stroke: '#637c54',
          transition: {
            duration: 9000,
            delay: 0,
            repeat: Infinity,
            repeatType: 'mirror'
          }
        }"
        class="cls-1"
        points="301 1 201 1 201 101 1 101 1 126.89"
        :delay="1000"
      />
    </g>
  </svg>
</template>

<style scoped>
.cls-1 {
  fill: none;
  stroke: #ffffff;
  stroke-miterlimit: 0;
  stroke-dasharray: 10;
}

svg {
  width: 15%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: -30%;
  /* flip vertical */
  transform: scaleY(-1) scaleX(-1);
}
</style>
