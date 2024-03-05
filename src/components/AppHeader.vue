<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header>
    <div class="cont d-flex flex-row justify-content-between p-3">
      <h2>HOME</h2>

      <ul class="d-flex gap-3 list-unstyled">
        <li>
          <a
            class="text-decoration-none text-black"
            href="http://127.0.0.1:8001/login"
            >Login</a
          >
        </li>
        <li>
          <a
            class="text-decoration-none text-black"
            href="http://127.0.0.1:8001/register"
            >Registrati</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
