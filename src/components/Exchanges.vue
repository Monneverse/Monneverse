<script>
import ComponenteIconos from "./componenteIconos.vue";
export default {
  components: {
    ComponenteIconos,
  },
  props: ["enterAnimation", "exitAnimation", "isRevert"],
  methods: {
    next() {
      let panel = document.getElementById("contenidoExchange");
      let count = parseInt(
        (panel.scrollLeft + panel.offsetWidth + 5) / panel.offsetWidth
      );
      panel.scrollLeft = panel.clientWidth * count;
    },
    before() {
      let panel = document.getElementById("contenidoExchange");
      let count = parseInt(
        (panel.scrollLeft - panel.offsetWidth - 5) / panel.offsetWidth
      );

      if (
        count !=
        (panel.scrollLeft - panel.offsetWidth - 5) / panel.offsetWidth
      ) {
        count++;
      }
      panel.scrollLeft = panel.offsetWidth * count;
    },
  },
};
</script>

<template>
  <!-- FONDO -->
  <div class="fondo"></div>

  <div class="fondo-oscuro"></div>

  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain" srcset="" />
  </div>

  <div class="fondoTokenomics">
    <img src="/img/fondo_Tokenomics.png" alt="Background-monner" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="Background-cell" srcset="" />
  </div>
  <div id="logo-1" class="logo">
    <img src="/img/logo.svg" alt="logo" />
  </div>
  <!-- FIN FONDO -->
  <!-- CONTENIDO -->
  <div class="arrow" @click="next()"></div>
  <div class="arrow2" @click="before()"></div>
  <div class="content-major">
    <div
      :class="{
        exchange_text: true,
        animated: true,
        duration1s: true,
        zoomInLeft: this.enterAnimation,
        zoomOutLeft: this.exitAnimation,
      }"
    >
      <p>first exchanges after our pre-sale</p>
    </div>

    <div
      id="contenidoExchange"
      :class="{
        contenedor_crypto: true,
        contenedor_crypto_animation: this.enterAnimation && !this.isRevert,
        contenedor_crypto_animation_revert: this.exitAnimation && this.isRevert,
        contenedor_crypto_animation_salida:
          this.exitAnimation && !this.isRevert,
        contenedor_crypto_animation_salida_revert:
          this.enterAnimation && this.isRevert,
      }"
    >
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/bunny-color.svg"
            iconname="pancakeswap"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/Kucoin.svg"
            iconname="kucoin"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/Gatebw.svg"
            iconname="gate.io"
          />
        </div>
      </div>

      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/lbank2.svg"
            iconname="LBANK"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/okxlogo.svg"
            iconname="OKX"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/CoinGecko.svg"
            iconname="COINGECKO"
          />
        </div>
      </div>
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/mexcglobal.svg"
            iconname="MEXC GLOBAL"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/xtcom.svg"
            iconname="XT.COM"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/poloniex.svg"
            iconname="POLONIEX"
          />
        </div>
      </div>
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/hotbit.svg"
            iconname="HOTBIT"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/coinmarket.svg"
            iconname="COINMARKET"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/ftx.svg"
            iconname="FTX"
          />
        </div>
      </div>
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/latoken.svg"
            iconname="LATOKEN"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/bitrue.svg"
            iconname="BITRUE"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            :class="{
              animated: true,
              duration1s: true,
              zoomInLeft: this.enterAnimation,
              zoomOutLeft: this.exitAnimation,
            }"
            iconos="/img/Exchanges/favicon.svg"
            iconname="FAVICON"
          />
        </div>
      </div>
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

  <!-- FIN CONTENIDO -->
</template>

