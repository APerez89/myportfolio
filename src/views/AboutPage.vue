<template>
  <div class="about-wrap">
    <div class="about">
      <h2>About Me</h2>
      <!-- eslint-disable -->
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt dolores dignissimos illo eligendi repellat, iure sit provident ea voluptatum nihil quod eum, ullam eveniet? Voluptas ut aliquam repellat atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos eligendi, animi laboriosam vitae tenetur vero fuga optio assumenda iure quos quisquam repudiandae odit in nulla ad obcaecati neque qui.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
.about-wrap {
  width: 100vw;
  height: 100vh;
  background-image: url('/img/pattern.png');
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  .about {
    max-width: 500px;
    background-color: #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    padding: 25px;
    color: #17171a;
    h2 {
      font-size: 40px;
      padding-bottom: 25px;
    }
  }
}
</style>
