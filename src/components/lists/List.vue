<template>
  <div class="vps-list" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    width: {
      type: String | Number,

      default: 256
    }
  },
  computed: {
    style() {
      return {
        width: typeof this.width === "string" ? this.width : `${this.width}px`
      };
    }
  }
};
</script >

<style lang="scss" src="./style.scss">

</style>
