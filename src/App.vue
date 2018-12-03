<template>
  <div id="app">
    <transition name="fade" mode="out-in"><router-view /></transition>
    <NavMenu v-show="$route.name !== 'home'" />
    <HamburgerMenu v-show="$route.name !== 'home'" />
  </div>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue';
import NavMenu from '@/components/NavMenu.vue';

export default {
  name: '',
  components: {
    NavMenu,
    HamburgerMenu,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  min-height: 100%;
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 24px;
  letter-spacing: 1.3px;
  color: #818181;
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  h2 {
    font-size: 30px;
    color: #fff;
  }
  h3 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
    color: #646464;
  }
}
</style>
