<script>
export default {
  name: "AppInfoSingleProfessional",
  props: ["name", "surname", "specializations", "photo"],
};
</script>

<template>
  <div class="container d-flex justify-content-between">
    <div class="card-info d-flex justify-content-around">
      <div class="cont-img">
        <img :src="photo" class="img-prof" alt="..." />
      </div>
      <div class="info-prof d-flex flex-column">
        <ul>
          <li class="list-unstyled">
            <h3>{{ name + " " + surname }}</h3>
          </li>
          <li class="list-unstyled">
            <h5 v-for="specialization in specializations">
              {{ specialization.name }}
            </h5>
          </li>
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
