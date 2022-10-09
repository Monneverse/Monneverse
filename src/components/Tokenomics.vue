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
    <div class="fondoTokenomics">
      <img src="/img/fondo_Tokenomics.png" alt="" />
      <div class="imagen_Eclipse">
        <img src="/img/eclipse_Tokenomics.png" alt="" />
      </div>
    </div>
  </div>
  <div class="fondo fondo-oscurecer"></div>

  <div class="degradado_azuliz"></div>
  <div class="degradado_azulde"></div>

  <div :class="{ Titulo: true, animacion_titulo: index_pagina == 13 }">
    <h1>TOKENOMICS</h1>
  </div>

  <!-- Contenedor de Contenido -->
  <div class="titulo">
    <h1>TOKENOMICS</h1>
  </div>
  <div class="content">
    <div class="purchase-tax">
      <div class="">
        <div class="titulo1">
          <h2>Purchase Tax</h2>
        </div>
      </div>

      <div class="">
        <p>To buy 9% slip</p>
      </div>
      <div class="">
        <p>Automatic LP 3% of order fees go back into liquidity</p>
      </div>
      <div class="">
        <p>
          Bank Security 3% of order fees are stores in BANK SECURITY for price
          protection
        </p>
      </div>
      <div class="">
        <p>Management 1.5% of order fees go to the treasury</p>
      </div>
      <div class="">
        <p>Monner Burns 1.5% is burned for stability and price increase</p>
      </div>
    </div>
    <div class="plus">
      <div class=""></div>
      <div class=""><img src="/img/plus.svg" alt="" /></div>
      <div class=""><img src="/img/plus.svg" alt="" /></div>
      <div class=""><img src="/img/plus.svg" alt="" /></div>
      <div class=""><img src="/img/plus.svg" alt="" /></div>
      <div class=""><img src="/img/plus.svg" alt="" /></div>
    </div>
    <div class="sale-tax">
      <div class="">
        <div class="titulo2">
          <h2>Sale Tax</h2>
        </div>
      </div>
      <div class="">
        <p>To buy 10% slip</p>
      </div>
      <div class="">
        <p>Automatic LP 3% of order fees go back into liquidity</p>
      </div>
      <div class="">
        <p>
          Bank Security 3% of order fees are stored in BANK SECURITY for price
          protection
        </p>
      </div>
      <div class="">
        <p>Management 2% of order fees go to the treasury</p>
      </div>
      <div class="">
        <p>Monner Burns 2% is burned for stability and price increase</p>
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
</template>

<style scoped>
@font-face {
  font-family: "WorkSans";
  src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap")
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
  font-size: 3.5vw;
  font-weight: 500;
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
  position: absolute;
  z-index: 45;
  top: 30%;
  display: grid;
  grid-template-rows: 30vw;
  grid-template-columns: 45% 10% 45%;
  width: 100%;
  height: 57%;
  margin: 0 auto;
  border-radius: 1vw;
}

.purchase-tax {
  position: relative;
  left: 26%;
  display: grid;
  grid-template-rows: 16% 16% 16% 16% 16% 16%;
  font-family: "WorkSans", sans-serif;
  color: white;
  width: 75%;
}

.purchase-tax h2 {
  text-align: right;
  font-size: 2vw;
  font-weight: 500;
}

.purchase-tax p {
  text-align: right;
  font-size: 1.29vw;
}

.titulo1 {
  position: relative;
  left: 23%;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 50%;
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

.plus {
  display: grid;
  grid-template-rows: 16% 16% 16% 16% 16% 16%;
}

.plus img {
  margin: 0 auto;
  height: 50%;
}

.sale-tax {
  position: relative;
  display: grid;
  grid-template-rows: 16% 16% 16% 16% 16% 16%;
  font-family: "WorkSans", sans-serif;
  color: white;
  width: 75%;
}

.sale-tax h2 {
  font-size: 2vw;
  font-weight: 500;
}

.sale-tax p {
  font-size: 1.29vw;
}

.titulo2 {
  display: flex;
  align-items: center;
  height: 50%;
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

.imagen-alianza img:first-of-type {

  width: 6vw;
}

.degradado_azuliz {
  background: linear-gradient(to right, #08047a 50%, transparent);
  position: absolute;
  transform: rotate(-60deg);
  top: 0%;
  z-index: 43;
  right: 50%;
  width: 50%;
  height: 180%;
  opacity: 70%;
}

.degradado_azulde {
  background: linear-gradient(to right, #08047a 50%, transparent);
  position: absolute;
  transform: rotate(230deg);
  top: -5%;
  left: 50%;
  width: 60%;
  height: 180%;
  z-index: 43;
  opacity: 70%;
}
</style>
