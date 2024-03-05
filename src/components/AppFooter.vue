<script>
export default {
  name: 'Footer',
};
</script>

<template>
  <div class="boxes">
    <div class="container-box"></div>
    <div class="container-box-shop">
      <div class="slot">
        <h2>BoolTechs</h2>
        <ul class="ul-box">
          <li>Team 5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  color: white;
}

li {
  color: rgb(255, 255, 255);
  list-style: none;
}

.boxes {
  padding: 10px;

  background: rgb(1, 42, 58);
  background: linear-gradient(
    90deg,
    rgba(1, 42, 58, 1) 0%,
    rgba(31, 121, 176, 1) 100%
  );

  .container-box {
    display: flex;
    justify-content: space-around;
    gap: 10px;

    .box {
      display: flex;
      flex-direction: column;
      height: 120px;
      width: 1230px;
      background-size: cover;

      .cont-btn {
        display: flex;
        justify-content: end;
      }

      h3 {
        color: rgb(255, 255, 255);
      }

      h1 {
        font-size: 32px;
        color: rgb(45, 45, 45);
        margin: 0;
      }
    }
  }
}

.info-header {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.container-box-shop {
  display: flex;
  justify-content: center;
}
</style>
