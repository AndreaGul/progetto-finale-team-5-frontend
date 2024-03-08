<script>
import axios from 'axios';
import store from '../../store';
export default {
  name: 'SearchSubPages',

  data() {
    return {
      store,
      loading: false,
      specializationId: '',
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
    selectOption(option, id) {
      const dropdownMenuButton = document.getElementById('dropdownMenuButton');
      dropdownMenuButton.innerHTML = option;
      this.specializationId = id;
      this.store.specializationsId = id;
      this.store.specializationsName = option;
    },

    search() {
      this.$emit('search', this.store.specializationsId);
    },
    findSpecialization(id, name) {
      if (id == this.store.specializationsId) {
        this.store.specializationsName = name;
      }
    },
    getName() {
      if (this.store.specializationsName !== '') {
        return this.store.specializationsName;
      } else {
        return 'Specializzazione';
      }
    },
  },
  created() {
    this.getSpecializations();
  },
};
</script>

<template>
  <header class="py-3">
    <div
      class="container d-flex flex-row justify-content-between align-items-center p-3"
    >
      <form
        id="form"
        class="d-flex align-items-center gap-3"
        @submit.prevent="search"
      >
        <div class="dropdown">
          <button
            class="btn btn-default specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownMenuButton"
          >
            {{ getName() }}
          </button>
          <ul class="dropdown-menu rounded-4 w-100">
            <li v-for="specialization in this.store.specializations">
              {{ findSpecialization(specialization.id, specialization.name) }}
              <a
                :value="specialization.id"
                class="dropdown-item"
                href="#"
                @click="selectOption(specialization.name, specialization.id)"
                >{{ specialization.name }}</a
              >
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-default specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownMenuButton"
          >
            Media Voti
          </button>
          <ul class="dropdown-menu rounded-4 w-100">
            <li>
              <a class="dropdown-item" href="#">Prova</a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-default specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownMenuButton"
          >
            Numero Recensioni
          </button>
          <ul class="dropdown-menu rounded-4 w-100">
            <li>
              <a class="dropdown-item" href="#">Prova</a>
            </li>
          </ul>
        </div>

        <button class="btn btn-default btn-cerca">Cerca</button>
      </form>
    </div>
  </header>
</template>

<style scoped>
.btn-default {
  background-color: white;
  color: #022b3aff;
  font-weight: bold;
  border-radius: 30px;
  font-size: 18px;
}

.btn-cerca {
  border: 2px solid #022b3aff;
}

.btn-default.specializations {
  width: 250px;
}

.btn:hover {
  background-color: #bfdbf7;
}

@media (min-width: 767.98px) {
  .btn-default.specializations {
    width: 300px;
  }
}

@media (min-width: 992px) {
  .btn-default {
    font-size: 20px;
  }

  .btn-default.specializations {
    width: 400px;
  }
}
</style>
