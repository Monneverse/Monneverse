<script>
export default {
  props: {
    index_pagina: {
      type: Number,
      required: true,
    },
  },
}
</script>


<template>
  <!-- Fondos -->
  <div class="fondo">
    <div class="fondoTokenomics">
      <img src="/img/fondo_Tokenomics.png" alt="" />
    </div>
  </div>

    <div :class="{'Titulo':true, 'animacion_titulo': index_pagina == 13}" >
      <h1>TOKENOMICS</h1>
    </div>

  <!-- Contenedor de Contenido -->
  <div :class="{'primerTitulo':true, 'animacion_titulo2': index_pagina == 13}">
    <h2 >Purchase Tax</h2>
  </div>

  <div class="fondo_Izquierdo">
    <div class="primerTextoIzquierdo"><h2>To buy 9% slip</h2></div>
    <div class="segundoTextoIzquierdo"><h2>Automatic LP 3% of order fees go back into liquidity </h2></div>
    <div class="tercerTextoIzquierdo"><h2>Bank Security 3% of order fees are stores in BANK SECURITY for price protection</h2></div>
    <div class="cuartoTextoIzquierdo"><h2>Management 1.5% of order fees go to the treasury</h2></div>
    <div class="quintoTextoIzquierdo"><h2>Monner Burns 1.5% is burned for stability and price increase</h2></div>
  </div>

  <!-- Contenedor de log Tokenomics -->
  <div class="logo_Tokenomics">
    <div class="primeraImagen">
      <img src="/src/assets/add.svg" alt="">
    </div>
    <div class="segundaImagen">
      <img src="/src/assets/add.svg" alt="">
    </div>
    <div class="terceraImagen">
      <img src="/src/assets/add.svg" alt="">
    </div>
    <div class="cuartaImagen">
      <img src="/src/assets/add.svg" alt="">
    </div>
    <div class="quintaImagen">
      <img src="/src/assets/add.svg" alt="">
    </div>
  </div>



  <div class="segundoTitulo">
    <h2>Sale Tax</h2>
  </div>
  <div class="fondo_Derecho">
    <div class="primerTextoDerecho"><h2>To buy 10% slip</h2></div>
    <div class="segundoTextoDerecho"><h2>Automatic LP 3% of order fees go back into liquidity</h2></div>
    <div class="tercerTextoDerecho"><h2>Bank Security 3% of order fees are stored in BANK SECURITY for price protection</h2></div>
    <div class="cuartoTextoDerecho"><h2>Management 2% of order fees go to the treasury</h2></div>
    <div class="quintoTextoDerecho"><h2>Monner Burns 2% is burned for stability and price increase</h2></div>
  </div>

  <div class="fondo_Proximalianza">
    <div class="nombre_Alianza"><h1>UPCOMING ALLIANCES</h1></div>
    <div class="imagen_Proximalianza">
      <img src="/img/Alianzas/visa.svg" alt="" />
    </div>

    <div class="imagen_Proximalianza2">
      <img src="/img/Alianzas/masterCard.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');


/* Fondo de la pagina*/

