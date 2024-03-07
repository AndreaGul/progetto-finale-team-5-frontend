<script>
export default {
  name: 'AppReviews',
  props: ['reviews'],
};
</script>

<template>
  <div class="container">
    <div class="card-reviews">
      <h1>Recensioni</h1>
      <div class="info-reviews">
        <p v-for="review in reviews">{{ review.review }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-reviews {
  overflow: auto;
  padding: 20px;
  background-color: #1f7a8c;
  height: 400px;
}
.star {
  font-size: 30px;
}

.star:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
}
</style>
