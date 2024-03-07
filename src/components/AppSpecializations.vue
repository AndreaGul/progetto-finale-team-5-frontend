<script>
import axios from 'axios';
import store from '../../store';
export default {
  name: 'AppSpecializations',

  data() {
    return {
      store,
      specializationId: '',
    };
  },

  methods: {
    getSpecializations() {
      axios
        .get('http://127.0.0.1:8000/api/specializations')
        .then((response) => {
          console.log(response);
          this.store.specializations = response.data.data;
          console.log(this.store.specializations);
        });
    },
  },

  created() {
    this.getSpecializations();
  },
};
</script>

<template>
  <div class="container-card">
    <a v-for="specialization in this.store.specializations" href="">
      <div class="card">
        <h5 class="title">{{ specialization.name }}</h5>
      </div>
    </a>

    <!-- <a href="">
      <div class="card">
        <h5 class="title">Mobile Developement</h5>
      </div>
    </a>

    <a href="">
      <div class="card">
        <h5 class="title">Artificial Intelligence</h5>
      </div>
    </a> -->
  </div>
</template>

<style scoped>
.container-card {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.card {
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #012a3a;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
  margin-left: -50px;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

.title {
  color: white;

  position: absolute;
  left: 20px;
  top: 15px;
}

.card:hover .stroke {
  stroke-dashoffset: 100;
  transition: 0.6s ease-out;
}
</style>
