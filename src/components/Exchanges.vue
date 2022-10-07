<script setup>
import ComponenteIconos from "./componenteIconos.vue";
</script>

<template>
  <div class="fondo"></div>
  <div class="exchange_text">
    <p>first exchanges after our pre-sale</p>
  </div>

  <div class="logo-redes">
    <div class="icon icon-telegram">
      <a href="https://t.me/monnerversecommunity" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="">
      </a>
    </div>
    <div class="icon icon-reddit">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="">
      </a>
    </div>
    <div class="icon icon-discord ">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="">
      </a>
    </div>
  </div>

  <div class="contenedor_moneda">
    <div class="pancake">
      <ComponenteIconos iconos="/img/Exchanges/bunny-color.svg" iconname="pancakeswap" />
    </div>
    <div class="kucoin">
      <ComponenteIconos iconos="/img/Exchanges/Kucoin.svg" iconname="kucoin" />
    </div>
    <div class="gateio">
      <ComponenteIconos iconos="/img/Exchanges/Gatebw.svg" iconname="gate.io" />
    </div>
    <div class="lbank">
      <ComponenteIconos iconos="/img/Exchanges/lbank2.svg" iconname="LBank" />
    </div>
    <div class="okx">
      <ComponenteIconos iconos="/img/Exchanges/okxlogo.svg" iconname="okx" />
    </div>
    <div class="coingecko">
      <ComponenteIconos iconos="/img/Exchanges/CoinGecko.svg " iconname="coingecko" />
    </div>
    <div class="mexcglobal">
      <ComponenteIconos iconos="/img/Exchanges/mexcglobal.svg" iconname="mexc global" />
    </div>
    <div class="xtcom">
      <ComponenteIconos iconos="/img/Exchanges/xtcom.svg" iconname="xt.com" />
    </div>
    <div class="poloniex">
      <ComponenteIconos iconos="/img/Exchanges/poloniex.svg" iconname="poloniex" />
    </div>
    <div class="hotbit">
      <ComponenteIconos iconos="/img/Exchanges/hotbit.svg" iconname="hotbit" />
    </div>
    <div class="coinmarket">
      <ComponenteIconos iconos="/img/Exchanges/coinmarket.svg" iconname="coinmarket" />
    </div>
    <div class="ftx">
      <ComponenteIconos iconos="/img/Exchanges/ftx.svg" iconname="ftx" />
    </div>
    <div class="latoken">
      <ComponenteIconos iconos="/img/Exchanges/latoken.svg" iconname="latoken" />
    </div>
    <div class="bitrue">
      <ComponenteIconos iconos="/img/Exchanges/bitrue.svg" iconname="bitrue" />
    </div>
    <div class="favicon">
      <ComponenteIconos iconos="/img/Exchanges/favicon.svg" iconname="favicon" />
    </div>
  </div>

</template>

<style scoped>
img {
  height: 100%;
  width: 100%;
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121026;
  height: 100%;
  width: 100%;
  display: flex;
}

.exchange_text {
  display: block;
  position: absolute;
  top: 28%;
  left: 5%;
  height: 20%;
  width: 30%;
  text-align: space-between;
  font-size: 4vw;
  text-transform: uppercase;
  z-index: 1;
}

.exchange_text p {
  background: linear-gradient(to right,
      #8753c1 0%,
      #6f6cbe 10%,
      #38a6b7 40%,
      #5884bb 60%,
      #11334e 100%);
  font-family: "Work Sans", sans-serif;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  z-index: 2;
}

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

/*ICONOS EXCHANGES*/
.contenedor_moneda {
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

.contenedor_moneda>div {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.moneda {
  width: 100%;
  height: 100%;
  left: 50%;
  top: 10%;
}

/* FIN ICONOS EXCHANGES */
</style>
