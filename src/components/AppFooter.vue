<script>
export default {
  name: 'Footer',
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<template>
  <footer>
    <div class="footer-up">
      <div class="container d-flex justify-content-between">
        <div class="footer-links">
          <ul class="info-c">
            <li>
              <router-link to="/" class="" @click="toTop()">Home</router-link>
            </li>
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">Servizi</a></li>
            <li><a href="#">Contatti</a></li>
          </ul>
        </div>
        <div class="logo">
          <img src="/BOOLTECHSLOGO.png" alt="" />
        </div>
        <div class="footer-social">
          <ul class="social-c">
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-down">
      <div class="container">
        <p class="m-0">BoolTechs. Designed by:</p>
        <p>
          Andrea Gulino, Alessandro Tacconi, Filippo Bersan, Matteo Medori,
          Matteo Cicigoi.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.logo img {
  max-height: 60px;
  position: relative;
  right: 40px;
}
.footer-up {
  margin-top: 20px;
  background-color: #022b3a;
  color: #fff;
  padding: 30px;
}

.footer-links ul {
  list-style-type: none;
  padding: 0;
}

.footer-links ul li {
  display: inline;
  margin-right: 20px;
}

.footer-links ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-links ul li a:hover {
  text-decoration: underline;
}

.footer-social ul {
  list-style-type: none;
}

.footer-social ul li {
  display: inline;
  margin-right: 10px;
}

.footer-social ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}

.footer-down {
  background-color: #123c46;
  color: white;
  padding: 15px 0;
}

.social-c {
  display: flex;
  gap: 30px;
}

@media (max-width: 992px) {
  .social-c {
    flex-direction: column;
    gap: 5px;
  }

  .info-c {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    justify-content: center;
  }

  .social-c {
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    position: relative;
    right: 10px;
  }

  .info-c {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    position: relative;
    left: 8px;
  }

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    position: relative;
    left: 35px;
  }
  a {
    font-size: 14px;
  }
}
</style>
