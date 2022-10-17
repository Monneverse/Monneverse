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

    <div
      :class="{
        benefits: true,
        'animacion-desplazamiento': index_pagina == 10,
      }"
    >
      <div class="cards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit
          titulo="Bank Segurity"
          texto="A bank that will shield the stability of our prices and supports the financial security of our holders, protects our system"
          textOculto="Between the many protections
measures Bank Security offers to
us, we can find a reliable anti-
whale system, anti-Rug Pulls
mechanisms, purchase values that
don't exceed 10% and a massive-
selling ban. Monnerverse prices
will NEVER decrease to their pre-
sale version.Out first goal is to
reach at least a 998 USD price in
three months. Phase Two:
MonnerHosting, MonnerTrading
and MonnerBlockChain, as so
many other add-ons to the
MonnerMetaverse will be
developed.
"
        />
      </div>
      <div class="cards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit
          titulo="MonnerHosting and MonnerBlockchain"
          texto="Open a window of possibilities for all those creators who wish to design their"
          textOculto="own token from scratch and sell it worldwide with fees never seen before. Our goal is to create a safe environment on which every token fulfills a series of standards of qualification such as the KYC Verification, residential addres and back-up liquidity. this way we can protect you from any scam. MonnerBlockchain will handle the lowest fees of the hest market beside one of the best times of execution. this will bring more liquidity, stability and exponential growing"
        />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit
          titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
        />
      </div>
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
.benefits {
  position: relative;
  margin: 0 auto;
  z-index: 8;
  width: 70%;
  height: 70%;
  top: 15%;
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  column-gap: 20%;
  color: #fff;
}

.cards {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  -webkit-box-shadow: 2px 4px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 39px -1px rgba(0, 0, 0, 0.75);
  border-radius: 1em;
  flex: none;
}

.cards span {
  display: none;
  transition: 0.5s;
  opacity: 0%;
  box-shadow: inset 0 0 5px whitesmoke, inset 0px 0 6px rgb(8, 212, 83),
    inset 10px 0 20px rgb(1, 255, 81), inset 10px 0 0px rgb(5, 12, 28),
    inset 10px 0 20px rgb(0, 243, 40), 0 0 50px rgb(254, 254, 254),
    -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(4, 224, 40);
}

.cards:hover span {
  opacity: 1;
}

@media screen and (min-width: 769px) {
  .cards span {
    display: block;
  }
  .cards:hover {
    transform: translateY(-3%);

    transition: 0.5s ease-out;
  }
  .cards span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 5px;
    animation: animacion1 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animacion1 {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .cards span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    animation: animacion2 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animacion2 {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  .cards span:nth-child(3) {
    position: absolute;

    top: 99%;
    left: 0;

    width: 120%;
    height: 5px;
    animation: animacion3 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animacion3 {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  .cards span:nth-child(4) {
    position: absolute;

    top: 0%;
    left: 99%;

    width: 5px;
    height: 100%;
    animation: animacion4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animacion4 {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(100%);
    }
  }
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

@media screen and (min-width: 769px) {
  .benefits {
    column-gap: 0;
    overflow-x: initial;
    scroll-snap-type: none;
  }
  .cards {
    position: relative;
    width: 30%;
    height: 100%;
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
    top: 100%;
  }

  100% {
    top: 20%;
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
