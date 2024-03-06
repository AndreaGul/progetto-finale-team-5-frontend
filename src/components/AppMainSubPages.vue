<script>
import AppCardProfessional from "../components/AppCardProfessional.vue";
export default {
  name: "MainSubPages",
  components: {
    AppCardProfessional,
  },
  props: {
    professionals: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container pt-5">
    <div class="row d-flex flex-wrap">
      <AppCardProfessional
        v-for="professional in professionals"
        :address="professional.address"
        :performance="professional.performance"
        :slug="professional.slug"
        :specializations="professional.specializations"
        :photo="professional.photo"
      ></AppCardProfessional>
    </div>

    <!-- <div class="info d-flex">
      <AppInfoSingleProfessional></AppInfoSingleProfessional>
      <AppReviews></AppReviews>
    </div>
    <AppDetailInfoProfessional></AppDetailInfoProfessional> -->
  </div>
</template>

<style scoped></style>
