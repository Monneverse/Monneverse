
<script setup>
import { text } from "@fortawesome/fontawesome-svg-core";
import Articulo from "./Articulo.vue";
</script>


<template>
  <div class="logoEmpresa">
    <img src="/img/logo.svg" alt="logo empresa" />
  </div>
  <div class="fondo fondoArticulo">
    <img src="/img/fondo_Articulo.png" alt="fondo Articulo" />
  </div>
  <div class="circuitoIzquierdo">
    <img src="/img/Articulo/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuitoDerecho">
    <img src=" /img/Articulo/circuito-derecho.png" alt="" />
  </div>

  <div class="container_tiempo">
    <h2>Pre Sale Time</h2>
    <div class="bloque_temporizador">
      <div class="dias" id="dias">
        <h1>{{dia}}:</h1>
      </div>
      <div class="horas" id="horas">
        <h1>{{hora}}:</h1>
      </div>
      <div class="minutos" id="minutos">
        <h1>{{minuto}}:</h1>
      </div>
      <div class="segundos" id="segundos">
        <h1>{{segundo}}</h1>
      </div>
    </div>
    <button class="btn_comenzar"> CLICK HERE</button>
  </div>

  <div class="containe">
    <div class="con">
      <Articulo
        contenedor="Presale and benefits For investors"
        img="/img/Articulo/imagenArticulo1.png"
      />
      <Articulo
        contenedor="How to avoid being scammed by investing in monner coin?"
        img="/img/Articulo/imagenArticulo2.png"
      />
      <Articulo
        contenedor="Why will monner become one of the best cryptocurrencies to investin?"
        img="/img/Articulo/imagenArticulo3.png"
      />
    </div>
  </div>
</template>

<style scoped>
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.fondo {
  width: 100%;
  height: 100%;
  z-index: 0;
}

.circuitoIzquierdo {
  position: absolute;
  z-index: 1;
  left: -10%;
  top: 15%;
  height: 80%;
  width: 50%;
  min-width: 30rem;
}

.circuitoDerecho {
  position: absolute;
  z-index: 1;
  right: -10%;
  top: 15%;
  height: 80%;
  width: 55%;
  min-width: 30rem;
}

.logoEmpresa {
  position: relative;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 2;
}

.contenido {
  display: flex;
}

.containe {
  margin-left: 20%;
  width: 50%;
  height: 50%;
  background-color: chartreuse;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}

.con {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70rem;
  height: 30rem;
}

h1 {
  color: #40fb2b;
}

.bloque_temporizador {
margin-left: 2rem;
margin-top: 2rem;
  height: 4rem;
  width:25rem;
  background-color: black;
  z-index: 6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
    text-transform: uppercase;
    margin-left: 10rem ;
  color: white;
  z-index: 7;
  justify-content: center;
  align-items: center;
}

.container_tiempo {
  position: relative;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 35%;
  margin-top: 3rem;
  width: 30rem;
  height: 15rem;
  z-index: 5;
  
}
.btn_comenzar{
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left,
        #029F50 0%,            
        #0A664E 50%,
        #0E444D 100%);
    border-radius: 7px ;
    height: 3rem;
    font-family: 'Courier New', Courier, monospace;
    width: 15rem;
    color: white;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-left: 7rem;
}

</style>