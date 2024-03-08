<script>
export default {
  name: 'AppSendMessage',
};
</script>

<template>
  <div class="cont-message">
    <h3 class="text-uppercase">Manda Un Messaggio</h3>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control mail-style"
        placeholder="Inserisci la tua mail"
        aria-label="Username"
      />
    </div>

    <div class="input-group">
      <textarea
        class="form-control color-textarea"
        placeholder="Scrivi il tuo messaggio qui"
        aria-label="With textarea"
      ></textarea>
    </div>

    <div class="cont-button">
      <div class="btn button-send">Invia</div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: 700;
}
.cont-message {
  padding: 20px;
  margin: 20px 0;
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
