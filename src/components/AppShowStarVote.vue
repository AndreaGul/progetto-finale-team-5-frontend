<script>
export default {
  name: 'ShowStarVote',
  data() {
    return {
      numeroDiStelle: 5,
      colorate: null,
    };
  },
  props: ['stelleColorate'],
  methods: {
    numeroIntero() {
      this.colorate = Math.round(parseFloat(this.stelleColorate));
    },
  },
  created() {
    this.numeroIntero();
  },
};
</script>

<template>
  <ul class="d-flex list-unstyled star my-0">
    <!-- <li><i class="fa-solid fa-star"></i></li> -->
    <li v-for="(star, index) in numeroDiStelle">
      <i
        :class="{
          'fas fa-star': index < colorate,
          'far fa-star': index >= colorate,
        }"
      ></i>
    </li>
  </ul>
</template>

<style scoped>
/* .star li:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
}  */
</style>
