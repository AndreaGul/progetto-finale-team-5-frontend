<script>
import axios from 'axios';
import store from '../../store';
export default {
  name: 'Mobile',

  data() {
    return {
      store,
      loading: false,
      // specializationId: "",
    };
  },

  methods: {
    getSpecializations() {
      this.loading = true;
      axios
        .get('http://127.0.0.1:8000/api/specializations')
        .then((response) => {
          this.store.specializations = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    selectOption(option, id) {
      const dropdownMenuButton = document.getElementById('dropdownMenuButton');

      dropdownMenuButton.innerHTML = option;
      // this.specializationId = id;
      this.store.specializationsId = id;
      this.store.specializationsName = option;
    },
    search() {
      this.$emit('search');
    },
  },
  created() {
    this.getSpecializations();
  },
};
</script>

<template>
  <body>
    <div class="container-r">
      <div class="wrapper-r">
        <div class="banner-image"></div>
        <h1>Mobile Developement</h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </div>
      <div class="button-wrapper">
        <button class="btn outline">DETTAGLI</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

body {
  /* solid background */
  background: rgb(0, 212, 255);

  /* gradient background*/
  background: linear-gradient(
    45deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(11, 3, 45, 1) 100%
  );

  /* photo background */
  background-image: url(https://www.pixelstalk.net/wp-content/uploads/images6/1920x1200-Futuristic-Wallpaper-HD.jpg);
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container-r {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 38px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.wrapper-r {
  width: 100%;
  height: 100%;
}

.banner-image {
  background-image: url(https://evatronix.com/images/en/offer/product-design/software-development/Evatronix_Mobile_applications_01_1920x1080.jpg);
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
}

h1 {
  font-family: 'Righteous', sans-serif;
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 2.4rem;
}

p {
  color: #fff;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 0.8rem;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-wrapper {
  margin-top: 18px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
}
</style>
