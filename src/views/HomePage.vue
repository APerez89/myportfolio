<template>
  <div class="home">
    <div class="drk-bkg">
      <HelloIntro/>
      <MainButton/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloIntro from '@/components/HelloIntro.vue';
import MainButton from '@/components/MainButton.vue';

export default {
  name: 'home',
  components: {
    HelloIntro,
    MainButton,
  },
};
</script>

<style lang="scss" scoped>

.home {
  width: 100vw;
  height: 100vh;
  background-image: url('/img/Couch-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  .drk-bkg {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }
}

@media only screen and (max-width: 600px) {
  .home {
    background-position-x: 50%;
  }
}
</style>
