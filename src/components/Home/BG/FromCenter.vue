<template>
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 325">
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
            duration: 7000,
            delay: 0,
            repeat: Infinity,
            repeatType: 'mirror'
          }
        }"
        class="cls-1"
        points="400.5 .5 300.5 .5 200.5 .5 200.5 100.5 100.5 100.5 100.5 200.5 .5 200.5 .5 300.5 .5 400.5 .5 500.5 .5 525.5"
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
  width: 100%;
  height: 100%;
  position: absolute;
  left: 7.3%;
  top: -1.6%;
}
</style>
