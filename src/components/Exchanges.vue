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
    <div class="moneda">
      <ComponenteIconos iconos="/img/Exchanges/bunny-color.svg" iconname="pancakeswap" />
      <ComponenteIconos iconos="/img/Exchanges/Kucoin.svg" iconname="kucoin" />
      <ComponenteIconos iconos="/img/Exchanges/Gatebw.svg" iconname="gate.io" />
      <ComponenteIconos iconos="/img/Exchanges/lbank2.svg" iconname="LBank" />
      <ComponenteIconos iconos="/img/Exchanges/okxlogo.svg" iconname="okx" />
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
  width: 3rem;
  height: auto;
  z-index: 18;
  margin-left: 1rem;
}

/* FIN REDES SOCIALES */

/*ICONOS EXCHANGES*/
.contenedor_moneda {
  width: 57%;
  height: 75%;
  position: absolute;
  top: 20%;
  left: 40%;
  display: inline-block;
  z-index: 7;
}

.moneda {
  width: 100%;
  height: 100%;
  left: 50%;
  top: 10%;
}

/* FIN ICONOS EXCHANGES */
</style>
