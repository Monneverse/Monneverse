<script setup>
import { text } from "@fortawesome/fontawesome-svg-core";
import Articulo from "./Articulo.vue";
defineProps({
  index_pagina: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <!-- Fondos -->
  <div class="fondo">
    <div class="fondoArticulo">
      <img src="/img/circulo_Fondo.png" alt="" class="circuloFondo1" />
      <img src="/img/circuloImagen.png" alt="" class="circuloFondo2" />
    </div>
    <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
    <div class="fondo-oscuro"></div>
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
  <div class="btn_buyMonner">
    <div class="contrato">
      <b>Contract:</b> <span>0xCD1e230ebA2E1ACEE43eB1AF3948bdb333044893</span>
    </div>
    <div class="buyNow">
      <button class="btn_moner">
        <div class="texto1">BUY MONNER</div>
        <div class="logos">
          <div class="binance"><img src="/./img/Articulo/BNC.svg" /></div>
          <div class="meta"><img src="/./img/Articulo/Meta.svg" /></div>
        </div>
      </button>
    </div>
  </div>

  <!-- Contenedor de Articulos -->
  <div class="containerArticulo">
    <div v-if="index_pagina == 5" class="contenedorDeArticulo">
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
    this.vectorArticulo = this.vectorTodo.slice(0, 3);
    var myfunction = this.vectorTodo.slice(0, 3);

    setTimeout(() => {
      this.vectorArticulo = this.vectorTodo.slice(3, 6);
      setTimeout(() => {
        this.vectorArticulo = this.vectorTodo.slice(0, 3);
      }, 5000);
    }, 5000);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

@font-face {
  font-family: LCDFONT;
  src: url("/Fonts/LCDFONT.TTF");
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
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 58%;
}

/* CONTENEDOR BOTON BUYNOW */
.btn_buyMonner {
  position: fixed;
  top: 19%;
  left: 20%;
  width: 60%;
  height: auto;
}

.buyNow {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.btn_moner {
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, #029f50 0%, #0a664e 50%, #0e444d 100%);
  border: 1.2px solid black;
  border-radius: 0.5rem;
  transition: ease-in all 0.5s;
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
  font-family: "Bahn";
  position: relative;
  left: 27%;
  font-size: 1.3vw;
  color: white;
  height: 20%;
  width: 158%;
}

.contrato span {
  font-family: "Bahn";
  font-size: 1.1vw;
}

.logos {
  position: relative;
  height: auto;
  width: auto;
  display: flex;
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

/* contendero de Articulo*/
.containerArticulo {
  position: absolute;
  bottom: 5%;
  left: 12%;
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
}

.contenedorDeArticulo {
  display: flex;
  width: 100%;
  height: 80%;
}

@media screen and (width > 850px) {
  .containerArticulo {
    position: absolute;
    bottom: 5%;
    width: 100%;
    left: 0;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8;
    margin: 0 auto;
  }

  .contenedorDeArticulo {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    height: 100%;
  }
}

h1,
h2,
h4 {
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
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

/* vista de movil*/
@media screen and (max-width: 850px) {
  .btn_buyMonner {
    top: 15%;
  }

  .containerArticulo {
    top: 30%;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
  }

  .containerArticulo::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .containerArticulo::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .logo_redes {
    display: none;
  }

  .degradado_derecho {
    left: 80%;
  }

  .degradado_izquierdo {
    right: 80%;
  }

  .contenedorDeArticulo>* {
    width: 90%;
    top: 0%;
    flex: none;
  }

  .btn_buyMonner {
    top: 20%;
    left: 25%;
    height: 5%;
    width: 55%;
  }

  .buyNow {
    height: 130%;
  }

  .buyNow .logos {
    top: -10%;
  }

  .buyNow .logos .meta {
    width: 10%;
  }

  .contrato {
    font-size: 55%;
    left: -2%;
  }

  .contrato span {
    font-size: 90%;
  }

  .buyNow .texto1 {
    top: 30%;
  }

  .binance {
    width: 25%;
    bottom: 10%;
  }
}
</style>
