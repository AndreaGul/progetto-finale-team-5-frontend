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
  <div class="d-flex flex-column base-height">
    <div class="flex-grow-1">
      <router-view />
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<style scoped>
.base-height {
  height: 100vh;
}
</style>