<style scoped>
@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT9.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Arial";
  src: url("/Fonts/arial.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Montserrat";
  src: url("/Fonts/Montserrat-Regular.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

img {
  width: 100%;
  height: 100%;
}

.animated.duration1s {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

/* FONDO */
.fondo {
  position: absolute;
  background-color: #040709;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
}

.fondoTokenomics {
  position: absolute;
  top: -8.3%;
  width: 100%;
  height: 120%;
  z-index: 1;
  opacity: 60%;
}

.circuito {
  position: absolute;
  z-index: 4;
  height: 10%;
  width: 50%;
  height: 100%;
  top: 12%;
}

.circuito-izquierdo {
  left: -5%;
}

.circuito-izquierdo img {
  width: 100%;
  opacity: 50%;
}

@media only screen and (max-width: 900px) {
  img {
    width: 100%;
    height: 100%;
  }

  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    opacity: 30%;
    z-index: 3;
  }

  .fondo-oscuro {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%
    );
    z-index: 1;
  }

  .fondo-mundial {
    position: absolute;
    bottom: -5em;
    left: -14em;
    width: 200%;
    height: 35em;
    z-index: 3;
    opacity: 80%;
  }

  .fondo-montana {
    position: absolute;
    width: 200%;
    height: 100%;
    z-index: 3;
    opacity: 20%;
  }

  .fondo-montana img {
    background-size: no-repeat center center fixed;
  }

  .fondo-oscuro {
    position: absolute;
    top: 0;
    left: 0em;
    width: 300%;
    height: 200%;
    background-size: no-repeat center center fixed;
    background: radial-gradient(
      circle at center,
      #48d0ab 10%,
      #097561 30%,
      #0f161c 100%
    );
    z-index: 1;
    opacity: 100%;
  }

  .fondoTokenomics {
    position: fixed;
    top: 20%;
    width: 300%;
    height: 60%;
    visibility: hidden;
  }

  .degradado {
    background: linear-gradient(to right, #090380 55%, transparent);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 38%;
    opacity: 90%;
  }

  .degradado_izquierdo {
    transform: rotate(-60deg);
    right: 55%;
    visibility: hidden;
  }

  .degradado_derecho {
    transform: rotate(230deg);
    left: 40%;
  }

  #logo-1 {
    width: 63%;
    max-height: 14%;
    position: fixed;
    bottom: 20%;
    left: -7%;
    z-index: 3;
    opacity: 70%;
  }
}

/* CONTENIDO */

.content-major {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-device-width: 900px) {
  .content-major {
    flex-direction: row;
  }
}

.exchange_text {
  width: 100%;
  height: 50%;
  font-size: 2.9rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-device-width: 900px) {
  .exchange_text {
    width: 40%;
    height: 100%;
  }
}

.exchange_text p {
  background: linear-gradient(
    to right,
    #8753c1 0%,
    #6f6cbe 10%,
    #38a6b7 40%,
    #5884bb 60%,
    #11334e 100%
  );
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 60%;
  margin-top: 10%;
  font-size: 2rem;
}

.exchange_text_animation {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: exchange_text_animation;
  -webkit-animation-name: exchange_text_animation;
  animation-direction: normal;
  -webkit-animation-direction: normal;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.exchange_text_animation_reverse {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: exchange_text_animation_reverse;
  -webkit-animation-name: exchange_text_animation_reverse;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes exchange_text_animation {
  0% {
    position: relative;
    bottom: -50%;
    left: 0%;
  }

  100% {
    position: relative;
    bottom: 0%;
  }
}

.exchange_text_animation_salida {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: exchange_text_animation_salida;
  -webkit-animation-name: exchange_text_animation_salida;
  animation-direction: normal;
  -webkit-animation-direction: normal;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.exchange_text_animation_salida_reverse {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: exchange_text_animation_salida_reverse;
  -webkit-animation-name: exchange_text_animation_salida_reverse;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes exchange_text_animation_salida {
  0% {
    position: relative;
    bottom: 0%;
  }

  100% {
    position: relative;
    bottom: -50%;
  }
}

@media only screen and (min-device-width: 900px) {
  .exchange_text p {
    font-size: 4.5vw;
    margin-top: 0%;
    width: 70%;
  }
}

.contenedor_crypto {
  margin: 0;
  height: 35%;
  width: 70%;
  display: flex;
  overflow-x: scroll;
  animation: contenedor_crypto_animation 2s;
}

.contenedor_crypto_animation {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: contenedor_crypto_animation;
  -webkit-animation-name: contenedor_crypto_animation;
  animation-direction: normal;
  -webkit-animation-direction: normal;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes contenedor_crypto_animation {
  0% {
    position: relative;
    opacity: 0%;
  }

  100% {
    position: relative;
    opacity: 100%;
  }
}

.arrow,
.arrow:before {
  position: absolute;
  left: 50%;
}

.arrow {
  width: 25px;
  height: 25px;
  top: 66%;
  left: 94%;
  margin: -20px 0 0 -20px;
  transform: rotate(-50deg);
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
  border-left: none;
  border-top: none;
  border-right: 4px #ffc000 solid;
  border-bottom: 4px #ffc000 solid;
  z-index: 999;
}

.arrow:before {
  content: "";
  width: 15px;
  height: 15px;
  top: 50%;
  margin: -10px 0 0 -10px;
  border-left: none;
  border-top: none;
  border-right: 2px #ffc000 solid;
  border-bottom: 2px #ffc000 solid;
  animation-duration: 2s;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-name: arrow;
  -webkit-animation-name: arrow;
}

@keyframes arrow {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-10px, -10px);
    -webkit-transform: translate(-10px, -10px);
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
  top: 66%;
  left: 9%;
  margin: -20px 0 0 -20px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  border-left: none;
  border-top: none;
  border-right: 4px #ffc000 solid;
  border-bottom: 4px #ffc000 solid;
  z-index: 999;
}

.arrow2:before {
  content: "";
  width: 15px;
  height: 15px;
  top: 50%;
  margin: -10px 0 0 -10px;
  border-left: none;
  border-top: none;
  border-right: 2px #ffc000 solid;
  border-bottom: 2px #ffc000 solid;
  animation-duration: 2s;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-name: arrow2;
  -webkit-animation-name: arrow2;
}

@keyframes arrow2 {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-10px, -10px);
    -webkit-transform: translate(-10px, -10px);
  }
}

@media only screen and (min-device-width: 900px) {
  .contenedor_crypto {
    position: relative;
    top: 17%;
    left: -3%;
    height: 70%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
}

.caja-cryptos {
  margin: 0;
  width: 95%;
  height: 100%;
  flex: none;
  gap: 0rem;
  box-sizing: border-box;
}

@media only screen and (min-device-width: 900px) {
  .caja-cryptos {
    display: flex;
    flex: initial;
    margin-right: 30px;
  }

  .arrow {
    display: none;
  }

  .arrow2 {
    display: none;
  }
}

.cryptos {
  width: 100%;
  height: 30%;
}

@media only screen and (min-device-width: 900px) {
  .cryptos {
    width: 33%;
    margin-right: 0.5%;
  }
}

.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 204;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}

@media screen and (width > 768px) {
  .logo-redes {
    display: flex;
  }
}

@media screen and (max-width: 900px) {
  .logo {
    display: none;
  }

  .contenedor_crypto {
    overflow: hidden;
    overflow-x: scroll;
    overscroll-behavior-x: initial;
    scroll-snap-type: x mandatory;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    width: 90%;
    height: 38%;
  }

  .caja-cryptos {
    gap: 2rem;
    box-sizing: border-box;
    margin-left: 1rem;
    box-sizing: border-box;
  }

  .caja-cryptos .cryptos {
    width: 100%;
    min-width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .contenedor_crypto::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .contenedor_crypto::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgb(33, 32, 85) 0%,
      rgba(1, 209, 88, 1) 100%
    );
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  .contenedor_crypto::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    display: block;
  }

  .logo-redes {
    display: none;
  }
}
</style>
