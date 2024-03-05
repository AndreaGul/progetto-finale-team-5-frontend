<script>
import axios from 'axios';
import store from '../../store';
export default {
  name: 'Jumbotron',

  data() {
    return {
      store,
    };
  },

  methods: {
    getSpecializations() {
      axios
        .get('http://127.0.0.1:8001/api/specializations')
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
  <div class="bg">
    <div class="container pt-5 pb-2">
      <h1 class="titolo">Cerca il professionista che fa per te</h1>
      <form id="form">
        <div class="check-container row p-3 mb-2 d-flex">
          <div
            class="form-check form-check-inline col-3"
            v-for="specialization in this.store.specializations"
          >
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">{{
              specialization.name
            }}</label>
          </div>
        </div>
        <button class="btn">Cerca</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #022b3a;
  color: white;
}

.check-container {
  background-color: #1f7a8c;
  border-radius: 10px;
  font-size: 24px;
}
.titolo {
  font-family: 'Share Tech Mono', monospace;
  font-size: 64px;
  max-width: 900px;
  margin: 100px 0 20px;
}

.btn {
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 20px;
  font-size: 30px;
}
.btn:hover {
  background-color: #bfdbf7;
}
</style>
