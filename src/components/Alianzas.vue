<template>
  <div class="upcoming_alliance"><h1>UPCOMING ALLIANCES</h1></div>
  <div class="visa_img">
    <img src="/img/Alianzas/visa.png" />
  </div>
  <div class="mastercard_img">
    <img src="/img/Alianzas/mastercard.png" />
  </div>
  <div class="reddit">
    <a href="#"><img src="/img/Alianzas/reddit.png" /></a>
    <!-- <font-awesome-icon icon="fa-brands fa-reddit" /> -->
  </div>
  <div class="telegram">
    <a href="#"><img src="/img/Alianzas/telegram.png" /></a>
    <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->
  </div>
  <div class="discord">
    <a href="#"><img src="/img/Alianzas/discord.png" /></a>
    <!-- <font-awesome-icon icon="fa-brands fa-discord" /> -->
  </div>

  <div class="semi_circle">
    <img src="/img/semi_circulo.png" />
  </div>
  <div class="circle">
    <img src="/img/Semi_circulo1.png" />
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
  <!--FIN FONDO-->
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");

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
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
}
.filtro-superior {
  z-index: 1;
  background: radial-gradient(
    circle at center,
    #f9f9fa 0%,
    #c8ced4 50%,
    #a8aaaf 100%
  );
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
  top: 26.5%;
  right: 38%;
  color: white;
  font-size: 2rem;
  font-family: "Work Sans", sans-serif;
  z-index: 5;
}
.visa_img {
  position: absolute;
  display: flex;
  width: 17.9%;
  height: 31%;
  top: 37%;
  left: 27%;
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
  right: 33%;
  z-index: 5;
}
.mastercard_img img:hover {
  transform: scale(1.2);
}
.reddit img {
  position: absolute;
  display: flex;
  width: 3%;
  height: 6%;
  top: 80%;
  left: 42%;
  z-index: 5;
}
.telegram img {
  position: absolute;
  display: flex;
  width: 3%;
  height: 6%;
  top: 80%;
  left: 46%;
  z-index: 5;
}
.discord img {
  position: absolute;
  display: flex;
  width: 3%;
  height: 6%;
  top: 80%;
  left: 50%;
  z-index: 5;
}
.semi_circle {
  position: fixed;
  right: 32%;
  top: 71%;
  width: 40%;
  height: 80%;
  z-index: 5;
  opacity: 100%;
  rotate: 180deg;
}
.circle {
  position: fixed;
  right: 32%;
  top: 82%;
  width: 40%;
  height: 80%;
  z-index: 6;
  opacity: 100%;
}
</style>
