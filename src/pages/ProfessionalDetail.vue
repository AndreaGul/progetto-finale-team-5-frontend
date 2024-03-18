<script>
import axios from 'axios';
import AppHeader from '../components/AppHeader.vue';
import AppSearchSubPages from '../components/AppSearchSubPages.vue';
import AppInfoSingleProfessional from '../components/AppInfoSingleProfessional.vue';
import AppSendMessage from '../components/AppSendMessage.vue';
import AppSendReviews from '../components/AppSendReviews.vue';
import AppSendVote from '../components/AppSendVote.vue';
import AppReviews from '../components/AppReviews.vue';
import store from '../../store';
export default {
  name: 'ProfessionalDetail',
  components: {
    AppHeader,
    AppSearchSubPages,
    AppInfoSingleProfessional,
    AppSendVote,
    AppReviews,
    AppSendMessage,
    AppSendReviews,
  },
  data() {
    return {
      store,
      professional: null,
      alertMessage: '',
      alertError: {},
      voteSent: false,
      messageSent: false,
      reviewSent: false,
      loading: true,
    };
  },
  methods: {
    getInfo() {
      if (this.store.professionalId === null) {
        this.store.professionalId = this.$route.params.slug;
      }
      if (this.store.professionalId !== null) {
        /*
          api singolo professionista
          parmetri: id o slug professionista
        */
        axios
          .get(
            'http://127.0.0.1:8000/api/professionals/show/' +
              this.store.professionalId
          )
          .then((response) => {
            if (response.data.status === 'error') {
              this.$router.push({
                name: 'NotFound',
              });
            } else this.professional = response.data.data;
            this.loading = false;
          });
      }
    },
    /*
    search(id) {
      if (id !== '') {
        axios
          .get('http://127.0.0.1:8000/api/professionals/' + id)
          .then((response) => {
            this.professionals = response.data.data.data;
          });
        this.$router.push({
          name: 'professionalList',
          params: { id: this.store.specializationsId },
        });
      }
    },*/
    sendMessage(email, messaggio, nome) {
      /*
        api invio messaggio
        parmetri: id (professionista), emai,l message, name
      */
      axios
        .post('http://127.0.0.1:8000/api/professionals/message', null, {
          params: {
            id: this.professional.id,
            email: email,
            message: messaggio,
            name: nome,
          },
        })
        .then(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
          });
          this.alertMessage = 'Messaggio inviato correttamente';
          setTimeout(() => {
            this.alertMessage = '';
          }, 2000);
          this.messageSent = true;
        })
        .catch((error) => {
          this.alertError = error.response.data.error;
          setTimeout(() => {
            this.alertError = {};
          }, 3000);
        });
    },
    sendReview(email, recensione, nome) {
      /*
        api invio recensione
        parmetri: id (professionista), email, review, name
      */
      axios
        .post('http://127.0.0.1:8000/api/professionals/review', null, {
          params: {
            id: this.professional.id,
            email: email,
            review: recensione,
            name: nome,
          },
        })
        .then((response) => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
          });
          this.alertMessage = 'Recensione aggiunta correttamente';
          setTimeout(() => {
            this.alertMessage = '';
          }, 2000);
          this.reviewSent = true;
          this.getInfo();
        })
        .catch((error) => {
          this.alertError = error.response.data.error;
          //console.log(this.alertError);
          setTimeout(() => {
            this.alertError = {};
          }, 3000);
        });
    },
    sendVote(vote) {
      /*
        api invio voto
        parmetri: professional_id, lookup_id
      */
      axios
        .post('http://127.0.0.1:8000/api/professionals/vote', null, {
          params: {
            professional_id: this.professional.id,
            lookup_id: vote,
          },
        })
        .then((response) => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
          });
          this.alertMessage = 'Voto aggiunto correttamente';
          setTimeout(() => {
            this.alertMessage = '';
          }, 2000);
          this.voteSent = true;
          this.getInfo();
        })
        .catch((error) => {
          this.alertError = error.response.data.error;
          //console.log(this.alertError);
          setTimeout(() => {
            this.alertError = {};
          }, 3000);
        });
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <!--
  <AppSearchSubPages @search="search"></AppSearchSubPages>
  -->
  <div class="container" v-if="loading">
    <div class="my-3">
      caricamento in corso...
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container pt-5" v-if="professional !== null">
      <div class="row">
        <div class="left-container col-12 col-lg-7">
          <AppInfoSingleProfessional
            :name="professional.user.name"
            :surname="professional.user.surname"
            :specializations="professional.specializations"
            :photo="professional.photo"
            :address="professional.address"
            :phone="professional.phone"
            :curriculum="professional.curriculum"
            :vote="professional.average_rating"
            :num_vote="professional.votes_count"
            :performance="professional.performance"
          ></AppInfoSingleProfessional>

          <!-- alert se tutto ok-->
          <div
            v-if="alertMessage !== ''"
            class="toast show p-1 align-items-center justify-content-between text-bg-success border-0 alert-mex"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="d-flex">
              <div class="toast-body">{{ alertMessage }}</div>
              <button
                type="button"
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <!-- /alert se tutto ok -->

          <!-- alert se errori -->
          <div
            class="position-fixed bottom-0 end-0 p-1 d-flex flex-column gap-1"
          >
            <div
              v-if="alertError !== {}"
              v-for="(value, key) in alertError"
              class="toast show text-bg-danger border-0"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="d-flex">
                <div class="toast-body">{{ value[0] }}</div>
                <button
                  type="button"
                  class="btn-close btn-close-white me-2 m-auto"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
          <!-- /alert se errori -->

          <AppSendVote v-if="!voteSent" @newVote="sendVote"></AppSendVote>
          <div class="vote-container mb-3 mt-3" v-else>
            <h3 class="text-uppercase m-0 col-12 p-2">
              Hai inviato correttamente il voto!
            </h3>
          </div>
          <AppSendReviews
            v-if="!reviewSent"
            @newReview="sendReview"
          ></AppSendReviews>
          <div class="vote-container mb-3 mt-3" v-else>
            <h3 class="text-uppercase m-0 col-12 p-2">
              Hai inviato correttamente la recensione!
            </h3>
          </div>
        </div>
        <div class="col-12 col-lg-5 right-container">
          <AppSendMessage
            class="send-message"
            v-if="!messageSent"
            @newMessage="sendMessage"
          ></AppSendMessage>
          <div class="vote-container" v-else>
            <h3 class="text-uppercase m-0 col-12 p-2">
              Hai inviato correttamente il messaggio!
            </h3>
          </div>
        </div>
        <div class="left-container col-12 col-lg-7">
          <AppReviews :reviews="professional.reviews"></AppReviews>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-container {
  padding: 0 20px;
}

.center-container {
  display: flex;
  justify-content: center;
}

.alert-mex {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vote-container {
  padding: 20px;
  // margin: 20px 0;
  background-color: aliceblue;
  border-radius: 30px;

  h3 {
    font-weight: 700;
    font-size: 20px;
  }
}

.right-container {
  padding: 0 20px;
}

@media (min-width: 992px) {
  .right-container {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 150px;
    height: 415px;
  }
}
</style>
