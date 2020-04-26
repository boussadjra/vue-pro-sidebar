<template>
  <div  class="vps-tree-item">
    <div class="vps-tree-item-label">{{ item.label }}</div>
    <tree :items="item.children"/>
  </div>
</template>s

<script>
export default {
  name: "tree-item",
  props: ["item"],
  components: {
    tree: () => import("./Tree")
  }
};
</script>

<style>
</style>
