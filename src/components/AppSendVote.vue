<script>
export default {
  name: 'SendVote',
  data() {
    return {
      numeroDiStelle: 5,
      stelleColorate: 0,
    };
  },
  methods: {
    coloraStelle(index) {
      // Imposta il numero di stelle piene in base all'indice cliccato
      if (this.stelleColorate === index + 1) {
        this.stelleColorate = 0;
      } else {
        this.stelleColorate = index + 1;
      }
    },
  },
};
</script>

<template>
  <div class="vote-container">
    <div class="row align-items-center">
      <h3 class="text-uppercase m-0 col-12 col-lg-6 p-2">
        Vota Professionista
      </h3>

      <ul class="d-flex list-unstyled star my-0 mx-4 col-4 col-lg-3">
        <!-- <li><i class="fa-solid fa-star"></i></li> -->
        <li>
          <i
            v-for="(star, index) in numeroDiStelle"
            :class="{
              'fas fa-star': index < stelleColorate,
              'far fa-star': index >= stelleColorate,
            }"
            @click="coloraStelle(index)"
          ></i>
        </li>
      </ul>
      <div class="col-6 col-lg-2">
        <button class="btn button-send">invia</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
star-color .vote-container {
  padding: 20px;
  margin: 20px 0;
  background-color: aliceblue;
  border-radius: 30px;
}
.cont-message {
  width: 50%;
  padding: 20px;
  margin: 20px 0 20px 20px;
  background-color: aliceblue;
  border-radius: 30px;
}
.button-send {
  background: #1f798b;
}
h3 {
  font-weight: 700;
}
.star li {
  font-size: 26px;
}

/* .star li:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
} */
</style>
