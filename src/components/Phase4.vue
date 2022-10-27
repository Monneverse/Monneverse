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
      <h1>phase 4</h1>
    </div>
    <div class="description">
      <p>Start of Staking phase 2</p>
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
      <fasesComponentes title="" description="Development of MonnerTrading, MonnerHosting, and MonnerBlockchaine."
         />
    </div>

    <div class="componente componentes2">
      <fasesComponentes title="" description="Official <b>CEO</b> conference for the public."  />
    </div>

    <div class="componente componentes3">
      <fasesComponentes title=""
        description="Development and presentation of MonnerMetaverse-MonnerGame in augmented virtual reality."
         />
    </div>

    <div class="componente componentes4">
      <fasesComponentes title="" description="15.000 holders Phase 4."  />
    </div>

    <div class="componente componentes5">
      <fasesComponentes title="" description="MonnerTrading official Launch."  />
    </div>

    <div class="componente componentes6">
      <fasesComponentes title="" description="Official MonnerMetaverse-MonnerGame in argumented reality."
         />
    </div>

    <div class="componente componentes7">
      <fasesComponentes title="" description="Phase 3 Staking Programming."  />
    </div>

    <div class="componente componentes8">
      <fasesComponentes title="" description="Scheduled burning."  />
    </div>

    <div class="componente componentes9">
      <fasesComponentes title="" description="Enlistment in other High Recognition Exchanges"  />
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
  top: 50%;
}

.titulo {
  color: white;
  right: 27%;
  bottom: 8%;
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
  font-size: 1.2vw;
  font-family: Roboto;
}

.circulo__1 {
  position: absolute;
  left: 35%;
  bottom: 40%;
  width: 30%;
  height: 20%;
  z-index: 5;
}

.circulo__2 {
  position: absolute;
  left: 32.5%;
  bottom: 30%;
  width: 35%;
  height: 30%;
  z-index: 5;
}

.componentes1 {
  position: absolute;
  top: 30%;
  left: 0%;
  width: 20%;
  height: 64%;
}

.componentes2 {
  position: absolute;
  top: 70%;
  left: 0%;
  width: 20%;
  height: 55%;
}

.componentes3 {
  position: absolute;
  top: 20%;
  left: 24%;
  width: 27%;
  height: 55%;
}

.componentes4 {
  position: absolute;
  top: 80%;
  left: 18%;
  width: 18%;
  height: 64%;
}

.componentes5 {
  position: absolute;
  top: 20%;
  right: 30%;
  width: 18%;
  height: 64%;
}

.componentes6 {
  position: absolute;
  top: 30%;
  right: 0%;
  width: 27%;
  height: 64%;
}

.componentes7 {
  position: absolute;
  top: 80%;
  right: 19%;
  width: 18%;
  height: 64%;
}

.componentes8 {
  position: absolute;
  top: 70%;
  right: -1%;
  width: 28%;
  height: 55%;
}

.componentes9 {
  position: absolute;
  top: 80%;
  right: 35%;
  width: 28%;
  height: 55%;
}

/* style of movil */


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
