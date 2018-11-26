<template>
  <div class="skills-wrap">
    <div class="skills">
      <h2>Skills</h2>
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
  height: 100vh;
  display: flex;
  padding: 25px;
  text-align: center;
  color: #17171a;
  .skills {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .skill-cards {
      max-width: 500px;
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
          }
        }
      }
    }
  }
}
</style>
