<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer>
    <div class="footer-up">
      <div class="container d-flex justify-content-between">
        <div class="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">Servizi</a></li>
            <li><a href="#">Contatti</a></li>
          </ul>
        </div>
        <div>img logo</div>
        <div class="footer-social">
          <ul>
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
      <div class="container">BoolTechs. Designed by Team 5</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-up {
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
</style>
