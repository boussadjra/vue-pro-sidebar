<template>
<svg
    :height="height"
    :width="width"
    :fill="fill"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style="transform:rotate(180deg);"
    xml:space="preserve"
  >
    <path
     d="M256 213c57 0 171 -28 171 -85v-43h-342v43c0 57 114 85 171 85zM256 256c-47 0 -85 38 -85 85s38 86 85 86s85 -39 85 -86s-38 -85 -85 -85z"></path>

  </svg>
</template>

<script>
export default {
    name: "person",
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
