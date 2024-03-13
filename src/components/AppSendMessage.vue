<script>
export default {
  name: 'AppSendMessage',
  data() {
    return {
      email: '',
      message: '',
      name: '',
    };
  },
  methods: {
    newMessage() {
      this.$emit('newMessage', this.email, this.message, this.name);
    },
  },
};
</script>

<template>
  <!-- Invio Messaggio -->
  <div class="cont-message">
    <h3 class="text-uppercase">Manda Un Messaggio</h3>
    <form @submit.prevent="newMessage">
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
          placeholder="Scrivi il tuo messaggio qui"
          aria-label="With textarea"
          v-model="message"
          required
        ></textarea>
      </div>

      <div class="cont-button">
        <button class="btn button-send">Invia</button>
      </div>
    </form>
  </div>
  <!-- Fine Invio Messaggio -->
</template>

<style scoped>
h3 {
  font-weight: 700;
}
.cont-message {
  padding: 20px;
  background-color: aliceblue;
  border-radius: 30px;
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
