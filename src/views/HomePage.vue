<template>
  <div class="home">
    <div class="drk-bkg">
      <HelloIntro />
      <MainButton />
      <p>
        Made by <span class="alex">Alex</span> with
        <span class="vue"><a href="https://vuejs.org/" target="_blank">Vue.JS</a></span> powers!
      </p>
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
  background-image: url('/img/bkg-img/Couch-1.jpg');
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
  p {
    color: #fff;
    span {
      font-weight: 500;
    }
    .alex {
      padding: 0 3px;
      background-color: #2cadbe;
    }
    .vue {
      padding: 0 3px;
      background-color: #42b983;
      a {
        text-decoration: none;
        &:visited {
          color: #fff;
        }
      }
    }
  }
}

@media only screen and (min-width: 600px) {
  .home {
    background-position-x: auto;
  }
}
</style>
