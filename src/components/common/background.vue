<template>

  <div class="background">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice">
      <path d="M-6.1,535.9c48-30.2,86.9-85.8,103.6-114.5c18.2-31.4,103.3-166.7,252.9-91.8
      c131.7,65.9,284.2,149.4,476.4,35.5c21-12.4,75.9-57.8,139.2-55V-6.4L830.7-6.3C808.8,26.4,807.7,249,545,165.4S165,199,106.6,263.4
      S-5.9,321.4-5.9,321.4L-6.1,535.9z"/>
      <path d="M-5.8,569.6l-0.2-33.6c48-30.2,86.9-85.8,103.6-114.5c18.2-31.4,103.3-166.7,252.9-91.8
      c131.7,65.9,284.2,149.4,476.4,35.5c21-12.4,76-57.8,139.2-55v259.5"/>
    </svg>
  </div>

</template>

<style lang="scss" scoped>

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    z-index: 0;

    svg {
      path {
        &:first-child { fill: rgba(255, 255, 255, 0.1); }
        &:last-child { fill: rgba(255, 255, 255, 0.15); }
      }
    }
  }

</style>
