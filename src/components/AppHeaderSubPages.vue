<script>
import axios from 'axios';
import store from '../../store';
export default {
  name: 'HeaderSubPages',

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
    },

    search() {
      this.$emit('search', this.specializationId);
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
      <div class="d-flex align-items-center">
        <h2 class="mb-0">
          <!-- <a href="http://localhost:5173">HOME</a> -->
          <router-link :to="{ name: 'home' }"> HOME </router-link>
        </h2>

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
              {{
                this.store.specializationsId === ''
                  ? 'Specializzazione'
                  : this.store.specializationsName
              }}
            </button>
            <ul class="dropdown-menu rounded-4">
              <li v-for="specialization in this.store.specializations">
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
          <button class="btn btn-default btn-cerca">Cerca</button>
        </form>
      </div>

      <div class="dropdown dropdown-small">
        <button
          class="btn hamburger"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="dropdown-menu list-unstyled m-0">
          <li>
            <a
              class="dropdown-item text-decoration-none text-black"
              href="http://127.0.0.1:8000/login"
              >Login</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-decoration-none text-black"
              href="http://127.0.0.1:8000/register"
              >Registrati</a
            >
          </li>
        </ul>
      </div>

      <div class="nav-links">
        <ul class="d-flex gap-3 list-unstyled m-0">
          <li>
            <a
              class="text-decoration-none text-black"
              href="http://127.0.0.1:8000/login"
              >Login</a
            >
          </li>
          <li>
            <a
              class="text-decoration-none text-black"
              href="http://127.0.0.1:8000/register"
              >Registrati</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #022b3aff;
}
h2 a {
  font-size: 40;
  font-weight: bold;
  text-decoration: none;
  color: #022b3a;
  margin-right: 10px;
}

a {
  font-size: 20;
  font-weight: 500;
}

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

.nav-links {
  display: none;
}

.hamburger {
  font-size: 25px;
}

@media (min-width: 575.98px) {
}

@media (min-width: 767.98px) {
  .dropdown-small {
    display: none;
  }

  .nav-links {
    display: block;
  }

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

  h2 a {
    margin-right: 30px;
  }
}
</style>
