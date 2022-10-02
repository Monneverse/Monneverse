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
      src="/video/video_binario.mp4"
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
    <img src="img/red.png" alt="" />
  </div>

  <!--CIRCULOS-->
  <div class="circulo">
    <img src="../assets/circulo.svg" alt="" />
  </div>

  <div class="rectangulo-medio">
    <img src="../assets/rectangulo-medio.svg" alt="" />
  </div>
  <div class="rectangulo">
    <img src="../assets/rectangulo-verde.svg" alt="" />
    <p>UPCOMING ALLIANCES</p>
  </div>

  <div class="circulo-medio">
    <img src="../assets/circulo-medio.svg" alt="" />
  </div>

  <div class="alianzas">
    <a href="#"
      ><span><img src="/img/Alianzas/reddit.png" /></span>REDDIT</a
    >
    <!-- <font-awesome-icon icon="fa-brands fa-reddit" /> -->

    <a href="#"
      ><span><img src="/img/Alianzas/telegram.png" /></span>TELEGRAM</a
    >
    <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->

    <a href="#"
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
  <div class="imagenes">
    <img src="../assets/methodBuy/visa.svg" alt="" />
    <img src="../assets/methodBuy/masterCard.svg" alt="" />
  </div>

  <div
    :class="{
      puntero: true,
      'animacion-aparecer': index_pagina == 2,
    }"
  >
    <img src="img/puntero.svg" alt="" />
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

.filtro-superior {
  position: absolute;
  z-index: 1;
  background: radial-gradient(
    circle at center,
    #f9f9fa 0%,
    #c8ced4 50%,
    #a8aaaf 100%
  );
  mix-blend-mode: multiply;
}

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

.circulo img {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 22%;
  left: 10%;
  z-index: 5;
}

.circulo-medio img {
  width: 70%;
  height: 72%;
  position: absolute;
  top: 27%;
  left: 15%;
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
}

.alianzas a {
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
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

.semi_circulo img {
  position: absolute;
  z-index: 14;
  width: 100%;
  height: 85%;
  padding: 0;
  margin: 0;
  top: 15%;
  left: 0%;
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
  width: 75%;
  height: 35%;
  position: absolute;
  top: 58%;
  left: 12%;
  z-index: 8;
}
.rectangulo p{

  top: 76%;
  left: 35.5%;
  position: absolute;
  z-index: 15;
  color: #ffffff;
  font-family: 'Work Sans', sans-serif;
  font-size: 2.6vw;
  font-weight: 400;

}


.rectangulo-medio img {
  width: 70%;
  height: 43%;
  position: absolute;
  top: 43%;
  left: 15%;
  z-index: 11;
}

.imagenes {
  position: absolute;
  top: 55%;
  left: 36%;

  z-index: 23;
  width: 28%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  
}

.imagenes img {
  width: 12vw;
}
.imagenes img:last-child {
  width: 9.5vw;
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
}

.degradado {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 3;
  animation-duration: 3s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: 0%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 50%;
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
