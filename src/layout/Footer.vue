<template>
  <footer class="vps-footer">
    <div class="copyright">
      &#9400; {{new Date().getFullYear()}}, made with
      <span class="vps-heart-char">&#10084;</span> by
      <i>
        <b>@Boussadjra Brahim</b>
      </i>
    </div>
  </footer>
</template>

<script>
export default {
 name:'vps-footer'
 
};
</script>

<style lang="scss">
.copyright {
  font-family: monospace;
  font-size: 12pt;
}
@mixin pseudoElem($prop) {
  content: "";
  position: absolute;
  top: 4px;
  #{$prop}: 1px;
  border: 2px solid #ff2222;
  opacity: 0;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  -webkit-animation: sonar 1.5s infinite;
  animation: sonar 1.5s infinite;
}
.vps-heart-char {
  color: #ff2222;
  position: relative;
  font-size: 16pt;
  &::before {
    @include pseudoElem(left);
  }
  &::after {
    @include pseudoElem(right);
  }
}
</style>
