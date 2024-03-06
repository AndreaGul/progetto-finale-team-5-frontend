<script>
import axios from 'axios';
import store from '../../store';
export default {
  name: 'Jumbotron',

  data() {
    return {
      store,
      loading: false,
    };
  },

  methods: {
    getSpecializations() {
      this.loading = true;
      axios
        .get('http://127.0.0.1:8000/api/specializations')
        .then((response) => {
          console.log(response);
          this.store.specializations = response.data.data;
          console.log(this.store.specializations);
        })
        .finally(() => {
          this.loading = false;
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
    <div class="container pb-2" v-if="!loading">
      <h1 class="titolo mb-5">Cerca il professionista tech che fa per te</h1>
      <form id="form">
        <div class="check-container px-2">
          <div class="row p-3 justify-content-between">
            <div
              class="form-check form-check-inline col-3"
              v-for="specialization in this.store.specializations"
              :key="specialization.id"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="'inlineCheckbox' + specialization.id"
                :value="specialization.id"
              />
              <label
                class="form-check-label"
                :for="'inlineCheckbox' + specialization.id"
              >
                {{ specialization.name }}
              </label>
            </div>
          </div>
        </div>
        <button class="btn mt-3">Cerca</button>
      </form>
    </div>
    <div class="my-3 container" v-else>
      Caricamento in corso...
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #022b3a;
  color: white;
  padding: 100px 0;
}

.check-container {
  background-color: #1f7a8c;
  border-radius: 7px;
  font-size: 18px;
}
.titolo {
  font-family: 'Share Tech Mono', monospace;
  font-size: 64px;
  max-width: 900px;
}

.btn {
  background-color: white;
  color: #022b3aff;
  font-weight: bold;
  border-radius: 30px;
  font-size: 24px;
}
.btn:hover {
  background-color: #bfdbf7;
}
</style>
