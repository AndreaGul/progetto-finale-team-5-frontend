<script>
import AppJumbotron from "./AppJumbotron.vue";
import AppCardProfessional from "./AppCardProfessional.vue";
import store from "../../store";
// da mettere nella pagina info

// import AppInfoSingleProfessional from './AppInfoSingleProfessional.vue';
// import AppReviews from './AppReviews.vue';
// import AppDetailInfoProfessional from './AppDetailInfoProfessional.vue';

import axios from "axios";

export default {
  name: "Main",

  data() {
    return {
      professionals: [],
      store,
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
    search() {
      this.$router.push({
        name: "professionalList",
        params: { id: this.store.specializationsName },
      });
    },
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>
</template>

<style scoped></style>
