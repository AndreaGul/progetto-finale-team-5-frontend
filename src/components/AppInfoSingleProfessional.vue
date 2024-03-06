<script>
export default {
  name: 'AppInfoSingleProfessional',
};
</script>

<template>
  <div class="container d-flex justify-content-between">
    <div class="card-info d-flex justify-content-around">
      <div class="cont-img">
        <img
          src="https://fastly.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0"
          class="img-prof"
          alt="..."
        />
      </div>
      <div class="info-prof d-flex flex-column">
        <ul>
          <li class="list-unstyled"><h3>Nome</h3></li>
          <li class="list-unstyled"><h5>Specializazzione</h5></li>
        </ul>

        <ul class="d-flex">
          <li class="list-unstyled star"><i class="fa-solid fa-star"></i></li>
          <li class="list-unstyled star"><i class="fa-solid fa-star"></i></li>
          <li class="list-unstyled star"><i class="fa-regular fa-star"></i></li>
          <li class="list-unstyled star"><i class="fa-regular fa-star"></i></li>
          <li class="list-unstyled star"><i class="fa-regular fa-star"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-info {
  padding: 20px;
}
.star {
  font-size: 30px;
}

.star:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

.cont-img {
  width: 300px;
  height: 300px;
}
</style>
