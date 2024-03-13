<script>
import AppJumbotron from "./AppJumbotron.vue";
import AppCardProfessional from "./AppCardProfessional.vue";
import AppSponsoredProfessional from "./AppSponsoredProfessional.vue";
import AppSectionThreeSpecializationMain from "./AppSectionThreeSpecializationMain.vue";
import AppSectionTwoSpecializationMain from "./AppSectionTwoSpecializationMain.vue";
import store from "../../store";
import axios from "axios";
import AppLogoCarousel from "./AppLogoCarousel.vue";

export default {
  name: "Main",

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
    AppSectionThreeSpecializationMain,
    AppSectionTwoSpecializationMain,
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
    sponsorizedCards() {
      axios
        .get("http://127.0.0.1:8000/api/professionals/sponsored")
        .then((response) => {
          console.log(response);
          this.sponsored = response.data.data;
        });
    },
  },
  created() {
    this.sponsorizedCards();
    this.store.specializationsName = "";
  },
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>

  <AppSponsoredProfessional :sponsorProp="sponsored"></AppSponsoredProfessional>
  <AppSectionThreeSpecializationMain></AppSectionThreeSpecializationMain>
  <AppSectionTwoSpecializationMain></AppSectionTwoSpecializationMain>
  <AppLogoCarousel></AppLogoCarousel>
</template>

<style scoped></style>
./AppDevelopementMain.vue
