<script setup>
defineProps({
  index_pagina: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div
    :class="{
      logo: true,
      'animacion-logo': index_pagina == 2,
    }"
  >
    <img src="/img/logo.svg" alt="logo monneverse" />
  </div>

  <!--FONDO-->
  <div class="fondo-video">
    <video
      src="/public/video/Multimedia1.mp4"
      autoplay="true"
      muted="true"
      loop="true"
      poster="/img/fondo_binario.png"
    ></video>
  </div>

  <div class="fondo filtro-superior"></div>
  <div
    :class="{
      'fondo-montana': true,
      'fondo-montana-animation': index_pagina == 2,
    }"
    class="fondo"
  >
    <img src="/img/fondo-montana.png" />
  </div>
  <div class="fondo fondo-oscurecer"></div>
  <div
    :class="{
      'fondo-red': true,
      'animacion-aparecer': index_pagina == 2,
    }"
    class="fondo"
  >
    <img src="/img/red.png" alt="" />
  </div>

  <!--CIRCULOS-->
  <div class="circulo">
    <img src="../assets/circulo.svg" alt="" />
  </div>

  <div class="rectangulo-medio">
    <div class="contenido">
    <img src="../assets/rectangulo-medio.svg" alt="" />
    <div class="imagenes">
      <img src="../assets/methodBuy/visa.svg" alt="" />
      <img src="../assets/methodBuy/masterCard.svg" alt="" />
    </div>
  </div>
  </div>
  <div class="rectangulo">
    <img src="../assets/rectangulo-verde.svg" alt="" />
    <p>UPCOMING ALLIANCES</p>
  </div>

  <div class="circulo-medio">
    <img src="../assets/circulo-medio.svg" alt="" />
  </div>

  <div class="alianzas">
    <a href="https://www.reddit.com/user/monnerverse"
      ><span><img src="/img/Alianzas/reddit.png" /></span>REDDIT</a
    >
    <!-- <font-awesome-icon icon="fa-brands fa-reddit" /> -->

    <a href="https://t.me/monnerversecommunity"
      ><span><img src="/img/Alianzas/telegram.png" /></span>TELEGRAM</a
    >
    <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->

    <a href="https://discord.com/invite/h7fRvek9dn"
      ><span><img src="/img/Alianzas/discord.png" /></span>DISCORD</a
    >
    <!-- <font-awesome-icon icon="fa-brands fa-discord" /> -->
  </div>

  <div
    :class="{
      semi_circulo: true,
      'animacion-arco': index_pagina == 2,
    }"
  >
    <img src="../assets/aro-iluminado-brillante.svg" alt="" />
  </div>

  <!--UPCOMING ALLIANCES-->

  <div
    :class="{
      puntero: true,
      'animacion-aparecer': index_pagina == 2,
    }"
  >
    <img src="/img/puntero.svg" alt="" />
  </div>

  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}

.animacion-logo {
  animation-name: animar-logo;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

@keyframes animar-logo {
  0% {
    position: absolute;
    top: 10rem;
    left: 25rem;
    width: 25rem;
    height: 5rem;
    z-index: 1;
    opacity: 10%;
  }

  100% {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 5rem;
    height: 5rem;
    z-index: 12;
    opacity: 100%;
  }
}

.fondo {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.fondo-video {
  width: 100%;
  height: 100%;
}

.fondo-video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 40%;
  z-index: 0;
}

/*
.filtro-superior {
  position: absolute;
  z-index: 1;
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
}
*/
.fondo-montana img {
  position: absolute;
  top: 30%;
  width: 100%;
  height: 75%;
  z-index: 2;
}

.fondo-montana-animation img {
  animation-duration: 0.5s;
  animation-name: fondo-montana-animation;
  animation-iteration-count: 1;
}

@keyframes fondo-montana-animation {
  0% {
    height: 50%;
    top: 50%;
  }

  100% {
    top: 30%;
    width: 100%;
    height: 75%;
  }
}

.fondo-oscurecer {
  position: absolute;
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.fondo-red img {
  position: absolute;
  top: 35%;
  width: 100%;
  height: 75%;
  z-index: 3;
}

@media screen and (max-width: 768px) {
  .fondo-montana {
    display: none;
  }

  .fondo-oscurecer {
    display: none;
  }

  .fondo-red {
    display: none;
  }

  .fondo-video {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .fondo-montana {
    display: none;
  }

  .fondo-oscurecer {
    display: none;
  }

  .fondo-red {
    display: none;
  }

  .fondo-video {
    display: none;
  }
}

.circulo img {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 20%;
  left: 17%;
  z-index: 5;
}

.circulo-medio img {
  width: 60%;
  height: 62%;
  position: absolute;
  top: 25%;
  left: 22%;
  z-index: 7;
}

.alianzas {
  margin: 0;
  position: absolute;
  z-index: 14;
  top: 40%;
  left: 38.5%;
  width: 24%;
  display: flex;
  justify-content: space-between;
  display: none;
}

.alianzas a {
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  font-family: Calibri;
  font-weight: 600;
  font-size: 1.3vw;
}

.alianzas a span {
  padding: 0;
  margin: 0 auto;
  width: 4rem;
  height: 4rem;
  background-color: #ecf3f2;
  border-radius: 100%;
  text-align: center;
  -webkit-box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
  -moz-box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
  box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
}

.alianzas img {
  position: relative;
  top: 10%;
  width: 3rem;
  height: 3rem;
  margin: auto auto;
}

.alianzas a span:hover {
  cursor: pointer;
}

.animacion-arco img {
  animation-name: animacion-arco;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

@keyframes animacion-arco {
  0% {
    top: 70%;
    transform: rotateZ(-180deg);
  }

  100% {
    top: 15.5%;
    transform: rotateZ(0deg);
  }
}

.rectangulo img {
  width: 85%;
  height: 35%;
  position: absolute;
  top: 45%;
  left: 8.5%;
  z-index: 8;
}

.rectangulo p {
  top: 62%;
  left: 27%;
  position: absolute;
  z-index: 15;
  color: #ffffff;
  font-family: Calibri;
  font-size: 5.5vw;
  font-weight: 400;
}
.rectangulo-medio{
  position: absolute;
  top: 50%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 33;

}
.contenido{
  margin: 0 auto;
  width: 95%;
}
.contenido img {
  margin: 0 auto;
  width: 100%;
  height: 43%;
}

.imagenes {
  position: relative;
  top: -26.5vw;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}

.imagenes img {
  width: 25vw;
}

.imagenes img:last-child {
  width: 19.5vw;
}

.puntero {
  position: absolute;
  z-index: 14;
  width: 20%;
  height: 40%;
  padding: 0;
  margin: 0;
  top: 84%;
  left: 40%;
  display: none;
}

.degradado {
  background: linear-gradient(to right, #090380 55%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 4;
  animation-duration: 3s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: 10%;
  opacity: 80%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}

.animacion-aparecer {
  animation-duration: 0.5s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}

@keyframes aparecer {
  0% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
