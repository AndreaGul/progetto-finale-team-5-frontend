<script>
export default {
  name: 'AppInfoHomepage',
};
</script>

<template>
  <div
    class="container d-flex flex-column flex-lg-row justify-content-between p-5"
  >
    <div class="left mt-4 mb-4 mb-lg-0">
      <h5 class="mb-3">About Us</h5>
      <h4 class="mb-3">
        Risolvi i tuoi problemi tech con i migliori professionisti!
      </h4>
      <p>
        Connettiti con i nostri professionisti tech qualificati per consulenze
        personalizzate. Trova la soluzione ai tuoi problemi tecnologici senza
        stress, direttamente dalla comodità di casa tua.
      </p>
    </div>
    <div class="right text-center text-lg-start">
      <img
        src="https://as1.ftcdn.net/v2/jpg/03/56/94/64/1000_F_356946487_YyO7nxKV5gWk7PntPvpWVPXPRfiaVbBu.jpg"
        alt=""
        class="img-fluid"
      />
    </div>
  </div>
</template>

<style scoped>
img {
  clip-path: inset(0 25px 0 25px);
  clip-path: ellipse(45% 65% at 45% 45%);
  margin-left: 20px;
}
.left {
  max-width: 100%;
  p {
    font-size: 18px;
  }
  h4 {
    max-width: 70%;
    font-size: 30px;
  }
}

.right {
  max-width: 100%;
}
@media (min-width: 992px) {
  .left {
    max-width: 40%;
    padding-top: 60px;
  }

  .right {
    max-width: 60%;
  }
}
</style>
