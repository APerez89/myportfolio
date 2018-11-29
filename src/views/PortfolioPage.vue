<template>
  <div class="portfolio-wrap">
    <div class="bkg"><div class="drk-bkg"></div></div>
    <div class="portfolio">
      <h3 class="head">Portfolio</h3>
      <p class="head-info">
        Below are some of the projects I have had the privilege of being a part of. To see the
        project, click on the name to be redirected to the website.
      </p>
      <div class="info-card">
        <ul>
          <li v-for="job in jobs" :key="job['.key']">
            <div class="job-img" :style="`background-image:url(img/${job.img_url}`"></div>
            <div class="job-des">
              <h3>
                <a :href="`${job.url}`">{{ job.title }}</a>
              </h3>
              <p>{{ job.info }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import jobs from '@/api/jobs';

export default {
  name: 'PortfolioPage',
  data() {
    return {
      jobs,
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio-wrap {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  .bkg {
    width: 100%;
    height: 300px;
    background-image: url(/img/bkg-img/coding.jpg);
    background-size: cover;
    background-repeat: no-repeat;
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
  .portfolio {
    max-width: 1250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .head {
      margin: 25px 0 5px;
    }
    .head-info {
      text-align: center;
      padding: 0 0 15px;
    }
    .info-card {
      max-width: 1400px;
      ul {
        list-style: none;
        padding: 10px;
        li {
          margin: 15px 0;
          background-color: #fff;
          box-shadow: 0px 0px 12px 0 rgba(0, 0, 0, 0.1);
          .job-img {
            height: 160px;
            background-size: cover;
            background-position: 50%;
          }
          .job-des {
            display: flex;
            flex-direction: column;
            padding: 15px;
            h3 {
              margin-bottom: 10px;
              a {
                text-decoration: none;
                border-bottom: 1px solid #17171a;
                &:visited {
                  color: #17171a;
                }
              }
            }
            p {
              font-size: 14px;
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .job-img {
    height: 220px !important;
  }
}

@media only screen and (min-width: 1024px) {
  .bkg {
    height: 500px !important;
  }
  .info-card {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      li {
        margin: 15px !important;
      }
    }
  }
  .head {
    font-size: 25px !important;
  }
}

@media only screen and (min-width: 1440px) {
  .bkg {
    height: 600px !important;
    .drk-bkg {
      display: none !important;
    }
  }
  .info-card {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .head {
    font-size: 33px !important;
    margin: 38px !important;
  }
}
</style>
