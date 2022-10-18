<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    textOculto: {
      type: String,
      required: true,
    },

    index_pagina: {
      type: Number,
      required: true,
    },
    ocultar: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      look: false,
    };
  },
  methods: {
    mostrarTexto() {
      this.look = !this.look;
    },
  },
};
</script>

<template>
  <div class="benefit fondo-oscuro">
    <div class="contenido">
      <h2 class="centrar">
        {{ titulo }}
      </h2>

      <p class="centrar">
        {{ texto }}
      </p>

      <div class="linea"></div>
      <transition name="fade">
        <p v-show="look" class="texto-oculto" transition="fade">
          {{ textOculto }}
        </p>
      </transition>

      <buttom :class="ocultar" v-on:click="mostrarTexto" class="btn centrar"
        >READ {{ look ? "LESS" : "MORE" }}</buttom
      >
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "WorkSans";
  src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");
}

.benefit {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: "WorkSans", sans-serif;
}

.fondo-oscuro {
  background-color: #161431;
}

.benefit .contenido {

  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.contenido h2 {
  align-items: center;
  height: 10%;
  font-size: 6vw;
  font-weight: 600;
}

.contenido .linea {
  margin: 2% auto;
  width: 60%;
  height: 0.2%;
  background-color: rgb(21, 199, 137);
}

.contenido p {
  height: 38%;
  align-items: center;
  font-weight: 400;
  font-size: 5vw;
}

.texto-oculto{
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;  
  cursor: grab;
  text-align: justify;
  scroll-snap-type: y mandatory;
  overflow-x: scroll;
}


.fade-enter-active
 {
  animation: opacity 0.5s linear;
}
@keyframes opacity {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation: opacity2 0.5s linear;
}
@keyframes opacity2 {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 0%;
  }
}
@media screen and (min-width: 769px) {
  .contenido h2 {
    font-size: 1.5vw;
    font-weight: 600;
    text-align: center;
  }
  .contenido p {
    font-weight: 400;
    font-size: 1.2vw;
  }
}

.btn {
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  padding: 2% 5%;
  border-radius: 1.5vw;
  cursor: pointer;
  width: 45%;
  height: 5%;
  font-size: 4vw;
  font-family: "WorkSans", sans-serif;
  align-items: center;
}

.btn:hover {
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px rgb(6, 38, 58),
    inset -20px 0 80px rgb(7, 64, 25), inset 20px 0 300px rgb(5, 12, 28),
    inset -20px 0 300px rgb(4, 41, 10), 0 0 50px #fff,
    -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(1, 64, 12);
  transition: 0.5s ease-out;
}

@media screen and (min-width: 769px) {
  .btn {
    width: 60%;
    font-size: 1.5vw;
  }
}

.transparente {
  background-color: rgb(22, 20, 49, 0.6);
  margin: 0 auto;
  margin-right: 0;
  display: flex;
  justify-content: center;
  width: 75%;
}

.centrar {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
}
.ocultar{
  display: none;
}
</style>
