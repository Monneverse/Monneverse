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

  <div class="Fases">
    <div class="titulo">
      <h1>phase 1</h1>
    </div>
    <div class="description">
      <p>
        development of the entire monneverse ecosystem, website, spanish and
        english discord, telegram, twitter and facebook
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
    <div class="componente componente__1">
      <fasesComponentes title="development" description="development of the entire monnerverse ecosystem website,
             spanish and english, discord, telegram, twitter and facebook."  />
    </div>

    <div class="componente componente__2">
      <fasesComponentes title="collection" description="Collection of documents for important Exchanges:
         CoinGecko,CoinMarketCap, Poloniex, L-Bank, Hotbit, KuCoin, LAKATOKEN,Probit, MEXC global among others."
    />
    </div>

    <div class="componente componente__3">
      <fasesComponentes title="started" description="Collection of documents for important Exchanges:
         CoinGecko,CoinMarketCap, Poloniex, L-Bank, Hotbit, KuCoin, LAKATOKEN,Probit, MEXC global among others."
         />
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
    // LearnMore() {
    // var btn = document.getElementsByClassName("readMore");
    //location.replace(
    //"https://sites.google.com/view/community-monnerverse/p%C3%A1gina-principal"
    //);
    // },
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
  z-index: 5;
  min-width: 30rem;
  height: 80%;
  width: 40%;
}

.circuito-izquierdo {
  left: -12%;
  top: 18%;
}

.circuito-derecho {
  right: -12%;
  top: 18%;


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
  top: 25%;
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
  font-size: 1.4vw;
  text-transform: capitalize;
  font-family: Roboto;
}

.circulo {
  position: absolute;
  z-index: 5;
}

.circulo__1 {
  left: 27%;
  bottom: 58%;
  width: 45%;
  height: 25%;
}

.circulo__2 {
  left: 22%;
  bottom: 48%;
  width: 55%;
  height: 30%;
}


.componente {
  position: absolute;
  width: 25%;
  height: 64%;
}

.componente__1 {
  top: 60%;
  left: 0%;
}

.componente__2 {
  top: 70%;
  left: 36%;
}

.componente__3 {
  top: 60%;
  right: 0%;
}

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
