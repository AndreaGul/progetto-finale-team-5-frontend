<script>
export default {
  name: "AppDetailInfoProfessional",
  props: ["address", "phone", "curriculum"],
};
</script>

<template>
  <div class="cont">
    <div class="card-info">
      <div class="info-prof">
        <ul>
          <li class="list-unstyled">
            <h5>{{ address }}</h5>
          </li>
          <li class="list-unstyled">
            <h5 v-if="phone">{{ phone }}</h5>
            <h5 v-else>Numero di telefono non presente</h5>
          </li>
          <li class="list-unstyled">
            <h5>
              <a
                v-if="curriculum"
                :href="'http://127.0.0.1:8000/storage/' + curriculum"
                >Curriculum vitae</a
              >
            </h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-info {
  padding: 20px;
  background-color: aqua;
}
</style>
