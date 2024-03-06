<script>
import AppHeader from '../components/AppHeader.vue';
import AppMain from '../components/AppMain.vue';
export default {
  name: 'home',
  components: {
    AppHome,
    AppMain,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>
