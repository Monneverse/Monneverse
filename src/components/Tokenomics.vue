<script>
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"],
  methods: {
    next() {
      let panel = document.getElementById('contenidoTokenomic');
      panel.scrollLeft = panel.scrollWidth;

    },
    before() {

      let panel = document.getElementById('contenidoTokenomic');
      panel.scrollLeft = 0;

    }
  }
};
</script>

<template>
  <!-- Fondos -->
  <div class="arrow" @click="next()"></div>
  <div class="arrow2" @click="before()"></div>
  <div class="fondo">
    <div class="fondo_rayos">
      <img src="/img/rayos.png" alt="Background-Ray" />
    </div>

    <div class="fondo-telefono">
      <img src="/img/fondo_Cel.png" alt="Background-cell" srcset="" />
    </div>

    <div class="fondo filtro-superior"></div>
    <div class="fondo-oscuro"></div>
    <div class="fondo fondo-oscurecer"></div>
    <div  :class="{
      fondoTokenomics: true,
      'animacion-benefit': this.enterAnimation && !this.isRevert,
      'animacion-benefit-revert': this.exitAnimation && this.isRevert,
      'animacion-benefit-up': this.enterAnimation && this.isRevert,
      'animacion-benefit-up-revert': this.exitAnimation && !this.isRevert,
      'animacion-desaparecer': this.enterAnimation && this.isRevert,
      'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
    }">
      <img src="/img/fondo_Tokenomics.png" alt="Background-monner" />
      <div class="imagen_Eclipse"></div>
    </div>
  </div>
  <div class="fondo fondo-oscurecer"></div>

  <div>
    <h1>.........</h1>
  </div>

  <!-- Contenedor de Contenido -->
  <div :class="{
    titulo: true,
    'animacion-aparecer': this.enterAnimation && !this.isRevert,
    'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
    'animacion-desaparecer': this.enterAnimation && this.isRevert,
    'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
  }">
    <h1>TOKENOMICS</h1>
  </div>
  <div id="contenidoTokenomic" :class="{
    content: true,
    'animacion-aparecer': this.enterAnimation && !this.isRevert,
    'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
    'animacion-desaparecer': this.enterAnimation && this.isRevert,
    'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
  }">
    <div class="cards">
      <div class="purchase-tax">
        <div class="">
          <div :class="{
            titulo1: true,
            animated: true,
            duration1s: true,
            fadeInLeft: this.enterAnimation,
            fadeOutLeft: this.exitAnimation,
          }">
            <h2>Purchase Tax 0%</h2>
          </div>
        </div>

        <div class="">
          <p>
            <span>0%</span> Intended for Monner liquidity locked for 100 years.
          </p>
        </div>
        <div class="">
          <p><span>0%</span> Destined to Marketing.</p>
        </div>
        <div class="">
          <p><span>0%</span> For development.</p>
        </div>
        <div class="">
          <p></p>
        </div>
        <div class="">
          <p></p>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="plus">
        <div class=""></div>

        <div class=""><img src="/img/plus.svg" alt="" /></div>
        <div class=""><img src="/img/plus.svg" alt="" /></div>
        <div class=""><img src="/img/plus.svg" alt="" /></div>
      </div>
    </div>
    <div class="cards">
      <div class="sale-tax">
        <div class="">
          <div :class="{
            titulo2: true,
            animated: true,
            duration1s: true,
            fadeInRight: this.enterAnimation,
            fadeOutRight: this.exitAnimation,
          }">
            <h2>Sale Tax 0%</h2>
          </div>
        </div>
        <div class="">
          <p>
            <span>0%</span> Destined for Monner liquidity blocked for 100 years.
          </p>
        </div>
        <div class="">
          <p><span>0%</span> Destined to Marketing.</p>
        </div>
        <div class="">
          <p><span>0%</span> For development.</p>
        </div>
        <div class="">
          <p></p>
        </div>
        <div class="">
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div :class="{
    'container-alianza': true,
    'animacion-aparecer': this.enterAnimation && !this.isRevert,
    'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
    'animacion-desaparecer': this.enterAnimation && this.isRevert,
    'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
  }">
    <div class="contenido">
      <div class="nombre_Alianza">
        <h1>UPCOMING ALLIANCES</h1>
      </div>
      <div class="imagen-alianza">
        <img src="../assets/methodBuy/visa.svg" alt="Visa" />
      </div>

      <div class="imagen-alianza">
        <img src="../assets/methodBuy/masterCard.svg" alt="MasterdCard" />
      </div>
    </div>
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
</template>

