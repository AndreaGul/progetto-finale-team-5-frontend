<script>
export default {
  name: "CardProfessional",
  props: ["slug", "specializations", "photo", "address", "performance", "id"],
  methods: {
    getInfo() {
      this.$emit("getInfoProfessional", this.id);
    },
  },
};
</script>

<template>
  <div class="wrapper col-12 col-md-6 pb-3">
    <div class="user-card">
      <div class="user-card-img">
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
      <div class="user-card-info">
        <h2>{{ slug.split("-").join(" ") }}</h2>
        <p><span>Email:</span> mail</p>
        <p><span>Indirizzo:</span> {{ address }}</p>
        <ul>
          <span>Specializzazioni:</span>
          <li v-for="specialization in specializations">
            - {{ specialization.name }}
          </li>
        </ul>
        <a
          @click.prevent="getInfo"
          class="text-decoration-none color-a btn btn-detail"
          href="#"
          >Dettaglio</a
        >
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

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.user-card:before {
  content: "";
  position: absolute;
  height: 300%;
  width: 173px;
  background: #1f798b;
  top: -60px;
  left: -125px;
  z-index: 0;
  transform: rotate(17deg);
}

.user-card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.user-card-img img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.user-card-info {
  text-align: center;
}

.user-card-info h2 {
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 3px;
}

.user-card-info p {
  font-size: 14px;
  margin-bottom: 2px;
}

.user-card-info ul {
  padding-inline-start: 0;
  list-style: none;
}
.user-card-info p span,
.user-card-info ul span {
  font-weight: 700;
  margin-right: 10px;
}

.btn-detail {
  background-color: #1f798b;
  color: white;
}
@media only screen and (min-width: 768px) {
  .user-card {
    flex-direction: row;
    align-items: flex-start;
  }
  .user-card-img {
    margin-right: 20px;
    margin-bottom: 0;
  }

  .user-card-info {
    text-align: left;
  }
}

@media (max-width: 767px) {
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
}
</style>
