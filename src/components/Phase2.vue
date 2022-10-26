<script setup>
import fasesComponentes from "./ComponentsPhases.vue";
</script>

<template>
  <!--FONDO-->
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
  <div class="fondo fondo-oscurecer"></div>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
  <!--FIN FONDO-->

  <div class="Fases">
    <div class="titulo">
      <h1>phase 2</h1>
    </div>
    <div class="description">
      <p>
        Official pre-sale of 2,000,000 monners at $1.5 publication on
        www.monneverse.com of the portafolios by monnerstaking at the end of the
        pre-sale.
      </p>
    </div>
  </div>


  <button class="readMore" v-on:click="cambiarEstado()">Learn More</button>

  <div class="circulo circulo__1">
    <img src="/img/Imagen1.png" />
  </div>

  <button class="readMore" v-on:click="cambiarEstado()">Learn More</button>

  <div class="circulo circulo__2">
    <img src="/img/Imagen1.png" />
  </div>
  <div class="componentes">
    <div class="componente componentes1">
      <fasesComponentes title="Enlisting" description="enlist on Pancakeswap one day after our pre-sale"
        :isVisible="isVisible" />
    </div>

    <div class="componente componentes2">
      <fasesComponentes title="MonnerStaking" description="MonnerStaking start one day after pre-sale ends,
             payouts of 12,6% of total capital every 48 hours" :isVisible="isVisible" />
    </div>

    <div class="componente componentes3">
      <fasesComponentes title="Liquidity" description="liquid lock" :isVisible="isVisible" />
    </div>

    <div class="componente componentes4">
      <fasesComponentes title="Schedule" description="schedule burning" :isVisible="isVisible" />
    </div>

    <div class="componente componentes5">
      <fasesComponentes title="Certick" description="certick audit" :isVisible="isVisible" />
    </div>

    <div class="componente componentes8">
      <fasesComponentes title="Official enlistment:" description="coinMarketCap, CoinGecko, Hotbit, L-Bank, Probit, 
        MEXC global" :isVisible="isVisible" />
    </div>

    <div class="componente componentes7">
      <fasesComponentes title="Increase x5" description="Budget increase x5 of our advertising campaign"
        :isVisible="isVisible" />
    </div>

    <div class="componente componentes6">
      <fasesComponentes title="Holders" description="10.000 holders" :isVisible="isVisible" />
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      event: "click",
      isVisible: false,
    };
  },
  methods: {
    reDirect() {
      location.replace(
        "https://sites.google.com/view/community-monnerverse/p%C3%A1gina-principal"
      );
    },
    cambiarEstado() {
      this.isVisible = !this.isVisible;
      console.log(this.isVisible);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

/* INICIO ESTILO FONDO */
.fondo {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
  z-index: 1;
}

.filtro-superior {
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
  z-index: 2;
}

.fondo-montana {
  height: 100%;
  top: 20%;
  left: 0;
  z-index: 3;
}

.fondo-oscurecer {
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.circuito {
  position: absolute;
  z-index: 4;
  height: 80%;
  width: 40%;
  min-width: 30rem;
  top: 20%;
}

.circuito-izquierdo {
  left: -14%;
}

.circuito-derecho {
  right: -14%;
  transform: scaleY(-1);
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .circuito-izquierdo {
    visibility: hidden;
  }

  .circuito-derecho {
    visibility: hidden;
  }

  .fondo-montana {
    height: 100%;
    width: 300%;
    top: 30%;
    left: -150%;
    z-index: 3;
  }

  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #121026;
    height: 100%;
    width: 100%;
    display: flex;
    opacity: 30%;
    z-index: 1;
  }

  .fondo-oscuro {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center,
        #48d0ab 0%,
        #097561 50%,
        #505863 100%);
    z-index: 0;
  }

  .fondo-mundial {
    position: fixed;
    top: 12em;
    left: -16em;
    width: 50em;
    height: 35em;
    z-index: 3;
    opacity: 80%;
  }

  .fondo-montana {
    position: fixed;
    top: 24%;
    left: -143%;
    width: 70em;
    height: 40em;
    z-index: 3;
    opacity: 20%;
  }

  .fondo-oscuro {
    position: fixed;
    top: 0;
    left: 0em;
    width: 24em;
    height: 52em;
    background: radial-gradient(circle at center,
        #48d0ab 10%,
        #097561 30%,
        #0F161C 100%);
    z-index: 1;
    opacity: 100%;
  }

  .fondoTokenomics {
    position: fixed;
    top: 20%;
    width: 130%;
    height: 60%;
    visibility: hidden;
  }

  .degradado {
    background: linear-gradient(to right, #090380 55%, transparent);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 38%;
    opacity: 90%;
  }

  .degradado_izquierdo {
    transform: rotate(-60deg);
    right: 55%;
    visibility: hidden;

  }

  .degradado_derecho {
    transform: rotate(230deg);
    left: 40%;
  }

  .circuito-izquierdo {
    left: -70%;
  }

  #logo-1 {
    width: 63%;
    max-height: 14%;
    position: fixed;
    top: 65%;
    left: -7%;
    z-index: 3;
    opacity: 70%;
  }
}

@media only screen and (min-device-width: 412px) and (max-device-width: 915px) {
  .fondo {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #121026;
    height: 100%;
    width: 100%;
    display: flex;
    opacity: 30%;
    z-index: 3;
  }

  .fondo-oscuro {
    position: fixedq;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center,
        #48d0ab 0%,
        #097561 50%,
        #505863 100%);
    z-index: 1;
  }

  .fondo-mundial {
    position: fixed;
    top: 25em;
    left: -8em;
    width: 50em;
    height: 35em;
    z-index: 3;
    opacity: 80%;
  }

  .fondo-montana {
    position: fixed;
    top: 40%;
    left: -110%;
    width: 70em;
    height: 40em;
    z-index: 3;
    opacity: 20%;
  }

  .fondo-oscuro {
    position: fixed;
    top: 0;
    left: 0em;
    width: 100em;
    height: 100em;
    background: radial-gradient(circle at center,
        #48d0ab 10%,
        #097561 30%,
        #0F161C 100%);
    z-index: 1;
    opacity: 100%;
  }

  .fondoTokenomics {
    position: fixed;
    top: 20%;
    left: -12%;
    width: 130%;
    height: 60%;
    visibility: hidden;
  }

  .degradado {
    background: linear-gradient(to right, #090380 55%, transparent);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 38%;
    opacity: 90%;
  }

  .degradado_izquierdo {
    transform: rotate(-60deg);
    right: 55%;
    visibility: hidden;

  }

  .degradado_derecho {
    transform: rotate(230deg);
    left: 40%;
  }

  .circuito-izquierdo {
    left: -70%;
  }

  #logo-1 {
    width: 63%;
    max-height: 14%;
    position: fixed;
    top: 75%;
    left: -8%;
    z-index: 3;
    opacity: 50%;
  }

}

/* FIN ESTILO FONDO */

.Fases {
  justify-content: center;
  text-align: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 6;
  left: 27%;
  top: 45%;
}

.titulo {
  color: white;
  right: 28%;
  bottom: 10%;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 100%;
  text-transform: uppercase;
  z-index: 6;
  font-family: "work Sans";
}

.description {
  color: white;
  width: 45%;
  font-size: 1.3vw;
  font-family: Roboto;
}

.circulo {
  position: absolute;
  z-index: 5;
}

.circulo__1 {
  left: 24%;
  bottom: 40%;
  width: 50%;
  height: 25%;
}

.circulo__2 {
  left: 22%;
  bottom: 30%;
  width: 55%;
  height: 30%;
}

.readMore {
  position: absolute;
  top: 60.5%;
  left: 44%;
  border-radius: 1rem;
  margin-bottom: 15px;
  width: 10%;
  height: 7%;
  font-size: 1vw;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  z-index: 9;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
}

.componentes1 {
  position: absolute;
  top: 30%;
  left: 0%;
  width: 25%;
  height: 64%;
}

.componentes2 {
  position: absolute;
  top: 70%;
  left: 0%;
  width: 28%;
  height: 55%;
}

.componentes3 {
  position: absolute;
  top: 24%;
  left: 23%;
  width: 18%;
  height: 64%;
}

.componentes4 {
  position: absolute;
  top: 80%;
  left: 28%;
  width: 18%;
  height: 64%;
}

.componentes5 {
  position: absolute;
  top: 24%;
  right: 25%;
  width: 18%;
  height: 64%;
}

.componentes6 {
  position: absolute;
  top: 80%;
  right: 28%;
  width: 21%;
  height: 64%;
}

.componentes7 {
  position: absolute;
  top: 30%;
  right: 3%;
  width: 21%;
  height: 64%;
}

.componentes8 {
  position: absolute;
  top: 70%;
  right: 0%;
  width: 28%;
  height: 55%;
}

/* style of mobile */
@media screen and (max-width: 900px) {

  .circuito {
    display: none;
  }

  .Fases {
    left: 0%;
    top: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

  }

  .titulo {
    width: 100%;
    height: fit-content;
    position: initial;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
  }

  .description {
    margin-top: 1rem;
    width: 90%;
    font-size: 4.5vw;
  }

  .circulo {

    left: 20%;
    height: 15%;

  }

  .circulo__1 {
    left: 13%;
    top: 20%;
    width: 80%;
  }

  .circulo__2 {
    left: 8%;
    top: 22%;
    width: 90%;
  }

  .readMore {
    display: none;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 10%;
    font-size: 4vw;
    flex-wrap: wrap;
  }

  .componentes {
    position: absolute;
    top: 40%;
    left: 2%;
    width: 63%;
    height: 40%;
    padding: 4rem;
    margin-right: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    gap: 3rem;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: scroll;
    scrollbar-width: 1rem;
    scroll-snap-type: x mandatory;
    z-index: 1000;
  }


  .componentes::-webkit-scrollbar:vertical {
    height: 10px;
    width: 10px;
  }

  .componentes::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,
        rgb(33, 32, 85) 0%,
        rgba(1, 209, 88, 1) 100%);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  .componentes::-webkit-scrollbar-track {
    border-radius: 10px;
  }


  .componente {
    position: unset;
    width: 75%;
    height: auto;
    margin-right: 3rem;
  }



}
</style>
