
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
    </div>
    <div class="degradado_azulizquierdo"></div>
    <div class="degradado_azulderecho"></div>
  </div>
  <div class="circuitoIzquierdo">
    <img src="/img/Articulo/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuitoDerecho">
    <img src="/img/Articulo/circuito-derecho.png" alt="" />
  </div>
  <!-- Contenedor de Tiempo -->
  <div class="container_tiempo">
    <h2>Pre Sale Time</h2>
    <div class="bloque_temporizador">
      <h1>{{diaString}}:{{horaString}}:{{minutoString}}:{{segundoString}}</h1>
    </div>
    <button class="btn_comenzar">CLICK HERE</button>
  </div>

  <!-- Contenedor de Articulos -->
  <div class="containerArticulo">
    <div class="contenedorDeArticulo">
      <Articulo v-for="item in vectorArticulo" :key="item" :titulo="item.titulo" :img="item.imagen" />
    </div>
  </div>

  <!-- Contenedor de Redes Sociales -->
  <div class="logo_redes">
    <div class="icon icon-telegram">
      <a href="https://t.me/monnerversecommunity" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="">
      </a>
    </div>
    <div class="icon icon-reddit">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="">
      </a>
    </div>
    <div class="icon icon-discord ">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="">
      </a>
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
          link: "https://sites.google.com/view/blog-monnerverse/home/presale-and-its-benefits-for-investors",
        },
        {
          titulo: "How to avoid being scammed by investing in monner coin?",
          imagen: "/img/Articulo/imagenArticulo2.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/how-to-avoid-being-scammed-by-investing-in-monner-coin",
        },
        {
          titulo: "Why will monner become one of the best cryptocurrencies to investin?",
          imagen: "/img/Articulo/imagenArticulo3.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/why-will-monner-become-one-of-the-best-cryptocurrencies-to-invest-in",
        },

      ],
      fechaEvento: new Date(2022, 9, 2, 1, 0, 0, 0),
      diaString: "00",
      horaString: "00",
      minutoString: "00",
      segundoString: "00",

    };
  },
  methods: {
    AgregarCero(numero) {
      if (numero > 9)
        return numero
      else
        return "0" + numero
    },
    ObtenerFechaActual() {
      var distance = this.fechaEvento - Date.now();

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.diaString = this.AgregarCero(days)
      this.horaString = this.AgregarCero(hours)
      this.minutoString = this.AgregarCero(minutes)
      this.segundoString = this.AgregarCero(seconds)
    }
  }, mounted() {
    setInterval(this.ObtenerFechaActual, 500)
  }
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
}

/* fondo de la pantalla */
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
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
  z-index: 1;
  left: -10%;
  top: 15%;
  height: 80%;
  width: 50%;
  min-width: 30rem;
  opacity: 100%;
}

.circuitoDerecho {
  position: absolute;
  z-index: 7;
  right: -10%;
  top: 15%;
  right: -5%;
  height: 80%;
  width: 55%;
  min-width: 30rem;
}

.degradado_azulizquierdo {
  background: linear-gradient(to right, #08047A 0.5%, transparent);
  position: absolute;
  transform: rotate(-60deg);
  top: 0%;
  z-index: 3;
  right: 50%;
  width: 50%;
  height: 180%;
  opacity: 70%;

}

.degradado_azulderecho {
  background: linear-gradient(to right, #08047A 0.5%, transparent);
  position: absolute;
  transform: rotate(230deg);
  top: -12%;
  left: 50%;
  width: 50%;
  height: 180%;
  opacity: 70%;
  z-index: 3;
}

/* contendero de Articulo */
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
  z-index: 8;
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
  display: flex;
  justify-content: center;
  align-items: center;

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

.logo_redes {
  position: absolute;
  bottom: 0%;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: auto;
  z-index: 18;
  margin-left: 1rem;
}


.contenedorDeArticulo>* {

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