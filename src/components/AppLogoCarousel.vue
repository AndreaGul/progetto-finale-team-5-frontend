<script>
export default {
  name: 'LogoCarousel',
  data() {
    return {
      imgLinks: [
        'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
        'https://cdn.statically.io/img/austingil.com/wp-content/uploads/HTML-Blog-Cover.svg?quality=100&f=auto',
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png',
        'https://cobaltoconsulting.com/wp-content/uploads/2019/09/javascript-logo.png',
        'https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png',
        'https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png',
        'https://allvectorlogo.com/img/2016/04/sencha-logo.png',
        'https://logos-world.net/wp-content/uploads/2023/01/Unity-Logo.png',
        'https://ai-infrastructure.org/wp-content/uploads/2023/08/OpenAI-Logo.png',

        'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
        'https://www.scnsoft.com/cover-pictures/spark-consulting.svg',
        'https://developer.qualcomm.com/sites/default/files/attachments/pytorch_lockup_horz-01_orangeontransparent.png',
        'https://devio2023-media.developers.io/wp-content/uploads/2020/09/gcp-eyecatch-ai-platform_1200x630-960x504.png',
        'https://cdn.statically.io/img/austingil.com/wp-content/uploads/HTML-Blog-Cover.svg?quality=100&f=auto',
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png',
        'https://cobaltoconsulting.com/wp-content/uploads/2019/09/javascript-logo.png',
        'https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png',
        'https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png',
        'https://allvectorlogo.com/img/2016/04/sencha-logo.png',
        'https://logos-world.net/wp-content/uploads/2023/01/Unity-Logo.png',
        'https://ai-infrastructure.org/wp-content/uploads/2023/08/OpenAI-Logo.png',
        'https://www.scnsoft.com/cover-pictures/spark-consulting.svg',
        'https://developer.qualcomm.com/sites/default/files/attachments/pytorch_lockup_horz-01_orangeontransparent.png',
        'https://devio2023-media.developers.io/wp-content/uploads/2020/09/gcp-eyecatch-ai-platform_1200x630-960x504.png',
      ],
    };
  },
};
</script>

<template>
  <div class="container-logo-carosel">
    <div class="slider">
      <div class="slide-track py-2">
        <div class="slide allin" v-for="img in imgLinks">
          <img :src="img" height="100" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.allin {
  vertical-align: middle;
}
.container-logo-carosel {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 120;
  justify-content: center;
  align-items: center;
}

$animationSpeed: 50s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 12));
  }
}

// Styling
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);

  margin: auto;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    width: 250px;
  }
}
</style>
