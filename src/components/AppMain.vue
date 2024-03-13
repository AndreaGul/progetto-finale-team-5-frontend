<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
import AppSponsoredProfessional from './AppSponsoredProfessional.vue';
import AppCarousel from './AppLogoCarousel.vue';
import AppDevelopementMain from './AppDevelopementMain.vue';
import AppMobileMain from './AppMobileMain.vue';
import AppArtificialIntelligenceMain from './AppArtificialIntelligenceMain.vue';
import AppMachineLearningMain from './AppMachineLearningMain.vue';
import AppDataAnalysisMain from './AppDataAnalysisMain.vue';
import AppInfoHomepage from './AppInfoHomepage.vue';
import store from '../../store';
// da mettere nella pagina info

// import AppInfoSingleProfessional from './AppInfoSingleProfessional.vue';
// import AppReviews from './AppReviews.vue';
// import AppDetailInfoProfessional from './AppDetailInfoProfessional.vue';

import axios from 'axios';
import AppLogoCarousel from './AppLogoCarousel.vue';

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
    AppLogoCarousel,
    AppDevelopementMain,
    AppMobileMain,
    AppArtificialIntelligenceMain,
    AppMachineLearningMain,
    AppDataAnalysisMain,
    AppInfoHomepage,
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
  <AppLogoCarousel></AppLogoCarousel>
  <AppInfoHomepage></AppInfoHomepage>
  <AppDevelopementMain></AppDevelopementMain>
  <AppMobileMain></AppMobileMain>
  <AppArtificialIntelligenceMain></AppArtificialIntelligenceMain>
  <AppMachineLearningMain></AppMachineLearningMain>
  <AppDataAnalysisMain></AppDataAnalysisMain>
</template>

<style scoped></style>
./AppDevelopementMain.vue
