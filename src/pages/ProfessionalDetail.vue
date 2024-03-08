<script>
import axios from 'axios';
import AppHeader from '../components/AppHeader.vue';
import AppSearchSubPages from '../components/AppSearchSubPages.vue';
import AppInfoSingleProfessional from '../components/AppInfoSingleProfessional.vue';
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
  },
  data() {
    return {
      store,
      professional: null,
    };
  },
  methods: {
    getInfo() {
      if (this.store.professionalId === null) {
        this.store.professionalId = this.$route.params.slug;
      }
      if (this.store.professionalId !== null) {
        axios
          .get(
            'http://127.0.0.1:8000/api/professionals/show/' +
              this.store.professionalId
          )
          .then((response) => {
            console.log(response.data.data);
            this.professional = response.data.data;
          });
      }
    },
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
    },
  },
  created() {
    this.getInfo();
    console.log('slug', this.$route.params.slug);
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppSearchSubPages @search="search"></AppSearchSubPages>
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
        ></AppInfoSingleProfessional>
        <AppSendVote></AppSendVote>
      </div>
      <div class="col-12 col-lg-5 right-container">
        <AppReviews :reviews="professional.reviews"></AppReviews>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-container {
  padding: 20px;
}

.right-container {
  padding: 20px 0;
}
</style>
