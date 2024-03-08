<script>
export default {
  name: 'AppReviews',
  props: ['reviews'],
};
</script>

<template>
  <div class="container">
    <div class="card-reviews">
      <h2>Recensioni</h2>
      <div v-if="reviews.length > 0">
        <div class="info-reviews" v-for="review in reviews">
          <p class="nome-recensione">{{ review.name_reviewer }}</p>
          <p class="testo-recensione">{{ review.review }}</p>
        </div>
      </div>
      <div v-else>
        <p>Ancora nessuna recensione.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-reviews {
  overflow-y: auto;
  padding: 20px;
  background-color: #e1e5f2;
  max-height: 65vh;
  margin-bottom: 35px;
  border-radius: 33px;
  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 15px;
  }
  p {
    font-size: 20px;
    font-weight: 550;
  }
  .testo-recensione {
    margin-left: 40px;
  }
}

.info-reviews {
  background-color: white;
  padding: 15px;
  margin-bottom: 17px;
  border-radius: 33px;
}
.star {
  font-size: 30px;
}

.star:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
}
</style>
