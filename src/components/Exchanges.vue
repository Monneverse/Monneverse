<script setup>
import ComponenteIconos from "./componenteIconos.vue";
</script>

<template>
  <!-- FONDO -->
  <div class="fondo"></div>

  <div class="fondo-oscuro"></div>

  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
 
  <div class="fondoTokenomics">
    <img src="/img/fondo_Tokenomics.png" alt="" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="" srcset="" />
  </div>
  <div id="logo-1" class="logo">
    <img src="/img/logo_Grande.png" alt="" />
  </div>
  <!-- FIN FONDO -->
  <!-- CONTENIDO -->

  <div class="content-major">
    <div class="exchange_text">
      <p>first exchanges after our pre-sale</p>
    </div>

    <div class="contenedor_crypto">
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/bunny-color.svg"
            iconname="pancakeswap"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/Kucoin.svg"
            iconname="kucoin"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/Gatebw.svg"
            iconname="gate.io"
          />
        </div>
      </div>

      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/lbank2.svg"
            iconname="LBANK"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/okxlogo.svg"
            iconname="OKX"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/CoinGecko.svg"
            iconname="COINGECKO"
          />
        </div>
      </div>
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/mexcglobal.svg"
            iconname="MEXC GLOBAL"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/xtcom.svg"
            iconname="XT.COM"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/poloniex.svg"
            iconname="POLONIEX"
          />
        </div>
      </div>
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/hotbit.svg"
            iconname="HOTBIT"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/coinmarket.svg"
            iconname="COINMARKET"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos iconos="/img/Exchanges/ftx.svg" iconname="FTX" />
        </div>
      </div>
      <div class="caja-cryptos">
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/latoken.svg"
            iconname="LATOKEN"
          />
        </div>

        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/bitrue.svg"
            iconname="BITRUE"
          />
        </div>
        <div class="cryptos">
          <ComponenteIconos
            iconos="/img/Exchanges/favicon.svg"
            iconname="FAVICON"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- FIN CONTENIDO -->
</template>

<style scoped>
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
  top: 12%;
}

.circuito-izquierdo {
  left: -5%;
}
.circuito-izquierdo img {
  width: 85%;
  opacity: 50%;
}


@media only screen and (width < 769px) {
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

@media only screen and (width > 769px) {
  .content-major {
    flex-direction: row;
  }
}
.exchange_text {
  width: 100%;
  height: 50%;
  font-size: 3rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (width > 769px) {
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
  font-family: Calibri;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 60%;
  margin-top: 10%;
}
@media only screen and (width > 769px) {
  .exchange_text p {
    font-size: 4.5vw;
    margin-top: 0%;
    width: 70%;
  }
}
.contenedor_crypto {
  margin: 0 auto;
  height: 35%;
  width: 90%;
  display: flex;
  overflow-x: scroll;
}
@media only screen and (width > 769px) {
  .contenedor_crypto {
    position: relative;
    top: 17%;
    left: -3%;
    height: 70%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
.caja-cryptos {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex: none;
  margin-right: 5%;
}

@media only screen and (width > 769px) {
  .caja-cryptos {
    display: flex;
    flex: initial;
    margin-right: 30px;
  }
}
.caja-cryptos:nth-child(5) {
  margin-right: 0%;
}
.cryptos {
  width: 100%;
  height: 30%;
}
@media only screen and (width > 769px) {
  .cryptos {
    width: 33%;
    margin-right: .5%;
  }
}
</style>
