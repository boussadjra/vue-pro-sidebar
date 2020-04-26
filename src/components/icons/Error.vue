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
    d="M405 375l-119 -119l119 -119l-30 -30l-119 119l-119 -119l-30 30l119 119l-119 119l30 30l119 -119l119 119z" />

  </svg>
</template>

<script>
export default {
  name: "error",
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
