<script>

import AppHeader from '../components/AppHeader.vue';
// import AppHeaderSubPages from '../components/AppHeaderSubPages.vue';
import AppMainSubPages from '../components/AppMainSubPages.vue';
import AppSearchSubPages from '../components/AppSearchSubPages.vue';


import axios from 'axios';
import store from '../../store';

export default {
  name: 'ProfessionalList',
  data() {
    return {
      loading: false,
      professionals: [],
      store,
    };
  },
  components: {
    AppHeader,
    // AppHeaderSubPages,
    AppSearchSubPages,
    AppMainSubPages,
  },
  methods: {
    search(id) {
      this.loading = true;
      if (id !== '') {
        const specializationName = this.store.getSpecializationNameById(id);
        const formattedSpecializationName =
          this.formatSpecializationName(specializationName);
        this.$router.push({
          name: 'professionalList',
          params: { id: formattedSpecializationName },
        });
        axios
          .get('http://127.0.0.1:8000/api/professionals/' + id)
          .then((response) => {
            this.professionals = response.data.data.data;
          })
          .finally(() => {
            this.loading = false;
            this.$router.push({ name: 'professionalList', params: { id: id } });
          });
      }
    },
    formatSpecializationName(name) {
      return name.replace(/\s+/g, '-').toLowerCase();
    },
  },
  created() {
    if (this.store.specializationsId === '') {
      this.store.specializationsId = this.$route.params.id;
    }
    this.search(this.store.specializationsId);
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <!-- <AppHeaderSubPages @search="search"></AppHeaderSubPages> -->
  <AppSearchSubPages @search="search"></AppSearchSubPages>
  <div class="container">
    <div class="my-3" v-if="loading">
      caricamento in corso...
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>

  <AppMainSubPages :professionals="professionals"></AppMainSubPages>
</template>

<style scoped></style>
