<script >
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"],
  methods: {
    next() {
      let panel = document.getElementById('contenidoNew');
      panel.scrollLeft = panel.scrollWidth;

    },
    before() {

      let panel = document.getElementById('contenidoNew');
      panel.scrollLeft = 0;

    }
  }
}
</script>

<template>
  <!--FONDO-->

  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div :class="{
    fondo: true,
    'fondo-montana': true,
    montana__desaparecer: this.exitAnimation && !this.isRevert,
  }">
    <img src="/img/fondo-montana.png" />
  </div>
  <div class="fondo fondo-oscurecer"></div>
  <div id="logo-2" class="logo">
    <img src="/img/logo.svg" alt="" />
  </div>

  <!-- <div class="luces">
        <img src="/img/luz.png" alt="" />
    </div> -->
  <div class="reflector reflector-izquierdo">
    <div class="luz-1"></div>
    <div class="luz-2"></div>
    <div class="luz-3"></div>
  </div>
  <div class="reflector reflector-derecho">
    <div class="luz-1"></div>
    <div class="luz-2"></div>
    <div class="luz-3"></div>
  </div>
  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="" srcset="" />
  </div>
  <div class="fondo_rayos">
    <img src="/img/rayos.png" alt="" />
  </div>
  <div class="degradado_azuliz"></div>
  <div class="degradado_azulde"></div>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
  <!--FIN FONDO-->
  <div class="titulo">
    <p>news</p>
  </div>
  <div class="arrow" @click="next()"></div>
  <div class="arrow2" @click="before()"></div>
  <div id="contenidoNew"  class="major">
    <div :class="{
      contenido: true,
      contenido__aparecer_revert: this.enterAnimation && this.isRevert,
      contenido__desaparecer: this.exitAnimation && !this.isRevert,
    }">
      <div class="columnas">
        <div class="news">
          <a href=""><img src="/img/News/cryptoPotato.png" /></a>
        </div>
        <div class="news">
          <a href=""><img src="/img/News/CoinQuora.png" /></a>
        </div>
        <div id="theCoinRepublic" class="news theCoinRepublic">
          <a href=""><img src="/img/News/TheCoinRepublic.png" /></a>
        </div>
      </div>

      <div class="columnas">
        <div :class="{
          circulo: true,
          circulo__aparecer: this.enterAnimation && !this.isRevert,
          circulo__aparecer_revert: this.enterAnimation && this.isRevert,
          circulo__desaparecer_revert: this.exitAnimation && this.isRevert,
          circulo__desaparecer: this.exitAnimation && !this.isRevert,
        }"></div>
        <div class="indicador"></div>
      </div>

      <div class="columnas">
        <div class="news">
          <a
            href="https://criptotendencia.com/2022/08/03/por-que-monner-puede-convertirse-en-una-de-las-mejores-criptomonedas-para-invertir/"><img
              src="/img/Exchanges/criptotend.png" /></a>
        </div>
        <div class="news">
          <a href="https://www.coinspeaker.com/monner-coin-revolutionize-crypto/"><img
              src="/img/Exchanges/coinspeaker.png" /></a>
        </div>
        <div class="news">
          <a href="https://www.territoriobitcoin.com/una-nueva-criptomoneda-en-tendencia/"><img
              src="/img/Exchanges/territoriobtc.png" /></a>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

img {
  width: 100%;
  height: 100%;
}

/* INICIO ESTILO FONDO */

