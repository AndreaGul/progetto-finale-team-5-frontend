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
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>
  <AppSponsoredProfessional></AppSponsoredProfessional>
</template>

<style scoped></style>
