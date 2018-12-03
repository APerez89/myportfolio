<template>
  <div class="contact-wrap">
    <div class="bkg"></div>
    <div class="contact">
      <div class="contact-info">
        <h3 class="head">Let's Talk</h3>
        <p class="outro">
          If you like what you see and had a good time, give me a call to discuss an opportunity to
          work together! I <span>love</span> what I do and I am constantly looking for new and fun
          projects to work on. Thank you for stopping by!
        </p>
        <div class="phone">
          <i class="fas fa-mobile-alt"></i>
          <p>(203)434-1532</p>
        </div>
        <div class="email">
          <i class="fas fa-at"></i>
          <p>alexperez689@gmail.com</p>
        </div>
      </div>
      <div class="bottom">
        <a href="https://www.linkedin.com/in/perezalx/"><i class="fab fa-linkedin icon"></i></a>
        <a href="https://github.com/APerez89"><i class="fab fa-github-square icon"></i></a>
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
  // height: 100vh;
  transition: all 0.5s;
  .bkg {
    width: 100%;
    height: 300px;
    background-image: url(/img/bkg-img/call-2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact {
    max-width: 1000px;
    margin: 0 auto;
    .contact-info {
      padding: 35px 25px;
      h3 {
        margin-bottom: 10px;
        font-weight: 600;
        color: #eca044 !important;
      }
      .outro {
        margin-bottom: 25px;
        padding-left: 10px;
        span {
          color: #eca044;
          font-weight: 900;
        }
      }
      .phone,
      .email {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        .fas {
          font-size: 22px;
          color: #eca044;
          padding: 0 25px 0 0;
        }
      }
      .phone {
        margin-bottom: 25px;
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
      margin: 25px 0;
      .icon {
        font-size: 22px;
        color: #eca044;
        padding: 0 5px;
        &:visited {
          color: #eca044;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .bkg {
    height: 500px !important;
  }
}

@media only screen and (min-width: 1440px) {
  .bkg {
    // height: 600px !important;
    h2 {
      display: none !important;
    }
  }
  .head {
    font-size: 33px !important;
    margin-bottom: 38px !important;
  }
  p {
    font-size: 22px;
    letter-spacing: 4px;
    line-height: 33px;
  }
  .bottom {
    margin: 35px 0 !important;
    .icon {
      font-size: 33px !important;
      padding: 0 10px !important;
    }
  }
}
</style>
