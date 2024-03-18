<script>
import AppJumbotron from "./AppJumbotron.vue";
import AppCardProfessional from "./AppCardProfessional.vue";
import AppSponsoredProfessional from "./AppSponsoredProfessional.vue";
import AppCarousel from "./AppLogoCarousel.vue";
import AppInfoHomepage from "./AppInfoHomepage.vue";
import store from "../../store";
import axios from "axios";

import AppLogoCarousel from "./AppLogoCarousel.vue";
import AppSectionSubscribe from "./AppSectionSubscribe.vue";

import AppCaroselSpecialization from "./AppCaroselSpecialization.vue";

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
    AppSponsoredProfessional,
    AppLogoCarousel,
    AppInfoHomepage,

    AppSectionSubscribe,

    AppCaroselSpecialization,
  },

  methods: {
    search() {
      this.store.specializationsName = this.store.specializationsName.replace(
        " ",
        "-"
      );
      this.$router.push({
        name: "professionalList",
        params: { id: this.store.specializationsName },
      });
    },
  },
  created() {
    this.store.specializationsName = "";
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>
  <AppInfoHomepage></AppInfoHomepage>
  <AppSponsoredProfessional></AppSponsoredProfessional>
  <AppCaroselSpecialization></AppCaroselSpecialization>
  <AppLogoCarousel></AppLogoCarousel>
  <AppSectionSubscribe></AppSectionSubscribe>
</template>

<style scoped></style>
