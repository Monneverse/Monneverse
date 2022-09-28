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
      <img src="img/rayos.png" alt="" />
    </div>
    <div
      :class="{ circuito: true, 'animacion-circuito': index_pagina == 9 }"
      class=""
    >
      <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <div :class="{ rectangulo: true, 'animacion-aparecer': index_pagina == 9 }">
      <img src="img/rectangulo.svg" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>
    <div
      :class="{
        'reflector-izquierdo': true,
        'animacion-dezplazamiento-reflector-izquierdo': index_pagina == 9,
      }"
      class="reflector"
    >
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>
    <div
      :class="{
        'reflector-derecho': true,
        'animacion-dezplazamiento-reflector-derecho': index_pagina == 9,
      }"
      class="reflector"
    >
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
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
      <div class="circulos">
        <Circulos
          icono="/img/Benefits/monnercard.png"
          color="blanco"
          texto="MONNERCARD"
          
        />
        <Circulos
          icono="/img/Benefits/benefits.svg"
          color="verde"
          texto="BENEFITS"
        />
        <Circulos
          icono="/img/Benefits/minnersolar.png"
          color="verde"
          texto="MINNERSOLAR"
        />
        <Circulos
          icono="/img/Benefits/stanking.png"
          color="blanco"
          texto="STAKING"
        />
      </div>
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
}
.titulo {
  position: absolute;
  top: 15%;
  left: 18%;
}
.titulo h1 {
  font-size: 4vw;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}
.benefits {
  position: relative;
  z-index: 14;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 55%;
  height: 70%;
  position: absolute;
  top: 25%;
  left: 15%;
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
}
.circuito {
  position: absolute;
  z-index: 4;
  height: 80%;
  width: 50%;
  min-width: 30rem;
  top: 20%;
  left: 65%;
}
.circuito img {
  transform: rotate(180deg);
  z-index: 12;
  width: 80%;
}

.fondo-oscurecer {
  position: absolute;
  z-index: 4;
  opacity: 60%;
  mix-blend-mode: multiply;
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
.circulos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 50%;
  position: relative;
  z-index: 12;
  top: 35%;
  left: 37%;
  transform: rotate(225deg);
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
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
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
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
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
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
  filter: blur(3rem);
}
.animacion-aparecer {
  animation-duration: .5s;
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
  animation-duration: .5s;
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
  animation-duration: .5s;
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
  animation-duration: .5s;
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
  animation-duration: .5s;
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
