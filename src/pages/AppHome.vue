<script>
import AppHeader from '../components/AppHeader.vue';
import AppMain from '../components/AppMain.vue';
export default {
  name: 'home',
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>
