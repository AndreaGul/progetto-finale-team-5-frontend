<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
// da mettere nella pagina info

// import AppInfoSingleProfessional from './AppInfoSingleProfessional.vue';
// import AppReviews from './AppReviews.vue';
// import AppDetailInfoProfessional from './AppDetailInfoProfessional.vue';

export default {
  name: 'Main',

  components: {
    AppJumbotron,
    AppCardProfessional,
    // AppInfoSingleProfessional,
    // AppDetailInfoProfessional,
    // AppReviews,
  },
};
</script>

<template>
  <AppJumbotron></AppJumbotron>
  <div>
    main
    <AppCardProfessional></AppCardProfessional>
    <!-- <div class="info d-flex">
      <AppInfoSingleProfessional></AppInfoSingleProfessional>
      <AppReviews></AppReviews>
    </div>
    <AppDetailInfoProfessional></AppDetailInfoProfessional> -->
  </div>
</template>

<style scoped></style>
