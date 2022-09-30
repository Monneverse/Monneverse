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
        <div :class="{ benefits: true, 'animacion-aparecer': index_pagina == 10 }">
          <Benefit
            titulo="MonnerSwap"
            texto=""
            segundoTitulo=""
            segundoTexto="One of the main assets of our MonnerWallet is MonnerSwap. MonnerSwap is an integrated function that allows every user to exchange its currency for the most popular tokens in the market"
            mostrarBtn="false"
            
            />
            <Benefit
            titulo="MonnerTrading"
            texto=""
            segundoTitulo=""
            segundoTexto="Will dispose from the best tools for the most advanced traders of Monnercoin, so they can operate with the biggest currency pairs, cryptocurrencies"
            mostrarBtn="false"
            />
            <Benefit
            titulo="MonnerGames"
            texto=""
            segundoTitulo=""
            segundoTexto="Will soon be our AR Gambling site, generating profits for our liquidity. Every player will choose their favorite game (e.g Monner Poker, MonnerBlackJack) and compete with other users in lively bets."
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
    justify-content: space-evenly
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
  @keyframes desplazamiento{
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
    top: 32%;
    left: 43%;
    transform: rotate(135deg);
  }
  .animacion-rotar {
    animation-duration: .5s;
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
  