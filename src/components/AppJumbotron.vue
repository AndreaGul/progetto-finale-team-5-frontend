<script>
import axios from "axios";
import store from "../../store";
export default {
  name: "Jumbotron",

  data() {
    return {
      store,
      loading: false,
    };
  },

  methods: {
    getSpecializations() {
      this.loading = true;
      /*
        api lista specializzazioni
      */
      axios
        .get("http://127.0.0.1:8000/api/specializations")
        .then((response) => {
          this.store.specializations = response.data.data;
        })
        .catch((error) => {
          //console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    selectOption(option, id) {
      const dropdownMenuButton = document.getElementById("dropdownMenuButton");

      dropdownMenuButton.innerHTML = option;
      this.store.specializationsId = id;
      this.store.specializationsName = option;
    },
    search() {
      this.$emit("search");
    },
  },
  created() {
    this.getSpecializations();
  },
};
</script>

<template>
  <!-- Jumbotron -->
  <div class="bg">
    <div class="container pb-2" v-if="!loading">
      <h1 class="titolo mb-5">Cerca il professionista tech che fa per te</h1>

      <form
        id="form"
        class="d-flex flex-wrap align-items-center gap-3"
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
            Specializzazione
          </button>
          <ul class="dropdown-menu rounded-4 w-100">
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
    <div class="my-3 container" v-else>
      Caricamento in corso...
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</template>

<style scoped lang="scss">
.bg {
  background: linear-gradient(-45deg, #e1e4f1, #012a3a, #1f798b, #bedaf6);
  background-size: 400% 400%;
  animation: gradient 13s ease infinite;

  color: white;
  padding: 100px 0;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.titolo {
  font-family: "Share Tech Mono", monospace;
  font-size: 40px;
  max-width: 900px;
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
  width: 300px;
}

.btn:hover {
  background-color: #bfdbf7;
}

@media (min-width: 575.98px) {
  .btn-default.specializations {
    width: 400px;
  }

  .btn-default {
    font-size: 24px;
  }
}

@media (min-width: 767.98px) {
  .titolo {
    font-size: 48px;
  }
}

@media (min-width: 992px) {
  .titolo {
    font-size: 64px;
  }
}
</style>
