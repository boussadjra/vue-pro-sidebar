<template>
 <button class="vps-button vps-button-primary">
 <slot></slot>
 </button>
</template>

<script>
export default {
name:'vps-button',

}
</script>

<style lang="scss">

.vps-button{
background-color: #f5f5f5;
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: .0892857143em;
    justify-content: center;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: .0892857143em;
    text-transform: uppercase;
    transition-duration: .28s;
    transition-property: box-shadow,transform,opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
        border-style: none;
        &-primary{
background: var(--side-bg-color)
        }
}    
</style>
