<template>
  <div class="works-wrap">
    <div class="works">
      <h2>In the Works</h2>
      <div class="info-card">
        <ul>
          <li v-for="work in works" :key="work['.key']">
            <div class="work-img" :style="`background-image:url(img/${work.img_url}`"></div>
            <div class="work-des">
              <h3>
                <a :href="`${work.url}`">{{ work.title }}</a>
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
  height: 100vh;
  display: flex;
  color: #17171a;
  .works {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      margin: 30px 0;
    }
    .info-card {
      max-width: 500px;
      overflow: scroll;
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
