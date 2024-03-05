<script>
export default {
  name: 'Jumbotron',
};
</script>

<template>
  <div class="bg">
    <div class="container pb-2">
      <h1 class="titolo mb-5">Cerca il professionista tech che fa per te</h1>
      <form id="form">
        <div class="check-container px-2">
          <div class="row p-3 justify-content-between">
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
        </div>
        <button class="btn mt-3">Cerca</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #022b3a;
  color: white;
  padding: 100px 0;
}

.check-container {
  background-color: #1f7a8c;
  border-radius: 7px;
  font-size: 18px;
}
.titolo {
  font-family: 'Share Tech Mono', monospace;
  font-size: 64px;
  max-width: 900px;
}

.btn {
  background-color: white;
  color: #022b3aff;
  font-weight: bold;
  border-radius: 30px;
  font-size: 24px;
}
.btn:hover {
  background-color: #bfdbf7;
}
</style>
