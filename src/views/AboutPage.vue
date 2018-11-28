<template>
  <div class="about-wrap">
    <div class="bkg">
      <div class="drk-bkg"><h2>A</h2></div>
    </div>
    <div class="about">
      <div class="info">
        <h3>About Me</h3>
        <!-- eslint-disable -->
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt dolores dignissimos illo eligendi repellat, iure sit provident ea voluptatum nihil quod eum, ullam eveniet? Voluptas ut aliquam repellat atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos eligendi, animi laboriosam vitae tenetur vero fuga optio assumenda iure quos quisquam repudiandae odit in nulla ad obcaecati neque qui.</p>
        <div class="abt-img">
          <img src="/img/icons/badge.png">
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt dolores dignissimos illo eligendi repellat, iure sit provident ea voluptatum nihil quod eum, ullam eveniet? Voluptas ut aliquam repellat atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos eligendi, animi laboriosam vitae tenetur vero fuga optio assumenda iure quos quisquam repudiandae odit in nulla ad obcaecati neque qui.</p>
      </div>
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
  transition: all 0.5s;
  .bkg {
    width: 100%;
    height: 300px;
    background-image: url(/img/bkg-img/coder.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    display: flex;
    .drk-bkg {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 180px !important;
        font-weight: 200;
        text-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
      }
    }
  }
  .about {
    max-width: 800px;
    margin: 0 auto;
    .info {
      padding: 35px 25px;
      h3 {
        font-weight: 600;
        margin-bottom: 10px;
      }
      p {
        padding-left: 10px;
      }
      .abt-img {
        width: 100%;
        height: 100px;
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 100px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .abt-img {
    height: 125px !important;
    img {
      height: 125px !important;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .bkg {
    height: 500px !important;
  }
  .about {
    h3 {
      font-size: 25px !important;
    }
    p {
      font-size: 18px;
    }
  }
}

@media only screen and (min-width: 1440px) {
  .bkg {
    height: 900px !important;
    .drk-bkg {
      display: none !important;
    }
  }
  .about {
    max-width: 1200px !important;
    margin: 50px auto;
    h3 {
      font-size: 33px !important;
      margin-bottom: 38px !important;
    }
    p {
      font-size: 22px;
      letter-spacing: 4px;
      line-height: 33px;
    }
    .abt-img {
      height: 300px !important;
      img {
        height: 175px !important;
      }
    }
  }
}
</style>
