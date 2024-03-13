<script>
export default {
  name: 'SectionTwoSpecializations',
  data() {
    return {
      specializations: [
        {
          name: 'artificial intelligence',
          description:
            'Sviluppo di sistemi in grado di eseguire compiti richiedenti intelligenza umana.',
        },
        {
          name: 'mobile development',
          description:
            'Processo di creazione di applicazioni software per dispositivi mobili.',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="contain">
    <div
      v-for="(specialization, index) in specializations"
      class="container-r col-3"
    >
      <div class="wrapper-r">
        <div :class="'banner-image-' + index"></div>
        <h1>{{ specialization.name }}</h1>
        <p>
          {{ specialization.description }}
        </p>
      </div>
      <div class="button-wrapper">
        <button class="btn outline">
          Cerca il professionista che fa per te
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.contain {
  /* solid background */
  background: rgb(0, 212, 255);

  /* gradient background*/
  background: linear-gradient(
    45deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(11, 3, 45, 1) 100%
  );

  background-image: url(https://www.morganstanley.com/content/dam/msdotcom/ideas/ai-brain/tw-ai-brain.jpg);

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
}

.container-r {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.649);
  padding: 38px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
}

.wrapper-r {
  width: 100%;
  height: 100%;
}

.banner-image-0 {
  background-image: url(https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg);
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
}

.banner-image-1 {
  background-image: url(https://evatronix.com/images/en/offer/product-design/software-development/Evatronix_Mobile_applications_01_1920x1080.jpg);
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
}

h1 {
  margin-top: 20px;
  font-family: 'Righteous', sans-serif;
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 30px;
}

p {
  color: #fff;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 0.8rem;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-wrapper {
  margin-top: 18px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
}

@media only screen and (max-width: 1200px) {
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 11px;
  }

  .container-r {
    height: 500px;
    width: 400px;
  }
}

@media only screen and (max-width: 992px) {
  .contain {
    flex-direction: column;
    gap: 30px;
  }

  .container-r {
    height: 400px;
    width: 300px;
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 13px;
  }

  .banner-image-0 {
    height: 80px;
  }

  .banner-image-1 {
    height: 80px;
  }
}

// @media only screen and (max-width: 768px) {
//   .container-r {
//     height: 300px;
//   }

//   .banner-image-0 {
//     height: 80px;
//   }

//   .banner-image-1 {
//     height: 80px;
//   }
//   h1 {
//     font-size: 20px;
//   }
//   p {
//     font-size: 13px;
//   }
// }
</style>
