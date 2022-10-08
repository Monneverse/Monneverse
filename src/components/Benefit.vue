<script setup>
import Benefit_5 from "./ComponenteBenefit.vue";
import Circulos from "./ComponentesCirculo.vue";
defineProps({
  index_pagina: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div :class="{
      fondo_rayos: true,
      'animacion-desplazamiento': index_pagina == 9,
    }">
      <img src="/img/rayos.png" alt="" />
    </div>
    <div class="rectangulo">
      <img src="/img/rectangulo.svg" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>
    <div class="reflector reflector-izquierdo">
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>
    <div class="reflector reflector-derecho">
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>

    <div class="titulo">
      <h1>BENEFITS</h1>
    </div>

    <div :class="{
      benefits: true,
      aparecer: index_pagina == 9,
    }">

      <div class="contenedor">
        <p>

          Our staking platform is safe and reliable. We offer you a system that works by phases, backed up by Bank
          Security, where the Monnercoin will be your entry-ticket to a much-wider world! We want Monner to become one
          of the main 25 cryptocurrencies in the world! To do that, we rely on a limited and privileged supply of
          10.000.000 Monnercoin and scheduled burns what are you waiting for? A universe full of opportunities is
          expecting you to unravel it!

        </p>


      </div>

    </div>

    <div class="logo-redes">
      <div class="icon icon-telegram">
        <a href="https://t.me/monnerversecommunity" target="_blank">
          <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
        </a>
      </div>
      <div class="icon icon-reddit">
        <a href="https://www.reddit.com/user/monnerverse" target="_blank">
          <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
        </a>
      </div>
      <div class="icon icon-discord">
        <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
          <img src="../assets/discord.svg" alt="logo discord" srcset="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

.display_flex {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}

.titulo {
  position: absolute;
  width: 100%;
  top: 20%;

  display: flex;
  justify-content: center;
}

.titulo h1 {
  font-size: 4vw;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}

.benefits {
  position: relative;
  z-index: 8;
  width: 100%;
  height: 60%;
  top: 35%;
  display: flex;
  justify-content: center;
}

.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  background-color: rgba(32, 29, 64, 0.2);
  margin: 0 auto;
  border-radius: 1vw;
}

.contenedor p {

  font-size: 2vw;
  font-family: Calibri;
  width: 90%;
  text-align: center;
  color: white;

}

.aparecer {
  animation-duration: 0.5s;
  animation-name: arriba;
  animation-iteration-count: 1;
}

@keyframes arriba {
  0% {
    top: 65%;
    opacity: 10%;
  }

  100% {
    top: 35%;
    opacity: 100%;
  }
}

.fondo {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #121026;
}

.fondo_rayos {
  position: absolute;

  left: -10%;
  width: 100%;
  height: 100%;
}

.animacion-desplazamiento {
  animation-duration: 0.5s;
  animation-name: desplazamiento;
  animation-iteration-count: 1;
}

@keyframes desplazamiento {
  0% {
    left: -5%;
  }

  100% {
    left: -10%;
  }
}

.rectangulo {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: -15%;
  width: 100%;
}

.rectangulo img {
  width: 20%;
  min-height: 15%;
}

.logo-redes {
  position: absolute;
  bottom: 0%;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon img {
  width: 3.5vw;
  height: auto;
  margin-left: 1rem;
}

.reflector {
  position: absolute;
  top: 60%;
  bottom: 0%;
  left: 10%;
  width: 40%;
  height: 90%;
  z-index: 1;

  animation-duration: 6s;
  animation-name: reflector;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes reflector {
  0% {
    opacity: 10%;
  }

  50% {
    opacity: 30%;
  }

  100% {
    opacity: 50%;
  }
}

.reflector-derecho {
  z-index: 0;
  left: 50%;
}

.reflector-izquierdo {
  z-index: 0;
}

.luz-1 {
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  bottom: -30%;
  transform: rotate(-30deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.5) 0%,
      transparent 47%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
  left: 30%;
}

.luz-2 {
  position: absolute;
  width: 30%;
  height: 140%;
  border-radius: 50%;
  bottom: -30%;
  left: 40%;
  transform: rotate(0deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 47%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
}

.luz-3 {
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  bottom: -30%;
  left: 55%;
  transform: rotate(-150deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 47%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
}
</style>
