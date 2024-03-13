<script>
import AppCardProfessional from '../components/AppCardProfessional.vue';
import AppInfoSingleProfessional from './AppInfoSingleProfessional.vue';
import AppReviews from './AppReviews.vue';
import axios from 'axios';
export default {
  name: 'MainSubPages',
  data() {
    return {
      professional: null,
    };
  },
  components: {
    AppCardProfessional,
    AppInfoSingleProfessional,
    AppReviews,
  },
  props: {
    professionals: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getInfo(id) {
      console.log(id);
      axios
        .get('http://127.0.0.1:8000/api/professionals/show/' + id)
        .then((response) => {
          console.log(response.data.data);
          this.professional = response.data.data;
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row d-flex flex-wrap">
      <AppCardProfessional
        @getInfoProfessional="getInfo"
        v-for="professional in professionals"
        :id="professional.id"
        :address="professional.address"
        :mail="professional.user.email"
        :performance="professional.performance"
        :slug="professional.slug"
        :specializations="professional.specializations"
        :photo="professional.photo"
        :vote="professional.average_rating"
        :sponsorization="professional.sponsorizations"
      ></AppCardProfessional>
    </div>
  </div>
</template>

<style scoped></style>
