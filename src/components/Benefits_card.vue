<script>
import Benefit from "./ComponenteBenefit.vue";

export default {
  components: {
    Benefit,
  },
  props: ["enterAnimation", "exitAnimation", "isRevert"],
  data(){
    return {
      
    }
  }
};
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div :class="{
      'fondo-benefit': true,
      'animacion-benefit': this.enterAnimation && !this.isRevert,
      'animacion-benefit-revert': this.exitAnimation && this.isRevert,
      'animacion-benefit-up': this.enterAnimation && this.isRevert,
      'animacion-benefit-up-revert': this.exitAnimation && !this.isRevert,
    }">
      <img src="/img/fondo-benefit.png" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>
    <div :class="{
      benefits: true,
      'animacion-aparecer': this.enterAnimation && !this.isRevert,
      'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
      'animacion-desaparecer': this.enterAnimation && this.isRevert,
      'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
    }">
      <div class="cards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit titulo="Monner Staking"
          texto="We do this to reward holders who stay with us after the day of our official launch to the public, one day after we finish our 3-phase pre-sale and token offering. 2000 MNR will be sold in total, during the phases."
          textoOculto="We really feel very proud of the system that we have and that we have studied for many years to benefit our first investors, to be able to raise the price and maintain it over time. The dividends of each holder who maintains his Monner will be 186% in the first 2 months. There will be 30 payments of 6.2% Every 48 hours. We will make a list that will be published on our official page at the end of the presale. • This white list will bring the wallets that have invested in pre-sale and that will receive payments of 6.2% average day
          NOTE: Staking is only for those who want it. We will have award and release rules to protect the integrity of our price."
          imagen="img/benefits/staking.jpg" />
      </div>
      <div class="cards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit titulo="MonnerPlanet"
          texto="Our mission with MonnerPlanet is to provide a solution for humanity with our renewable energy that our company offers, making American homes and industries 100% autonomous and ecological."
          textoOculto="Our first goal with MonnerPlanet is to implement our energy system over 5000 homes through all american territory.
          Until this day, we have 2377 solar panels working and with a guaranteed lifespan for the next 20 years.
          We also have vendors closing sales in Panama, Brazil, Hawaii, Colombia and Venezuela. MonnerPlanet will be a reference on solar energy and will spread through all the world.
          We want to offer available equipment for everyone. Our panels have the highest quality (20 years lifespan) and the lowest prices in market."
          imagen="img/benefits/monner.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
      <div class="cards">
        <span></span><span></span><span></span><span></span>
        <Benefit titulo="The universe in the pocket of your Wallet!"
          texto="Is our option design exclusively for the Monnerverse; a brand new platform built from the latest "
          textoOculto="safest archetypes of this era. We wish to offer our holders a Blockchain web with the lowest fees in the market, high security and the fastest transaction speed. Through MonnerWallet you’ll have a huge spectrum of exchange choices including the most popular and audited tokens, with the MonnerSwap and MonnerTrading add-ons circling around its environment. Change your Monner for ANY token."
          imagen="img/benefits/visa.png" />
      </div>
     
    </div>
    <div class="logo-redes">
      <div class="icon icon-telegram">
        <a href="https://t.me/MonnerverseCripto" target="_blank">
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

@media screen and (max-width: 769px) {
  .logo {
    display: none;
  }
}

.benefits {
  position: relative;
  margin: 0 auto;
  padding: 1rem ;
  z-index: 8;
  width: 95%;
  height: 80%;
  top: 10%;
  display: flex;
  column-gap: 20%;
  color: #fff;
  gap: 1rem;
  border-radius: 1em;

  overflow: hidden;
  overflow-x: scroll;
  overscroll-behavior-x: initial;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  direction: initial;
  scroll-behavior: smooth;
}

.benefits::-webkit-scrollbar:horizontal {
  height: 10px;
}

.benefits::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg,
      rgb(33, 32, 85) 0%,
      rgba(1, 209, 88, 1) 100%);
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.benefits ::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar {
  display: block;
}

.cards {
  width: 100%;
  height: 100%;
  margin: 0 1rem;
  overflow: hidden;
  -webkit-box-shadow: 2px 4px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 39px -1px rgba(0, 0, 0, 0.75);
  border-radius: 1em;
  flex: none;
  display: flex;
  gap: 1rem;
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

  .cards {
    position: relative;
    width: 30%;
    height: 100%;
    display: flex;
    gap: 1rem;
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
  top: -5%;
  width: 200%;
  height: 130vh;
}

.animacion-benefit img {
  animation-duration: 0.8s;
  animation-name: abajo;
  animation-iteration-count: 1;
}

.animacion-benefit-revert img {
  animation-duration: 0.8s;
  animation-name: abajo;
  animation-direction: reverse;
  animation-iteration-count: 1;
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

@keyframes abajo {
  0% {
    top: -5%;
  }
}

@keyframes arriba {
  0% {
    top: 0%;
  }
}

@media screen and (min-width: 769px) {
  .fondo-benefit>img {
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

@media screen and (max-width: 900px) {
  .logo-redes {
    display: none;
  }
}

.animacion-aparecer {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}

.animacion-aparecer-revert {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

.animacion-desaparecer {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}

.animacion-desaparecer-revert {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-direction: reverse;
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
