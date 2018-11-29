<template>
  <div class="works-wrap">
    <div class="bkg"><div class="drk-bkg"></div></div>
    <div class="works">
      <h3 class="head">in the works</h3>
      <p class="head-info">
        Here are some of the things I am working on or have already finished this year. I am
        constantly looking for new and fun projects or classes to better myself as a Front-end
        Developer.
      </p>
      <div class="info-card">
        <ul>
          <li v-for="work in works" :key="work['.key']">
            <div class="work-img" :style="`background-image:url(img/${work.img_url}`"></div>
            <div class="work-des">
              <h3>
                <a :href="`${work.url}`" target="_blank">{{ work.title }}</a>
              </h3>
              <p>{{ work.info }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import works from '@/api/works';

export default {
  name: 'WorksPage',
  data() {
    return {
      works,
    };
  },
};
</script>

<style lang="scss" scoped>
.works-wrap {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  .bkg {
    width: 100%;
    height: 300px;
    background-image: url(/img/bkg-img/works.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
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
  .works {
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
          box-shadow: 0px 0px 12px 0 rgba(0, 0, 0, 0.1);
          overflow: hidden;
          .work-img {
            height: 160px;
            background-size: cover;
            background-position: 50%;
          }
          .work-des {
            display: flex;
            flex-direction: column;
            padding: 15px;
            h3 {
              margin-bottom: 10px;
              a {
                text-decoration: none;
                border-bottom: 1px solid #17171a;
                &:link {
                  color: #17171a;
                }
                &:visited {
                  color: #17171a;
                }
              }
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .work-img {
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
    background-position: 50%;
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
