<script>
export default {
  name: "ShowStarVote",
  data() {
    return {
      numeroDiStelle: 5,
      //rendo il numero passato un numero e poi un intero con approssimazione in difetto
      colorate: Math.floor(parseFloat(this.stelleColorate)),
      numero: null,
      haZeroDopoPunto: null,
    };
  },
  props: ["stelleColorate"],
  methods: {
    controllaNumero() {
      // Converti il numero in una stringa
      const numeroStringa = this.stelleColorate.toString();
      // Controlla se la stringa contiene ".0"

      this.haZeroDopoPunto = numeroStringa.includes(".0");
    },
  },
  created() {
    this.controllaNumero();
  },
};
</script>

<template>
  <!-- Stelle -->
  <ul class="d-flex list-unstyled star my-0">
    <li v-for="(star, index) in numeroDiStelle">
      <i
        :class="{
          'fas fa-star': index < Math.floor(parseFloat(this.stelleColorate)),
          'fa-solid fa-star-half-stroke':
            index === Math.floor(parseFloat(this.stelleColorate)) &&
            //controlla se il numero pasato dia diverso da 0
            Math.floor(parseFloat(this.stelleColorate)) !== 0 &&
            //controllo se ha uno 0 dopo la virgola
            haZeroDopoPunto === false &&
            //controllo se il numero passato senza modifiche sia un intero
            Number.isInteger(this.stelleColorate) === false,
          'far fa-star': index >= Math.floor(parseFloat(this.stelleColorate)),
        }"
      ></i>
    </li>
  </ul>
  <!-- Fine Stelle -->
</template>

<style scoped></style>
