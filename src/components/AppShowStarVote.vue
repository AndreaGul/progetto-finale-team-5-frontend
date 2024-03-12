<script>
export default {
  name: 'ShowStarVote',
  data() {
    return {
      numeroDiStelle: 5,
      //rendo il numero passato un numero e poi un intero con approssimazione in difetto
      colorate: Math.floor(parseFloat(this.stelleColorate)),
      numero: null,
      haZeroDopoPunto: null,
    };
  },
  props: ['stelleColorate'],
  methods: {
    controllaNumero() {
      // Converti il numero in una stringa
      const numeroStringa = this.stelleColorate.toString();
      // Controlla se la stringa contiene ".0"

      this.haZeroDopoPunto = numeroStringa.includes('.0');
      console.log(this.haZeroDopoPunto);
    },
  },
  created() {
    this.controllaNumero();
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
          'fa-solid fa-star-half-stroke':
            index === colorate &&
            //controlla se il numero pasato dia diverso da 0
            colorate !== 0 &&
            //controllo se ha uno 0 dopo la virgola
            haZeroDopoPunto === false &&
            //controllo se il numero passato senza modifiche sia un intero
            Number.isInteger(this.stelleColorate) === false,
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
