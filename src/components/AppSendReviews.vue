<script>
export default {
  name: 'AppSendMessage',
  data() {
    return {
      email: '',
      review: '',
      name: '',
    };
  },
  methods: {
    newReview() {
      this.$emit('newReview', this.email, this.review, this.name);
    },
  },
};
</script>

<template>
  <!-- Invio Recensione -->
  <div class="cont-message">
    <h3 class="text-uppercase">Lascia Una Recensione</h3>
    <form @submit.prevent="newReview">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control mail-style"
          placeholder="Nome Cognome"
          v-model="name"
          required
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="email"
          class="form-control mail-style"
          placeholder="Inserisci la tua mail"
          v-model="email"
          required
        />
      </div>

      <div class="input-group">
        <textarea
          class="form-control color-textarea"
          placeholder="Scrivi la tua recensione qui"
          aria-label="With textarea"
          v-model="review"
          required
        ></textarea>
      </div>

      <div class="cont-button">
        <button class="btn button-send">Invia</button>
      </div>
    </form>
  </div>
  <!-- Fine Invio Recensione -->
</template>

<style scoped>
h3 {
  font-weight: 700;
}
.cont-message {
  padding: 20px;
  margin: 20px 0;
  background-color: aliceblue;
  border-radius: 10px;
}

.button-send {
  background: #1f798b;
  color: white;
}

.color-textarea {
  background-color: #e1e4f1;
  margin-bottom: 25px;
  height: 100px;
  border-color: #1f798b;
}

.cont-button {
  display: flex;
  justify-content: end;
}
</style>
