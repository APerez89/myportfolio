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
.btn-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 25px;
  .btn {
    padding: 15px 25px 15px 40px;
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

@media only screen and (min-width: 768px) {
  .btn-wrap {
    .btn {
      width: 250px;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .btn-wrap {
    .btn {
      width: 350px;
      height: 75px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
