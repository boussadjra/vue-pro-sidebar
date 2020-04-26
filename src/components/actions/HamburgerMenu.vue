<template>
  <div class="vps-menu-icon-wrap" @click="toggle">
    <div class="vps-menu-icon" :class="{'vps-menu-icon-open':open}"></div>
  </div>
</template>

<script>
export default {
  name: "hamburger-menu",
  props: {
    open: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    }
  }
};
</script>

<style lang="scss">
.vps-menu-icon-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@mixin menu {
  height: 2px;
  background: var(--header-color);
  width: 36px;
  left: 0;
  cursor: pointer;
  transition: all 1s ease;

}
@mixin pseudoElemMix($prop, $val) {
  content: "";
  @include menu();

  position: absolute;
  #{$prop}: $val;
}
@mixin rotate($deg) {
  content: "";
  transform: rotate($deg);
  top: 0;
  position: absolute;
  cursor: pointer;
}
.vps-menu-icon {
  @include menu();
  position: relative;

  &::before {
    @include pseudoElemMix(top, -12px);
  }
  &::after {
    @include pseudoElemMix(bottom, -12px);
  }
  &-open {
    position: relative;
    width: 0;
    left: -18px;
    &::before {
      @include rotate(45deg);
    }
    &::after {
      @include rotate(-45deg);
    }
  }
}
</style>
