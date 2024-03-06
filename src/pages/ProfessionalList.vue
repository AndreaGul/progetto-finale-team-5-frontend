<script>
import AppHeaderSubPages from '../components/AppHeaderSubPages.vue';
import AppMainSubPages from '../components/AppMainSubPages.vue';

import axios from 'axios';
import store from '../../store';

export default {
  name: 'ProfessionalList',
  data() {
    return {
      professionals: [],
      store,
    };
  },
  components: {
    AppHeaderSubPages,
    AppMainSubPages,
  },
  methods: {
    search(id) {
      if (id !== '') {
        axios
          .get('http://127.0.0.1:8000/api/professionals/' + id)
          .then((response) => {
            this.professionals = response.data.data.data;
          });
      }
    },
  },
  created() {
    if (this.store.specializationsId !== '')
      this.search(this.store.specializationsId);
  },
};
</script>

<template>
  <AppHeaderSubPages @search="search"></AppHeaderSubPages>
  <AppMainSubPages :professionals="professionals"></AppMainSubPages>
</template>

<style scoped></style>
