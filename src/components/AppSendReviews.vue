<script>
export default {
  name: 'AppSendMessage',
  data() {
    return {
      email: '',
      review: '',
      name: '',
      error: []
    };
  },
  methods: {
    newReview() {
      this.checkInput();
      if(this.error.length === 0)this.$emit('newReview', this.email, this.review, this.name);
    },
    checkInput(){
      this.error = [];
      //email
      if(!this.email.includes('@'))this.error.push('email');
      if(!this.email.includes('.'))this.error.push('email');
      if(this.email.length > 50)this.error.push('email');
      //review
      if(this.review.length < 3 || this.review.length > 1000)this.error.push('review');
      //name
      if(this.name.length < 3 || this.name.length > 20)this.error.push('name');
    }
  },
};
</script>

<template>
  <!-- Invio Recensione -->
  <div class="cont-message">
    <h3 class="text-uppercase">Lascia Una Recensione</h3>
    <form @submit.prevent="newReview">
      <div class="input-group">
        <input
          type="text"
          class="form-control mail-style"
          :class="{'border-danger' : error.includes('name')}"
          placeholder="Nome Cognome"
          v-model="name"
          required
        />
      </div>
      <p v-if="error.includes('name')" class="mt-1 text-danger">il nome deve contenere almeno 3 e massimo 20 caratteri</p>


      <div class="input-group mt-3">
        <input
          type="email"
          class="form-control mail-style"
          :class="{'border-danger' : error.includes('email')}"
          placeholder="Inserisci la tua mail"
          v-model="email"
          required
        />
      </div>
      <p v-if="error.includes('email')" class="mt-1 text-danger">non è un email valida</p>


      <div class="input-group mt-3">
        <textarea
          class="form-control color-textarea  mb-0"
          :class="{'border-danger' : error.includes('review')}"
          placeholder="Scrivi la tua recensione qui"
          aria-label="With textarea"
          v-model="review"
          required
        ></textarea>
      </div>
      <p v-if="error.includes('review')" class="mt-1 text-danger">la recensione deve contenere almeno 3 e massimo 1000 caratteri</p>

      <div class="cont-button mt-3">
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
