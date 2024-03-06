<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
import AppHeaderSubPages from './AppHeaderSubPages.vue';
export default {
  name: 'Main',

  components: {
    AppJumbotron,
    AppCardProfessional,
    AppHeaderSubPages,
  },
};
</script>

<template>
  <AppJumbotron></AppJumbotron>
  <AppHeaderSubPages></AppHeaderSubPages>
  <div>
    main
    <AppCardProfessional></AppCardProfessional>
  </div>
</template>

<style scoped></style>
