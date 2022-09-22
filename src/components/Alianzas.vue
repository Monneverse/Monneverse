<template>
  <div class="upcoming_alliance">
    <h1>UPCOMING ALLIANCES</h1>
  </div>
  <div class="visa_img">
    <img src="/img/Alianzas/visa.png" />
  </div>
  <div class="mastercard_img">
    <img src="/img/Alianzas/mastercard.png" />
  </div>

  <div class="circulos_redes">
    <div class="semi_circle">
      <img src="/img/semi_circulo.png" />
    </div>
    <div class="circle">
      <img src="/img/Semi_circulo1.png" />
    </div>
  </div>



  <!--FONDO-->
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
  <div class="fondo fondo-oscurecer"></div>
  <div class="circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
  <div class="degradado_azuliz"></div>
  <div class="degradado_azulde"></div>
  <!--FIN FONDO-->

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
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");

@font-face {
  font-family: "Custom";
  src: url("../assets/fonts/Work+Sans:wght@700&display=swap");
}

/*FONDO*/

img {
  height: 100%;
  width: 100%;
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
}

.filtro-superior {
  z-index: 1;
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
}

.fondo-montana {
  height: 100%;
  top: 20%;
  left: 0;
  z-index: 2;
}

.fondo-oscurecer {
  z-index: 3;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.circuito-izquierdo {
  position: absolute;
  z-index: 4;
  left: -25%;
  top: 20%;
  height: 80%;
  width: 40%;
  min-width: 30rem;
}

.circuito-derecho {
  position: absolute;
  z-index: 4;
  right: -25%;
  top: 20%;
  height: 80%;
  width: 40%;
  min-width: 30rem;
}

/*FIN FONDO*/

.upcoming_alliance {
  position: relative;
  display: contents;
}

.upcoming_alliance h1 {
  position: absolute;
  display: flex;
  top: 17%;
  right: 24%;
  color: white;
  font-size: 5vw;
  font-family: "Work Sans", sans-serif;
  z-index: 5;
}

.visa_img {
  position: absolute;
  display: flex;
  width: 17.9%;
  height: 31%;
  top: 37%;
  left: 25%;
  z-index: 5;
}

.visa_img img:hover {
  transform: scale(1.2);
}

.mastercard_img {
  position: absolute;
  display: flex;
  width: 17.9%;
  height: 31%;
  top: 37%;
  right: 34%;
  z-index: 5;
}

.mastercard_img img:hover {
  transform: scale(1.2);
}

.circulos_redes {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  border: 1px solid yellowgreen;
}

.semi_circle {
  position: fixed;
  right: 30%;
  top: 71%;
  width: 40%;
  height: 80%;
  z-index: 6;
  opacity: 100%;
  rotate: 180deg;
}

.circle {
  position: fixed;
  right: 29.5%;
  top: 82%;
  width: 40%;
  height: 80%;
  z-index: 7;
  opacity: 100%;
}

.logo-redes {
  position: absolute;
  bottom: 13%;
  left: 43.5%;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
  z-index: 8;
}



.icon {
  width: 4rem;
  height: auto;
  z-index: 18;
  margin-left: 1rem;
  z-index: 8;
}

.degradado_azuliz {
  background: linear-gradient(to right, #08047A 0.5%, transparent);
  position: absolute;
  transform: rotate(-60deg);
  top: 0%;
  right: 50%;
  width: 50%;
  height: 180%;
  z-index: 3;
}

.degradado_azulde {
  background: linear-gradient(to right, #08047A 0.5%, transparent);
  position: absolute;
  transform: rotate(230deg);
  top: -12%;
  left: 50%;
  width: 50%;
  height: 180%;
  z-index: 3;
}
</style>
