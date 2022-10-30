<script setup>
import fasesComponentes from "./ComponentsPhases.vue";
defineProps({
  index_pagina: {
    type: Number,
    required: true,
  },
});
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
  <div class="arrow"></div>
  <div class="arrow2"></div>
  <div class="Fases">
    <div class="titulo">
      <h1>phase 2</h1>
    </div>
    <div class="description">
      <p>
        Official pre-sale of 2,000 monners (MNR) on <a href="www.monnerverse.com">www.monneverse.com</a> of the
        portafolios by monnerstaking at the end of the pre-sale.
      </p>
    </div>
  </div>


  <div class="circulo circulo__1">
    <img src="/img/Imagen1.png" />
  </div>

  <div class="circulo circulo__2">
    <img src="/img/Imagen1.png" />
  </div>
  <div class="componentes">
    <div class="componente componentes1">
      <fasesComponentes title="" description="enlist on Pancakeswap one day after our pre-sale" />
    </div>

    <div class="componente componentes2">
      <fasesComponentes title=""
        description="The MonnerStake startup will give its holders 6.2% every 48 hours for the first 2 months. It starts one day after the presale ends." />
    </div>

    <div class="componente componentes3">
      <fasesComponentes title="" description="liquid lock" />
    </div>

    <div class="componente componentes4">
      <fasesComponentes title="" description="schedule burning" />
    </div>

    <div class="componente componentes5">
      <fasesComponentes title="" description="certik audit" />
    </div>

    <div class="componente componentes8">
      <fasesComponentes title="" description="Official enlistment: coinMarketCap, CoinGecko, Hotbit, L-Bank, Probit, 
        MEXC global" />
    </div>

    <div class="componente componentes7">
      <fasesComponentes title="" description=" Increase x5 Budget increase x5 of our advertising campaign" />
    </div>

    <div class="componente componentes6">
      <fasesComponentes title="" description="10.000 holders" />
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      event: "click"
    };
  },
  methods: {
    reDirect() {
      location.replace(
        "https://sites.google.com/view/community-monnerverse/p%C3%A1gina-principal"
      );
    }
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
  font-family: "work Sans", sans-serif;
}

.description {
  color: white;
  width: 45%;
  font-size: 1.3vw;
  font-family: "work Sans", sans-serif;
}

.description a {
  text-decoration: none;
  color: #b48700;
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
    left: 10%;
    top: 26%;
    width: 80%;
  }

  .circulo__2 {
    left: 0%;
    top: 22%;
    width: 100%;
  }


  .componentes {
    position: absolute;
    top: 40%;
    transform: translate(10%, 0);
    left: 2%;
    width: 43%;
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
    margin-right: 8rem;
  }


  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%
  }

  .arrow {
    width: 25px;
    height: 25px;
    top: 66%;
    left: 94%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(-50deg);
    transform: rotate(-50deg);
    border-left: none;
    border-top: none;
    border-right: 4px #fff solid;
    border-bottom: 4px #fff solid;
    z-index: 999;
  }

  .arrow:before {
    content: '';
    width: 15px;
    height: 15px;
    top: 60%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

  .arrow2,
  .arrow2:before {
    position: absolute;
    left: 50%
  }

  .arrow2 {
    width: 25px;
    height: 25px;
    top: 66%;
    left: 9%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    border-left: none;
    border-top: none;
    border-right: 4px #fff solid;
    border-bottom: 4px #fff solid;
    z-index: 999;
  }

  .arrow2:before {
    content: '';
    width: 15px;
    height: 15px;
    top: 60%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow2;
  }

  @keyframes arrow2 {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

}
</style>
