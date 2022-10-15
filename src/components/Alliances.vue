<script setup>
defineProps({
  index_pagina: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div class="contenido-general">
    <div
      :class="{
        logo: true,
        'animacion-logo': index_pagina == 2,
      }"
    >
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>

    <!--FONDOS-->
    <div class="fondo-video">
      <video
        src="/public/video/Multimedia1.mp4"
        autoplay="true"
        muted="true"
        loop="true"
        poster="/img/fondo_binario.png"
      ></video>
    </div>

    <div class="fondo filtro-superior"></div>
    <div
      :class="{
        'fondo-montana': true,
        'fondo-montana-animation': index_pagina == 2,
      }"
      class="fondo"
    >
      <img src="/img/fondo-montana.png" />
    </div>
    <div class="fondo fondo-oscurecer"></div>
    <div
      :class="{
        'fondo-red': true,
        'animacion-aparecer': index_pagina == 2,
      }"
      class="fondo"
    >
      <img src="/img/red.png" alt="" />
    </div>

    <div class="texto">
      <section>
        <p>
          Take advantage of this opportunity and RESERV your spot in our
          pre-sale
        </p>
      </section>
    </div>

    <!--UPCOMING ALLIANCES-->
    <div class="content-forms">
      <section class="circulos">
        <div class="circulo">
          <img src="../assets/circulo.svg" alt="" />
        </div>

        <div class="circulo-medio">
          <img src="../assets/circulo-medio.svg" alt="" />
        </div>
      </section>
      <section class="arco">
        <div
          :class="{
            semi_circulo: true,
            'animacion-arco': index_pagina == 2,
          }"
        >
          <img src="../assets/aro-iluminado-brillante.svg" alt="" />
        </div>
      </section>
      <section class="Alianzas">
        <div class="alianzas">
          <a href="https://www.reddit.com/user/monnerverse"
            ><span><img src="/img/Alianzas/reddit.png" /></span>REDDIT</a
          >
          <!-- <font-awesome-icon icon="fa-brands fa-reddit" /> -->

          <a href="https://t.me/monnerversecommunity"
            ><span><img src="/img/Alianzas/telegram.png" /></span>TELEGRAM</a
          >
          <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->

          <a href="https://discord.com/invite/h7fRvek9dn"
            ><span><img src="/img/Alianzas/discord.png" /></span>DISCORD</a
          >
          <!-- <font-awesome-icon icon="fa-brands fa-discord" /> -->
        </div>
      </section>

      <section class="rectangulos">
        <div class="rectangulo-medio">
          <div class="contenido">
            <img src="../assets/rectangulo-medio.svg" alt="" />
            <div class="imagenes">
              <img src="../assets/methodBuy/visa.svg" alt="" />
              <img src="../assets/methodBuy/masterCard.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="rectangulo">
          <img src="../assets/rectangulo-verde.svg" alt="" />
          <p>UPCOMING ALLIANCES</p>
        </div>
      </section>
    </div>

    <div
      :class="{
        puntero: true,
        'animacion-aparecer': index_pagina == 2,
      }"
    >
      <img src="/img/puntero.svg" alt="" />
    </div>

    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

section {
  width: 80%;
  height: 100%;
}
.contenido-general {
  width: 100%;
  height: 100%;

  background: linear-gradient(to right, #0b092e 100%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.texto {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-end;
}
.texto > section {
  width: 60%;
}
.texto > section p {
  width: 80%;
  float: right;
  font-family: "Work Sans", sans-serif;
  font-size: 4.5vw;
  text-align: left;
  color: #ffffff;
}

.content-forms {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  position: relative;
}
@media screen and (min-width: 490px) {
  .texto {
    display: none;
  }

  .content-forms {
    position: absolute;
    top: 20%;
    height: 100%;
  }
}

@media screen and (min-width: 769px) {
  .texto {
    display: none;
  }

  .content-forms {
    position: absolute;
    top: 20%;
    height: 100%;
  }
}
.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
  display: none;
}

.animacion-logo {
  animation-name: animar-logo;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

@keyframes animar-logo {
  0% {
    position: absolute;
    top: 10rem;
    left: 25rem;
    width: 25rem;
    height: 5rem;
    z-index: 1;
    opacity: 10%;
  }

  100% {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 5rem;
    height: 5rem;
    z-index: 12;
    opacity: 100%;
  }
}

.fondo-video {
  width: 100%;
  height: 100%;
}

.fondo-video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 40%;
  z-index: 0;
}

/*
.filtro-superior {
  position: absolute;
  z-index: 1;
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
}
*/
.fondo-montana img {
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 75%;
  z-index: 2;
}

.fondo-montana-animation img {
  animation-duration: 0.5s;
  animation-name: fondo-montana-animation;
  animation-iteration-count: 1;
}

