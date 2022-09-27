<script>
import ContenedorTokenomics from "./ContenedorTokenomics.vue"

</script>


<template>
  <!-- Fondos -->
  <div class="fondo">
    <div class="fondoTokenomics">
      <img src="/img/fondo_Tokenomics.png" alt="" />
    </div>
  </div>

  <div class="contenedor_Tokenomics">
    <contenedor-tokenomics/>
  </div>

  <div class="fondo_Derecho">
    <h2>hsdlksdlsjljsjldsjdljsj</h2>
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

.fondo_Proximalianza {
  position: absolute;
  align-items: center;
  bottom: 0%;
  left: 30%;
  background-color: black;
  width: 30%;
  height: 10%;
  border: 1px solid white;
  z-index: 2;
  opacity: 70%;
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


.fondo_Derecho{
position: absolute;
  top: 30%;
  right:20%;
  width: 25%;
  height: 45%;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 1px solid red;
  background-color: white;
  z-index: 3;
}

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

.contenedor_Tokenomics{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  border: 1px solid red;
}


</style>

