<script>
import AppJumbotron from "./AppJumbotron.vue";
import AppCardProfessional from "./AppCardProfessional.vue";
import AppSponsoredProfessional from "./AppSponsoredProfessional.vue";
import AppCarousel from "./AppLogoCarousel.vue";
import AppInfoHomepage from "./AppInfoHomepage.vue";
import store from "../../store";
import axios from "axios";
import AppSectionThreeSpecializationMain from "./AppSectionThreeSpecializationMain.vue";
import AppSectionTwoSpecializationMain from "./AppSectionTwoSpecializationMain.vue";
import AppLogoCarousel from "./AppLogoCarousel.vue";
import AppSectionSubscribe from "./AppSectionSubscribe.vue";

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
    AppSectionThreeSpecializationMain,
    AppSectionTwoSpecializationMain,
    AppSectionSubscribe,
  },

  methods: {
    search() {
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

  <AppSponsoredProfessional></AppSponsoredProfessional>
  <AppSectionSubscribe></AppSectionSubscribe>
  <AppSectionThreeSpecializationMain></AppSectionThreeSpecializationMain>
  <AppSectionTwoSpecializationMain></AppSectionTwoSpecializationMain>
  <AppLogoCarousel></AppLogoCarousel>
  <AppInfoHomepage></AppInfoHomepage>
</template>

<style scoped></style>
