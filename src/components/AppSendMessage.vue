<script>
export default {
  name: 'AppSendMessage',
  data() {
    return {
      email: '',
      message: '',
      name: '',
      error: [],
    };
  },
  methods: {
    newMessage() {
      this.checkInput();
      if (this.error.length === 0)
        this.$emit('newMessage', this.email, this.message, this.name);
    },
    checkInput() {
      this.error = [];
      //email
      if (!this.email.includes('@')) this.error.push('email');
      if (!this.email.includes('.')) this.error.push('email');
      if (this.email.length > 50) this.error.push('email');
      //message
      if (this.message.length < 3 || this.message.length > 1000)
        this.error.push('message');
      //name
      if (this.name.length < 3 || this.name.length > 20)
        this.error.push('name');
    },
  },
};
</script>

<template>
  <!-- Invio Messaggio -->

  <div class="cont-message">
    <h3 class="text-uppercase">Scrivi per una consulenza</h3>
    <form @submit.prevent="newMessage">
      <div class="input-group">
        <input
          type="text"
          class="form-control mail-style"
          :class="{ 'border-danger': error.includes('name') }"
          placeholder="Nome Cognome"
          v-model="name"
          required
        />
      </div>
      <p v-if="error.includes('name')" class="mt-1 text-danger">
        il nome deve contenere almeno 3 e massimo 20 caratteri
      </p>

      <div class="input-group mt-3">
        <input
          type="email"
          class="form-control mail-style"
          :class="{ 'border-danger': error.includes('email') }"
          placeholder="Inserisci la tua mail"
          v-model="email"
          required
        />
      </div>
      <p v-if="error.includes('email')" class="mt-1 text-danger">
        non è un email valida
      </p>

      <div class="input-group mt-3">
        <textarea
          class="form-control color-textarea mb-0"
          :class="{ 'border-danger': error.includes('message') }"
          placeholder="Scrivi il tuo messaggio qui"
          aria-label="With textarea"
          v-model="message"
          required
        ></textarea>
      </div>
      <p v-if="error.includes('message')" class="mt-1 text-danger">
        il messaggio deve contenere almeno 3 e massimo 1000 caratteri
      </p>

      <div class="cont-button mt-3">
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
  border-radius: 10px;
  border: 1px solid #1f798b;

  margin-bottom: 10px;
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
