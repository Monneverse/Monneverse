<script setup>
import ComponenteIconos from "./componenteIconos.vue";
</script>

<template>
  <!-- FONDO -->
  <div class="fondo"></div>
  <div class="fondo-oscuro1"></div>
  <div class="fondo-oscuro"></div>
  <div class="fondo-oscuro-superior">
    <img src="/img/fondo-oscuro-superior.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
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
        <ComponenteIconos iconos="/img/Exchanges/okxlogo.svg" iconname="OKX" />
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

    <!--
    <div class="caja-cryptos">
      <div class="crypto">
        <ComponenteIconos iconos="/img/Exchanges/lbank2.svg" iconname="LBank" />
      </div>
      <div class="okx">
        <ComponenteIconos iconos="/img/Exchanges/okxlogo.svg" iconname="okx" />
      </div>
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/CoinGecko.svg "
          iconname="coingecko"
        />
      </div>
    </div>
    <div class="caja-cryptos">
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/mexcglobal.svg"
          iconname="mexc global"
        />
      </div>
      <div class="crypto">
        <ComponenteIconos iconos="/img/Exchanges/xtcom.svg" iconname="xt.com" />
      </div>
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/poloniex.svg"
          iconname="poloniex"
        />
      </div>
    </div>
    <div class="caja-cryptos">
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/hotbit.svg"
          iconname="hotbit"
        />
      </div>
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/coinmarket.svg"
          iconname="coinmarket"
        />
      </div>
      <div class="crypto">
        <ComponenteIconos iconos="/img/Exchanges/ftx.svg" iconname="ftx" />
      </div>
    </div>
    <div class="caja-cryptos">
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/latoken.svg"
          iconname="latoken"
        />
      </div>
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/bitrue.svg"
          iconname="bitrue"
        />
      </div>
      <div class="crypto">
        <ComponenteIconos
          iconos="/img/Exchanges/favicon.svg"
          iconname="favicon"
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
    -->
  </div>

  <!-- FIN CONTENIDO -->
</template>

<style scoped>
/* FONDO */
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121026;
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
  position: fixed;
  z-index: 1;
  height: 80%;
  width: 50%;
  min-width: 30rem;
  top: 11%;
}

.circuito-izquierdo {
  left: -14%;
}

.circuito-derecho {
  right: -10%;
  visibility: hidden;
  transform: scaleY(-1);
}
 


@media only screen and (min-device-width: 275px) and (max-device-width: 667px) {
  img {
    width: 100%;
    height: 100%;
  }

  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #121026;
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

  .circuito-izquierdo {
    left: -70%;
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
.exchange_text {
  display: block;
  position: fixed;
  top: 28%;
  left: 5%;
  height: 20%;
  width: 20%;
  text-align: space-between;
  font-size: 4vw;
  text-transform: uppercase;
  z-index: 1;
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
  z-index: 2;
}

@media only screen and (min-device-width: 275px) and (max-device-width: 667px) {
  .exchange_text {
    top: 12%;
    left: 16%;
    width: 73%;
    height: 10.5%;
    font-size: 12vw;
    z-index: 999;
  }
}

/*ICONOS EXCHANGES*/
.contenedor_crypto {
  width: 58%;
  height: 75%;
  position: absolute;
  top: 20%;
  left: 35%;
  display: grid;
  grid-template-columns: 33% 33% 31%;
  grid-template-rows: 18% 18% 18% 18% 18%;
  gap: 3.5%;
  z-index: 7;
}

.cryptos {
  height: 33%;
}

@media only screen and (min-device-width: 275px) and (max-device-width: 768px) {
  .contenedor_crypto {
    display: flex;
    width: 80%;
    height: 60%;
    left: 10%;
    top: 45%;
    margin: 0 auto;
    overflow-x: scroll;
  }

  .caja-cryptos {
    width: 100%;
    height: 60%;
  }
  .caja-cryptos:nth-child(1) {
    width: 100%;
    height: 60%;
    flex: none;
  }
  .caja-cryptos:nth-child(2) {
    width: 100%;
    height: 60%;
    flex: none;
  }
  .caja-cryptos:nth-child(3) {
    width: 100%;
    height: 60%;
    flex: none;
  }
  .caja-cryptos:nth-child(4) {
    width: 100%;
    height: 60%;
    flex: none;
  }
  .caja-cryptos:nth-child(5) {
    width: 100%;
    height: 60%;
    flex: none;
  }
}

/* FIN ICONOS EXCHANGES */

/* REDES SOCIALES */
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

.icon {
  width: 2rem;
  height: auto;
  z-index: 18;
  margin-left: 1rem;
}

/* FIN REDES SOCIALES */

/* FIN CONTENIDO */
</style>
