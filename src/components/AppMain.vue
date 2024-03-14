<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
import AppSponsoredProfessional from './AppSponsoredProfessional.vue';
import AppCarousel from './AppLogoCarousel.vue';
import AppInfoHomepage from './AppInfoHomepage.vue';
import store from '../../store';
import axios from 'axios';

import AppLogoCarousel from './AppLogoCarousel.vue';
import AppSectionSubscribe from './AppSectionSubscribe.vue';

import AppCaroselSpecialization from './AppCaroselSpecialization.vue';

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
    AppInfoHomepage,

    AppSectionSubscribe,

    AppCaroselSpecialization,
  },

  methods: {
    search() {
      this.$router.push({
        name: 'professionalList',
        params: { id: this.store.specializationsName },
      });
    },
    sponsorizedCards() {
      /*
        api lista professionisti sponsorizzati
      */
      axios
        .get('http://127.0.0.1:8000/api/professionals/sponsored')
        .then((response) => {
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
  <AppInfoHomepage></AppInfoHomepage>

  <AppSponsoredProfessional :sponsorProp="sponsored"></AppSponsoredProfessional>

  <AppCaroselSpecialization></AppCaroselSpecialization>
  <AppLogoCarousel></AppLogoCarousel>
  <AppSectionSubscribe></AppSectionSubscribe>
</template>

<style scoped></style>
