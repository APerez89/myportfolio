<template>
  <div class="portfolio-wrap">
    <div class="portfolio">
      <h2>Portfolio</h2>
      <div class="info-card">
        <ul>
          <li v-for="job in jobs" :key="job['.key']">
            <div class="job-image" :style="`background-image: url(img/${job.img_url})`"></div>
            <div class="job-info">
              <span class="job-title">{{ job.title }}</span> <br />
              <span class="job-info">{{ job.info }}</span>
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
  background-color: #fff;
  .portfolio {
    display: flex;
    flex-direction: column;
    padding: 25px;
    h2 {
      font-size: 30px;
      color: #17171a;
      margin: 15px 0;
    }
    .info-card {
      max-width: 500px;
      // height: 250px;
      // margin: 25px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      overflow: scroll;
      color: #17171a;
      // .top {}
      // .bottom {
      //   height: 100px;
      //   padding: 15px;
      //   overflow: scroll;
      // }
    }
  }
}
</style>
