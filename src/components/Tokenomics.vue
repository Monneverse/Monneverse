<script>
export default {
  props: {
    index_pagina: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <!-- Fondos -->
  <div class="fondo">
    <div
      :class="{ fondo_rayos: true, 'animacion-aparecer': index_pagina == 9 }"
    >
      <img src="/img/rayos.png" alt="" />
    </div>
    <div class="logos">
      <div class="grupo-logos">
        <div class="grupo grupo-1">
          <img src="/img/logo.svg" alt="logo monneverse" />
          <img src="/img/logo.svg" alt="logo monneverse" />
        </div>
        <div class="grupo grupo-2">
          <img src="/img/logo.svg" alt="logo monneverse" />
          <img src="/img/logo.svg" alt="logo monneverse" />
        </div>
      </div>

      <div class="logo-alone">
        <img src="/img/logo.svg" alt="logo monneverse" />
      </div>
    </div>
    <div class="fondo-telefono">
      <img src="/img/celFondo.svg" alt="" srcset="" />
    </div>
    
    <div class="fondo filtro-superior"></div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="fondoTokenomics">
      <img src="/img/fondo_Tokenomics.png" alt="" />
      <div class="imagen_Eclipse">
        <img src="/img/eclipse_Tokenomics.png" alt="" />
      </div>
    </div>
  </div>
  <div class="fondo fondo-oscurecer"></div>


  <div>
    <h1>.........</h1>
  </div>

  <!-- Contenedor de Contenido -->
  <div :class="{
    titulo: true,
    'animacion-desplazamiento-titulo': index_pagina == 13,
  }">
    <h1>TOKENOMICS</h1>
  </div>
  <div class="content">
    <div class="cards">
      <div class="purchase-tax">
        <div class="">
          <div :class="{
            titulo1: true,
            'animacion-desplazamiento-titulo1': index_pagina == 13,
          }">
            <h2>Purchase Tax</h2>
          </div>
        </div>

        <div class="">
          <p>To buy 0% slip</p>
        </div>
        <div class="">
          <p>Automatic LP 0% of order fees go back into liquidity</p>
        </div>
        <div class="">
          <p>
            Bank Security 0% of order fees are stores in BANK SECURITY for price
            protection
          </p>
        </div>
        <div class="">
          <p>Management 0% of order fees go to the treasury</p>
        </div>
        <div class="">
          <p>Monner Burns 0% is burned for stability and price increase</p>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="plus">
        <div class=""></div>
        <div class=""><img src="/img/plus.svg" alt="" /></div>
        <div class=""><img src="/img/plus.svg" alt="" /></div>
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
            'animacion-desplazamiento-titulo2': index_pagina == 13,
          }">
            <h2>Sale Tax</h2>
          </div>
        </div>
        <div class="">
          <p>To buy 0% slip</p>
        </div>
        <div class="">
          <p>Automatic LP 0% of order fees go back into liquidity</p>
        </div>
        <div class="">
          <p>
            Bank Security 0% of order fees are stored in BANK SECURITY for price
            protection
          </p>
        </div>
        <div class="">
          <p>Management 0% of order fees go to the treasury</p>
        </div>
        <div class="">
          <p>Monner Burns 0% is burned for stability and price increase</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-alianza">
    <div class="contenido">
      <div class="nombre_Alianza">
        <h1>UPCOMING ALLIANCES</h1>
      </div>
      <div class="imagen-alianza">
        <img src="../assets/methodBuy/visa.svg" alt="" />
      </div>

      <div class="imagen-alianza">
        <img src="../assets/methodBuy/masterCard.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
</template>

<style scoped>
@font-face {
  font-family: "WorkSans";
  src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");
}

/* Fondo de la pagina*/
img {
  width: 100%;
  height: 100%;
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
  font-family: "WorkSans", sans-serif;
  font-size: 7vw;
  font-weight: 500;
}

