<script>
import store from '../../store';
import AppShowStarVote from './AppShowStarVote.vue';

export default {
  name: 'CardProfessional',
  props: [
    'slug',
    'mail',
    'specializations',
    'photo',
    'address',
    'performance',
    'id',
    'vote',
    'sponsorization',
  ],
  components: {
    AppShowStarVote,
  },
  methods: {
    getInfo() {
      this.store.professionalId = this.id;
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- Professionista -->
  <div class="wrapper col-12 col-lg-6 pb-3 card-box">
    <div class="user-card justify-content-start text-center" :class="{ 'card-sponsored': sponsorization[0] }">
      <div class="user-card-img">
        <img v-if="photo && photo.startsWith('uploads')" :src="'http://127.0.0.1:8000/storage/' + photo" alt="" />
        <img v-else-if="photo" :src="photo" alt="" />
        <img v-else
          src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
          alt="" />
      </div>
      <div class="user-card-info d-flex flex-column">
        <div class="flex-grow-1">
        <!-- Informazioni Professionista -->
        <div class="d-flex flex-column flex-md-row info mb-2">
          <h2>{{ slug.split('-').join(' ') }}</h2>
          <div v-if="sponsorization[0]" class="d-flex justify-content-center"><i class="fa-solid fa-crown"></i></div>
          <div class="stars ms-md-5 d-flex justify-content-center justify-content-md-start">
            <AppShowStarVote :stelleColorate="vote"></AppShowStarVote>
          </div>
        </div>

        <p><span>Specializzazioni:</span>
        <ul>
          <li v-for="specialization in specializations">
            - {{ specialization.name }}
          </li>
        </ul>
        </p>

        <p><span>Email:</span>{{ mail }}</p>
        <p><span>Indirizzo:</span> {{ address }}</p>
        <!-- Fine Informazioni Professionista -->

      </div>
      <div class="mb-3">

        <!-- Dettaglio Professionista -->
        <router-link :to="{name: 'ProfessionalDetail', params: { slug: slug }}" @click="getInfo" class="text-decoration-none btn btn-detail">Dettaglio</router-link>
        <!-- Fine Dettaglio Professionista -->
        </div>
      </div>
    </div>
  </div>
  <!-- Fine Professionista -->
</template>

<style lang="scss" scoped>
.fa-crown{
  color: #f1b622;
  font-size: 25px;
}
.card-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3%;

  .card-sponsored {
    border: #1f798b 1px solid;
  }
}

.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 650px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 20px -5px rgba(0, 0, 0, 0.5);

  &:before {
    content: '';
    position: absolute;
    background: #1f798b;
    top: -60px;
    left: -125px;
    z-index: 0;
    width: 300%;
    height: 200px;
    transform: rotate(0);
  }

  .user-card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    & img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .user-card-info {
    z-index: 3;
    height: 100%;

    h2 {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 3px;
      text-align: center;
      font-size: 30px;
    }

    p {
      font-size: 14px;
      margin-bottom: 15px;

      span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        margin-right: 10px;
      }
    }

    ul {
      padding-inline-start: 0;
      list-style: none;
    }
  }

  .btn-detail {
    background-color: #1f798b;
    color: white;
  }
}

@media only screen and (min-width: 768px) {

  .user-card {
    flex-direction: row;
    align-items: flex-start;
    height: 420px;

    &:before {
      transform: rotate(17deg);
      height: 300%;
      width: 173px;
    }

    .user-card-img {
      margin-bottom: 0;
      margin-left: -15px;
      margin-right: 30px;
      width: 35%;
    }

    .user-card-info {
      text-align: left;
      margin-top: 15px;
      flex-grow: 1;

      h2 {
        text-align: left;
        font-size: 24px;
      }
    }
  }
}

@media only screen and (min-width: 992px) {

.user-card {

  height: 520px;

  &:before {
  left: -170px;
    width: 145px;
  }

  .user-card-img {
    margin-left: 0;
  }
}
//   .user-card-info {
//     text-align: left;
//     margin-top: 15px;
//     flex-grow: 1;

//     h2 {
//       text-align: left;
//       font-size: 24px;
//     }
//   }
// }



}

@media only screen and (min-width: 1200px) {

.user-card {

  height: 470px;

  &:before {
  left: -140px;
    width: 170px;
  }

  .user-card-img {
    margin-left: 15px;
  }
}
//   .user-card-info {
//     text-align: left;
//     margin-top: 15px;
//     flex-grow: 1;

//     h2 {
//       text-align: left;
//       font-size: 24px;
//     }
//   }
// }
}

@media only screen and (min-width: 1400px) {

.user-card {

  height: 420px;

  &:before {
  left: -140px;
    width: 170px;
  }

  .user-card-img {
    margin-left: -30px;
  }
}
//   .user-card-info {
//     text-align: left;
//     margin-top: 15px;
//     flex-grow: 1;

//     h2 {
//       text-align: left;
//       font-size: 24px;
//     }
//   }
// }
}
</style>
