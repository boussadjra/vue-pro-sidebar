<template>
  <header class="vps-header" :class="{'vps-header-extended':!sidebarOpen}" ref="header">
    <hamburger-menu :open="sidebarOpen" @toggle="toggleSidebar"/>


 <slot name="search"></slot>

    <slot name="toolbar"></slot>
  </header>
</template>

<script>
import HamburgerMenu from "../components/actions/HamburgerMenu";
import EventBus from "../utils/EventBus.js";

export default {
  name: "vps-header",
  data() {
    return {
      sidebarOpen: true
    };
  },
  components: { HamburgerMenu },

  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      EventBus.$emit("toggle-sidebar", this.sidebarOpen);
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
