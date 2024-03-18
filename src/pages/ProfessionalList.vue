<script>
import AppHeader from '../components/AppHeader.vue';
import AppSearchSubPages from '../components/AppSearchSubPages.vue';
//import AppHeaderSubPages from '../components/AppHeaderSubPages.vue';
import AppMainSubPages from '../components/AppMainSubPages.vue';
import axios from 'axios';
import store from '../../store';

export default {
  name: 'ProfessionalList',
  data() {
    return {
      loading: false,
      professionals: [],
      store,
      risultatiTrovati: null,
    };
  },
  components: {
    AppHeader,
    //AppHeaderSubPages,
    AppSearchSubPages,
    AppMainSubPages,
  },
  methods: {
    search(mediaVoti, numeroRecensioni) {
      this.loading = true;
      if (this.store.specializationsId === '') {
        this.$route.params.id = this.$route.params.id.replace('-', ' ');
        this.store.specializationsId = this.$route.params.id;
        this.store.specializationsName = this.$route.params.id;
      }
      if (this.store.specializationsId !== '') {
        const specializationName = this.formatSpecializationName(
          this.store.specializationsName
        );
        /*
          api lista professionisti
          parmetri: specialization_id, vote, review
        */
        axios
          .get('http://127.0.0.1:8000/api/professionals', {
            params: {
              specialization_id: this.store.specializationsId,
              vote: mediaVoti,
              review: numeroRecensioni,
            },
          })
          .then((response) => {
            this.professionals = response.data.data;
            if (Array.isArray(this.professionals)) {
              this.risultatiTrovati = this.professionals.length;
            } else {
              this.risultatiTrovati = Object.keys(this.professionals).length;
            }
          })
          .catch((error) => {
            console.log(error);
            this.$router.push({
              name: 'NotFound',
            });
          })
          .finally(() => {
            this.loading = false;
          });
        this.$router.push({
          name: 'professionalList',
          params: { id: specializationName },
        });
      }
    },
    formatSpecializationName(name) {
      return name.replace(/\s+/g, '-');
    },
  },
  created() {
    // if (this.store.specializationsId === "") {
    //   this.store.specializationsId = this.$route.params.id;
    // }
    this.search();
  },
};
</script>

<template>
  <AppHeader></AppHeader>

  <!-- <AppHeaderSubPages @search="search"></AppHeaderSubPages> -->
  <AppSearchSubPages @search="search"></AppSearchSubPages>
  <div class="container">
    <div class="my-3" v-if="loading">
      caricamento in corso...
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>

  <h4 class="container my-3" v-if="risultatiTrovati">
    Risultati trovati: {{ risultatiTrovati }}
  </h4>
  <div v-else-if="risultatiTrovati === 0">
    <div class="container-no-results mt-5">
      <div class="face">
        <div class="tear"></div>
        <div class="tear2"></div>
        <div class="eyebrow">︶</div>
        <div class="eyebrow">︶</div>
        <div class="eye"></div>
        <div class="eye"></div>
        <div class="mouth"></div>
      </div>
    </div>
    <p class="no-results">Non ci sono risultati per la tua ricerca :(</p>
  </div>

  <AppMainSubPages :professionals="professionals"></AppMainSubPages>
</template>

<style scoped>
.no-results {
  color: black;
  margin-top: 20px;
}

h4 {
  font-weight: 600;
}

.container-no-results {
  margin: auto;
  display: flex;
  justify-content: center;
}

p {
  text-align: Center;
  color: #3498db;
  font-size: 30px;
  padding: 10px;
}

.face {
  width: 150px;
  height: 150px;
  border: 9px solid #bdc3c7;
  border-radius: 50%;
  animation: face 7s infinite;
  animation-delay: 2s;
  position: relative;
  z-index: 9999;
}

.mouth {
  height: 10px;
  width: 35px;
  margin: 0 auto;
  margin-top: 15px;
  background-color: #bdc3c7;
  animation: mouth 7s infinite;
  animation-delay: 2s;
}

.tear {
  position: absolute;
  background-color: #3498db;
  height: 0px;
  width: 45px;
  top: 62px;
  left: 20px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 10%;
  animation: tear 7s infinite;
  animation-delay: 2s;
}

.tear2 {
  position: absolute;
  background-color: #3498db;
  height: 0px;
  width: 45px;
  top: 62px;
  left: 85px;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 10%;
  animation: tear 7s infinite;
  animation-delay: 2s;
}

.eye {
  height: 10px;
  width: 45px;
  background-color: #bdc3c7;
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  animation: cry 7s infinite;
  animation-delay: 2s;
}

.eyebrow {
  width: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #bdc3c7;
  display: inline-block;
  margin-left: 27px;
  margin-top: 10px;
  opacity: 0;
  animation: eyebrow 7s infinite;
  animation-delay: 2s;
}

.eyebrow:nth-child(1) {
  transform: rotate(-20deg);
}

.eyebrow:nth-child(2) {
  transform: rotate(20deg);
}

@keyframes mouth {
  10% {
    height: 30px;
    width: 25px;
    border: 6px solid black;
    border-radius: 50%;
    margin-top: -8px;
  }
  50% {
    height: 30px;
    width: 25px;
    border: 6px solid black;
    border-radius: 50%;
    margin-top: -8px;
  }
  60% {
    height: 10px;
    width: 35px;
    border-radius: 0%;
    border: none;
    margin-top: 15px;
  }
}

@keyframes cry {
  10% {
    transform: translateY(-34px);
    background-color: black;
  }
  50% {
    transform: translateY(-34px);
    background-color: black;
  }
  60% {
    background-color: #bdc3c7;
    transform: translateY(0px);
  }
}

@keyframes eyebrow {
  10% {
    opacity: 1;
    color: black;
  }
  50% {
    opacity: 1;
    color: black;
  }
  60% {
    opacity: 0;
  }
}

@keyframes face {
  10% {
    border-color: black;
  }
  50% {
    border-color: black;
  }
  60% {
    border-color: #bdc3c7;
  }
}

@keyframes tear {
  10% {
    height: 96px;
  }
  50% {
    height: 96px;
  }
  52% {
    height: 0px;
  }
}
</style>
