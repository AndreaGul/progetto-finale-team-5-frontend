<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCardProfessional from './AppCardProfessional.vue';
import AppHeaderSubPages from './AppHeaderSubPages.vue';
import axios from "axios";
export default {
  name: 'Main',

  data() {
    return {
      professionals : []
    }
  },
  components: {
    AppJumbotron,
    AppCardProfessional,
    AppHeaderSubPages,
  },

  methods:{
    search(id){
      if(id !== ''){
        axios
        .get("http://127.0.0.1:8000/api/professionals/" + id)
        .then((response) => {
          this.professionals = response.data.data.data;
        });
      }
    }
  }
};
</script>

<template>
  <AppJumbotron @search="search"></AppJumbotron>
  <AppHeaderSubPages></AppHeaderSubPages>
  <div class="container pt-5">
    <div class="row d-flex flex-wrap">
      <AppCardProfessional v-for="professional in professionals" :slug="professional.slug" :specializations="professional.specializations" :photo="professional.photo"></AppCardProfessional>
    </div>
    main
  </div>
</template>

<style scoped></style>
