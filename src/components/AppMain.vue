<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
// da mettere nella pagina info

// import AppInfoSingleProfessional from './AppInfoSingleProfessional.vue';
// import AppReviews from './AppReviews.vue';
// import AppDetailInfoProfessional from './AppDetailInfoProfessional.vue';

import axios from 'axios';

export default {
  name: 'Main',

  data() {
    return {
      professionals: [],
    };
  },
  components: {
    AppJumbotron,
    AppCardProfessional,

    // AppInfoSingleProfessional,
    // AppDetailInfoProfessional,
    // AppReviews,
  },

  methods: {
    search(id) {
      if (id !== '') {
        axios
          .get('http://127.0.0.1:8000/api/professionals/' + id)
          .then((response) => {
            this.professionals = response.data.data.data;
          });
      }
    },
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>
  <div class="container pt-5">
    <div class="row d-flex flex-wrap">
      <AppCardProfessional
        v-for="professional in professionals"
        :slug="professional.slug"
        :specializations="professional.specializations"
        :photo="professional.photo"
      ></AppCardProfessional>
    </div>
    main
    <!-- <div class="info d-flex">
      <AppInfoSingleProfessional></AppInfoSingleProfessional>
      <AppReviews></AppReviews>
    </div>
    <AppDetailInfoProfessional></AppDetailInfoProfessional> -->
  </div>
</template>

<style scoped></style>
