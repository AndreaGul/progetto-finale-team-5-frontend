<script>
export default {
  name: 'Header',
};
</script>

<template>
  <!-- Header -->
  <header>
    <div
      class="container d-flex flex-row justify-content-between align-items-center p-3"
    >
      <h2 class="mb-0">
        <router-link :to="{ name: 'home' }"> HOME </router-link>
      </h2>
      
      <a href="http://127.0.0.1:8000/admin/info" class="link-unstyled"><i class="fa-solid fa-user"></i></a>
    </div>
  </header>
  <!-- Header -->
</template>

<style scoped lang="scss">
header {
  border-bottom: 1px solid #022b3aff;
  a {
    list-style: none;
    text-decoration: none;
    color: #022b3a;
    i {
      font-size: 25px;
    }
  }
  h2 {
  font-size: 40;
  font-weight: bold;
  color: #022b3a;
  }
}
</style>
