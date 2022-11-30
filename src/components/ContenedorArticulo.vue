<script>
import Articulo from "./Articulo.vue";

export default {
  components: {
    Articulo,
  },

  props: ["enterAnimation", "exitAnimation", "isRevert"],
  data() {
    return {
      isChanged: false,
      vectorTodo: [
        {
          titulo: "Presale and benefits For investors",
          imagen: "/img/Articulo/articulo_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/presale-and-its-benefits-for-investors",
        },
        {
          titulo: "How to avoid being scammed by investing in monner coin?",
          imagen: "/img/Articulo/articulo2_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/how-to-avoid-being-scammed-by-investing-in-monner-coin",
        },
        {
          titulo:
            "Why will monner become one of the best cryptocurrencies to investin?",
          imagen: "/img/Articulo/articulo3_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/why-will-monner-become-one-of-the-best-cryptocurrencies-to-invest-in",
        },
        {
          titulo: "Why invest in monner and how to secure your investment?",
          imagen: "/img/Articulo/articulo4_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/why-invest-in-monner-and-how-to-secure-your-investment",
        },
        {
          titulo: "What to do to not miss any Monner news?",
          imagen: "/img/Articulo/articulo5_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/what-to-do-to-not-miss-any-monner-news",
        },
        {
          titulo: "The monner coin and it’s benefits",
          imagen: "/img/Articulo/articulo6_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/the-monner-coin-and-its-benefits",
        },
      ],
      vectorArticulo: [
        {
          titulo: "Presale and benefits For investors",
          imagen: "/img/Articulo/articulo_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/presale-and-its-benefits-for-investors",
        },
        {
          titulo: "How to avoid being scammed by investing in monner coin?",
          imagen: "/img/Articulo/articulo2_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/how-to-avoid-being-scammed-by-investing-in-monner-coin",
        },
        {
          titulo:
            "Why will monner become one of the best cryptocurrencies to investin?",
          imagen: "/img/Articulo/articulo3_lite.png",
          link: "https://sites.google.com/view/blog-monnerverse/home/why-will-monner-become-one-of-the-best-cryptocurrencies-to-invest-in",
        },
      ],
      inicio: 0,
      salto: 3,
    };
  },
  methods: {
    CambiarArticulos() {
      this.isChanged = true;
      this.vectorArticulo = this.vectorTodo.slice(
        this.inicio,
        this.inicio + this.salto
      );
      if (this.inicio == 0) {
        this.inicio = this.salto;
      } else {
        this.inicio = 0;
      }
    },
    next() {
      let panel = document.getElementById('contenido');
      let count = parseInt((panel.scrollLeft + panel.offsetWidth) / panel.offsetWidth);
      if (panel.offsetWidth + panel.scrollLeft + 2 >= panel.scrollWidth) {
        this.CambiarArticulos();
        panel.scrollLeft = 0;
        return;
      }
      panel.scrollLeft = panel.offsetWidth * count;

    },
    before() {
      let panel = document.getElementById('contenido');
      let count = parseInt((panel.scrollLeft - panel.offsetWidth) / panel.offsetWidth);
      if (count != (panel.scrollLeft - panel.offsetWidth) / panel.offsetWidth) {
        count++;
      }
      if (panel.scrollLeft == 0) {
        this.CambiarArticulos();
      }
      panel.scrollLeft = panel.offsetWidth * count;
    
    }
  },
  mounted() {
    this.CambiarArticulos();
  },
};
</script>
<template>
  <!-- Fondos -->
  <div class="fondo">
    <div class="fondoArticulo"></div>
    <div class="circuloFondo circuloFondo1"></div>
    <div class="circuloFondo circuloFondo2"></div>
    <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" alt="Background-montain" /></div>
    <div class="fondo-oscuro"></div>
    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
  </div>
  <div class="circuitoIzquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="Circuit-left" />
  </div>
  <div class="circuitoDerecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="Circuit-right" />
  </div>

  <!-- CONTENEDOR DE BOTON METATASK -->
  <div class="btn_buyMonner" :class="{
    animated: true,
    duration1s: true,
    fadeInDown: this.enterAnimation,
    fadeOutUp: this.exitAnimation,
  }">
    <!-- <div class="contrato">
      <span>Contract:0xCD1e230ebA2E1ACEE43eB1AF3948bdb333044893</span>
    </div> -->
    <div class="separar"></div>
    <div class="buyNow">
      <a target="_blank" class="btn_moner">
        <div class="texto1">BUY MONNER</div>
        <div class="logos">
          <div class="binance"><img src="/./img/Articulo/BNC.svg" /></div>
          <div class="meta"><img src="/./img/Articulo/Meta.svg" /></div>
        </div>
      </a>
    </div>
  </div>

  <!-- Contenedor de Articulos -->
  <div id="contenido" class="containerArticulo">
    <div class="contenedorDeArticulo">
      <Articulo :class="{
        articulo__aparecer:
          (this.enterAnimation && !this.isRevert) ||
          (this.isChanged && !this.enterAnimation && !this.isRevert),
        articulo__aparecer_revert: this.enterAnimation && this.isRevert,
        articulo__desaparecer_revert: this.exitAnimation && this.isRevert,
        articulo__desaparecer: this.exitAnimation && !this.isRevert,
      }" v-for="item in vectorArticulo" :key="item" :titulo="item.titulo" :img="item.imagen" :url="item.link" />
    </div>
  </div>

  <!-- Contenedor de Redes Sociales -->
  <div class="arrow" @click="next()"></div>
  <div class="arrow2" @click="before()"></div>
  <div @click="CambiarArticulos()" class="flecha flecha_before">
    <img src="../assets/flecha.svg" alt="arrow before" />
  </div>
  <div @click="CambiarArticulos()" class="flecha flecha_next">
    <img src="../assets/flecha.svg" alt="arrow next" />
  </div>
  <!-- <div class="textscroll">
    <h3>Scroll to Right</h3>
  </div> -->
  <div class="logo-redes">
    <div class="icon">
      <a href="https://t.me/MonnerverseCripto" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
      </a>
    </div>
    <div class="icon">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
      </a>
    </div>
    <div class="icon">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="" />
      </a>
    </div>
  </div>