<style scoped>
@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT9.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Arial";
  src: url("/Fonts/arial.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Montserrat";
  src: url("/Fonts/Montserrat-Regular.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

p span {
  color: #e1aa04;
}

/* Fondo de la pagina*/
img {
  
  width: 100%;
  height: 100%;
}

h2 {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
}

.titulo {
  position: absolute;
  width: 100%;
  top: 15%;
  z-index: 45;
  display: flex;
  justify-content: center;
}

.titulo h1 {
  color: white;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 7vw;
  font-weight: 500;
}

@media screen and (min-width: 950px) {
  .titulo h1 {
    color: white;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
    font-size: 4vw;
    font-weight: 500;
  }
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 0;
}

.fondo_rayos {
  position: absolute;
  left: -3%;
  width: 350%;
  height: 100%;
  z-index: -23;
}

.fondo_rayos img {
  width: 100%;
  height: 100%;
}

@media screen and (width > 769px) {
  .fondo_rayos {
    display: none;
  }
}

.filtro-superior {
  position: absolute;
  z-index: 4;
  background: radial-gradient(circle at center,
      #14ec84 0%,
      #0b5f50 50%,
      #505863 100%);
  opacity: 30%;
}

.fondo-oscurecer {
  position: absolute;
  z-index: 42;
  background-color: rgb(0, 0, 0);
  opacity: 30%;
  mix-blend-mode: multiply;
}

.fondo-oscuro {
  position: absolute;
  z-index: 2;
  background-color: rgb(0, 0, 0);
  opacity: 30%;
  mix-blend-mode: multiply;
  width: 100%;
  height: 100%;
}

@media screen and (width < 769px) {
  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 0;
  }

  .filtro-superior {
    position: absolute;
    opacity: 60%;
  }
}

.fondo-telefono {
  position: fixed;
  top: 44%;
  left: -12em;
  width: 50em;
  height: 40em;
  z-index: 4;
  opacity: 30%;
}

@media screen and (width > 500px) {
  .fondo-telefono {
    display: none;
  }
}

.fondo-oscurecer {
  position: absolute;
  z-index: 43;
  background-color: rgb(0, 0, 0);
  opacity: 20%;
  mix-blend-mode: multiply;
}

.fondoTokenomics img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 115%;
  background-size: no-repeat center center;
  z-index: 3;
}

@media screen and (width < 769px) {
  .fondoTokenomics {
    display: none;
  }
}

.imagen_Eclipse {
  position: absolute;
  z-index: 34;
  bottom: -5%;
  right: -5%;
  width: 30rem;
  height: 30rem;
  z-index: 0;
  background-color: rgb(56, 55, 55);
  border-radius: 50%;
  opacity: 40%;
}

.content {
  position: relative;
  z-index: 5;
  top: 20%;
  display: flex;
  width: 78%;
  height: 57%;
  margin: 0 auto;
  border-radius: 1vw;
  scroll-snap-type: x mandatory;
  overflow-y: hidden;
  overflow-x: scroll;
  opacity: 1000%;
}

.content::-webkit-scrollbar {
  --webkit-appearance: none;
}

.content::-webkit-scrollbar:horizontal {
  height: 10px;
}

.content::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg,
      rgb(33, 32, 85) 0%,
      rgba(1, 209, 88, 1) 100%);
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.content::-webkit-scrollbar-track {
  border-radius: 10px;
}

@media screen and (min-width: 950px) {
  .content {
    top: 23%;
    display: grid;
    grid-template-rows: 30vw;
    grid-template-columns: 45% 10% 45%;
    width: 100%;
    height: 57%;
    margin: 0 auto;
    overflow-y: initial;
    overflow-x: initial;
  }

  .content::-webkit-scrollbar {
    display: none;
  }
}

.cards {
  width: 100%;
  height: 90%;
  margin: 0 auto;
  overflow: hidden;
  flex: none;
}

.cards:nth-child(2) {
  width: 50%;
  margin: 0 auto;
}

@media screen and (min-width: 950px) {
  .cards:nth-child(1) {
    display: flex;
    justify-content: flex-end;
  }
}

.purchase-tax {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  color: white;
  width: 100%;
  height: 100%;
}

