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
    newVote() {
      this.$emit('newVote', this.stelleColorate);
    },
  },
};
</script>

<template>
  <!-- Invio Voto -->
  <div class="send-vote-container">
    <div class="align-items-start card-vote-star d-flex flex-column">
      <h3 class="text-uppercase m-0">Esprimi il tuo gradimento</h3>
      <div class="mt-2">
        <ul class="d-flex list-unstyled star">
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
        <div class="">
          <button class="btn button-send" @click="newVote">invia</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Fine Invio Voto -->
</template>

<style scoped>
.send-vote-container {
  position: relative;
  top: 10px;
  padding: 20px;
  /* margin: 20px 0; */
  background-color: aliceblue;
  border-radius: 10px;
  border: 1px solid #1f798b;
}

.card-vote-star {
  height: 150px;
}

.button-send {
  background: #1f798b;
  color: white;
}
h3 {
  font-weight: 700;
}
.star li {
  font-size: 26px;
  cursor: pointer;
}

/* .star li:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
} */
</style>
