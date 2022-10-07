<script setup>
import Benefit_4 from "./ComponenteBenefit.vue";
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
      :class="{
        fondo_rayos: true,
        'animacion-desplazamiento': index_pagina == 12,
      }"
    >
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

    <div class="display_flex">
      <div :class="{ benefits: true, arriba: index_pagina == 12 }">
        <Benefit_4
          segundoTitulo="MonnerCard"
          segundoTexto="Is supported by VISA and MASTERCARD, and relies on our MonnerWallet, MonnerSwap and MonnerTrading technologies. Holders are free to use their"
          index_pagina="12"
          mostrarBtn="true"
          
          />
      </div>
      <div :class="{ circulos: true, 'animacion-rotar': index_pagina == 12 }">
        <Circulos
          icono="/img/Benefits/monnercard.png"
          color="blanco"
          texto="MONNERCARD"
          rotar="rotar_360"
        />
        <Circulos
          icono="/img/Benefits/benefits.svg"
          color="verde"
          texto="BENEFITS"
          rotar="rotar_360"
        />
        <Circulos
          icono="/img/Benefits/minnersolar.png"
          color="verde"
          texto="MINNERSOLAR"
          rotar="rotar_360"
        />
        <Circulos
          icono="/img/Benefits/stanking.png"
          color="blanco"
          texto="STAKING"
          rotar="rotar_360"
        />
      </div>
    </div>
    <div class="logo-redes">
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

.benefits {
  position: relative;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 30%;
  left: 15%;
}
.arriba {
  animation-duration: .5s;
  animation-name: arriba;
  animation-iteration-count: 1;
}

@keyframes arriba {
  0% {
    top: 65%;
    opacity: 50%;
  }

  100% {
    top: 30%;
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

  left: -5%;
  width: 100%;
  height: 100%;
}
.animacion-desplazamiento {
  animation-duration: .5s;
  animation-name: desplazamiento;
  animation-iteration-count: 1;
}
@keyframes desplazamiento {
  0% {
    left: -10%;
  }

  100% {
    left: -5%;
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
.circulos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 50%;
  position: relative;
  z-index: 12;
  top: 25%;
  left: 35%;
  transform: rotate(-50grad);
}
.animacion-rotar {
  animation-duration: .5s;
  animation-name: rotar;
  animation-iteration-count: 1;
}
@keyframes rotar {
  0% {
    transform: rotate(50grad);
  }

  100% {
    transform: rotate(-50grad);
  }
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
</style>
