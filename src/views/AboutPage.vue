<template>
  <div class="about-wrap">
    <HamburgerMenu @click="$store.state.scopen = !$store.state.scopen"/>
    <NavMenu :class="$store.state.scopen ? 'open' : ''"/>
    <div class="about">
      <h2>About Me</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium sunt dolores dignissimos illo eligendi
        repellat, iure sit provident ea voluptatum nihil quod eum, ullam eveniet?
        Voluptas ut aliquam repellat atque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error dignissimos eligendi, animi laboriosam vitae tenetur
        vero fuga optio assumenda iure quos quisquam repudiandae
        odit in nulla ad obcaecati neque qui.</p>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue';
import NavMenu from '@/components/NavMenu.vue';

export default {
  name: 'AboutPage',
  components: {
    HamburgerMenu,
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
.about-wrap {
  width: 100vw;
  height: 100vh;
  background-color: #0d0e0f;
  display: flex;
  justify-content: center;
  align-items: center;
  .about {
    max-width: 500px;
    max-height: 600px;
    margin: 25px;
    padding: 25px;
    background-color: #fff;
    color: #0d0e0f;
    h2 {
      font-size: 40px;
      padding-bottom: 25px;
    }
  }
}
</style>
