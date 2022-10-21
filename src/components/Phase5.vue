<script setup>
import fasesComponentes from "./ComponentsPhases.vue";
</script>

<template>
  <!--FONDO-->
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
  <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
  <div class="logo">
    <img src="/img/logo.svg" alt="">
  </div>
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
      <h1>phase 5</h1>
    </div>
    <div class="description">
      <p>
        Official launch of MonnerBlockchaine and MonnerHosting <br />
        with a vision to transform investments in cryptocurrencies so that they
        are safer for the public, avoiding Scam tokens.
      </p>
    </div>
  </div>

  <div class="circulos">
    <img src="/img/Imagen1.png" />
  </div>

  <button class="readMore" v-on:click="cambiarEstado()">Show {{ isVisible ? "LESS" : "MORE" }}</button>

  <div class="circulos1">
    <img src="/img/Imagen1.png" />
  </div>

  <div class="componentes1">
    <fasesComponentes title="Disclosure" description="Disclosure of our second phase of the project."
      :isVisible="isVisible" />
  </div>

  <div class="componentes2">
    <fasesComponentes title="Holders" description="40.000 holders MONNERVERSE will remain at the forefront with new high innovation projects
             in 2023." :isVisible="isVisible" />
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

.logo {
  position: fixed;
  top: 22%;
  left: 30%;
  width: 40%;
  height: 40%;
  z-index: 1;
  opacity: 70%;
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
  font-size: 1.8vw;
  opacity: 100%;
  text-transform: uppercase;
  z-index: 6;
  font-family: "work Sans";
}

.description {
  color: white;
  width: 45%;
  font-size: 1.3vw;
  font-family: "work Sans";
}

.circulos {
  position: absolute;
  left: 23%;
  bottom: 58%;
  width: 54%;
  height: 25%;
  z-index: 5;
}

.circulos1 {
  position: absolute;
  align-items: center;
  left: 24.5%;
  bottom: 48%;
  width: 50%;
  height: 30%;
  z-index: 5;
}

.readMore {
  position: absolute;
  top: 42.5%;
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
  top: 70%;
  left: 20%;
  width: 25%;
  height: 64%;
}

.componentes2 {
  position: absolute;
  top: 70%;
  right: 24%;
  width: 25%;
  height: 64%;
}
</style>
