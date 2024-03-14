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
      mediaVoti: null,
      numeroRecensioni: null,
    };
  },

  methods: {
    getSpecializations() {
      this.loading = true;
      /*
        api lista specializzazioni
      */
      axios
        .get('http://127.0.0.1:8000/api/specializations')
        .then((response) => {
          this.store.specializations = response.data.data;
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
      this.$emit('search', this.mediaVoti, this.numeroRecensioni);
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
    updateVote(vote) {
      this.mediaVoti = vote;
      const dropdownMenuButton = document.getElementById(
        'dropdownMenuButtonVote'
      );
      if (vote === null) {
        dropdownMenuButton.innerHTML = 'Voto';
      } else {
        dropdownMenuButton.innerHTML = vote;
      }
    },
    updateReview(review) {
      this.numeroRecensioni = review;
      const dropdownMenuButton = document.getElementById(
        'dropdownMenuButtonReview'
      );
      dropdownMenuButton.innerHTML = review;
    },
    azzera() {
      this.mediaVoti = null;
      this.numeroRecensioni = null;
      const dropdownMenuButtonVote = document.getElementById(
        'dropdownMenuButtonVote'
      );
      dropdownMenuButtonVote.innerHTML = 'Media Voti';
      const dropdownMenuButtonReview = document.getElementById(
        'dropdownMenuButtonReview'
      );
      dropdownMenuButtonReview.innerHTML = 'Numero Recensioni';
    },
  },
  created() {
    this.getSpecializations();
  },
};
</script>

<template>
  <!-- Ricerca -->
  <div class="py-3 not-whit">
    <div class="container d-flex flex-row align-items-center p-3">
      <form
        id="form"
        class="row g-2 align-items-center"
        @submit.prevent="search"
      >
        <div class="col-12 col-sm-6 col-md-4 col-xl-4">
          <div class="dropdown p-0">
            <button
              class="btn btn-default btn-width specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
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
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <div class="dropdown p-0">
            <button
              class="btn btn-default btn-width specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdownMenuButtonVote"
            >
              Media Voti
            </button>
            <ul class="dropdown-menu rounded-4 w-100">
              <li
                v-for="voto in 5"
                class="dropdown-item"
                @click="updateVote(voto)"
              >
                {{ voto }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <div class="dropdown p-0">
            <button
              class="btn btn-default btn-width specializations btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdownMenuButtonReview"
            >
              Numero Recensioni
            </button>
            <ul class="dropdown-menu rounded-4 w-100">
              <li
                v-for="review in 3"
                class="dropdown-item"
                @click="updateReview(review * 5)"
              >
                {{ review * 5 }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-8 col-sm-3 col-md-2 col-xl-1">
          <button class="btn btn-default btn-cerca btn-width">Cerca</button>
        </div>
        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
          <button
            type="button"
            class="btn btn-default btn-azzera btn-width"
            @click="azzera"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- Ricerca -->
</template>

<style scoped>
.not-whit {
  background-color: #1f7a8c;
}
form {
  width: 100vw;
}

.btn-default {
  background-color: white;
  color: #022b3aff;
  font-weight: bold;
  border-radius: 10px;
  font-size: 18px;
  border: 2px solid #022b3aff;
}

.btn-width {
  width: 100%;
}

.btn-azzera {
  color: red;
  border: 2px solid red;
}

.btn:hover {
  background-color: #bfdbf7;
}

@media (min-width: 767.98px) {
}

@media (min-width: 992px) {
  .btn-default {
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  .btn-default {
    width: 100%;
  }
}
</style>
