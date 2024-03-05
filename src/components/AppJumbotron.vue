<script>
export default {
  name: 'Jumbotron',
};
</script>

<template>
  <div class="bg">
    <div class="container pt-5 pb-2">
      <h1 class="titolo">Cerca il professionista che fa per te</h1>
      <form id="form">
        <div
          class="check-container row p-3 mb-2 d-flex justify-content-between"
        >
          <div class="form-check form-check-inline col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >WebDev 1</label
            >
          </div>
          <div class="form-check form-check-inline col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2"
              >WebDev 2</label
            >
          </div>
          <div class="form-check form-check-inline col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label class="form-check-label" for="inlineCheckbox3"
              >WebDev 3</label
            >
          </div>
          <div class="form-check form-check-inline col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="option4"
            />
            <label class="form-check-label" for="inlineCheckbox4"
              >WebDev 4</label
            >
          </div>
          <div class="form-check form-check-inline col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="option5"
            />
            <label class="form-check-label" for="inlineCheckbox5"
              >WebDev 5</label
            >
          </div>
          <div class="form-check form-check-inline col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="option6"
            />
            <label class="form-check-label" for="inlineCheckbox6"
              >WebDev 6</label
            >
          </div>
        </div>
        <button class="btn">Cerca</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #022b3a;
  color: white;
}

.check-container {
  background-color: #1f7a8c;
  border-radius: 10px;
  font-size: 24px;
}
.titolo {
  font-family: 'Share Tech Mono', monospace;
  font-size: 64px;
  max-width: 900px;
  margin: 100px 0 20px;
}

.btn {
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 20px;
  font-size: 30px;
}
.btn:hover {
  background-color: #bfdbf7;
}
</style>
