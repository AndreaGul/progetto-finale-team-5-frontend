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
    'num_vote',
    'performance',
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
        class="img-info"
        v-if="photo && photo.startsWith('uploads')"
        :src="'http://127.0.0.1:8000/storage/' + photo"
        alt=""
      />
      <img v-else-if="photo" :src="photo" alt="" />
      <img
        v-else
        src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
        alt=""
      />
    </div>
    <div class="d-flex flex-column testo-info">
      <ul class="list-unstyled list-info">
        <li>
          <h3>{{ name + ' ' + surname }}</h3>
        </li>
        <li class="specialization">
          <h5 v-for="specialization in specializations">
            {{ specialization.name }}
          </h5>
        </li>
      </ul>

      <div class="star d-flex flex-column flex-md-row">
        <AppShowStarVote :stelleColorate="vote"></AppShowStarVote>
        <div class="star align-self-md-end info-voti">
          <p v-if="num_vote === 0">(Nessun Voto)</p>
          <p v-else-if="num_vote === 1">(Su un voto)</p>
          <p v-else>(Su {{ num_vote }} voti)</p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="card-details"
    v-if="address || phone || curriculum || performance"
  >
    <ul class="p-0 m-0">
      <li class="list-unstyled" v-if="performance">
        <h5>
          <i class="fa-solid fa-circle-info"></i>
        </h5>
        <h6>{{ performance }}</h6>
      </li>
      <li class="list-unstyled" v-if="address">
        <h4>
          Indirizzo

          <i class="fa-solid fa-location-dot"></i>
        </h4>
        <h6>{{ address }}</h6>
      </li>
      <li class="list-unstyled" v-if="phone">
        <h4>Telefono <i class="fa-solid fa-phone"></i></h4>
        <h6>{{ phone }}</h6>
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

<style scoped lang="scss">
.card-info {
  margin-bottom: 40px;
  h3 {
    font-size: 28px;
    font-weight: 600;
  }
  h5 {
    font-size: 18px;
  }
  ul {
    margin: 0 0 0 60px;
  }
  .specialization {
    margin: 10px 0 20px 0;
  }
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
  background-color: aliceblue;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid #1f798b;
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 18px;
  }
  li {
    padding: 5px 0;
  }
}
.star {
  font-size: 26px;
}
.star p {
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 60px;
}

@media (min-width: 767.98px) {
  .card-info {
    h3 {
      font-size: 32px;
    }
    h5 {
      font-size: 22px;
    }
  }
  .card-details {
    h4 {
      font-size: 26px;
    }
    h5 {
      font-size: 22px;
    }
  }

  .specialization h5 {
    font-size: 18px;
  }

  .star {
    font-size: 30px;
  }

  .star p {
    margin-left: 10px;
  }
}

@media (max-width: 992px) {
  .img-info {
    text-align: center;
    height: 230px;
    width: 230px;
  }
}

@media (max-width: 576px) {
  .card-info {
    flex-direction: column;
  }

  .testo-info {
    margin-top: 30px;
    position: relative;
    right: 30px;
  }

  .star {
    display: flex;
    justify-content: center;
  }

  .list-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .specialization {
    text-align: center;
  }
}
</style>
