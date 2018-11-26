<template>
  <div class="contact-wrap">
    <div class="contact">
      <h2>
        If you like what you see and would like to work with me, please feel free to give me a call
        or drop an email!
      </h2>
      <div class="contact-info">
        <p>Phone: <span>(203)434-1532</span></p>
        <p>Email: <span>alexperez689@gmail.com</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style lang="scss" scoped>
.contact-wrap {
  width: 100vw;
  height: 100vh;
  background-image: url('/img/pattern.png');
  background-size: 100%;
  padding: 20px;
  color: #17171a;
  .contact {
    max-width: 500px;
    height: 600px;
    background-color: #fff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    padding: 25px;
    .contact-info {
      margin: 25px 0;
      p {
        margin: 10px 0;
      }
    }
  }
}
</style>
