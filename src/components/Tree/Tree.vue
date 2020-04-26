<template>
  <div class="vps-tree-wrapper">
    <ul class="vps-tree">
      <li v-for="(child,index) in items" :key="index" class="vps-tree-item" >
        <tree-item v-if="child.children" :item="child"/>
        <div v-else class="vps-tree-item-label">{{ child.label }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import TreeItem from "./TreeItem";
export default {
  name: "tree",
  props: ["items"],
  components: {
    TreeItem
  }
};
</script>

<style>
</style>
