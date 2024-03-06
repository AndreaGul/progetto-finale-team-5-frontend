<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'Template',

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <!-- <AppHeader></AppHeader> -->
  <router-view />
  <AppFooter></AppFooter>
</template>

<style scoped></style>
