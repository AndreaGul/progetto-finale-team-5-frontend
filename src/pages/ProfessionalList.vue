<script>
import AppHeaderSubPages from '../components/AppHeaderSubPages.vue';
import AppCardProfessional from '../components/AppCardProfessional.vue';
//  import AppMainSubPages from '../components/AppMainSubPages.vue';

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
    AppCardProfessional,
    // AppMainSubPages,
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
  created(){
    if(this.store.specializationsId !== '')this.search(this.store.specializationsId)
  }
};
</script>

<template>
  <AppHeaderSubPages @search="search"></AppHeaderSubPages>
  <!-- <AppMainSubPages ></AppMainSubPages> -->
  <div class="container pt-5">
    <div class="row d-flex flex-wrap">
      <AppCardProfessional
        v-for="professional in professionals"
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
