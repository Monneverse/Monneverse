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

  <div class="pancakeswap">
    <div class="bunny">
      <img class="icon_coin" src="/public/img/Exchanges/bunny-color.svg" />
      <div class="name_coin"><p>pancakeswap</p></div>
    </div>
  </div>

  <div class="kucoin">
    <div class="kcoin">
      <img class="icon_coin" src="/img/Exchanges/Kucoin.svg" />
      <div class="name_coin"><p>kucoin</p></div>
    </div>
  </div>

  <div class="gateio">
    <div class="gate">
      <img class="icon_coin" src="/img/Exchanges/Gatebw.svg" />
      <div class="name_coin"><p>gate.io</p></div>
    </div>
  </div>

  <div class="Lbank">
    <div class="l_bank">
      <img class="icon_coin" src="/img/Exchanges/lbank2.svg" />
      <div class="name_coin"><p>lbank</p></div>
    </div>
  </div>

  <div class="okx_logo">
    <div class="okx_l">
      <img class="icon_coin" src="/img/Exchanges/okxlogo.svg" />
      <div class="name_coin"><p>okx</p></div>
    </div>
  </div>

  <div class="mexc_logo">
    <div class="mexc">
      <img class="icon_coin" src="/img/Exchanges/mexclogo.png" />
      <div class="name_coin"><p>mexc global</p></div>
    </div>
  </div>

  <div class="xtcom_logo">
    <div class="xt">
      <img class="icon_coin" src="/img/Exchanges/xtcom.png" />
      <div class="name_coin"><p>xt.com</p></div>
    </div>
  </div>

  <div class="poloniex_logo">
    <div class="poloniex">
      <img class="icon_coin" src="/img/Exchanges/poloniex.svg" />
      <div class="name_coin"><p>poloniex</p></div>
    </div>
  </div>

  <div class="hotbit_logo">
    <div class="hotbit">
      <img class="icon_coin" src="/img/Exchanges/hotbit.png" />
      <div class="name_coin"><p>hotbit</p></div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121026;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: relative;
  top: 15%;
  left: 5%;
  height: 20%;
  width: 30%;
  text-align: space-between;
  font-size: 4rem;
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
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  z-index: 2;
}
/* REDES SOCIALES */
.social_media {
  position: relative;
  top: 58%;
  left: 1%;
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
.pancakeswap {
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 40%;
  top: -14%;
}
.pancakeswap:hover {
  width: 18%;
  transition: 0.75s;
}
.pancakeswap:hover .bunny {
  width: 100%;
}
.bunny {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.kucoin {
  background: linear-gradient(to right, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 40%;
  top: -11%;
}
.kucoin:hover {
  width: 18%;
  transition: 0.75s;
}
.kucoin:hover .kcoin {
  width: 100%;
}
.kcoin {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.gateio {
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 40%;
  top: -8%;
}
.gateio:hover {
  width: 18%;
  transition: 0.75s;
}
.gateio:hover .gate {
  width: 100%;
}
.gate {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.Lbank {
  background: linear-gradient(to right, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 40%;
  top: -5%;
}
.Lbank:hover {
  width: 18%;
  transition: 0.75s;
}
.Lbank:hover .l_bank {
  width: 100%;
}
.l_bank {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.okx_logo {
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 40%;
  top: -2%;
}
.okx_logo:hover {
  width: 18%;
  transition: 0.75s;
}
.okx_logo:hover .okx_l {
  width: 100%;
}
.okx_l {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.mexc_logo {
  background: linear-gradient(to right, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 60%;
  top: -59%;
}
.mexc_logo:hover {
  width: 18%;
  transition: 0.75s;
}
.mexc_logo:hover .mexc {
  width: 100%;
}
.mexc {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.xtcom_logo {
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 60%;
  top: -56%;
}
.xtcom_logo:hover {
  width: 18%;
  transition: 0.75s;
}
.xtcom_logo:hover .xt {
  width: 100%;
}
.xt {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.poloniex_logo {
  background: linear-gradient(to right, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 60%;
  top: -53%;
}
.poloniex_logo:hover {
  width: 18%;
  transition: 0.75s;
}
.poloniex_logo:hover .poloniex {
  width: 100%;
}
.poloniex {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}
.hotbit_logo {
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 4%;
  z-index: 7;
  left: 60%;
  top: -50%;
}
.hotbit_logo:hover {
  width: 18%;
  transition: 0.75s;
}
.hotbit_logo:hover .hotbit {
  width: 100%;
}
.hotbit {
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.75s;
  text-transform: uppercase;
}

/* FIN ICONOS EXCHANGES */

/* TAMANO TEXTOS Y ICONOS */
.icon_coin {
  height: 100%;
  min-width: 54px;
  position: relative;
  padding: 0%;
  overflow: hidden;
  border-radius: 40%;
}
.icon_coin img {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0%;
  width: 100%;
  object-fit: contain;
}
.name_coin {
  font-size: 1.3rem;
  float: left;
  white-space: nowrap;
  margin: 10%;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
}
/* FIN TAMANO TEXTOS Y ICONOS */
</style>
