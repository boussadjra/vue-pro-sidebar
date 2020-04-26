<template>
  <svg
    :height="height"
    :width="width"
    :fill="fill"
    x="0px"
    y="0px"
    viewBox="0 0 26 26"
    style="enable-background:new 0 0 26 26;"
    xml:space="preserve"
  >
    <path d="M16,5.5v-3c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v3H16z"></path>

    <path d="M4,5.5v-3c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v3H4z"></path>

    <path
      d="M26,21.5c0,1.657-1.344,3-3,3H3c-1.656,0-3-1.343-3-3v-12c0-1.657,1.344-3,3-3h20

c1.656,0,3,1.343,3,3V21.5z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "addon",
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