@keyframes fondo-montana-animation {
  0% {
    height: 50%;
    top: 50%;
  }

  100% {
    top: 30%;
    width: 100%;
    height: 75%;
  }
}

.fondo-oscurecer {
  position: absolute;
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.fondo-red img {
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
  height: 75%;
  z-index: 1;
}

@media screen and (max-width: 500px) {
  .fondo-montana {
    display: none;
  }

  .fondo-oscurecer {
    display: none;
  }

  .fondo-red {
    display: none;
  }

  .fondo-video {
    display: none;
  }
}
.circulos {
  position: absolute;
  width: 100%;
}

.circulo {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.circulo img {
  width: 18rem;
}

.circulo-medio {
  position: absolute;
  top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.circulo-medio img {
  width: 16rem;
}
.arco {
  width: 100%;
  display: flex;
  justify-content: center;
}
.semi_circulo {
  position: relative;
  top: 0.5rem;
  width: 18.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 44;
}
.semi_circulo img {
  position: absolute;
  scale: 1.15;
}
@media screen and (min-width: 769px) {
  .circulos {
    top: 0;
    position: absolute;
    width: 100%;
  }
  .circulo img {
    width: 30rem;
  }
  .circulo-medio img {
    width: 28rem;
  }
  .semi_circulo {
    position: relative;
    top: -0.5rem;
    width: 32rem;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 44;
  }
}
.Alianzas {
  position: absolute;
  top: 1rem;
  width: 90%;
  display: flex;
  height: 30%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
.alianzas {
  margin: 0;
  position: absolute;
  top: 3.5rem;
  z-index: 34;
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.alianzas a {
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  font-family: Calibri;
  font-weight: 600;
  font-size: 3vw;
}

.alianzas a span {
  padding: 0;
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  background-color: #ecf3f2;
  border-radius: 100%;
  text-align: center;
  -webkit-box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
  -moz-box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
  box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
}

.alianzas img {
  position: relative;
  top: 10%;
  width: 1.5rem;
  height: 1.5rem;
  margin: auto auto;
}

.alianzas a span:hover {
  cursor: pointer;
}
@media screen and (min-width: 769px) {
  .Alianzas {
    top: 3rem;
    width: 45%;
  }
  .alianzas {
    top: 3.5rem;
  }
  .alianzas a {
    font-size: 1.5vw;
  }
  .alianzas a span {
    width: 4rem;
    height: 4rem;
  }

  .alianzas img {
    width: 3rem;
    height: 3rem;
  }
}

.animacion-arco img {
  animation-name: animacion-arco;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

@keyframes animacion-arco {
  0% {
    top: 70%;
    transform: rotateZ(-180deg);
  }

  100% {
    top: 15.5%;
    transform: rotateZ(0deg);
  }
}
.rectangulos {
  position: absolute;
  width: 95%;
  top: 2.5rem;
  display: flex;
  justify-content: center;
}
.rectangulo {
  position: absolute;
  top: 7rem;
  z-index: 8;
  display: flex;
  justify-content: center;
}
.rectangulo img {
  width: 22rem;
}

.rectangulo p {
  top: 50%;
  position: absolute;
  z-index: 12;
  color: #ffffff;
  font-family: Calibri;
  font-size: 5vw;
  font-weight: 400;
}
.rectangulo-medio {
  position: absolute;
  top: 3rem;
  width: 100%;
  margin: 0 auto;
  display: flex;

  z-index: 33;
}
@media screen and (min-width: 769px) {
  .rectangulo {
    top: 12rem;
  }
  .rectangulo img {
    width: 36rem;
  }
  .rectangulo p {
    top: 49%;

    font-size: 3vw;
  }
  .rectangulo-medio {
    top: 13rem;
    width: 100%;
    margin: 0 auto;
    display: flex;

    z-index: 33;
  }
  .contenido img {
    width: 30rem;
  }
}
.contenido {
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contenido img {
  width: 24rem;
}

.imagenes {
  position: relative;
  top: -6.2rem;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}

.imagenes img {
  width: 6rem;
}

.imagenes img:last-child {
  width: 4.7rem;
}
@media screen and (min-width: 769px) {
  .rectangulo-medio {
    top: 7rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    z-index: 33;
  }
  .contenido img {
    width: 40rem;
  }
  .imagenes {
    position: relative;
    top: -10.7rem;
    width: 45%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  .imagenes img {
    width: 10rem;
  }
  .imagenes img:last-child {
    width: 9rem;
  }
}
.puntero {
  position: absolute;
  z-index: 14;
  width: 20%;
  height: 40%;
  padding: 0;
  margin: 0;
  top: 84%;
  left: 40%;
  display: none;
}

.degradado {
  background: linear-gradient(to right, #090380 55%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 4;
  animation-duration: 3s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: 10%;
  opacity: 80%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}

.animacion-aparecer {
  animation-duration: 0.5s;
  animation-name: aparecer;
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
</style>
