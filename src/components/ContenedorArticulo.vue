
<script setup>
import { text } from "@fortawesome/fontawesome-svg-core";
import Articulo from "./Articulo.vue";
</script>


<template>
  <!-- Fondos -->
  <div class="fondo">
    <div class="fondoArticulo">
      <img src="/img/circulo_Fondo.png" alt="" class="circuloFondo1" />
      <img src="/img/circuloImagen.png" alt="" class="circuloFondo2" />
      <img
        src="/img/Articulo/circuito-izquierdo.png"
        alt=""
        class="circuitoIzquierdo"
      />
      <img
        src="/img/Articulo/circuito-derecho.png"
        alt=""
        class="circuitoDerecho"
      />
    </div>
  </div>

  <!-- Contenedor de Tiempo -->
  <div class="container_tiempo">
    <h2>Pre Sale Time</h2>
    <div class="bloque_temporizador">
      <div class="dias" id="dias">
        <h1>00:</h1>
      </div>
      <div class="horas" id="horas">
        <h1>00:</h1>
      </div>
      <div class="minutos" id="minutos">
        <h1>00:</h1>
      </div>
      <div class="segundos" id="segundos">
        <h1>00</h1>
      </div>
    </div>
    <button class="btn_comenzar">CLICK HERE</button>
  </div>

  <!-- Contenedor de Articulos -->
  <div class="containerArticulo">
    <div class="contenedorDeArticulo">
      <Articulo
        v-for="item in vectorArticulo"
        :key="item"
        :titulo="item.titulo"
        :img="item.imagen"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vectorArticulo: [
        {
          titulo: "Presale and benefits For investors",
          imagen: "/img/Articulo/imagenArticulo1.png",
          link: "",
        },
        {
          titulo: "How to avoid being scammed by investing in monner coin?",
          imagen: "/img/Articulo/imagenArticulo2.png",
          link: "",
        },
        {
          titulo: "Why will monner become one of the best cryptocurrencies to investin?",
          imagen: "/img/Articulo/imagenArticulo3.png",
          link: "",
        },
        {
          titulo: "Why invest in monner and how to secure your investment?",
          imagen: "/img/Articulo/imagenArticulo4.png",
          link: "",
        },
        {
          titulo: "What to do to not miss any Monner news?",
          imagen: "/img/Articulo/imagenArticulo5.png",
          link: "",
        },
        {
          titulo: "The monner coin and it’s benefits",
          imagen: "/img/Articulo/imagenArticulo6.png",
          link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
  z-index: 0;
}
.fondoArticulo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.circuloFondo1 {
  top: 25%;
  left: 35%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 30rem;
  height: 30rem;
}

.circuloFondo2 {
  top: 18%;
  left: 31%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 40rem;
  height: 40rem;
}

.circuitoIzquierdo {
  position: absolute;
  z-index: 3;
  left: -10%;
  top: 15%;
  height: 80%;
  width: 50%;
  min-width: 30rem;
}

.circuitoDerecho {
  position: absolute;
  z-index: 3;
  right: -10%;
  top: 15%;
  right: -5%;
  height: 80%;
  width: 55%;
  min-width: 30rem;
}
.containerArticulo {
  position: absolute;
  bottom: 10%;
  left: 0;
  margin-left: 20%;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}

.contenedorDeArticulo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70rem;
  height: 30rem;
}

h1 {
  color: #40fb2b;
}

h2 {
  text-transform: uppercase;
  margin-left: 10rem;
  color: white;
  z-index: 7;
  justify-content: center;
  align-items: center;
}

.container_tiempo {
  top: 10%;
  left: 0;
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 35%;
  margin-top: 3rem;
  width: 30rem;
  height: 15rem;
  z-index: 5;
  border: 1px solid white;
}

.bloque_temporizador {
  top: 10%;
  left: 0;
  position: absolute;
  margin-left: 2rem;
  margin-top: 2rem;
  height: 4rem;
  width: 25rem;
  background-color: black;
  z-index: 6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid yellowgreen;
}
.btn_comenzar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  border-radius: 7px;
  height: 3rem;
  font-family: "Courier New", Courier, monospace;
  width: 15rem;
  color: white;
  font-size: 1.5rem;
  margin-top: 7rem;
  margin-left: 7rem;
}
.contenedorDeArticulo > * {
  border: 1px solid red;
  animation: mover 10s normal infinite;
}
@keyframes mover {
  0% {
    transform: translateX(10rem);
  }
  100% {
    transform: rotate(50rem);
  }
}
</style>