</template>

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
  border: 2px solid red;
}

.circuloFondo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 6px solid #164B2E;
  z-index: 2;
  opacity: .3;
}

.circuloFondo1 {
  width: 15rem;
  height: 15rem;
}

.circuloFondo2 {
  width: 30rem;
  height: 30rem;
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
  top: 18%;
  left: 19%;
  width: 60%;
  height: auto;
}

.btn_buy__aparecer {
  animation: btn_aparecer 0.8s forwards ease-in-out;
  -webkit-animation: btn_aparecer 0.8s forwards ease-in-out;
}

.btn_buy__desaparecer_revert {
  animation: btn_aparecer 0.8s forwards ease-in-out;
  -webkit-animation: btn_aparecer 0.8s forwards ease-in-out;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
}

@keyframes btn_aparecer {
  0% {
    left: -40%;
    top: 100%;
    rotate: 180deg;
  }
}

.btn_buy__desaparecer {
  animation: btn_desaparecer 0.8s forwards ease-in-out;
  -webkit-animation: btn_desaparecer 0.8s forwards ease-in-out;
}

.btn_buy__aparecer_revert {
  animation: btn_desaparecer 0.8s forwards ease-in-out;
  -webkit-animation: btn_desaparecer 0.8s forwards ease-in-out;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  z-index: 1000;
}

