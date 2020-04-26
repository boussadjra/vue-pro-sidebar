<template>
	<svg style="transform:rotate(90deg)"  x="0px" y="0px"  :height="height"
    :width="width"
    :fill="fill" viewBox="0 0 306 306">
				<g id="chevron-down" >
					<polygon  points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" />
				</g>
			</svg>
</template>

<script>
export default {
name:'arrow-down',
  props:{
	  fill:{
		  default:"#fff"
	  },
	  height:{
		  default:'20px'
	  },
	  width:{
		  default:'20px'
	  }
  }
};
</script>

<style>
</style>
