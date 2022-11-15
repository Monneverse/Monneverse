<script>
import Benefit from "./ComponenteBenefit.vue";

export default {
  components: {
    Benefit,
  },
  props: ["enterAnimation", "exitAnimation", "isRevert","SetBloquearScroll"],
  data() {
    return {
      listBenefits: [
        {
          titulo: "MONNER STAKING",
          texto: "We do this to reward holders who stay with us after the day of our official launch to the public, one day after we finish our 3-phase pre-sale and token offering. 2000 MNR will be sold in total, during the phases. ",
          textoOculto: "We really feel very proud of the system that we have and that we have studied for many years to benefit our first investors, to be able to raise the price and maintain it over time. The dividends of each holder who maintains his Monner will be 186% in the first 2 months. There will be 30 payments of 6.2% Every 48 hours. We will make a list that will be published on our official page at the end of the presale. • This white list will bring the wallets that have invested in pre-sale and that will receive payments of 6.2% average day.  \n\nNOTE: Staking is only for those who want it. We will have award and release rules to protect the integrity of our price.",
          imagen: "img/Proyectos/staking.png"
        },
        {
          titulo: "MONNERPLANET",
          texto: "Our mission with MonnerPlanet is to provide a solution for humanity with our renewable energy that our company offers, making American homes and industries 100% autonomous and ecological.",
          textoOculto: "Our first goal with MonnerPlanet is to implement our energy system over 5000 homes through all american territory. \n Until this day, we have 2377 solar panels working and with a guaranteed lifespan for the next 20 years. "
            + "\nWe also have vendors closing sales in Panama, Brazil, Hawaii, Colombia and Venezuela. MonnerPlanet will be a reference on solar energy and will spread through all the world"
            + "\nWe want to offer available equipment for everyone. Our panels have the highest quality (20 years lifespan) and the lowest prices in market.",
          imagen: "img/Proyectos/Monner planet.png"
        },
        {
          titulo: "MONNER MINNERSOLAR",
          texto: "MonnerMinner is one of the most innovative projects we have on our list.",
          textoOculto: "We will create solar-powered industrial mining camps backed by the US government under our registered company Monnerverse LLC."
            + "Our purpose is to create environmentally friendly mining farms that meet government requirements.",
          imagen: "img/Proyectos/monner miner solar.png"
        },
        {
          titulo: "ABOUT MONNERCARD",
          texto: "MonnerCard will be the card associated with Visa and Mastercard that will work hand in hand with the MonnerWallet platform which will allow Monner (MNR) to be exchanged for any currency in the world,",
          textoOculto: "especially for US dollars (USD) so that our users can withdraw money in cash at any ATM in the world that is associated with Visa and Mastercard and can also pay any type of bill in their daily lives. MonnerCard will work in any establishment that accepts Mastercard and Visa cards, such as airports, hospitals, supermarkets, shopping centers, among others.",
          imagen: "img/Proyectos/ABOUT MONNERCARD.png"
        },
        {
          titulo: "BANK SECURITY",
          texto: "Our price would be protected by Bank Security, a bank that will guarantee price stability of the Monnerverse and to protect the safety of all our investors. BANK SECURITY offers us an anti-whale system",
          textoOculto: "an Anti-Rug Pulls system and a massive sales protection system so that our price is stable and maintained over time. This immediately guarantees under a signed document that the Monnerverse price will NEVER reach its pre-sale price",
          imagen: "img/Proyectos/bank security.png"
        },
        {
          titulo: "MONNER HOSTING",
          texto: "Monner will also securely guarantee future token/cryptocurrency buying/selling and coin creation as a business, all thanks to Monner hosting. How? One of our projects is to develop Monner host,",
          textoOculto: "a platform where anyone in the world can create their token or cryptocurrency quickly and much cheaper than other creator companies. Users will be able to enlist them in Monner Swap along with other highly recognized tokens. Monner coin will be the native currency of all our applications. It should be noted that each person who wishes to work and create their coin with Monner host must undergo a series of audits to ensure the safety of future investors of the coins to be created. None of the coins made on Monner host and listed on Monner Swap will be scams",
          imagen: "img/Proyectos/MONNER HOSTING.png"
        },
        {
          titulo: "MONNER WALLET",
          texto: "We have under our control MonnerWallet, a platform designed with the greatest style and security of the moment, associated with MonnerCard to exchange MNR for USD.",
          textoOculto: "Our goal is to become one of the most recognized Wallets, with the ability to exchange any Cryptocurrency for your local currency and be able to use them with MonnerCard. We will offer our users a Blockchain network with the lowest commission costs and execution system. faster transactions. MonnerWallet will work solely to offer our holders a wallet with low fees, high security and highly recognized and audited new token exchanges. Remember that MonnerWallet will have MonnerSwap and MonnerTrading under its ecosystem so that each of the users can exchange their Monners for any other currency, this will reduce the supply of Monner which will make its price more stable and increase over",
          imagen: "img/Proyectos/MONNERWALLET.png"
        },
        {
          titulo: "MONNER SWAP",
          texto: "Within our project with great potential, we have a MonnerSwap platform within MonnerWallet where each person can exchange their tokens for any currency on the market,",
          textoOculto: "the good thing about this is that Monnerverse will work with highly recognized currencies and newly created tokens with verified and reliable projects with future growth. This will cause our supply to be constantly burned and the coins in circulation will be less and less, increasing in value and stability over time. The design and interface of MonnerSwap will be easy to use, thinking so that anyone can make transactions with us.",
          imagen: "img/Proyectos/MONNERSWAP.png"
        },
        {
          titulo: "MONNER TRADING",
          texto: "MonnerTrading will have highperformance tools, high-quality indicators and charts, which will allow our professional Monnercoin traders to trade the world's largest currency pairs, cryptocurrencies and stocks and indices.",
          textoOculto: "We want to innovate in every way and make the cryptographic world something totally accessible to anyone who is starting out in stock market investments. The platforms will be easy to use but with a premium quality design. That is why we created MonnerTrading, a high-performance, triple-A quality platform that will be audited by CertiK. NOTE: All transactions will be made with Monnercoin, which will reduce our supply every day and all Monner Trading profits will be immediately sent to our liquidity.",
          imagen: "img/Proyectos/MONNER TRADING.png"
        },
        {
          titulo: "MONNER GAME/METAVERSE",
          texto: "With Monnerverse we will try to cover all areas and be the best in each one of them, ",
          textoOculto: "that is why we have one of the best games in Cryptocurrency under development. With the best developers and with the highest investment capital, Monnerverse is financed traders of the Stock Exchange of New York that want to make this currency one of the most powerful and stable in the world. We will create a betting site where every person of the metaverse can go and place bets online through our augmented reality games such as: • Poker Monner"
            + "• Black jack Monner"
            + "• Enter others in development. Remember that the earnings of each of our mentioned projects will automatically be converted into liquidity."
            + "At Monnerverse our main priority is to be innovative in all fields that have to do with Cryptocurrencies and since the Metaverse is linked to them in some way, we have decided to create our own world of augmented reality working hand in hand with MonnerGame. We will also have a room where anyone can meet with friends or strangers and play games of chance, bet and share while at the same time we are using Monner as the main currency and reducing its supply with the constant burning of all our projects. Our game and virtual reality room are being developed by the best engineers of the moment. Investing in our metaverse is the most important and we are giving it the highest priority.",
          imagen: "img/Proyectos/staking.png"
        },
      ]

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
      <div v-for="benefit in listBenefits" class="cards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Benefit :titulo="benefit.titulo" :texto="benefit.texto" :textoOculto="benefit.textoOculto"
          :imagen="benefit.imagen" :SetBloquearScroll="SetBloquearScroll" />
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
  padding: 1rem;
  z-index: 8;
  width: 95%;
  height: 82%;
  top: 12%;
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
