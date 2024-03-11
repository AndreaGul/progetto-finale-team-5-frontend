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

  <AppSponsoredProfessional></AppSponsoredProfessional>

  <div class="container">
    <div class="row d-flex flex-wrap">
      <div class="card" v-for="sponsor in this.sponsored">
        {{ sponsor.user.name }}
      </div>
    </div>
  </div>

</template>

<style scoped></style>
