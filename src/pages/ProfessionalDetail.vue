<script>
import axios from 'axios';
import AppHeaderSingleProfessional from '../components/AppHeaderSingleProfessional.vue';

import AppInfoSingleProfessional from '../components/AppInfoSingleProfessional.vue';
import AppReviews from '../components/AppReviews.vue';
import store from '../../store';
export default {
  name: 'ProfessionalDetail',
  components: {
    AppHeaderSingleProfessional,

    AppInfoSingleProfessional,
    AppReviews,
  },
  data() {
    return {
      store,
      professional: null,
    };
  },
  methods: {
    getInfo() {
      if (this.store.professionalId !== null) {
        axios
          .get(
            'http://127.0.0.1:8000/api/professionals/show/' +
              this.store.professionalId
          )
          .then((response) => {
            console.log(response.data.data);
            this.professional = response.data.data;
          });
      }
    },
    search(id) {
      if (id !== '') {
        axios
          .get('http://127.0.0.1:8000/api/professionals/' + id)
          .then((response) => {
            this.professionals = response.data.data.data;
          });
        this.$router.push('/professionalList');
      }
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<template>
  <AppHeaderSingleProfessional @search="search"></AppHeaderSingleProfessional>
  <div class="container pt-5" v-if="professional !== null">
    <div class="row">
      <div class="col-7">
        <AppInfoSingleProfessional
          :name="professional.user.name"
          :surname="professional.user.surname"
          :specializations="professional.specializations"
          :photo="professional.photo"
          :address="professional.address"
          :phone="professional.phone"
          :curriculum="professional.curriculum"
        ></AppInfoSingleProfessional>
      </div>
      <div class="col-5">
        <AppReviews :reviews="professional.reviews"></AppReviews>
      </div>
    </div>
  </div>
</template>