@keyframes btn_desaparecer {
  100% {
    left: 70%;
    top: 100%;
    rotate: 180deg;
  }
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
  animation: button infinite alternate 5s;
  -webkit-box-shadow: 0px 0px 31px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 31px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  left: 28.5%;
  font-size: 1vw;
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

.articulo__aparecer:nth-child(1) {
  position: relative;
  left: 0;
  animation: aparecer 0.8s forwards ease-in-out;
  -webkit-animation: aparecer 0.8s forwards ease-in-out;
}

.articulo__aparecer:nth-child(2) {
  position: relative;
  left: 0;
  animation: aparecer 0.6s forwards ease-in-out;
  -webkit-animation: aparecer 0.6s forwards ease-in-out;
}

.articulo__aparecer:nth-child(3) {
  position: relative;
  left: 0;
  animation: aparecer 0.4s forwards ease-in-out;
  -webkit-animation: aparecer 0.4s forwards ease-in-out;
}

.articulo__desaparecer_revert:nth-child(1) {
  position: relative;
  left: 0;
  animation: aparecer 0.4s forwards ease-in-out reverse;
  -webkit-animation: aparecer 0.4s forwards ease-in-out reverse;
}

.articulo__desaparecer_revert:nth-child(2) {
  position: relative;
  left: 0;
  animation: aparecer 0.6s forwards ease-in-out reverse;
  -webkit-animation: aparecer 0.6s forwards ease-in-out reverse;
}

.articulo__desaparecer_revert:nth-child(3) {
  position: relative;
  left: 0;
  animation: aparecer 0.8s forwards ease-in-out reverse;
  -webkit-animation: aparecer 0.8s forwards ease-in-out reverse;
}

.articulo__desaparecer:nth-child(1) {
  position: relative;
  left: 0;
  animation: desaparecer 0.8s forwards ease-in-out;
  -webkit-animation: desaparecer 0.8s forwards ease-in-out;
}

.articulo__desaparecer:nth-child(2) {
  position: relative;
  left: 0;
  animation: desaparecer 0.6s forwards ease-in-out;
  -webkit-animation: desaparecer 0.6s forwards ease-in-out;
}

.articulo__desaparecer:nth-child(3) {
  position: relative;
  left: 0;
  animation: desaparecer 0.4s forwards ease-in-out;
  -webkit-animation: desaparecer 0.4s forwards ease-in-out;
}

.articulo__aparecer_revert:nth-child(1) {
  position: relative;
  left: 0;
  animation: desaparecer 0.8s ease-in-out reverse;
  -webkit-animation: desaparecer 0.8s ease-in-out reverse;
}

.articulo__aparecer_revert:nth-child(2) {
  position: relative;
  left: 0;
  animation: desaparecer 0.6s ease-in-out reverse;
  -webkit-animation: desaparecer 0.6s ease-in-out reverse;
}

.articulo__aparecer_revert:nth-child(3) {
  position: relative;
  left: 0;
  animation: desaparecer 0.4s ease-in-out reverse;
  -webkit-animation: desaparecer 0.4s ease-in-out reverse;
}

@keyframes aparecer {
  0% {
    left: 127%;
  }
}

@keyframes desaparecer {
  100% {
    left: -127%;
  }
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

.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}

/* .textscroll {
  position: fixed;
  top: 84%;
  left: 26%;
  color: white;
  z-index: 999;
} */
.flecha {
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3rem;
  z-index: 10;
  position: absolute;
  top: 65%;
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;
}

.flecha:hover {
  padding: 0.7rem;
}

.flecha_before {
  margin: 0;
  left: 10%;
}

.flecha_before>img {
  margin: 0;
  rotate: 90deg;
}

.flecha_next {
  right: 10%;
}

.flecha_next>img {
  rotate: -90deg;
}
@media screen and (max-width: 900px) {
  .flecha {
    display: none;
  }
  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 25px;
    height: 25px;
    top: 56%;
    left: 94%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(-50deg);
    transform: rotate(-50deg);
    border-left: none;
    border-top: none;
    border-right: 4px #ffc000 solid;
    border-bottom: 4px #ffc000 solid;
    z-index: 999;
  }

  .arrow:before {
    content: "";
    width: 15px;
    height: 15px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #ffc000 solid;
    border-bottom: 2px #ffc000 solid;
    animation-duration: 2s;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    animation-name: arrow;
    -webkit-animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
      -webkit-transform: translate(-10px, -10px);
    }
  }

  .arrow2,
  .arrow2:before {
    position: absolute;
    left: 50%;
  }

  .arrow2 {
    width: 25px;
    height: 25px;
    top: 56%;
    left: 9%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    border-left: none;
    border-top: none;
    border-right: 4px #ffc000 solid;
    border-bottom: 4px #ffc000 solid;
    z-index: 999;
  }

  .arrow2:before {
    content: "";
    width: 15px;
    height: 15px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #ffc000 solid;
    border-bottom: 2px #ffc000 solid;
    animation-duration: 2s;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    animation-name: arrow2;
    -webkit-animation-name: arrow2;
  }

  @keyframes arrow2 {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
      -webkit-transform: translate(-10px, -10px);
    }
  }



  .btn_buyMonner {
    top: 15%;
  }

  .containerArticulo {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30%;
    overflow: hidden;
    overflow-x: scroll;
    overscroll-behavior-x: initial;
    scroll-snap-type: x mandatory;
    padding: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
    margin: 0;
  }

  .containerArticulo::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .containerArticulo::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,
        rgb(33, 32, 85) 0%,
        rgba(1, 209, 88, 1) 100%);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  .containerArticulo::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    display: block;
  }

  .logo-redes {
    display: none;
  }

  .degradado_derecho {
    left: 80%;
  }

  .degradado_izquierdo {
    right: 80%;
  }

  .contenedorDeArticulo {
    width: 100%;
    height: 90%;
  }

  .contenedorDeArticulo>* {
    width: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
    top: 0%;
    flex: none;
    border-radius: 2rem;
    height: 100%;
  }

  .btn_buyMonner {
    top: 20%;
    left: 10%;
    height: 7%;
    width: 80%;
    font-size: 3vw;

  }

  .buyNow {
    left: 10%;
    width: 100%;
    height: 130%;
    padding: .1rem;
  }

  .btn_moner {
    width: 100%;
    padding: .2rem;
  }

  .buyNow .logos {
    top: -18%;
  }

  .buyNow .logos .meta {
    top: -10%;
    width: 10%;
  }

  .separar {
    height: 20%;
  }

  .contrato {
    font-size: 3vw;
    width: 100%;
    margin: 0 auto;
    left: 0;
    display: flex;
    justify-content: center;
  }

  .contrato span {
    font-size: 4vw;
  }

  .buyNow .texto1 {
    font-size: 1.5rem;
    top: 30%;
  }

  .binance {
    width: 36%;
    bottom: 10%;
  }

  .logo-redes {
    display: none;
  }

  .circuitoIzquierdo,
  .circuitoDerecho {
    visibility: hidden;
  }

  .fondo-montana {
    top: 0%;
    height: 80%;
  }
}

.animated.duration1s {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
</style>
