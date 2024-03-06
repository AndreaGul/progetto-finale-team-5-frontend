<script>
export default {
  name: 'CardProfessional',
};
</script>

<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-4">
        <div class="card py-3">
          <div
            class="cont-card d-flex justify-content-center align-items-center"
          >
            <div class="cont-img">
              <img
                src="https://fastly.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0"
                alt=""
              />
            </div>

            <ul class="cont-ul">
              <li class="list-unstyled"><h3>Nome</h3></li>
              <li class="list-unstyled">
                <h5>Specializazzione</h5>
              </li>
              <li class="list-unstyled">
                <a class="text-decoration-none color-a" href="">Link Pagina</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 15px;
  background-color: #e1e4f1;
  border-color: #012a3a;
}

.cont-card {
  color: #1f798b;
}

.color-a {
  color: #1f798b;
}

.cont-img {
  width: 100px;
  height: 100px;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.cont-ul {
  display: flex;
  flex-direction: column;
}
</style>
