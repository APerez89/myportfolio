<template>
  <div class="contact-wrap">
    <div class="contact">
      <div class="bkg"><h2>Let's Talk</h2></div>
      <div class="contact-info">
        <p class="outro">
          If you like what you see and had a good time, give me a call to discuss an opportunity to
          work together! I <strong>love</strong> what I do and I am constantly looking for new and
          fun projects to work on. Thank you for stopping by!
        </p>
        <div class="phone">
          <img src="/img/smartphone.png" />
          <p>(203)434-1532</p>
        </div>
        <div class="email">
          <img src="gmail.png" />
          <p>alexperez689@gmail.com</p>
        </div>
      </div>
      <!-- <div class="bottom">
        <a href=""><img src="linkedin.png" /> </a><a href=""><img src="gmail.png"/></a>
      </div> -->
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
  color: #17171a;
  .contact {
    background-color: #fff;
    .bkg {
      width: 100%;
      height: 300px;
      background-image: url(/img/call-2.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      h2 {
        font-size: 40px !important;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 25px 0;
        color: #fff;
      }
    }
    .contact-info {
      padding: 35px 25px;
      color: #818181;
      .outro {
        margin-bottom: 25px;
      }
      .phone, .email {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 50px;
        }
      }
      .phone {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