img {
  height: 100%;
  width: 100%;
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

.fondoTokenomics {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

h1 {
  font-size: 150%;
  position: relative;
  margin-left: 5%;
  margin-top: 6%;
  color: white;
  font-family: 'Work Sans', sans-serif;
  
}

h2 {
  font-size: 150%;
  position: relative;
  color: white;
  font-family: 'Work Sans', sans-serif;
}

.Titulo{
  position: absolute;
  top: 10%;
  left: 40%;
  width: 20%;
  height: 10%;
}
.Titulo h1{
  font-size: 300%;
  font-family: 'Work Sans', sans-serif;
}
.animacion_titulo{
  animation-duration: 1s;
  animation-name: Tituloh1;
  animation-iteration-count: 1;
}

@keyframes Tituloh1 {
  0%{
    top:-100%;
    opacity: 0%;
  }
   50%{
    top:0%;
    opacity: 50%;
  }
  100%{
    top: 10%;
    opacity: 100%;
  }
}


/* Fondo imagen Contenido */ 
.logo_Tokenomics{
  position: absolute;
  top: 34%;
  left: 48%;
  width: 5%;
  height: 45%;
  z-index: 3;
  display: block;
  justify-content: center;
  align-items: center;
}

.primeraImagen> img {
  width: 3rem;
  height: auto;
}
.segundaImagen> img {
  width: 3rem;
  height: auto;
 
}
.terceraImagen> img {
  width: 3rem;
  height: auto;
  margin-top:15%;
}
.cuartaImagen> img {
  width: 3rem;
  height: auto;
  margin-top:40%;
}
.quintaImagen> img {
  width: 3rem;
  height: auto;
  margin-top:15%;
}




/* Fondo izquierdo Contenido */ 

.fondo_Izquierdo {
  position: absolute;
  top: 35%;
  left:20%;
  width: 25%;
  height: 45%;
  display: block;
  justify-content: right;
  align-items: center;
  z-index: 5;

}

.primerTextoIzquierdo{
  position: relative;
  width: 100%;
  height: 15%;
  text-align: right;
}

.segundoTextoIzquierdo{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: right;
}
.tercerTextoIzquierdo{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: right;
  
}

.cuartoTextoIzquierdo{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: right;
  margin-top: 5%;
}

.quintoTextoIzquierdo{
  position: relative;
  width: 100%;
  float: right;
  height: 19%;
  text-align: right;
}

.primerTitulo h2{
  font-size: 250%;
  right: 5%;
  animation-duration: 3s;
  animation-name: tituloh2;
  animation-iteration-count: 1;
  animation-delay: 2s;
}
@keyframes tituloh2{
  0% {
   opacity: 0%;
  }
  99%{
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
.primerTitulo{
  position: absolute;
  top: 27%;
  left: 25%;
  background: linear-gradient(to left, #01AA50 0%, #0A684E 50%, #10354C 100%);
  width: 20%;
  height: 5%;
  z-index: 4;
  text-align: right;
  border-radius: 1rem;
 
}

.animacion_titulo2{
  animation-duration: 1s;
  animation-name: titulo2;
  animation-iteration-count: 1;
}
@keyframes titulo2{
  0% {
    border-radius: 0rem;
    left: -100%;
    top: 60%;
    height: 40%;
  }
  100% {
    left: 25%;
    top: 27%;
    border-radius: 1rem;
  }
}
/* Fondo derecho Contenido */ 
.fondo_Derecho{
position: absolute;
  top: 35%;
  right:20%;
  width: 25%;
  height: 45%;
  display: block;
  justify-content: left;
  align-items: center;
  z-index: 3;
}


.primerTextoDerecho{
  position: relative;
  width: 100%;
  height: 15%;
  text-align: left;
}

.segundoTextoDerecho{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: left;
}
.tercerTextoDerecho{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: left;
  
}

.cuartoTextoDerecho{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: left;
  margin-top: 5%;
}

.quintoTextoDerecho{
  position: relative;
  width: 100%;
  float: left;
  height: 19%;
  text-align: left;
}

.segundoTitulo h2{
  font-size: 250%;
  left: 5%;
}

.segundoTitulo{
  position: absolute;
  top: 27%;
  right: 25%;
  background: linear-gradient(to right, #01AA50 0%, #0A684E 50%, #10354C 100%);
  width: 20%;
  height: 5%;
  z-index: 4;
  text-align: left;
  border-radius: 1rem;
}


/* Fondo Alianzas */
.nombre_Alianza{
position: absolute;
  top: 0;
  left: 0;
  width: 54%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fondo_Proximalianza {
  position: absolute;
  align-items: center;
  bottom: 0%;
  left: 30%;
  background-color: black;
  width: 30%;
  height: 10%;
  z-index: 2;
  opacity: 70%;
}
.imagen_Proximalianza {
  position: absolute;
  top: 0;
  left: 55%;
  width: 20%;
  height: 100%;
}

.imagen_Proximalianza2 {
  position: absolute;
  top: 0;
  right: 5%;
  width: 20%;
  height: 100%;
}



</style>

