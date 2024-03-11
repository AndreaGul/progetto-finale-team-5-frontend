<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';

import AppSponsoredProfessional from './AppSponsoredProfessional.vue';

import store from '../../store';
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
      sponsored: [],
      store,
    };
  },
  components: {
    AppJumbotron,
    AppCardProfessional,
    AppSponsoredProfessional,

    // AppInfoSingleProfessional,
    // AppDetailInfoProfessional,
    // AppReviews,
  },

  methods: {
    search() {
      this.$router.push({
        name: 'professionalList',
        params: { id: this.store.specializationsName },
      });
    },
    sponsorizedCards() {
      axios
        .get('http://127.0.0.1:8000/api/professionals/sponsored')
        .then((response) => {
          console.log(response);
          this.sponsored = response.data.data;
        });
    },
  },
  created() {
    this.sponsorizedCards();
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>

  <AppSponsoredProfessional :sponsorProp="sponsored"></AppSponsoredProfessional>
</template>

<style scoped></style>
