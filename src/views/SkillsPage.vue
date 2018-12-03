<template>
  <div class="skills-wrap">
    <div class="skills">
      <div class="bkg"><div class="drk-bkg"></div></div>
      <h3 class="head">Skills</h3>
      <div class="skill-cards">
        <ul>
          <li v-for="skill in skills" :key="skill['.key']">
            <div class="skill-img" :style="`background-image:url(img/${skill.img_url}`"></div>
            <div class="skill-des">
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.info }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import skills from '@/api/skills';

export default {
  name: 'SkillsPage',
  data() {
    return {
      skills,
    };
  },
};
</script>

<style lang="scss" scoped>
.skills-wrap {
  width: 100vw;
  text-align: center;
  transition: all 0.5s;
  .skills {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bkg {
      width: 100%;
      height: 300px;
      background-image: url(/img/bkg-img/skills.jpg);
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
    h3 {
      margin: 25px 0 5px;
    }
    .skill-cards {
      ul {
        list-style: none;
        padding: 0;
        li {
          margin: 25px;
          padding: 15px;
          .skill-img {
            height: 100px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          .skill-des {
            margin: 15px 0;
            p {
              margin: 15px 0;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .skill-cards {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media only screen and (min-width: 1024px) {
  .bkg {
    height: 500px !important;
  }
  .skill-cards {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media only screen and (min-width: 1440px) {
  .bkg {
    // height: 600px !important;
    .drk-bkg {
      display: none !important;
    }
  }
  .head {
    font-size: 33px !important;
    margin: 38px !important;
  }
}
</style>
