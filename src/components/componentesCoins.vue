<script>
export default {
  props: [
    "icono",
    "titulo",
    "sigla",
    "texto",
    "capitalizacion",
    "texto2",
    "logo",
    "precio",
    "caja",
  ],
};
</script>

<template>
  <div class="coin">
    <div class="icono">
      <img :src="icono" alt="" />
    </div>

    <div class="container-titulo">
      <h2 class="titulo">{{ titulo }}</h2>
      <p class="sigla">{{ sigla }}</p>
    </div>
    <div class="container-texto">
      <span>{{ texto }}</span>
    </div>
    <div class="container-capi">
      <h1 class="capitalizacion">{{ capitalizacion }}</h1>
    </div>
    <div class="container-text2">
      <p class="texto2">{{ texto2 }}</p>
      <div class="triangulo">
        <img src="/img/coins/triangulo.png" alt="" />
      </div>
    </div>

    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="container-precio">
      <div class="caja">
        <img :src="caja" alt="" />

        <div class="div">
          <h2 class="precio"><b>$</b> {{ precio }}</h2>
          <span>USD</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.coin {
  position: relative;
  top: 10%;
  width: 95%;
  height: 90%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Work Sans", sans-serif;
}

.icono {
  width: 5rem;
  height: 4rem;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icono img {
  width: 100%;
  border-radius: 100%;
  -webkit-box-shadow: 0px 2px 28px 1px rgba(97, 250, 128, 0.5);
  -moz-box-shadow: 0px 2px 28px 1px rgba(97, 250, 128, 0.5);
  box-shadow: 0px 2px 28px 1px rgba(97, 250, 128, 0.5);
}
.container-titulo {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-titulo .titulo {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 500;
  font-size: 2rem;
}

.container-texto span {
  font-size: 1rem;
}
.container-capi {
  width: 100%;
  height: 10%;
}
.container-capi .capitalizacion {
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.3vw;
}
@media only screen and (width > 769px) {
  .container-titulo .titulo {
    font-size: 2vw;
  }

  .container-texto span {
    font-size: 1.2vw;
  }
}

.sigla {
  font-family: "Barlow Semi Condensed", sans-serif;
}
.container-text2 {
  width: 100%;
  height: 15%;
  text-align: center;
}
.container-text2 .texto2 {
  height: 20%;
  text-align: center;
  font-size: 0.8rem;
}
@media screen and (width > 768px) {
  .container-capi .capitalizacion {
    font-size: 2.5vw;
  }
  .container-text2 .texto2 {
    font-size: 1vw;
  }
}
.triangulo {
  display: flex;
  justify-content: center;
}

.triangulo img {
  position: relative;
  top: -5%;
  left: 0;
  width: 20rem;
  height: 50%;
  z-index: -1;
}
@media screen and (width > 768px) {
  .triangulo {
    display: flex;
    justify-content: center;
  }

  .triangulo img {
    position: relative;
    top: -5%;
    left: 0;
    width: 150%;
    height: 50%;
    z-index: -1;
  }
}

.logo {
  position: relative;

  z-index: 75;
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.logo img {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 35px;
}
@media screen and (width > 769px) {
  .logo {
    display: flex;
  }
  .logo img {
    width: 60%;
  }
}
.container-precio {
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.caja img {
  margin: 0 auto;
  width: 15rem;
}
@media screen and (width > 769px) {
  .container-precio {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .caja img {
    width: 100%;
  }
}

.container-precio h2 {
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 3rem;
  font-weight: 600;
}
.container-precio h2 b {
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 3rem;
  font-weight: 600;
}
@media screen and (width > 768px) {
  .container-precio {
    margin-top: 0px;
  }
  .container-precio h2 {
    font-size: 2.4vw;
    font-weight: 600;
  }
  .container-precio h2 b {
    font-size: 2.4vw;
  }
}
.div {
  position: relative;
  top: -45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-precio .div span {
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}
.animacion-desplazamiento {
  animation-duration: 5s;
  animation-name: desplazamiento;
  animation-iteration-count: 1;
}

@keyframes desplazamiento {
  0% {
    position: absolute;
    top: 100%;
  }

  100% {
    left: 0%;
  }
}
</style>