.purchase-tax h2 {
  margin: 0;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 8vw;
  font-weight: 500;
}

.purchase-tax p {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  text-align: right;
  font-size: 1.4rem;
}

@media screen and (min-width: 950px) {
  .purchase-tax {
    justify-content: space-between;
    width: 90%;
    height: 100%;
  }

  .purchase-tax h2 {
    font-size: 2.3vw;
  }

  .purchase-tax p {
    font-size: 1.6vw;
  }
}

.titulo1 {
  position: relative;
  left: 0%;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 80%;
  width: 100%;
  background: linear-gradient(90deg,
      rgb(33, 32, 85) 0%,
      rgba(1, 209, 88, 1) 100%);
  border-radius: 0.5vw;
}

.titulo1 h2 {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  padding-right: 10%;
}

@media screen and (min-width: 950px) {
  .titulo1 {
    left: 45%;
    height: 100%;
    width: 55%;

    border-radius: 0.5vw;
  }

  .titulo1 h2 {
    padding-right: 10%;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  }
}

.plus {
  position: relative;
  top: 8%;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.plus div {
  display: flex;
  justify-content: center;
  width: 50%;
}

.plus div img {
  width: 1.7rem;
}

@media screen and (min-width: 950px) {
  .plus {
    top: 4%;
    width: 100%;
    height: 85%;
  }

  .plus div {
    margin: 0 auto;
    width: 100%;
  }
}

.sale-tax {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  color: white;
  width: 100%;
  height: 100%;
}

.sale-tax h2 {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 8vw;
  font-weight: 500;
}

.sale-tax p {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 1.3rem;
}

@media screen and (min-width: 950px) {
  .sale-tax {
    justify-content: space-between;
    width: 90%;
    height: 100%;
  }

  .sale-tax h2 {
    font-size: 2.3vw;
  }

  .sale-tax p {
    font-size: 1.6vw;
  }
}

.titulo2 {
  position: relative;
  display: flex;
  align-items: center;
  height: 80%;
  width: 100%;
  background: linear-gradient(90deg, rgb(209, 1, 1) 0%, rgb(18, 0, 73) 100%);
  border-radius: 0.5vw;
}

.titulo2 h2 {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  padding-left: 10%;
}

@media screen and (min-width: 950px) {
  .titulo2 {
    height: 100%;
    width: 55%;
  }
}

.container-alianza {
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 10%;
  z-index: 20;
  display: flex;
  justify-content: center;
}

@media screen and (width < 769px) {
  .container-alianza {
    display: none;
  }
}

.contenido {
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 20% 20%;
  align-items: center;
  opacity: 100%;
}

.nombre_Alianza {
  width: 100%;
  display: flex;
}

.nombre_Alianza h1 {
  text-align: center;
  width: 100%;
  color: white;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 2.5vw;
  font-weight: 500;
}

.imagen-alianza {
  display: flex;
  align-items: center;
  width: 100%;
}

.imagen-alianza:nth-child(2) {
  width: 8vw;
}

.imagen-alianza:nth-child(3) {
  width: 6.5vw;
}

.degradado {
  background: linear-gradient(to right, #090380 55%, transparent);
  position: absolute;
  width: 100%;
  height: 180%;
  z-index: 19;
  animation-duration: 3s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: -10%;
  opacity: 70%;
}

@media screen and (width > 600px) {
  .degradado {
    width: 50%;
    top: 20%;
  }
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

@media screen and (width <=769px) {
  .degradado_izquierdo {
    display: none;
  }
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}

::-webkit-scrollbar {
  display: block;
}

@media screen and (max-width: 900px) {

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
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
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
    animation-iteration-count: infinite;
    animation-name: arrow2;
  }

  @keyframes arrow2 {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
}

.animacion-aparecer {
  animation-duration: 0.5s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}

.animacion-aparecer-revert {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

.animacion-desaparecer {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}

.animacion-desaparecer-revert {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-direction: reverse;
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

.animacion-benefit-up img {
  animation-duration: 0.8s;
  animation-name: arriba;
  animation-iteration-count: 1;
}

.animacion-benefit-up-revert img {
  animation-duration: 0.8s;
  animation-name: arriba;
  animation-direction: reverse;
  animation-iteration-count: 1;
}

@keyframes arriba {
  0% {
    top: -35%;
    height: 100%;
    opacity: 20%;
  }
}

.animated.duration1s {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
</style>
