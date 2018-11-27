<template>
  <div class="about-wrap">
    <div class="about">
      <div class="top">
        <div class="drk-bkg"><h2>About Me</h2></div>
      </div>
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
  display: flex;
  justify-content: center;
  .about {
    max-width: 500px;
    color: #17171a;
    .top {
      width: 100%;
      height: 300px;
      background-image: url(/img/coder.png);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      .drk-bkg {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        h2 {
          font-size: 40px !important;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          padding: 25px 0;
          color: #fff;
        }
      }
    }
    p {
      padding: 35px 25px;
      color: #818181;
    }
  }
}
</style>
