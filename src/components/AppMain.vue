<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
export default {
  name: 'Main',

  components: {
    AppJumbotron,
    AppCardProfessional,
  },
};
</script>

<template>
  <AppJumbotron></AppJumbotron>
  <div>
    main
    <AppCardProfessional></AppCardProfessional>
  </div>
</template>

<style scoped></style>
