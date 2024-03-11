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
  <div class="container p-3">
    <!--  -->
    <h1>I migliori professionisti</h1>

    <div class="container-all-card d-flex gap-3">
      <div class="card">
        <div class="container-card">
          <img src="" alt="foto" />
          <p class="card-title">Nome</p>
          <p class="card-description">Specializzazioni</p>
        </div>
      </div>

      <div class="card">
        <div class="container-card">
          <img src="" alt="foto" />
          <p class="card-title">Nome</p>
          <p class="card-description">Specializzazioni</p>
        </div>
      </div>

      <div class="card">
        <div class="container-card">
          <img src="" alt="foto" />
          <p class="card-title">Nome</p>
          <p class="card-description">Specializzazioni</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 550px;
  border: 0;
  width: 100%;
  margin-inline: auto;
}

.container-card {
  padding: 0.875em 2em;

  background: linear-gradient(90deg, #346b7a, transparent) #080509;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.4s;
  place-content: center;
  border-radius: 30px;
}
.container-card:hover,
.container-card:focus {
  background-color: #1b3741;
  color: #fff;
}

.card-title {
  font-weight: 600;
  color: white;
  letter-spacing: -0.02em;
  line-height: 40px;
  font-style: normal;
  font-size: 28px;
  padding-bottom: 8px;
}

.card-description {
  font-weight: 600;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 16px;
  max-width: 470px;
}

/*
@media only screen and (min-width: 768px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
  }
  .user-card-img {
    margin-bottom: 0;
    margin-right: 50px;
  }

  .user-card-info {
    text-align: left;
    margin-top: 15px;
  }

  .user-card:before {
    transform: rotate(17deg);
    height: 300%;
    width: 173px;
  }

  .user-card-info h2 {
    font-size: 24px;
  }
} */

/* @media (max-width: 767px) {
   .wrapper {
    padding-top: 3%;
  }
   .user-card:before {
    width: 300%;
    height: 200px;
    transform: rotate(0);
  }
   .user-card-info h2 {
    margin-top: 25px;
    font-size: 35px;
  }
   .user-card-info p span {
    display: block;
    margin-bottom: 15px;
    font-size: 18px;
  }
} */
</style>