@media screen and (min-width: 769px) {
  .titulo h1 {
    color: white;
    font-family: "WorkSans", sans-serif;
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
@media screen and (width > 769px){
  .fondo_rayos{

    display: none;
  }
  
}
.filtro-superior {
  position: absolute;
  z-index: 4;
  background: radial-gradient(
    circle at center,
    #14ec84 0%,
    #0b5f50 50%,
    #505863 100%
  );
  opacity: 30%;
}
.fondo-oscurecer {
  position: absolute;
  z-index: 42;
  background-color: rgb(0, 0, 0);
  opacity: 30%;
  mix-blend-mode: multiply;
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

.logos {
  display: none;
  width: 100%;
  height: 100%;
}

.logos .grupo-logos {
  width: 100%;
  height: 50%;
}

.grupo-logos img {
  width: 7rem;
}

.grupo-logos .grupo {
  position: relative;
  top: 6rem;
  align-items: center;
  margin: 0 auto;
  width: 70%;
}

.grupo-2 img:nth-child(1) {
  transform: rotateZ(-10deg);
}

.grupo-2 img:nth-child(2) {
  transform: rotateZ(-10deg);
}

.logo-alone {
  width: 80%;
  height: 40%;
  display: flex;
  align-items: flex-end;
}

.logo-alone img {
  width: 80%;
}

@media screen and (width > 500px) {
  .logos {
    display: initial;
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
  z-index: 42;
  background-color: rgb(0, 0, 0);
  opacity: 30%;
  mix-blend-mode: multiply;
}

.fondoTokenomics img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

@media screen and (width < 769px) {
  .fondoTokenomics {
    display: none;
  }
}

.imagen_Eclipse {
  position: absolute;
  z-index: 34;
  bottom: -10%;
  right: -10%;
  height: 80%;
  width: 40%;
  z-index: 0;
  /*animation-duration: 4s;
  animation-name: moverCentro;
  animation-iteration-count: infinite;*/
}

.content {
  position: relative;
  z-index: 55;
  top: 20%;
  display: flex;
  width: 80%;
  height: 57%;
  margin: 0 auto;
  border-radius: 1vw;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
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

@media screen and (min-width: 769px) {
  .content {
    top: 23%;
    display: grid;
    grid-template-rows: 30vw;
    grid-template-columns: 45% 10% 45%;
    width: 100%;
    height: 57%;
    margin: 0 auto;
    overflow-x: initial;
    scroll-snap-type: none;
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
  width: 20%;
}

@media screen and (min-width: 769px) {
  .cards:nth-child(1) {
    display: flex;
    justify-content: flex-end;
  }
}

.purchase-tax {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "WorkSans", sans-serif;
  color: white;
  width: 100%;
  height: 100%;
}

.purchase-tax h2 {
  text-align: right;
  font-size: 10vw;
  font-weight: 500;
}

.purchase-tax p {
  text-align: right;
  font-size: 1rem;
}

@media screen and (min-width: 769px) {
  .purchase-tax {
    justify-content: space-between;
    width: 90%;
    height: 100%;
  }

  .purchase-tax h2 {
    font-size: 2.5vw;
  }

  .purchase-tax p {
    font-size: 1.5vw;
  }
}

.titulo1 {
  position: relative;
  left: 23%;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 80%;
  width: 77%;
  background: linear-gradient(90deg,
      rgb(33, 32, 85) 0%,
      rgba(1, 209, 88, 1) 100%);
  border-radius: 0.5vw;
}

.titulo1 h2 {
  padding-right: 10%;
  font-family: Calibri;
}

@media screen and (min-width: 769px) {
  .titulo1 {
    left: 50%;

    width: 50%;

    border-radius: 0.5vw;
  }

  .titulo1 h2 {
    padding-right: 10%;
    font-family: Calibri;
  }
}

.plus {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
  justify-content: space-evenly;
  align-items: center;
}

.plus div {
  margin: 0 auto;
  width: 50%;
}

@media screen and (min-width: 769px) {
  .plus div {
    margin: 0 auto;
    width: 100%;
  }
}

.sale-tax {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "WorkSans", sans-serif;
  color: white;
  width: 100%;
  height: 100%;
}

.sale-tax h2 {
  font-size: 10vw;
  font-weight: 500;
}

.sale-tax p {
  font-size: 1rem;
}

@media screen and (min-width: 769px) {
  .sale-tax {
    justify-content: space-between;
    width: 90%;
    height: 100%;
  }

  .sale-tax h2 {
    font-size: 2.5vw;
  }

  .sale-tax p {
    font-size: 1.5vw;
  }
}

.titulo2 {
  position: relative;
  display: flex;
  align-items: center;
  height: 80%;
  width: 77%;
  background: linear-gradient(90deg,
      rgb(1, 209, 88) 0%,
      rgba(33, 32, 85, 1) 100%);
  border-radius: 0.5vw;
}

.titulo2 h2 {
  padding-left: 10%;
  font-family: Calibri;
}

@media screen and (min-width: 769px) {
  .titulo2 {
    width: 50%;
  }
}

.container-alianza {
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 10%;
  z-index: 50;
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
  opacity: 70%;
}

.nombre_Alianza {
  width: 100%;
  display: flex;
}

.nombre_Alianza h1 {
  text-align: center;
  width: 100%;
  color: white;
  font-family: "WorkSans", sans-serif;
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

.animacion-desplazamiento-titulo {
  animation-duration: 0.5s;
  animation-name: desplazamiento;
  animation-iteration-count: 1;
}

@keyframes desplazamiento {
  0% {
    top: -100%;
  }

  100% {}
}

.animacion-desplazamiento-titulo1 {
  animation-duration: 0.5s;
  animation-name: desplazamiento2;
  animation-iteration-count: 1;
}

@keyframes desplazamiento2 {
  0% {
    left: -10%;
  }

  100% {}
}

.animacion-desplazamiento-titulo2 {
  animation-duration: 0.35s;
  animation-name: desplazamiento3;
  animation-iteration-count: 1;
}

@keyframes desplazamiento3 {
  0% {
    left: 100%;
  }

  25% {
    left: 75%;
  }

  50% {
    left: 50%;
  }

  75% {
    left: 25%;
  }

  100% {
    left: 0;
  }
}
</style>
