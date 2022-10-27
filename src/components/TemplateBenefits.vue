<script setup>
defineProps({
  icono: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  moneda: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  sale_price: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  textoD: {
    type: String,
    required: true,
  },
  textoT: {
    type: String,
    required: true,
  },
  textoA1: {
    type: String,
    required: true,
  },
  textoA2: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="benefit">
    <div class="content-price">
      <div class="titulo">
        <h1 class="inicio">
          <img class="image" :src="icono" alt="" />
          <span class="dolar">{{ symbol }}</span
          >{{ precio }}<b class="moneda">{{ moneda }}</b>
        </h1>
      </div>
      <div class="info">
        <p>{{ info }}</p>
      </div>
    </div>
    <div class="content-text">
      <h4>{{ sale_price }}</h4>
      <p>
        {{ texto }}<b>{{ textoA1 }}</b
        >{{ textoD }}<b>{{ textoA2 }}</b
        >{{ textoT }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.benefit {
  width: 100%;
  height: 25%;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", sans-serif;
}

@media screen and (min-width: 768px) {
  .benefit {
    width: 100%;
    height: 100%;
  }

  .benefit:nth-child(1) {
    height: 110%;
    position: relative;
    margin: 0 auto;
    top: 50%;
    left: 5%;
    width: 28rem;
    grid-area: a;
  }

  .benefit:nth-child(2) {
    height: 100%;
    width: 28rem;
    grid-area: d;
    display: flex;
  }

  .benefit:nth-child(3) {
    height: 110%;
    width: 28rem;
    display: flex;
    grid-area: b;
  }

  .benefit:nth-child(4) {
    height: 100%;
    position: relative;
    margin: 0 auto;
    top: 50%;
    left: 5%;
    width: 28rem;
    grid-area: c;
    display: flex;
  }
  
}

.content-price {
  width: 100%;
  height: 50%;
  background-color: #161431;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
}

.content-price:hover {
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px rgb(6, 38, 58),
    inset -20px 0 80px rgb(7, 64, 25), inset 20px 0 300px rgb(5, 12, 28),
    inset -20px 0 300px rgb(4, 41, 10), 0 0 50px #fff,
    -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(1, 64, 12);
  transition: 0.5s ease-in;
}

.image {
  width: 2rem;
  position: relative;
  left: -13px;
}
.image img {
  width: 100%;
}

.titulo {
  width: 100%;
  height: 80%;
  background-color: #161431;
  border-radius: 1rem;
}

.titulo h1 {
  margin-left: 0%;
  font-weight: 600;
  font-size: 3rem;
}

.info {
  border-radius: 1rem;
  width: 100%;
  height: 25%;
  background-color: #161431;
}
.info p {
  text-align: center;
  margin-left: 10%;
}
.dolar {
  color: rgb(55, 243, 149);
  font-size: 3rem;
}
.moneda {
  font-size: 1.5rem;
}
@media screen and (min-width: 768px) {
  .image {
    margin: 0 auto;
    width: 2.5rem;
    position: relative;
    left: -20px;
  }
  .titulo h1 {
    font-size: 4.5rem;
  }

  .info {
    border-radius: 1rem;
    width: 100%;
    height: 25%;
    background-color: #161431;
  }
  .info p {
    text-align: center;
    margin-left: 10%;
  }
  .dolar {
    color: rgb(55, 243, 149);
    font-size: 4.5rem;
  }
}

.content-text {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.content-text h4 {
  height: 20%;
  margin-top: 1%;
  margin-left: 10%;
  font-size: 0.9rem;
  font-weight: 400;
}

.content-text p {
  width: 90%;
  height: 80%;
  margin-left: 10%;
  font-weight: 300;
  font-size: 0.57rem;
  text-align: justify;
  align-items: left;
}

@media screen and (width > 768px) {
  .content-text h4 {
    font-size: 1.4vw;
    font-weight: 400;
  }

  .content-text p {
    font-weight: 300;
    font-size: 0.8vw;
  }
  .content-text p b {
    color: yellow;
  }

}
</style>
