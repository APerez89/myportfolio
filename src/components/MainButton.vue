<template>
  <div class="btn-wrap">
    <router-link class="btn btn-main" to="/About">{{ message.toLocaleUpperCase() }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'enter',
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .btn-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 25px;
    .btn {
      width: 100%;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff;
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 12px;
    }
  }
}
</style>
