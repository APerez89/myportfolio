<template>
  <div id="app">
    <router-view />
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 24px;
  letter-spacing: 1.3px;
  color: #818181;
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
