<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header>
    <div
      class="container d-flex flex-row justify-content-between align-items-center p-3"
    >
      <h2 class="mb-0">
        <router-link :to="{ name: 'home' }"> HOME </router-link>
      </h2>

      <div class="dropdown dropdown-small">
        <button
          class="btn hamburger"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="dropdown-menu list-unstyled m-0">
          <li>
            <a
              class="dropdown-item text-decoration-none text-black"
              href="http://127.0.0.1:8000/login"
              >Login</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-decoration-none text-black"
              href="http://127.0.0.1:8000/register"
              >Registrati</a
            >
          </li>
        </ul>
      </div>

      <div class="nav-links">
        <ul class="d-flex gap-3 list-unstyled m-0">
          <li>
            <a
              class="text-decoration-none text-black"
              href="http://127.0.0.1:8000/login"
              >Login</a
            >
          </li>
          <li>
            <a
              class="text-decoration-none text-black"
              href="http://127.0.0.1:8000/register"
              >Registrati</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #022b3aff;
}
h2 a {
  font-size: 40;
  font-weight: bold;
  text-decoration: none;
  color: #022b3a;
}

a {
  font-size: 20;
  font-weight: 500;
}

.hamburger {
  font-size: 25px;
}

.nav-links {
  display: none;
}

@media (min-width: 767.98px) {
  .dropdown-small {
    display: none;
  }

  .nav-links {
    display: block;
  }
}
</style>
