<script>
export default {
  name: 'Footer',
};
</script>

<template>
  <!-- Footer -->
  <footer>
    <h2>BoolTechs</h2>
    <span>Team 5</span>
  </footer>
  <!-- Footer -->
</template>

<style scoped lang="scss">
footer {
  padding: 10px;
  background: rgb(1, 42, 58);
  background: linear-gradient(
    90deg,
    rgba(1, 42, 58, 1) 0%,
    rgba(31, 121, 176, 1) 100%
  );
  text-align: center;
  h2 {
    color: white;
  }
  span {
    color: rgb(255, 255, 255);
  }
}
</style>
