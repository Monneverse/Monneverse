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

  <div :class="{ Titulo: true, animacion_titulo: index_pagina == 13 }">
    <h1>TOKENOMICS</h1>
  </div>

  <!-- Contenedor de Contenido -->
  <div :class="{ primerTitulo: true, animacion_titulo2: index_pagina == 13 }">
    <h2>Purchase Tax</h2>
  </div>

  <div class="segundoTitulo">
    <h2>Sale Tax</h2>
  </div>

  <div class="contenedor_Tokenomics">
    <div class="primerTextoIzquierdo">
      <div class="primertexto">
        <h2>To buy 9% slip</h2>
      </div>
      <div class="imagen"><img src="/src/assets/add.svg" alt="" /></div>
      <div class="segundotexto">
        <h2>To buy 10% slip</h2>
      </div>
    </div>
    <div class="segundoTextoIzquierdo">
      <div class="primertexto">
        <h2>Automatic LP 3% of order fees go back into liquidity</h2>
      </div>
      <div class="imagen"><img src="/src/assets/add.svg" alt="" /></div>
      <div class="segundotexto">
        <h2>Automatic LP 3% of order fees go back into liquidity</h2>
      </div>
    </div>
    <div class="tercerTextoIzquierdo">
      <div class="primertexto">
        <h2>
          Bank Security 3% of order fees are stores in BANK SECURITY for
          priceprotection
        </h2>
      </div>
      <div class="imagen"><img src="/src/assets/add.svg" alt="" /></div>
      <div class="segundotexto">
        <h2>
          Bank Security 3% of order fees are stored in BANK SECURITY for
          priceprotectionp
        </h2>
      </div>
    </div>
    <div class="cuartoTextoIzquierdo">
      <div class="primertexto">
        <h2>Management 1.5% of order fees go to the treasury</h2>
      </div>
      <div class="imagen"><img src="/src/assets/add.svg" alt="" /></div>
      <div class="segundotexto">
        <h2>Management 2% of order fees go to the treasury</h2>
      </div>
    </div>
    <div class="quintoTextoIzquierdo">
      <div class="primertexto">
        <h2>Monner Burns 1.5% is burned for stability and price increase</h2>
      </div>
      <div class="imagen"><img src="/src/assets/add.svg" alt="" /></div>
      <div class="segundotexto">
        <h2>Monner Burns 2% is burned for stability and price increase</h2>
      </div>
    </div>
  </div>
  <div class="fondo_Alianza">
  <div class="fondo_Proximalianza">
    <div class="nombre_Alianza">
      <h1>UPCOMING ALLIANCES</h1>
    </div>
    <div class="imagen_Proximalianza">
      <img src="/img/Alianzas/visa.svg" alt="" />
    </div>

    <div class="imagen_Proximalianza2">
      <img src="/img/Alianzas/masterCard.svg" alt="" />
    </div>
  </div>
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

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
  font-family: "Work Sans", sans-serif;
}

h2 {
  font-size: 150%;
  position: relative;
  color: white;
  font-family: "Work Sans", sans-serif;
}

.Titulo {
  position: absolute;
  top: 10%;
  left: 40%;
  width: 20%;
  height: 10%;
}

.Titulo h1 {
  font-size: 300%;
  font-family: "Work Sans", sans-serif;
}

.animacion_titulo {
  animation-duration: 1s;
  animation-name: Tituloh1;
  animation-iteration-count: 1;
}

@keyframes Tituloh1 {
  0% {
    top: -100%;
    opacity: 0%;
  }

  50% {
    top: 0%;
    opacity: 50%;
  }

  100% {
    top: 10%;
    opacity: 100%;
  }
}

/* Fondo imagen Contenido */

