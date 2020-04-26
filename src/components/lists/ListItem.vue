<template>
    <div class="vps-list-item" >
  
  <div class="vps-list-item-title" :class="{'vps-list-item-title-no-content':!content}">{{title}}</div>
  <div class="vps-list-item-left" :class="{'vps-list-item-left-no-content':!content}">
  <div class="vps-list-item-left-icon"  :class="{'vps-list-item-left-no-content-icon':!content}" :style="{'background-color':iconBgColor}">
  <slot></slot>
  </div>
  </div>
  
  <div class="vps-list-item-content" v-if="content">{{content}}</div>
    </div>
</template>

<script>
export default {
name:'list-item',
props:['title','content','iconBgColor']
}
</script>

<style>

</style>
