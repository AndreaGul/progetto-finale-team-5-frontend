<script>
export default {
  name: "SectionSubscribe",
};
</script>

<template>
  <section id="subscribe" class="d-flex align-items-center">
    <div class="container d-flex">
      <div class="col-12 col-md-6">
        <img
          src="https://images.business.com/app/uploads/2019/05/05125608/20-best-careers-for-technology-geeks.png"
          alt="img-sezione-"
        />
      </div>
      <div class="col-12 col-md-6 ms-3">
        <h2>
          Sei un professionista nel mondo tech? Registrati al sito per insegnare
          le tue competenze!
        </h2>
        <ul>
          <li>
            Raggiungi gli studenti che cercano uno specialista nella tua zona
          </li>
          <li>
            Consenti di inviarti messaggi per prenotare una lezione con te
          </li>
          <li>
            Controlla le recensioni e i voti per perfezionare le tue abilità
            nell'insegnamento
          </li>
        </ul>
        <a href="http://127.0.0.1:8000/register" class="btn outline"
          >REGISTRATI &rarr;</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#subscribe {
  height: 550px;

  .container {
    padding: 50px;
    background-color: #bfdbf7;
    border-radius: 5px;

    img {
      width: 100%;
    }

    .btn {
      border: none;
      padding: 12px 24px;
      border-radius: 24px;
      font-size: 12px;
      font-size: 0.8rem;
      letter-spacing: 2px;
      cursor: pointer;
    }

    .btn + .btn {
      margin-left: 10px;
    }

    ul > li {
      margin-bottom: 5px;
    }

    .outline {
      background: transparent;
      color: #1f798b;
      border: 1px solid #1f798b;
      transition: all 0.3s ease;
    }

    .outline:hover {
      transform: scale(1.125);
      color: rgba(255, 255, 255, 0.9);
      border-color: rgba(255, 255, 255, 0.9);
      transition: all 0.3s ease;
    }
  }
}

@media (max-width: 768px) {
  #subscribe {
    height: 700px;

    .container {
      flex-direction: column;
    }
  }
}
</style>