.contenedor_Tokenomics {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imagen_Eclipse{
  position: absolute;
  bottom: -10%;
  right:  -10%;
  height: 70%;
  width: 40%;
  z-index: 0;
  /*animation-duration: 4s;
  animation-name: moverCentro;
  animation-iteration-count: infinite;*/
}

/*@keyframes moverCentro {
  0% {

  }
  100%{
    left: 50%;
    top: 40%;
    height:30%;
    width: 10%;
  }
} 
*/

/* Fondo izquierdo Contenido */

.primerTextoIzquierdo {
  top: 0%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 20%;
  text-align: right;

}

.primertexto {
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
  width: 35%;
  height: 100%;
}

.imagen {
  width: 15%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.segundotexto {
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  width: 35%;
  height: 100%;
}

@media (max-width: 1100px) {
  .fondoTokenomics .imagen_Eclipse{height: 20; width: 10; bottom: -5%;}
}

@media (max-width: 1550px) {

.fondoTokenomics .imagen_Eclipse{height: 30; width: 30; bottom: -5%;}
  .contenedor_Tokenomics .primerTextoIzquierdo {
    width: 100%;
  }
  .primertexto {
    width: 100%;
  }
  .contenedor_Tokenomics .primerTextoIzquierdo {
    width: 100%;
  }
  .segundotexto {
    width: 100%;
  }

  .contenedor_Tokenomics .segundoTextoIzquierdo {
    width: 100%;
  }
  .primertexto {
    width: 100%;
  }
  .contenedor_Tokenomics .segundoTextoIzquierdo {
    width: 100%;
  }
  .segundotexto {
    width: 100%;
  }

  .contenedor_Tokenomics .tercerTextoIzquierdo {
    width: 100%;
  }
  .primertexto {
    width: 100%;
  }
  .contenedor_Tokenomics .tercerTextoIzquierdo {
    width: 100%;
  }
  .segundotexto {
    width: 100%;
  }

  .contenedor_Tokenomics .cuartoTextoIzquierdo {
    width: 100%;
  }
  .primertexto {
    width: 100%;
  }
  .contenedor_Tokenomics .cuartoTextoIzquierdo {
    width: 100%;
  }
  .segundotexto {
    width: 100%;
  }

  .contenedor_Tokenomics .quintoTextoIzquierdo {
    width: 100%;
  }
  .primertexto {
    width: 100%;
  }
  .contenedor_Tokenomics .quintoTextoIzquierdo {
    width: 100%;
  }
  .segundotexto {
    width: 100%;
  }
}

.segundoTextoIzquierdo {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 20%;
  text-align: right;
}

.tercerTextoIzquierdo {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 20%;
  text-align: right;
}

.cuartoTextoIzquierdo {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 20%;
  text-align: right;
}

.quintoTextoIzquierdo {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 20%;
  text-align: right;
}

.primerTitulo h2 {
  font-size: 250%;
  right: 5%;
  animation-duration: 3s;
  animation-name: tituloh2;
  animation-iteration-count: 1;
  animation-delay: 2s;
}

@keyframes tituloh2 {
  0% {
    opacity: 0%;
  }

  99% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}

.primerTitulo {
  position: absolute;
  top: 27%;
  left: 20%;
  background: linear-gradient(to left, #01aa50 0%, #0a684e 50%, #10354c 100%);
  width: 20%;
  height: 5%;
  z-index: 4;
  text-align: right;
  border-radius: 1rem;
}

.animacion_titulo2 {
  animation-duration: 1s;
  animation-name: titulo2;
  animation-iteration-count: 1;
}

@keyframes titulo2 {
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

.segundoTitulo h2 {
  font-size: 250%;
  left: 5%;
}

.segundoTitulo {
  position: absolute;
  top: 27%;
  right: 20%;
  background: linear-gradient(to right, #01aa50 0%, #0a684e 50%, #10354c 100%);
  width: 20%;
  height: 5%;
  z-index: 4;
  text-align: left;
  border-radius: 1rem;
  /*animation-duration: 4s;
  animation-name: mover;
  animation-iteration-count: infinite;*/
}

/*@keyframes mover {
  0%{
    
  }
  100%{
    rotate: 360deg;
    top: -50%;
  }
  
}*/

/* Fondo Alianzas */

.fondo_Alianza{
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 10%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nombre_Alianza {
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
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0%;
  background-color: black;
  width: 30%;
  height: 100%;
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

