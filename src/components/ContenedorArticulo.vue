
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
    <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
    <div class="fondo-oscuro"> </div>
    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
  </div>
  <div class="circuitoIzquierdo">
    <img src="/img/Articulo/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuitoDerecho">
    <img src="/img/Articulo/circuito-derecho.png" alt="" />
  </div>

  <!-- CONTENEDOR DE BOTON METATASK -->
  <div class="btn_buyMonner" click="addTokenFunction()">
    <button class="buyNow">
      <div class="contrato"><b>Contract:</b> <span>0xCD1e230ebA2E1ACEE43eB1AF3948bdb333044893</span></div>
      <div class="texto1">BUY MONNER</div>
      <div class="logos"><img src="/./img/Articulo/BNC.svg" class="binance">
        <img src="/./img/Articulo/Meta.svg" class="meta">
      </div>
    </button>
  </div>

  <!-- Contenedor de Tiempo -->
  <div class="titulo_Tiempo">
    <h2>Pre Sale Time</h2>
  </div>
  <div class="container_time">
    <div class="time">
      <div class="temporizador">

        <div class="bloque_temporizador">
          <div class="temporizadorDias">
            <h1>{{ diaString }}</h1>
            <h4>Días</h4>
          </div>
          <div class="primerPunto">
            <h2>:</h2>
          </div>
          <div class="temporizadorHoras">
            <h1>{{ horaString }}</h1>
            <h4>Horas</h4>
          </div>
          <div class="segundoPunto">
            <h2>:</h2>
          </div>
          <div class="temporizadorMinutos">
            <h1>{{ minutoString }}</h1>
            <h4>Minutos</h4>
          </div>
          <div class="tercerPunto">
            <h2>:</h2>
          </div>
          <div class="temporizadorSegundos">
            <h1>{{ segundoString }}</h1>
            <h4>Segundos</h4>
          </div>
        </div>
      </div>
      <div class="btn_comenzar">
        <a href="https://mailchi.mp/8ae2d866d909/reservation-form" target="_blank">CLICK HERE</a>
      </div>
    </div>
  </div>

  <!-- Contenedor de Articulos -->
  <div class="containerArticulo">
    <div class="contenedorDeArticulo">
      <Articulo v-for="item in vectorArticulo" :key="item" :titulo="item.titulo" :img="item.imagen" :url="item.link" />
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
      vectorTodo: [
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
        {
          titulo: "Why invest in monner and how to secure your investment?",
          imagen: "/img/Articulo/imagenArticulo4.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/why-invest-in-monner-and-how-to-secure-your-investment",
        },
        {
          titulo: "What to do to not miss any Monner news?",
          imagen: "/img/Articulo/imagenArticulo5.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/what-to-do-to-not-miss-any-monner-news",
        },
        {
          titulo: "The monner coin and it’s benefits",
          imagen: "/img/Articulo/imagenArticulo6.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/the-monner-coin-and-its-benefits",
        },

      ],
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
      fechaEvento: new Date(2022, 9, 12, 4, 0, 0, 0),
      diaString: "00",
      horaString: "00",
      minutoString: "00",
      segundoString: "00",
      tokenAddress:'0xCD1e230ebA2E1ACEE43eB1AF3948bdb333044893',
      tokenSymbol : 'MNR',
      tokenDecimals: 18,
      tokenImage: 'https://i.postimg.cc/xCHLP8sw/icon-32x32.png',
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
    async addTokenFunction() {


  

      try {
        console.log('metamask')
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: this.tokenAddress,
              symbol: this.tokenSymbol,
              decimals: this.tokenDecimals,
              image: this.tokenImage,
            },
          },
        });

        if (wasAdded) {
          alert('Thanks for your interest!');
        } else {
          alert('HelloWorld Coin has not been added');
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    setInterval(this.ObtenerFechaActual, 500);
    this.vectorArticulo = this.vectorTodo.slice(0, 3)
    var myfunction = this.vectorTodo.slice(0, 3)

    setTimeout(() => {
      this.vectorArticulo = this.vectorTodo.slice(3, 6)
      setTimeout(() => {
        this.vectorArticulo = this.vectorTodo.slice(0, 3)

      }, 5000)
    }, 5000)
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

@font-face {
  font-family: LCDFONT;
  src: url("/Fonts/LCDFONT.TTF")
}

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT.TTF");
  font-stretch: semi-condensed;
  font-style: semibold;
}

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

