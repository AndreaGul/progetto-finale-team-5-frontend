<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
import AppSponsoredProfessional from './AppSponsoredProfessional.vue';
import AppSpecializationMain from './AppSpecializationMain.vue';
import store from '../../store';
// da mettere nella pagina info

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
    AppSpecializationMain,

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
    this.store.specializationsName = '';
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>

  <AppSponsoredProfessional :sponsorProp="sponsored"></AppSponsoredProfessional>
  <AppSpecializationMain></AppSpecializationMain>
</template>

<style scoped></style>
