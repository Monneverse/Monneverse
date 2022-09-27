
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
    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
  </div>
  <div class="circuitoIzquierdo">
    <img src="/img/Articulo/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuitoDerecho">
    <img src="/img/Articulo/circuito-derecho.png" alt="" />
  </div>
  <!-- Contenedor de Tiempo -->
  <div class="container_time">
    <div class="time">
      <h2>Pre Sale Time</h2>
      <div class="bloque_temporizador">
        <div class="temporizadorDias">
          <h1>{{ diaString }}</h1>
          <h4>Días</h4>
        </div>
        <div class="primerPunto"><h1>:</h1></div>
        <div class="temporizadorHoras">
          <h1>{{ horaString }}</h1>
          <h4>Horas</h4>
        </div>
        <div class="segundoPunto"><h1>:</h1></div>
        <div class="temporizadorMinutos">
          <h1>{{ minutoString }}</h1>
          <h4>Minutos</h4>
        </div>
        <div class="tercerPunto"><h1>:</h1></div>
        <div class="temporizadorSegundos">
          <h1>{{ segundoString }}</h1>
          <h4>Segundos</h4>
        </div>
      </div>
      <a class="btn_comenzar" href="https://mailchi.mp/8ae2d866d909/reservation-form" target="_blank">CLICK HERE</a>
    </div>
  </div>

  <!-- Contenedor de Articulos -->
  <div class="containerArticulo">
    <div class="contenedorDeArticulo">
      <Articulo
        v-for="item in vectorArticulo"
        :key="item"
        :titulo="item.titulo"
        :img="item.imagen"
        :url="item.link"
      />
    </div>
  </div>

  <!-- Contenedor de Redes Sociales -->
  <div class="logo_redes">
    <div class="icon icon-telegram">
      <a href="https://t.me/monnerversecommunity" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
      </a>
    </div>
    <div class="icon icon-reddit">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
      </a>
    </div>
    <div class="icon icon-discord">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="" />
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
          titulo:
            "Why will monner become one of the best cryptocurrencies to investin?",
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
      if (numero > 9) return numero;
      else return "0" + numero;
    },
    ObtenerFechaActual() {
      var distance = this.fechaEvento - Date.now();

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.diaString = this.AgregarCero(days);
      this.horaString = this.AgregarCero(hours);
      this.minutoString = this.AgregarCero(minutes);
      this.segundoString = this.AgregarCero(seconds);
    },
  },
  mounted() {
    setInterval(this.ObtenerFechaActual, 500);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

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
/* container time */
.container_time{
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.time {
  top: 10%;
  position: absolute;
  display:block;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 15rem;
  z-index: 5;
}
.time h2 {
  text-align: center;
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

.degradado {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 3;
  top: 0%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 50%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
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
  font-weight: bold;
}

h1, h2, h4  {
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}


.bloque_temporizador {
  top: 15%;
  left: 2rem;
  position: relative;
  height: 4rem;
  width: 25rem;
  z-index: 6;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.temporizadorDias {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  width: 20%;
  height: 90%;
  left: 4%;
  border-radius: 10%;
  -webkit-box-shadow: 0px 20px 20px 8px #08047a;
  -moz-box-shadow: 0px 20px 20px 8px #08047a;
  box-shadow: -10px 10px 10px 2px #08047a;
}

.temporizadorHoras {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  width: 20%;
  height: 90%;
  left: 28%;
  border-radius: 10%;
  -webkit-box-shadow: 0px 20px 20px 8px #08047a;
  -moz-box-shadow: 0px 20px 20px 8px #08047a;
  box-shadow: -10px 10px 10px 2px #08047a;
}

.temporizadorMinutos {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  width: 20%;
  height: 90%;
  left: 52%;
  border-radius: 10%;
  -webkit-box-shadow: 0px 20px 20px 8px #08047a;
  -moz-box-shadow: 0px 20px 20px 8px #08047a;
  box-shadow: -10px 10px 10px 2px #08047a;
}

.temporizadorSegundos {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  width: 20%;
  height: 90%;
  right: 5%;
  border-radius: 10%;
  -webkit-box-shadow: 0px 20px 20px 8px #08047a;
  -moz-box-shadow: 0px 20px 20px 8px #08047a;
  box-shadow: -10px 10px 10px 2px #08047a;
}

.primerPunto {
  z-index: 5;
  position: relative;
  left: -23%;
}

.segundoPunto {
  z-index: 5;
  position: relative;
  left: 0%;
}

.tercerPunto {
  z-index: 5;
  position: relative;
  left: 23%;
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

.contenedorDeArticulo > * {
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