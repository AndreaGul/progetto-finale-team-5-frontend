<script>
import store from '../../store';
export default {
  name: 'prova',
  data() {
    return {
      active: 2,
      store,
      specializations: [
        {
          name: 'web development',
          description:
            'Il processo di creazione e manutenzione di siti e applicazioni web.',
          specialization_name: 'Web Development',
        },
        {
          name: 'data analysis',
          description:
            'Il processo di esplorazione, interpretazione dei dati e analisi.',
          specialization_name: 'Data Analysis',
        },
        {
          name: 'machine learning',
          description:
            "L'arte di far imparare ai computer senza istruzioni esplicite.",
          specialization_name: 'Machine Learning',
        },
        {
          name: 'artificial intelligence',
          description:
            'Sviluppo di sistemi in grado di eseguire compiti richiedenti intelligenza umana.',
          specialization_name: 'Artificial Intelligence',
        },
        {
          name: 'mobile development',
          description:
            'Processo di creazione di applicazioni software per dispositivi mobili.',
          specialization_name: 'Mobile Development',
        },
      ],
    };
  },
  methods: {
    search(name) {
      this.store.specializationsName = name;
      this.$router.push({
        name: 'professionalList',
        params: { id: this.store.specializationsName },
      });
    },
    changeActive(index) {
      this.active = index;
    },
  },
};
</script>

<template>
  <div class="contain">
    <div class="carousel-container">
      <main id="carousel" :class="'classecarousel' + (active + 1)">
        <div
          v-for="(specialization, index) in specializations"
          class="container-r col-3 item"
          @click="changeActive(index)"
        >
          <div class="wrapper-r">
            <div :class="'banner-image banner-' + index"></div>
            <h1>{{ specialization.name }}</h1>
            <p>
              {{ specialization.description }}
            </p>
          </div>
          <div class="button-wrapper">
            <button
              class="btn outline"
              @click="search(specialization.specialization_name)"
            >
              Cerca il professionista che fa per te
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel-container {
  height: 700px;
  margin: 0;
  align-items: center;
  justify-items: center;
}

main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: calc(100vw - 20px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
}

div.item {
  position: absolute;
  width: 300px;
  height: 600px;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

div.item:nth-of-type(1) {
  --offset: 1;
}
div.item:nth-of-type(2) {
  --offset: 2;
}
div.item:nth-of-type(3) {
  --offset: 3;
}
div.item:nth-of-type(4) {
  --offset: 4;
}
div.item:nth-of-type(5) {
  --offset: 5;
}

.classecarousel1 {
  --position: 1;
}

.classecarousel2 {
  --position: 2;
}

.classecarousel3 {
  --position: 3;
}

.classecarousel4 {
  --position: 4;
}
.classecarousel5 {
  --position: 5;
}

.contain {
  /* solid background */
  background: rgb(0, 212, 255);

  /* gradient background*/
  background: linear-gradient(
    45deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(11, 3, 45, 1) 100%
  );

  /* photo background */
  background-image: url(https://www.coplus.co.uk/media/2fknnobq/full-stack-web-dev.jpg);

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

.banner-image {
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
}

.banner-0 {
  background-image: url(https://miro.medium.com/v2/resize:fit:12000/0*tQQ7SLPOJfxaG4ZY);
}

.banner-1 {
  background-image: url(https://www.simplilearn.com/ice9/free_resources_article_thumb/data_analyticstrendsmin.jpg);
}

.banner-2 {
  background-image: url(https://www.it-impresa.it/wp-content/uploads/Machine-Learning-for-Data-Analytics-Concept-800x469.jpg.webp);
}

.banner-3 {
  background-image: url(https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg);
}

.banner-4 {
  background-image: url(https://evatronix.com/images/en/offer/product-design/software-development/Evatronix_Mobile_applications_01_1920x1080.jpg);
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
    font-size: 20px;
  }
  p {
    font-size: 11px;
  }

  .container-r {
    height: 500px;
    width: 300px;
  }

  .banner-image-0 {
    height: 200px;
  }

  .banner-image-1 {
    height: 200px;
  }

  .banner-image-2 {
    height: 200px;
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

  .banner-image-2 {
    height: 80px;
  }
}
</style>
