<template>
  <svg
    :height="height"
    :width="width"
    :fill="fill"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    style="transform:rotate(180deg)"
  >
  <path 
d="M277 213v86h-42v-86h42zM277 128v43h-42v-43h42zM21 64l235 405l235 -405h-470z" />
  </svg>
</template>

<script>
export default {
  name: "warning",
  props: {
    fill: {
      default: "#fff"
    },
    height: {
      default: "20px"
    },
    width: {
      default: "20px"
    }
  }
};
</script>

<style>
</style>
