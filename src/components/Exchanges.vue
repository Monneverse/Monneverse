<script setup>
import ComponenteIconos from "./componenteIconos.vue";
</script>

<template>
  <div class="logo">
    <img src="/img/logo.svg" alt="logo monneverse" />
  </div>
  <div class="fondo"></div>
  <div class="exchange_text">
    <p>first exchanges after our pre-sale</p>
  </div>

  <div class="social_media">
    <a href=""> <i class="fa-brands fa-reddit fa-3x"></i></a>
    <a href=""> <i class="fa-brands fa-telegram fa-3x"></i></a>
    <a href=""><i class="fa-brands fa-discord fa-3x"></i></a>
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
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121026;
  height: 100%;
  width: 100%;
  display: flex;
}

.logo {
  position: relative;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
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
.social_media {
  position: absolute;
  bottom: 1%;
  left: 1%;
  width: 100%;
  z-index: 3;
}

.social_media a .fa-reddit {
  color: #ff4500;
  padding: 0.2%;
  z-index: 4;
}

.social_media a .fa-telegram {
  color: #2198d1;
  padding: 0.2%;
  z-index: 5;
}

.social_media a .fa-discord {
  color: #5865f2;
  padding: 0.2%;
  z-index: 6;
}

/* FIN REDES SOCIALES */

/*ICONOS EXCHANGES*/
.contenedor_moneda {
  border: 1px solid greenyellow;
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
