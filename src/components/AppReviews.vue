<script>
export default {
  name: 'AppReviews',
  props: ['reviews'],
  data(){
    return{
      data: 10,
    }
  },
  methods: {
    dataFormat(dataFormat) {
      dataFormat = new Date(dataFormat);
      return `${dataFormat.getDate()}-${dataFormat.getMonth() + 1}-${dataFormat.getFullYear()}`;
    },
  },
};
</script>

<template>
  <!-- Recensioni -->
  <div class="container">
    <div class="card-reviews">
      <h2>Recensioni</h2>
      <div v-if="reviews.length > 0">
        <div class="info-reviews" v-for="review in reviews.slice().reverse()">
          <p class="nome-recensione">{{ review.name_reviewer }}
 <p class="data-recensione">{{ dataFormat(review.created_at) }}</p>
           </p>

                <div class="message">
          <p class="testo-recensione">{{ review.review }}</p>
                </div>
        </div>
      </div>
      <div v-else>
        <p>Ancora nessuna recensione</p>
      </div>
    </div>
  </div>
  <!-- Fine Recensioni -->
</template>

<style scoped>
.container{
  width: 100%;
}



.card-reviews {
  overflow-y:scroll;
  max-height: 70vh;
  padding: 20px;
  background-color: #e1e5f2;

  margin-bottom: 35px;

  border-radius: 33px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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

  .nome-recensione {
    font-size: 20px;
  }

  .data-recensione {
    font-size: 15px;

    color: rgba(0, 0, 0, 0.204);
  }
  .testo-recensione {
    margin-left: 20px;
    font-size: 16px;
  }

  .message{
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      border-radius: 10px;
      background-color: #e1e5f2;
  }
}

.info-reviews {
  background-color: rgb(249, 247, 247);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 33px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
.star {
  font-size: 30px;
}

.star:hover {
  color: rgb(255, 230, 8);
  cursor: pointer;
}

</style>
