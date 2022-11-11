<script>
import coin from "./componentesCoins.vue";
export default {
  components: {
    coin,
  },
  props: ["enterAnimation", "exitAnimation", "isRevert"],
};
</script>

<template>
  <!--FONDO-->
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div
    :class="{
      'fondo-montana': true,
      'fondo-montana-animation': this.enterAnimation && !this.isRevert,
      'fondo-montana-animation-salida': this.enterAnimation && this.isRevert,
      'fondo-montana-animation-revert': this.exitAnimation && this.isRevert,
      'fondo-montana-animation-salida-revert':
        this.exitAnimation && !this.isRevert,
    }"
    class="fondo"
  >
    <img src="/img/fondo-montana.png" />
  </div>
  <div class="fondo fondo-oscurecer"></div>
  <div class="arrow"></div>
  <div class="arrow2"></div>
  <div
    :class="{
      'circuito-izquierdo': true,
      'animacion-desplazamiento': this.enterAnimation && !this.isRevert,
      'animacion-desplazamiento-revert': this.exitAnimation && this.isRevert,
      'animacion-desplazamiento-salida': this.enterAnimation && this.isRevert,
      'animacion-desplazamiento-revert-salida':
        this.exitAnimation && !this.isRevert,
    }"
    class="circuito"
  >
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div
    :class="{
      'circuito-derecho': true,

      'circuitoD-desplazamiento-salida': this.enterAnimation && this.isRevert,
      'circuitoD-desplazamiento-revert-salida':
        this.exitAnimation && !this.isRevert,
    }"
    class="circuito"
  >
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>

  <div class="degradado_azuliz"></div>
  <div class="degradado_azulde"></div>
  <!--FIN FONDO-->
  <div
    :class="{
      contenedor_coins: true,
      'animacion-aparecer': this.enterAnimation && !this.isRevert,
      'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
      'animacion-desaparecer': this.enterAnimation && this.isRevert,
      'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
    }"
  >
    <div class="card_coin">
      <coin
        icono="/img/coins/kucoin.svg"
        titulo="KuCoin token "
        sigla="(KCS)"
        texto="TOP 52 approx capitalization"
        capitalizacion="900 M USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of KuCoin token (KCS) would have a value of"
        logo="/img/logo.svg"
        precio="90.000"
        caja="/img/coins/caja.png"
      />
    </div>
    <div class="card_coin">
      <coin
        icono="/img/coins/axie.svg"
        titulo="Axie Infinity"
        sigla="(AXS)"
        texto="TOP 48 approx capitalization"
        capitalizacion="1.05 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of AXIE INFINITY (AXS) would have a value of"
        logo="/img/logo.svg"
        precio="105.000"
        caja="/img/coins/caja.png"
      />
    </div>
    <div class="card_coin">
      <coin
        icono="/img/coins/decentraland.svg"
        titulo="Decentraland"
        sigla="(MANA)"
        texto="TOP 42 approx capitalization"
        capitalizacion="1.30 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of Decentraland (MANA) would have a value of"
        logo="/img/logo.svg"
        precio="130.000"
        caja="/img/coins/caja.png"
      />
    </div>

    <div class="card_coin">
      <coin
        icono="/img/coins/monero.svg"
        titulo="Monero"
        sigla="(XRM)"
        texto="TOP 28 approx capitalization"
        capitalizacion="2.68 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of  Monero (XRM) would have a value of"
        logo="/img/logo.svg"
        precio="268.000"
        caja="/img/coins/caja.png"
      />
    </div>
    <div class="card_coin">
      <coin
        icono="/img/coins/chain.svg"
        titulo="Chainlink"
        sigla="(LINK)"
        texto="TOP 21 approx capitalization"
        capitalizacion="3.72 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of Chainlink (LINK) would have a value of"
        logo="/img/coins/logo.svg"
        precio="372.000"
        caja="/img/coins/caja.png"
      />
    </div>
  </div>

  <div class="cuadros-derecho">
    <img src="/img/coins/cuadros.svg" alt="" />
  </div>
  <div class="cuadros-izquierdo">
    <img src="/img/coins/cuadros.svg" alt="" />
  </div>
  <div class="monner">
    <h3>MONNER’S TOTAL SUPPLY:</h3>
    <h1>10.000 (MNR)</h1>
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
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100;400;500;600&family=Work+Sans:wght@300;400;500;600;700&display=swap");

img {
  width: 100%;
  height: 100%;
}

/* INICIO ESTILO FONDO */
.fondo {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
  z-index: 1;
}

.filtro-superior {
  z-index: 2;
  background: radial-gradient(
    circle at center,
    #f9f9fa 0%,
    #c8ced4 50%,
    #a8aaaf 100%
  );
  mix-blend-mode: multiply;
}

.fondo-montana {
  z-index: 5;
  position: absolute;
  top: 0;
  background-size: no-repeat center center fixed;
  width: 300%;
  height: 100%;
  z-index: 3;
}

@media screen and (width > 768px) {
  .fondo-montana {
    width: 100%;
    height: 100%;
  }
}

