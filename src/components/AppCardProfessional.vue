<script>
export default {
  name: 'CardProfessional',
  props : ['slug', 'specializations', 'photo'],
};

</script>

<template>
  <div class="col-12 col-md-6 col-lg-4 py-2">
        <div class="card py-3">
          <div
            class="cont-card d-flex justify-content-center align-items-center"
          >
            <div class="cont-img">
              <img
                :src="photo"
                alt=""
              />
            </div>
            <ul class="cont-ul">
              <li class="list-unstyled"><h3>{{slug.split('-').join(' ')}}</h3></li>
              <li class="list-unstyled">
                <h5 v-for="specialization in specializations">{{specialization.name}}</h5>
              </li>
              <li class="list-unstyled">
                <a class="text-decoration-none color-a" href="">Link Pagina</a>
              </li>
            </ul>
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
