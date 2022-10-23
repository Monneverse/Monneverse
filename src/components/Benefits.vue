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
    <div :class="{ fondo_rayos: true, 'animacion-aparecer': index_pagina == 9 }">
      <img src="/img/rayos.png" alt="" />
    </div>
    <div :class="{ circuito: true, 'animacion-circuito': index_pagina == 9 }">
      <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <div :class="{ rectangulo: true, 'animacion-aparecer': index_pagina == 9 }">
      <img src="/img/rectangulo.svg" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>
    <div :class="{
      'reflector-izquierdo': true,
      'animacion-dezplazamiento-reflector-izquierdo': index_pagina == 9,
    }" class="reflector">
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>
    <div :class="{
      'reflector-derecho': true,
      'animacion-dezplazamiento-reflector-derecho': index_pagina == 9,
    }" class="reflector">
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>
    <div :class="{ titulo: true, 'animacion-aparecer': index_pagina == 9 }">
      <h1>BENEFITS</h1>
    </div>

    <div :class="{ display_flex: true, 'animacion-aparecer': index_pagina == 9 }">
      <div class="benefits">
        <Benefits />
        <div :class="{
          monner: true,
          'animacion-logo': index_pagina == 2,
        }">
          <img src="/img/logo.svg" alt="logo monneverse" />
        </div>
      </div>
      <div :class="{
        circulos: true,
        'animacion-rotar': index_pagina == 9,
      }">
        <Circulos icono="/img/Benefits/monnercard.png" color="blanco" texto="MONNERCARD" />
        <Circulos icono="/img/Benefits/benefits.svg" color="verde" texto="BENEFITS" />
        <Circulos icono="/img/Benefits/minnersolar.png" color="verde" texto="MINNERSOLAR" />
        <Circulos icono="/img/Benefits/stanking.png" color="blanco" texto="STAKING" />
      </div>
    </div>
    <div :class="{
      'logo-redes': true,
      'animacion-dezplazamiento': index_pagina == 9,
    }">
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
  display: none;
}

.monner {

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

}

.monner img {


  width: 30%;



}

.titulo {
  position: absolute;
  top: 15%;
  left: 10%;
}

.titulo h1 {
  font-size: 12vw;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: white;
}

@media screen and (min-width: 768px) {
  .titulo h1 {
    font-size: 4vw;
  }
}

.benefits {
  position: relative;
  z-index: 14;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 45%;
  top: 20%;
  left: 5%;
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

  left: -30%;
  width: 100%;
  height: 100%;
  display: none;
}

.circuito {
  position: absolute;
  z-index: 4;
  height: 80%;
  width: 50%;
  min-width: 30rem;
  top: 20%;
  left: 65%;
  display: none;
}

.circuito img {
  position: absolute;
  top: 0;
  transform: rotateX(-180grad);
  z-index: 12;
  width: 80%;

}

.rectangulo {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: -15%;
  width: 100%;
  display: none;
}

.rectangulo img {
  width: 20%;
  min-height: 15%;
}

.circulos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  height: 30%;
  position: relative;
  z-index: 12;
  top: 45%;
  left: 0%;
  transform: rotate(225deg);
  display: none;
}

@media screen and (min-width: 768px) {
  .benefits {
    top: 26%;
    left: 10%;
    width: 55%;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-areas:
      "a b"
      "c d"
      "e f";
  }

  .titulo {
    left: 16%;
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

  .rectangulo {
    display: initial;
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
    display: none;
    animation-duration: 6s;
    animation-name: reflector;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @media screen and (min-width: 768px) {
    .logo-redes {
      display: flex;
    }

    .reflector {
      display: flex;
    }
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
    position: absolute;
    top: 65%;
    bottom: 0%;
    left: 50%;
    width: 40%;
    height: 90%;
  }

  .reflector-izquierdo {
    position: absolute;
    top: 65%;
    bottom: 0%;
    left: 10%;
    width: 40%;
    height: 90%;
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

  .animacion-dezplazamiento-reflector-derecho {
    animation-duration: 0.5s;
    animation-name: dezplazar_reflector_derecho;
    animation-iteration-count: 1;
  }

  @keyframes dezplazar_reflector_derecho {
    0% {
      position: absolute;
      top: 30%;
      left: 40%;
      width: 20%;
      height: 50%;
    }

    100% {
      position: absolute;
      top: 65%;
      bottom: 0%;
      left: 50%;
      width: 40%;
      height: 90%;
    }
  }

  .animacion-dezplazamiento-reflector-izquierdo {
    animation-duration: 0.5s;
    animation-name: dezplazar_reflector_izquierdo;
    animation-iteration-count: 1;
  }

  @keyframes dezplazar_reflector_izquierdo {
    0% {
      position: absolute;
      top: 30%;
      left: 40%;
      width: 20%;
      height: 50%;
    }

    100% {
      position: absolute;
      top: 65%;
      bottom: 0%;
      left: 10%;
      width: 40%;
      height: 90%;
    }
  }

  .animacion-circuito {
    animation-duration: 0.5s;
    animation-name: dezplazar_circuito;
    animation-iteration-count: 1;
  }

  @keyframes dezplazar_circuito {
    0% {
      position: absolute;
      top: 30%;
      left: 80%;
    }

    100% {
      position: absolute;
      top: 20%;
      left: 65%;
    }
  }
</style>
