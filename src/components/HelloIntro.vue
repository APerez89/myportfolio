<template>
  <div class="hello">
    <h1><span class="element"></span></h1>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'HelloIntro',

  mounted() {
    const options = {
      strings: [
        '^1000 Hello, My name is Alex.',
        '^600 Front-end Developer Extraordinaire.',
        '^600 Welcome to my Portfolio!',
      ],
      typeSpeed: 80,
      backDelay: 1000,
      backSpeed: 20,
    };
    // eslint-disable-next-line
    const typed = new Typed('.element', options);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: 300px;
  padding: 20px;
  display: flex;
  align-items: center;
  h1 {
    font-size: 48px;
    font-weight: 900;
    line-height: 60px;
  }
}

@media only screen and (max-width: 600px) {
}
</style>
