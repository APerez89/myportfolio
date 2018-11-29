<template>
  <div class="about-wrap">
    <div class="bkg"><div class="drk-bkg"></div></div>
    <div class="about">
      <div class="info">
        <h3>About Me</h3>
        <!-- eslint-disable -->
        <p>Experienced Front-end Web Developer with 4 plus years of development experience. I have worked on several projects where I implemented new techniques to complete the tasks, and through trial and error have made every new project I take on easier. I am extremely driven and constantly learning new ways to enhance my skills as a developer while using Vue.JS framework. I have been spending most of my free time taking various courses to be a better developer.</p>
        <div class="abt-img">
          <img src="/img/icons/badge.png">
        </div>
        <p>I am currently serving in the Connecticut Air National Guard and have been for 7 years and counting (8 years coming up this January)! My job in the Air National Guard is Supply, and for those of you who are familiar, "you can't fly without supply!" Recently I went away for Airman Leadership School where I learned several techniques on taking care of Airmen, leading Airmen, communication, and overall being the most effective leader. Shortly after graduating I was promoted to the rank of Staff Sergeant (SSgt) and with it taking on new challenges! With one deployment under my belt, and my years of service, I am extremely grateful for all of the experiences I have had and the people I have met, for they have made me a better person, father, and Airman.</p>
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