.fondo-oscurecer {
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.degradado_azuliz {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  transform: rotate(-60deg);
  top: -40%;
  z-index: 7;
  right: 50%;
  width: 180%;
  height: 180%;
}

.degradado_azulde {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  transform: rotate(230deg);
  top: -12%;
  left: 50%;
  width: 50%;
  height: 180%;
  z-index: 7;
  display: none;
}

.circuito {
  position: absolute;
  z-index: 8;
  height: 80%;
  width: 40%;
  min-width: 30rem;
  top: 20%;
}

.circuito-izquierdo {
  left: -30%;
}

.circuito-derecho {
  right: -10%;
  display: none;
}

@media screen and (width > 768px) {
  .degradado_azuliz {
    background: linear-gradient(to right, #08047a 0.5%, transparent);
    position: absolute;
    transform: rotate(-60deg);
    top: -12%;
    z-index: 7;
    right: 50%;
    width: 50%;
    height: 180%;
  }

  .degradado_azulde {
    display: block;
  }

  .circuito-izquierdo {
    left: -11%;
    transform: rotateX(180deg);
  }

  .circuito-derecho {
    right: -10%;
    display: block;
  }
}

/* FIN ESTILO FONDO */

.contenedor_coins {
  position: relative;
  margin: 0 auto;
  z-index: 46;
  width: 85%;
  height: 60%;
  top: 10%;
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-y: hidden;
  overflow-x: scroll;
  column-gap: 20%;
  color: #fff;
}

@media screen and (width > 768px) {
  .contenedor_coins {
    position: absolute;
    z-index: 14;
    width: 95%;
    height: 90%;
    left: 2.5%;
    bottom: -2%;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
    align-items: stretch;
    column-gap: 0%;
    overflow-x: hidden;
  }
}

.card_coin {
  width: 100%;
  height: 100%;
  flex: none;
}

@media screen and (width > 769px) {
  .card_coin {
    flex: auto;
  }
}

.cuadros-derecho {
  width: 20%;
  position: absolute;
  top: 80%;
  z-index: 18;
  transform: rotate(600grad);
}

.cuadros-izquierdo {
  width: 20%;
  position: absolute;
  top: 80%;
  right: 0;
  z-index: 18;
}

@media screen and (width > 768px) {
  .cuadros-derecho {
    top: 90%;
  }

  .cuadros-izquierdo {
    top: 90%;
  }
}

.monner {
  position: absolute;
  top: 80%;

  z-index: 456;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
}

.monner h3 {
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
}

.monner h1 {
  color: #ffffff;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 600;
}

@media screen and (width > 768px) {
  .monner {
    position: absolute;
    top: 90%;
  }
}

.animacion-aparecer {
  animation-duration: 0.5s;
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

.animacion-desplazamiento {
  animation-name: dezplazamiento;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.animacion-desplazamiento-revert {
  animation-name: dezplazamiento;
  animation-duration: 0.8s;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

.animacion-desplazamiento-salida {
  animation-name: adelante;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.animacion-desplazamiento-revert-salida {
  animation-name: adelante;
  animation-duration: 0.8s;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

@keyframes dezplazamiento {
  0% {
    left: 1em;
  }
}

@keyframes adelante {
  0% {
    top: 14.5%;
    right: -12.5%;
    width: 52%;
    height: 80%;
  }
}

.circuitoD-desplazamiento-salida {
  animation-name: palante;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

.circuitoD-desplazamiento-revert-salida {
  animation-name: palante;
  animation-duration: 0.8s;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

@keyframes palante {
  0% {
    right: -10%;
    top: 15%;
    right: -13%;
    height: 80%;
    width: 55%;
  }
}

.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 24;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: auto;
  margin-left: 1rem;
}

@media screen and (max-width: 900px) {
  .contenedor_coins {
    overflow: hidden;
    overflow-x: scroll;
    overscroll-behavior-x: initial;
    scroll-snap-type: x mandatory;
  }

  .contenedor_coins::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .contenedor_coins::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgb(33, 32, 85) 0%,
      rgba(1, 209, 5, 1) 100%
    );
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  .contenedor_coins::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    display: block;
  }

  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 25px;
    height: 25px;
    top: 36%;
    left: 94%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(-50deg);
    transform: rotate(-50deg);
    border-left: none;
    border-top: none;
    border-right: 4px #fff solid;
    border-bottom: 4px #fff solid;
    z-index: 999;
  }

  .arrow:before {
    content: "";
    width: 15px;
    height: 15px;
    top: 30%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

  .arrow2,
  .arrow2:before {
    position: absolute;
    left: 50%;
  }

  .arrow2 {
    width: 25px;
    height: 25px;
    top: 36%;
    left: 9%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    border-left: none;
    border-top: none;
    border-right: 4px #fff solid;
    border-bottom: 4px #fff solid;
    z-index: 999;
  }

  .arrow2:before {
    content: "";
    width: 15px;
    height: 15px;
    top: 30%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow2;
  }

  @keyframes arrow2 {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

  .logo-redes {
    display: none;
  }
}

.fondo-montana-animation-salida {
  animation-duration: 0.78s;
  animation-name: salidaMontana;
  animation-iteration-count: 1;
}

.fondo-montana-animation-salida-revert {
  animation-duration: 0.78s;
  animation-name: salidaMontana;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

@keyframes salidaMontana {
  0% {
    top: -45%;
    height: 155%;
  }
}
</style>
