<script>
import Benefit from "./ComponenteBenefit.vue";
export default {
  components: {
    Benefit,
  },
  props: ["enterAnimation", "exitAnimation", "isRevert"],
};
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div
      :class="{
        'fondo-benefit': true,
        'animacion-benefit': this.enterAnimation && !this.isRevert,
        'animacion-benefit-revert': this.exitAnimation && this.isRevert,
        'animacion-benefit-up': this.enterAnimation && this.isRevert,
        'animacion-benefit-up-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <img src="/img/fondo-benefit.png" alt="" />
    </div>
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
        animated: true,
        duration1s: true,
        fadeInRight: this.enterAnimation,
        fadeOutRight: this.exitAnimation,
      }"
    >
      <div
        :class="{
          cards: true,
        }"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit
          titulo="MonnerSwap"
          texto="One of the main assets of our MonnerWallet is MonnerSwap. MonnerSwap is an integrated function that allows every user to exchange its currency for the most popular tokens in the market"
          textOculto="using a comfortable and intuitive interface that will bring greater fluidity to their transactions. MonnerSwap is the bridge that will ease the burning of our supplies and decrease the tokens in circulation."
          mostrarBtn="true"
        />
      </div>
      <div
        :class="{
          cards: true,
        }"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit
          titulo="MonnerTrading"
          texto="Will dispose from the best tools for the most advanced traders of Monnercoin, so they can operate with the biggest currency pairs, cryptocurrencies"
          textOculto="holdings, shares and indexes worldwide. With MonnerTrading, we bring the Crypto world within the reach of all enthusiasts who want to join the stock investment business. MonnerTrading holds the best standards, audited by CertiK."
          mostrarBtn="true"
        />
      </div>
      <div
        :class="{
          cards: true,
        }"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit
          titulo="MonnerGames"
          texto="Will soon be our AR Gambling site, generating profits for our liquidity. Every player will choose their favorite game (e.g Monner Poker, MonnerBlackJack) and compete with other users in lively bets."
          ocultar="ocultar"
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
img {
  width: 100%;
  height: 100%;
}
.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}
@media screen and (max-width:769px) {
  .logo {
    display: none;
  }
}
.benefits {
  position: relative;
  margin: 0 auto;
  z-index: 8;
  width: 85%;
  height: 70%;
  top: 15%;
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-y: hidden;
  overflow-x: scroll;
  column-gap: 20%;
  color: #fff;
  border-radius: 1em;
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
  background: linear-gradient(#80f99e 1%, transparent);
  -webkit-box-shadow: 7px 3px 29px 4px rgba(219, 219, 219, 1);
  -moz-box-shadow: 7px 3px 29px 4px rgba(219, 219, 219, 1);
  box-shadow: 7px 3px 29px 4px rgba(219, 219, 219, 1);
}

.cards:hover span {
  opacity: 60%;
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
    height: 3px;
    animation: animacion1 3s linear infinite;
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
    width: 3px;
    height: 100%;
    animation: animacion2 3s linear infinite;
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
    height: 3px;
    animation: animacion3 3s linear infinite;
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

    width: 3px;
    height: 100%;
    animation: animacion4 3s linear infinite;
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
    overflow-y: initial;
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
.fondo-benefit {
  background-size: no-repeat center center fixed;
  z-index: 5;
}
.fondo-benefit img {
  position: absolute;
  top: 0%;
  width: 200%;
  height: 130vh;
}
@media screen and (min-width: 769px) {
  .fondo-benefit > img {
    width: 100%;
    height: 115vh;
  }
}

.animacion-desplazamiento {
  animation-duration: 0.5s;
  animation-name: desplazamiento;
  animation-iteration-count: 1;
}

@keyframes desplazamiento {
  0% {
    left: 100%;
  }

  100% {
    left: 0;
  }
}
.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: auto;
  margin-left: 1rem;
}
@media screen and (max-width:769px) {
  .logo-redes {
    display: none;
  }
}
.animated.duration1s {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.animacion-benefit-up img {
  animation-duration: 0.8s;
  animation-name: arriba;
  animation-iteration-count: 1;
}
.animacion-benefit-up-revert img {
  animation-duration: 0.8s;
  animation-name: arriba;
  animation-direction: reverse;
  animation-iteration-count: 1;
}
@keyframes arriba {
  0% {
    top: -5%;
  }
}
</style>
