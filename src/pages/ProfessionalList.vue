<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearchSubPages from "../components/AppSearchSubPages.vue";
//import AppHeaderSubPages from '../components/AppHeaderSubPages.vue';
import AppMainSubPages from "../components/AppMainSubPages.vue";
import axios from "axios";
import store from "../../store";

export default {
  name: "ProfessionalList",
  data() {
    return {
      loading: false,
      professionals: [],
      store,
    };
  },
  components: {
    AppHeader,
    //AppHeaderSubPages,
    AppSearchSubPages,
    AppMainSubPages,
  },
  methods: {
    search(mediaVoti, numeroRecensioni) {
      this.loading = true;
      if (this.store.specializationsId === "") {
        this.$route.params.id = this.$route.params.id.replace("-", " ");
        this.store.specializationsId = this.$route.params.id;
        this.store.specializationsName = this.$route.params.id;
      }
      if (this.store.specializationsId !== "") {
        const specializationName = this.formatSpecializationName(
          this.store.specializationsName
        );
        // const formattedSpecializationName =
        //   this.formatSpecializationName(specializationName);
        // this.$router.push({
        //   name: 'professionalList',
        //   params: { id: formattedSpecializationName },
        // });
        axios
          .get("http://127.0.0.1:8000/api/professionals", {
            params: {
              specialization_id: this.store.specializationsId,
              vote: mediaVoti,
              review: numeroRecensioni,
            },
          })
          .then((response) => {
            console.log(response);
            this.professionals = response.data.data;
          })
          .finally(() => {
            this.loading = false;
          });
        this.$router.push({
          name: "professionalList",
          params: { id: specializationName },
        });
      }
    },
    formatSpecializationName(name) {
      return name.replace(/\s+/g, "-");
    },
  },
  created() {
    // if (this.store.specializationsId === "") {
    //   this.store.specializationsId = this.$route.params.id;
    // }
    this.search();
  },
};
</script>

<template>
  <AppHeader></AppHeader>

  <!-- <AppHeaderSubPages @search="search"></AppHeaderSubPages> -->
  <AppSearchSubPages @search="search"></AppSearchSubPages>
  <div class="container">
    <div class="my-3" v-if="loading">
      caricamento in corso...
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>

  <AppMainSubPages :professionals="professionals"></AppMainSubPages>
</template>

<style scoped></style>
