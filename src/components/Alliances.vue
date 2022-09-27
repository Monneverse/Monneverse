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
  <div
    :class="{
      circulo: true,
      'animacion-aparecer': index_pagina == 2,
    }"
  >
    <div
      :class="{
        'circulo-medio': true,
        'animacion-aparecer': index_pagina == 2,
      }"
    >
      <div class="alianzas">
        <a href="#"
          ><Span><img src="/img/Alianzas/reddit.png" /></Span>REDDIT</a
        >
        <!-- <font-awesome-icon icon="fa-brands fa-reddit" /> -->

        <a href="#"
          ><SPan><img src="/img/Alianzas/telegram.png" /></SPan>TELEGRAM</a
        >
        <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->

        <a href="#"
          ><span><img src="/img/Alianzas/discord.png" /></span>DISCORD</a
        >
        <!-- <font-awesome-icon icon="fa-brands fa-discord" /> -->
      </div>
    </div>
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
      rectangulo: true,
      'animacion-aparecer': index_pagina == 2,
    }"
  >
    <p>UPCOMING ALLIANCES</p>
  </div>
  <!-- VISA MASTERD CARD -->
  <div
    :class="{
      'rectangulo-medio': true,
      'animacion-aparecer': index_pagina == 2,
    }"
  >
    <div class="mensaje">
      <p>Join our community and get our</p>
      <p>latest news</p>
    </div>
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
  z-index:12;
}
.animacion-logo {
  animation-name: animar-logo;
  animation-duration: 1s;
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
    z-index:12;
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
  animation-duration: 1s;
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

.circulo {
  width: 40%;
  height: 80%;
  margin: 0 auto;
  background-color: rgb(238, 236, 234, 0.4);
  position: absolute;
  border-radius: 100%;
  top: 22%;
  left: 30%;
  z-index: 5;
}

.circulo-medio {
  width: 89%;
  height: 90%;
  margin: 0 auto;
  border-radius: 100%;
  background-color: rgba(248, 248, 247, 0.4);
  position: relative;
  bottom: -7%;
}

.alianzas {
  margin: 0;
  position: relative;
  top: 20%;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
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
  z-index: 7;
  width: 100%;
  height: 85%;
  padding: 0;
  margin: 0;
  top: 15%;
  left: 0%;
}
.animacion-arco img {
  animation-name: animacion-arco;
  animation-duration: 1s;
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

.rectangulo {
  width: 50%;
  height: 35%;
  position: absolute;
  top: 60%;
  left: 25%;
  background: rgb(8, 7, 32);
  background: linear-gradient(
    90deg,
    rgba(8, 7, 32, 1) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  border-radius: 2.5rem;
  text-align: center;
  z-index: 5;
}

.rectangulo p {
  font-weight: 700;
  position: relative;
  top: 50%;
  color: rgb(255, 255, 255);
  font-size: 2vw;
  font-weight: 100;
  font-family: "Work Sans", sans-serif;
}

.rectangulo-medio {
  width: 44%;
  height: 20%;
  background-color: white;
  position: absolute;
  top: 56%;
  left: 28%;
  border-radius: 1.5rem;
  -webkit-box-shadow: -1px 4px 72px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 72px -8px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 4px 72px -8px rgba(0, 0, 0, 0.75);
  z-index: 6;
}

.mensaje {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.mensaje p {
  font-size: 2.3vw;
  font-weight: 300;
  font-family: "Work Sans", sans-serif;
}

.puntero {
  position: absolute;
  z-index: 7;
  width: 20%;
  height: 40%;
  padding: 0;
  margin: 0;
  top: 82%;
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
  animation-duration: 1s;
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
