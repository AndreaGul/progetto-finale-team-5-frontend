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
      <h2 class="mb-0">HOME</h2>

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
  </header>
</template>

<style scoped>
h2 {
  font-size: 40;
  font-weight: bold;
}

a {
  font-size: 20;
  font-weight: 500;
}
</style>
