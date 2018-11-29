<template>
  <div class="nav-wrap">
    <!-- If there is more than one class, add classes to array -->
    <div :class="['mob-nav', $store.state.scopen ? 'open' : '']">
      <ul>
        <li>
          <router-link class="link" to="/">Welcome</router-link>
        </li>
        <li>
          <router-link class="link" to="/About">About</router-link>
        </li>
        <li>
          <router-link class="link" to="/Portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link class="link" to="/Skills">Skills</router-link>
        </li>
        <li>
          <router-link class="link" to="/Works">In the Works</router-link>
        </li>
        <li>
          <router-link class="link" to="/Contact">Contact</router-link>
        </li>
      </ul>
    </div>

    <div class="nav">
      <ul>
        <li>
          <router-link class="link" to="/">Welcome</router-link>
        </li>
        <li>
          <router-link class="link" to="/About">About</router-link>
        </li>
        <li>
          <router-link class="link" to="/Portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link class="link" to="/Skills">Skills</router-link>
        </li>
        <li>
          <router-link class="link" to="/Works">In the Works</router-link>
        </li>
        <li>
          <router-link class="link" to="/Contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
};
</script>

<style lang="scss" scoped>
.nav-wrap {
  .mob-nav {
    width: 250px;
    height: 100vh;
    background-color: #17171a;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 9;
    transform: translateX(250px);
    transition: 0.3s all;
    &.open {
      transform: translateX(0);
    }
    ul {
      li {
        list-style: none;
        font-variant: small-caps;
        padding: 10px 0;
        .link {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
        }

        & .router-link-exact-active {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
  .nav {
    display: none;
  }
}

@media only screen and (min-width: 1024px) {
  .mob-nav {
    display: none;
  }
  .nav {
    width: 200px;
    height: 100%;
    background-color: #17171a;
    display: flex !important;
    ul {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 300px;
      li {
        list-style: none;
        font-variant: small-caps;
        margin: 10px 0;
        .link {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          transition: all 0.2s;
          &:checked {
            border-bottom: 1px solid #fff;
          }
        }

        & .router-link-exact-active {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
}
</style>
