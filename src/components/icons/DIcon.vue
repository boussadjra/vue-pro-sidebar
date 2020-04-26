<template>
  <div>
    <component :is="componentName"/>
  </div>
</template>

<script>
import Addon from "./Addon";
import Vue from "vue";
const requireContext = require.context("./", true, /\.vue$/i);

const dynamicComponents = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});

Object.keys(dynamicComponents).forEach(name => {
  Vue.component(name, dynamicComponents[name]);
});
//  console.log(dynamicComponents)
//Vue.component('Dashboard', () => import('./Dashboard'));
export default {
  name: "d-icon",
  components: {
    Addon
  },
  props: {
    name: String
  },
  data() {
    return {
      componentName: "addon"
    };
  },
  watch: {
    name(newValue) {
      this.componentName = newValue;
    }
  },
  mounted() {
    this.componentName = this.name;
  }
};
</script>