.fondo-montana {
  top: -45%;
  opacity: 20%;
  height: 150%;
  z-index: 2;
}

.fondo-oscuro {
  background-color: rgb(0, 0, 0);
  z-index: 10;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  opacity: 50%;
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
  top: 15%;
  left: 38%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 23%;
  height: 50%;
}

.circuloFondo2 {
  top: 10%;
  left: 34%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 30%;
  height: 65%;
}

.circuitoIzquierdo {
  position: absolute;
  z-index: 1;
  left: -10%;
  top: 15%;
  height: 80%;
  width: 50%;
  opacity: 100%;
}

.circuitoIzquierdo img {
  transform: rotateX(180deg);
}

.circuitoDerecho {
  position: absolute;
  z-index: 7;
  right: -10%;
  top: 15%;
  right: -13%;
  height: 80%;
  width: 55%;
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

/* container time */
.container_time {
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
  top: 15%;
  position: absolute;
  grid-template-rows: 33% 33% 33%;
  width: 40%;
  height: 30%;
  z-index: 5;

}

.time h2 {
  text-align: center;
  text-transform: uppercase;
}

.btn_comenzar {
  left: 0%;
  width: 100%;
  height: 40%;
  bottom: 0%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}

.btn_comenzar a {
  height: 100%;
  width: 50%;
  border-radius: 0.5rem;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  color: white;
  font-family: "WorkSans", sans-serif;
  font-weight: 500;
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* CONTENEDOR BOTON BUYNOW */
.btn_buyMonner {
  position: fixed;
  top: 30%;
  left: 37.5%;
  width: 23%;
  height: auto;
}

.buyNow {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right,
      #029F50 0%,
      #0A664E 50%,
      #0E444D 100%);
  border: 1.2px solid black;
  border-radius: .5rem;
  transition: ease-in all .5s;
  animation: button infinite alternate 5s;
  -webkit-box-shadow: 0px 0px 31px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 31px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px px 5px rgba(0, 0, 0, 0.75);
}

.texto1 {
  font-size: 3vw;
  color: white;
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  height: auto;
  width: auto;
}

.contrato {
  padding-top: 1%;
  font-size: .7vw;
  color: white;
  height: auto;
  width: auto;
}

.contrato span {
  font-size: .67vw;
}

.logos {
  position: relative;
  height: auto;
  width: auto;
  justify-content: center;
  align-items: center;
}

.binance {
  position: relative;
  justify-content: center;
  width: 15%;
}

.meta {
  position: relative;
  padding-left: 2%;
  width: 10%;
}

/* contendero de Articulo */
.containerArticulo {
  position: absolute;
  bottom: -2%;
  left: 0;
  width: 90%;
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
  width: 80%;
  height: 80%;
}

.titulo_Tiempo h2 {
  position: fixed;
  left: 38.2%;
  top: 16%;
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  color: white;
  font-size: 4vw;
}

h1,
h2,
h4 {
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}

.bloque_temporizador h1 {
  font-family: "LCDFONT";
  font-weight: 300;
}

.bloque_temporizador {
  top: 15%;
  left: 0%;
  position: relative;
  height: 25%;
  width: 80%;
  z-index: 6;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  visibility: hidden;
}


.temporizadorDias {
  position: absolute;
  z-index: 9;
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
  transition: box-shadow 3s ease;
}

.temporizadorHoras {
  position: absolute;
  z-index: 9;
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
  transition: box-shadow 3s ease;
}

.temporizadorMinutos {
  position: absolute;
  z-index: 9;
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
  transition: box-shadow 3s ease;
}

.temporizadorSegundos {
  position: absolute;
  z-index: 9;
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
  transition: box-shadow 3s ease;
}

.temporizadorDias:hover,
.temporizadorHoras:hover,
.temporizadorMinutos:hover,
.temporizadorSegundos:hover {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

}


.primerPunto {
  z-index: 10;
  position: relative;
  left: -23%;
}

.segundoPunto {
  z-index: 10;
  position: relative;
  left: 0%;
}

.tercerPunto {
  z-index: 10;
  position: relative;
  left: 23%;
}

.logo_redes {
  position: absolute;
  bottom: 1%;
  left: 1%;
  width: 20%;
  height: 5%;
  z-index: 14;
  display: flex;
  justify-content: start;

}

.icon {
  width: 3rem;
  height: auto;
  z-index: 18;
  margin-left: 1%;
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