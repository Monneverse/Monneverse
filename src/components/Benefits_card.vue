<script setup>
import Benefit from "./ComponenteBenefit.vue";
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
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>

    <!-- <div class="titulo">
      <h1>BENEFITS</h1>
    </div>
-->
    <div class="contenedor-benefits">
      <div
        :class="{ benefits: true, 'animacion-aparecer': index_pagina == 10 }"
      >
        <Benefit
          titulo="Bank Segurity"
          texto=""
          segundoTitulo=""
          segundoTexto="A bank that will shield the stability of our prices and supports the financial security of our holders, protects our system"
          mostrarBtn="false"
        />
        <Benefit
          titulo="MonnerHosting and MonnerBlockchain"
          texto=""
          segundoTitulo=""
          segundoTexto="Open a window of possibilities for all those creators who wish to design their"
          mostrarBtn="false"
        />
        <Benefit
          titulo="The universe in the pocket of your Wallet!"
          texto=""
          segundoTitulo=""
          segundoTexto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          mostrarBtn="false"
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

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}
.contenedor-benefits {
  width: 100%;
  height: 100%;
}
.benefits {
  position: relative;
  margin: 0 auto;
  z-index: 8;
  width: 70%;
  height: 90%;
  top: 25%;
  display: flex;
  justify-content: space-evenly;
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
.fondo {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #121026;
}
.animacion-desplazamiento {
  animation-duration: 0.5s;
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

.animacion-rotar {
  animation-duration: 0.5s;
  animation-name: rotar;
  animation-iteration-count: 1;
}
@keyframes rotar {
  0% {
    transform: rotate(225deg);
  }

  100% {
    transform: rotate(135deg);
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
</style>
