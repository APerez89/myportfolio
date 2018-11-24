<template>
  <div class="hamburger-wrap" @click="$store.state.scopen = !$store.state.scopen;">
    <div class="hamburger">
      <div class="line sm-line"></div>
      <div class="line lg-line"></div>
      <div class="line sm-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .hamburger-wrap {
    position: fixed;
    top: 0;
    right: 0;
    padding: 30px;
    z-index: 10;
    .hamburger {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .line {
        border-bottom: 1px solid #fff;
      }
      .sm-line {
        width: 25px;
      }
      .lg-line {
        width: 35px;
      }
      .line:nth-child(2),
      .line:nth-child(3) {
        padding-top: 7px;
      }
    }
  }
}
</style>
