<template>
  <div
    v-if="circle && text"
    class="vps-badge vps-badge-circle"
    :style="{'background':color?color:'#ff1100','color':adjustedColor}"
  >{{text}}</div>
  <div
    v-else-if="text==undefined"
    class="vps-badge vps-badge-circle vps-badge-circle-empty"
    :style="{'background':color?color:'#ff1100','color':adjustedColor}"
  ></div>
  <div
    v-else
    class="vps-badge"
    :style="{'background':color?color:'#ff1100','color':adjustedColor}"
  >{{text}}</div>
</template>

<script>
import getContrastColor from "../utils/getContrastColor.js";
export default {
  name: "badge",
  props: ["text", "color", "circle"],
  computed: {
    adjustedColor() {
      return getContrastColor(this.color);
    }
  }
};
</script>

<style lang="scss">
.vps-badge {
  padding: 2px 4px;
  width: max-content;
  border-radius: 3px;
  &-circle {
    min-width: 8px;
    min-height: 8px;
    border-radius: 50%;
    &:empty,&-empty {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }
}
</style>
