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
    selectOption(option) {
      const dropdownMenuButton = document.getElementById('dropdownMenuButton');
      dropdownMenuButton.innerHTML = option;
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
      <form id="form" class="d-flex align-items-center gap-3">
        <div class="dropdown">
          <button
            class="btn btn-default specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownMenuButton"
          >
            Specializzazione
          </button>
          <ul class="dropdown-menu rounded-4">
            <li v-for="specialization in this.store.specializations">
              <a
                :value="specialization.id"
                class="dropdown-item"
                href="#"
                @click="selectOption(specialization.name)"
                >{{ specialization.name }}</a
              >
            </li>
          </ul>
        </div>
        <button class="btn btn-default btn-cerca">Cerca</button>
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

.titolo {
  font-family: 'Share Tech Mono', monospace;
  font-size: 64px;
  max-width: 900px;
}

.btn-default {
  background-color: white;
  color: #022b3aff;
  font-weight: bold;
  border-radius: 30px;
  font-size: 24px;
}

.btn-cerca {
  border: 2px solid #022b3aff;
}
.btn-default.specializations {
  width: 400px;
}

.btn:hover {
  background-color: #bfdbf7;
}
</style>