.indicador {
  position: absolute;
  top: 45%;
  left: 48%;
  width: 5%;
  height: 20%;
  border-radius: 2rem;
  background: linear-gradient(to top, #029f50 0%, #0a664e 50%, #0e444d 100%);
  z-index: 8;
}

.circulo {
  position: absolute;
  top: 29%;
  left: 48%;
  width: 4.7%;
  height: 13%;
  border-radius: 50%;
  z-index: 8;
  background: #1a1e29;
}

.circulo__aparecer {
  animation: aparecer_circulo 0.5s ease-in-out;
  -webkit-animation: aparecer_circulo 0.5s ease-in-out;
}

.circulo__desaparecer_revert {
  animation: aparecer_circulo 1s ease-in-out reverse;
  -webkit-animation: aparecer_circulo 1s ease-in-out reverse;
}

@keyframes aparecer_circulo {
  0% {
    position: absolute;
    z-index: 34;
    top: 46%;
    left: 82%;
    width: 30rem;
    height: 30rem;
    background-color: rgba(255, 255, 255, 0.3);
  }
}

@keyframes desaparecer_circulo {
  100% {
    position: absolute;
    z-index: 34;
    top: 46%;
    left: 82%;
    width: 30rem;
    height: 30rem;
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.fondo {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
  z-index: 1;
}

.filtro-superior {
  z-index: 2;
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
}

.fondo-montana {
  height: 80%;
  top: 20%;
  left: 0;
  z-index: 3;
}

.montana__desaparecer {
  animation: montana__aparecer 1s ease-in-out 0s 1 normal;
  -webkit-animation: montana__aparecer 1s ease-in-out 0s 1 normal;
}

@keyframes montana__aparecer {
  100% {
    height: 100%;
  }
}

.fondo-oscurecer {
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.logo {
  width: 34%;
  height: 56%;
  position: fixed;
  top: 10%;
  left: 33.3%;
  margin: auto;
  z-index: 5;
  opacity: 10%;
}

.luces {
  position: absolute;
  bottom: -16%;
  left: -9%;
  width: 120%;
  height: 160%;
  z-index: 99;
  opacity: 100%;
}

.degradado {
  background: linear-gradient(to right, #040077 55%, transparent);
  position: fixed;
  width: 50%;
  height: 190%;
  z-index: 3;
  top: 0%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}

.circuito {
  position: absolute;
  z-index: 4;
  height: 80%;
  width: 40%;
  min-width: 30rem;
  bottom: 0%;
}

.circuito-izquierdo {
  left: -14%;
}

.circuito-derecho {
  right: -14%;
  transform: scaleY(-1);
}

@media only screen and (min-device-width: 1px) and (max-device-width: 667px) {
  .fondo_rayos {
    position: fixed;
    left: -35%;
    top: -30%;
    width: 150%;
    height: 150%;
    opacity: 50%;
    z-index: 1;
    background-size: no-repeat center center fixed;
  }

  .fondo_rayos img {
    height: 100%;
  }

  .degradado {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 35%;
    left: 55%;
    z-index: 9;
  }

  .degradado_izquierdo {
    display: none;
  }

  .fondo-montana {
    position: fixed;
    top: 28%;
    left: -60%;
    width: 200%;
    height: 80%;
  }

  .fondo-mundial {
    position: fixed;
    top: 15em;
    left: -9em;
    width: 50em;
    height: 35em;
    z-index: 3;
    opacity: 80%;
  }

  .fondo-calculadora {
    width: 100%;
    height: 100%;
  }

  .circuito-derecho {
    display: none;
  }

  .circuito-izquierdo {
    display: none;
  }

  #logo-2 {
    position: absolute;
    top: 70%;
    left: -4%;
    opacity: 50%;
    z-index: 4;
  }

  .fondoTokenomics {
    position: fixed;
    top: 0%;
    left: -6%;
    width: 140%;
    height: 90%;
    visibility: hidden;
  }
}

/* FIN ESTILO FONDO */

/* TITULO */

.titulo {
  position: fixed;
  top: 15%;
  left: 46.5%;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 8;
}

.titulo p {
  font-size: 2.5vw;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
}

@media only screen and (min-device-width: 175px) and (max-device-width: 667px) {
  .titulo {
    top: 11.5%;
    left: 38%;
  }

  .titulo p {
    font-size: 8vw;
  }
}

/* FIN TITULO */

.major {
  position: absolute;
  top: 20%;
  width: 100%;
  height: 75%;
  z-index: 8;
  margin: 0;
  box-sizing: border-box;
}

.contenido {
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
}

.contenido__desaparecer {
  animation: desparecer_contenido 1s ease-in-out;
  -webkit-animation: desparecer_contenido 1s ease-in-out;
}

.contenido__aparecer_revert {
  animation: desparecer_contenido 1s ease-in-out forwards reverse;
  -webkit-animation: desparecer_contenido 1s ease-in-out forwards reverse;
}

@keyframes desparecer_contenido {
  100% {
    opacity: 0;
  }
}

.columnas {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.columnas:nth-child(2) {
  width: 20%;
  height: 100%;
}

.news {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 30%;
}

.news img {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#theCoinRepublic {
  width: 50%;
  height: 30%;
}

@media screen and (max-width: 900px) {
  /* .news {
    width: 100% !important;
    z-index: -1000;
    border: 1px solid red;
  } */


  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 25px;
    height: 25px;
    top: 56%;
    left: 94%;
    margin: -20px 0 0 -20px;
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
    top: 56%;
    left: 9%;
    margin: -20px 0 0 -20px;
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

  .major {
    position: absolute;
    left: 10%;
    top: 20%;
    width: 80%;
    height: 60%;
    z-index: 1000;
    background-color: rgba(44, 109, 128, 0.1);
    border-radius: 20px;
    overflow: hidden;
    overflow-x: scroll;
    overscroll-behavior-x: initial;
    scroll-snap-type: x mandatory;
    padding: 1rem;
  }

  .major::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .major::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,
        rgb(33, 32, 85) 0%,
        rgba(1, 209, 88, 1) 100%);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  .major ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    display: block;
  }
  .contenido {
    width: 100%;
    height: 100%;
  }

  .columnas {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: none;
  }

  .columnas:nth-child(2) {
    width: 20%;
    height: 100%;
    display: none;
  }

  .news {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 30%;
  }

  .news img {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
}

@keyframes luz {
  0% {
    opacity: 40%;
  }

  50% {
    opacity: 80%;
  }

  100% {
    opacity: 100%;
  }
}

.reflector {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 40%;
  height: 100%;
  z-index: 7;
  z-index: 19;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  animation-name: reflector;
  -webkit-animation-name: reflector;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
}

.reflector-derecho {
  left: 55%;
}

@keyframes reflector {
  0% {
    opacity: 40%;
  }

  50% {
    opacity: 80%;
  }

  100% {
    opacity: 100%;
  }
}

.luz-1 {
  position: absolute;
  width: 30%;
  height: 130%;
  border-radius: 50%;
  bottom: -30%;
  transform: rotate(-30deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      transparent 55%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
  left: 30%;
  opacity: .5;
}

.luz-2 {
  position: absolute;
  width: 30%;
  height: 160%;
  border-radius: 50%;
  bottom: -30%;
  left: 40%;
  transform: rotate(0deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      transparent 55%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
  opacity: .5;
}

.luz-3 {
  position: absolute;
  width: 30%;
  height: 130%;
  border-radius: 50%;
  bottom: -30%;
  left: 55%;
  transform: rotate(-150deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      transparent 55%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
  opacity: .5;
}
</style>
