<template>
  <div class="portfolio-wrap">
    <div class="portfolio">
      <h2>Portfolio</h2>
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
  height: 100vh;
  display: flex;
  color: #17171a;
  .portfolio {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 30px;
      margin: 30px 0;
    }
    .info-card {
      max-width: 500px;
      ul {
        list-style: none;
        padding: 10px;
        li {
          margin: 15px 0;
          box-shadow: 0px 0px 12px 0 rgba(0, 0, 0, 0.1);
          overflow: hidden;
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
            }
          }
        }
      }
    }
  }
}
</style>
