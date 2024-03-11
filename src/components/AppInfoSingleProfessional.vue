<script>
import AppShowStarVote from './AppShowStarVote.vue';
export default {
  name: 'AppInfoSingleProfessional',
  props: [
    'name',
    'surname',
    'specializations',
    'photo',
    'address',
    'phone',
    'curriculum',
    'vote',
  ],
  components: {
    AppShowStarVote,
  },
};
</script>

<template>
  <div class="card-info d-flex align-items-center">
    <div class="cont-img">
      <img
        v-if="photo && photo.startsWith('uploads')"
        :src="'http://127.0.0.1:8000/storage/' + photo"
        alt=""
      />
      <img v-else-if="photo" :src="photo" alt="" />
      <img
        v-else
        src="https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg"
        alt=""
      />
    </div>
    <div class="d-flex flex-column">
      <ul class="list-unstyled">
        <li>
          <h3>{{ name + ' ' + surname }}</h3>
        </li>
        <li class="specialization">
          <h5 v-for="specialization in specializations">
            {{ specialization.name }}
          </h5>
        </li>
      </ul>

      <AppShowStarVote :stelleColorate="vote"></AppShowStarVote>
    </div>
  </div>
  <div class="card-details">
    <ul class="p-0 m-0">
      <li class="list-unstyled">
        <h4>Indirizzo</h4>
        <h5>{{ address }}</h5>
      </li>
      <li class="list-unstyled" v-if="phone">
        <!-- <h4>Telefono</h4> -->

        <h4>Telefono</h4>
        <h5>{{ phone }}</h5>
      </li>

      <li class="list-unstyled" v-if="curriculum">
        <h6>
          <a :href="'http://127.0.0.1:8000/storage/' + curriculum"
            >Curriculum vitae</a
          >
        </h6>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card-info {
  margin-bottom: 40px;
}

.card-info h3 {
  font-size: 28px;
  font-weight: 600;
}

.card-info h5 {
  font-size: 18px;
}

.card-info ul {
  margin: 0 0 0 60px;
}

.card-info .specialization {
  margin: 10px 0 20px 0;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}

.cont-img {
  min-width: 200px;
  width: 200px;
}

.card-details {
  background-color: #e1e5f2;
  padding: 25px;
  border-radius: 10px;
}

.card-details h4 {
  font-size: 22px;
}
.card-details h5 {
  font-size: 18px;
}

.card-details li {
  padding: 5px 0;
}

@media (min-width: 767.98px) {
  .card-info h3 {
    font-size: 32px;
  }

  .card-info h5 {
    font-size: 22px;
  }
  .card-details h4 {
    font-size: 26px;
  }
  .card-details h5 {
    font-size: 22px;
  }
}
</style>
