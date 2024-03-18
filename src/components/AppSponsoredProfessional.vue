<script>
import store from "../../store";
import axios from "axios";
export default {
  name: "CardSponsor",
  data() {
    return {
      sponsored: [],
      nextPage: null,
      prevPage: null,
      store,
      loading: false,
    };
  },
  methods: {
    sponsorizedCards(url) {
      this.loading = true;

      console.log("sto qua");
      console.log(url);
      axios.get(url).then((response) => {
        console.log(response);
        this.sponsored = response.data.data.data;
        this.nextPage = response.data.data.next_page_url; // Assicurati che la risposta contenga un campo 'next_page_url'
        this.prevPage = response.data.data.prev_page_url;
        this.loading = false;
      });
    },
    getInfo(id) {
      this.store.professionalId = id;
    },
  },
  created() {
    this.sponsorizedCards("http://127.0.0.1:8000/api/professionals/sponsored");
  },
};
</script>

<template>
  <div class="container_sponsorizzati">
    <!-- In evidenza -->
    <div class="container p-3">
      <div class="d-flex justify-content-between">
        <h4 class="text-center text-uppercase titolo">In Evidenza</h4>

        <div class="buttons">
          <button
            class="btn outline"
            @click="sponsorizedCards(prevPage)"
            v-if="prevPage !== null"
          >
            <
          </button>
          <button
            class="btn outline"
            @click="sponsorizedCards(nextPage)"
            v-if="nextPage !== null"
          >
            >
          </button>
        </div>
      </div>

      <div class="container" v-if="loading">
        <div class="my-3">
          caricamento in corso...
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div v-else class="ag-format-container">
        <div class="ag-courses_box row g-3">
          <div
            class="ag-courses_item col-12 col-md-4 col-xl-4"
            v-for="sponsor in sponsored"
          >
            <router-link
              :to="{
                name: 'ProfessionalDetail',
                params: { slug: sponsor.slug },
              }"
              @click="getInfo(sponsor.id)"
              class="text-decoration-none"
            >
              <a href="#" class="ag-courses-item_link text-decoration-none">
                <div class="ag-courses-item_bg"></div>

                <div
                  class="ag-courses-item_title row mb-1 justify-content-md-center"
                >
                  <div class="user-card-img col-5 col-md-12 col-lg-4 mb-5">
                    <img
                      v-if="
                        sponsor.photo && sponsor.photo.startsWith('uploads')
                      "
                      :src="'http://127.0.0.1:8000/storage/' + sponsor.photo"
                      alt=""
                    />
                    <img
                      v-else-if="sponsor.photo"
                      :src="sponsor.photo"
                      alt=""
                    />
                    <img
                      v-else
                      src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
                      alt=""
                    />
                  </div>

                  <div
                    class="col-7 col-md-12 col-lg-8 mb-2 nome-utente-specializzato"
                  >
                    {{ sponsor.user.name }} {{ sponsor.user.surname }}
                  </div>
                </div>

                <div class="ag-courses-item_date-box">
                  <div v-if="!sponsor.specializations"></div>
                  <div v-else class="card-description">Specializzazioni:</div>
                  <p class="specialization-list">
                    <span
                      v-for="(specialization, index) in sponsor.specializations"
                      :key="index"
                    >
                      {{ specialization.name }}
                      <span v-if="index < sponsor.specializations.length - 1"
                        >,
                      </span>
                    </span>
                  </p>
                  <!-- Dettaglio Professionista -->

                  <!-- Fine Dettaglio Professionista -->
                </div>
              </a>
            </router-link>
          </div>
          <!-- card singola -->
        </div>
      </div>
    </div>
    <!-- Fine In evidenza -->
  </div>
</template>

<style scoped>
.container_sponsorizzati {
  background: linear-gradient(to bottom, #bedaf6, rgba(190, 218, 246, 1) 0%);
}

.titolo {
  font-family: "Share Tech Mono", monospace;
  font-weight: 600;
  font-size: 35px;
}

.card-description {
  font-weight: 600;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 16px;
}

.user-card-img img {
  width: 125px;
  height: 125px;
  display: block;
  object-fit: cover;
  border-radius: 50%;
}

.specialization-list {
  font-size: 14px;
}

.btn-detail {
  background-color: #1f798b;
  color: white;
  border: 1px solid #022b3a;
}
.btn-detail:hover {
  background-color: #022b3a;
  color: white;
}

/* .ag-format-container {
  min-height: 350px;
  max-height: calc(100vh / 1.5);
  overflow-y: auto;
  overflow-x: hidden;
} */

.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;

  padding: 10px 0;
}
.ag-courses_item {
  /* -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px); */

  overflow: hidden;
}
.ag-courses-item_link {
  display: block;
  padding: 22px 40px;
  background-color: #022b3a;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #fff;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 72px;
  line-height: 1;
  font-size: 24px;
  overflow: hidden;
  font-weight: bold;
  color: #fff;
  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 16px;
  color: #fff;
  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #1f7a8c;

  -webkit-transition: color 0.5s ease;
  -o-transition: color 0.5s ease;
  transition: color 0.5s ease;
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #1f7a8c;
  filter: blur(1px);
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
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
  background: #022b3a;
  color: white;
  border: 1px solid white;
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}
@media only screen and (min-width: 639px) {
  .ag-courses-item_title {
    min-height: 87px;
    font-size: 28px;
  }
  .ag-courses-item_link {
    padding: 40px 30px;
  }
  .ag-courses-item_date-box {
    font-size: 18px;
  }
}
@media only screen and (min-width: 767px) {
  .nome-utente-specializzato {
    font-size: 22px;
  }
  .user-card-img img {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (min-width: 992px) {
  .specialization-list {
    font-size: 18px;
  }
  .ag-courses-item_title {
    font-size: 30px;
  }
}
</style>
