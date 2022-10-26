<script setup>
import Benefits from "./TemplateBenefits.vue";
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
    <div
      :class="{ fondo_rayos: true, 'animacion-aparecer': index_pagina == 9 }"
    >
      <img src="/img/rayos.png" alt="" />
    </div>
    <div class="fondo-benefit">
      <img src="/img/fondo-benefit.png" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>

    <div :class="{ titulo: true, 'animacion-aparecer': index_pagina == 9 }">
      <h1>BENEFITS</h1>
    </div>

    <div
      :class="{ display_flex: true, 'animacion-aparecer': index_pagina == 9 }"
    >
      <div class="benefits">
        <Benefits />
      </div>
    </div>

    <div class="circulos">
      <img src="/img/Imagen1.png" />

      <img src="/img/Imagen1.png" />
    </div>
    <div
      :class="{
        'logo-redes': true,
        'animacion-dezplazamiento': index_pagina == 9,
      }"
    >
      <div class="icon icon-telegram">
        <a href="https://t.me/monnerversecommunity" target="_blank">
          <img
            src="../assets/Telegram_logo.svg"
            alt="logo telegram"
            srcset=""
          />
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
  display: none;
}
.titulo {
  position: absolute;
  top: 5rem;
  left: 3rem;
}
.titulo h1 {
  font-size: 3rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  color: white;
}

.benefits {
  position: absolute;
  z-index: 14;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  height: 60%;
  top: 10rem;
  left: 5%;
}

.fondo {
  position: absolute;
  top: 0;
  z-index: -1233;
  width: 100%;
  height: 100%;
  background-color: #121026;
}
.fondo_rayos {
  position: absolute;
  left: -50%;
  width: 100%;
  height: 100%;
  z-index: -23;
  background-size: no-repeat center center fixed;
}
 
.fondo_rayos img {
  height: 100%;
}
.fondo-benefit {
  background-size: no-repeat center center fixed;
  z-index: 5;
}
.fondo-benefit > img {
  height: 100vh;
}
@media screen and (min-width: 769px) {
  .fondo_rayos {
    z-index: -2;
    left: 0%;
  }
  .fondo-benefit > img {
    width: 100%;
    height: 115vh;
  }
  .fondo_rayos img {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .benefits {
    flex: none;
    top: 25%;
    left: 13%;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 2%;
    grid-row-gap: 0px;
    grid-template-areas:
      "a b"
      "c d"
      "e f";
  }
  .titulo {
    top: 10rem;
    left: 18%;
  }
  .titulo h1 {
    font-size: 4.5vw;
  }
  .fondo_rayos {
    display: initial;
  }
  .circuito {
    display: block;
  }
  .circulos {
    display: flex;
  }
}
.animacion-rotar {
  animation-duration: 0.5s;
  animation-name: rotar;
  animation-iteration-count: 1;
}
@keyframes rotar {
  0% {
    transform: rotate(180grad);
  }

  100% {
    transform: rotate(225deg);
  }
}
.logo-redes {
  position: absolute;
  bottom: 0%;
  left: 3rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
  display: none;
}
@media screen and (width > 768px) {
  .logo-redes {
    display: flex;
  }
}

.icon img {
  width: 3.5vw;
  height: auto;
  margin-left: 1rem;
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
.animacion-dezplazamiento {
  animation-name: dezplazamiento;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
@keyframes dezplazamiento {
  0% {
    left: 0.2rem;
  }

  100% {
    left: 3rem;
  }
}
.circulos {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30rem;
  left: 51.5rem;

  width: 45%;
  height: 45%;
  z-index: -1;
}
.circulos img {
  margin: 0 auto;
  width: 60%;
  height: 60%;
  z-index: 5;
}
.circulos img:nth-child(2) {
  position: relative;
  top: -30%;
  width: 70%;
  height: 60%;
  z-index: 5;
}
</style>
