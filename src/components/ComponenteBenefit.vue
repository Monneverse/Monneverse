<script>
export default {
  props: ["titulo", "texto", "textoOculto", "imagen", "SetBloquearScroll"],
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
      <img :src="imagen" alt="Images-Benefits" />
      <p class="centrar">
        {{ texto }}
      </p>

      <div class="linea"></div>
      <transition name="fade">
        <p
          @mouseenter="this.SetBloquearScroll(false)"
          @touchstart="this.SetBloquearScroll(false)"
          @touchend="this.SetBloquearScroll(true)"
          @mouseleave="this.SetBloquearScroll(true)"
          v-show="look"
          class="texto-oculto"
          transition="fade"
        >
          {{ textoOculto }}
        </p>
      </transition>
      <div class="buttom">
        <buttom :class="ocultar" v-on:click="mostrarTexto" class="btn centrar"
          >READ {{ look ? "LESS" : "MORE" }}
        </buttom>
      </div>
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
  background-color: rgb(22, 20, 49, 0.8);
}

.benefit .contenido {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.contenido h2 {
  align-items: center;
  margin: 2% auto;
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
  height: 15%;
  align-items: center;
  font-weight: 400;
  font-size: 3vw;
}

.contenido img {
  width: 60%;
  height: 5.5rem;
  margin: 0 auto;
}

@media screen and (width > 769px) {
  .contenido img {
    width: 50%;
    height: 20%;
    margin: 0 auto;
  }
}

.contenido .texto-oculto {
  font-size: 3vw;
  padding: 0.4rem;
  height: 10rem;
  text-align: justify;
  overflow: hidden;
  overflow-y: scroll;
  overscroll-behavior-y: initial;
  scroll-snap-type: y mandatory;
  box-sizing: border-box;
}

.contenido .texto-oculto::-webkit-scrollbar:vertical {
  width: 10px;
}

.contenido .texto-oculto::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    rgb(33, 32, 85) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.contenido .texto-oculto::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar {
  display: block;
}

.buttom {
  width: 100%;
  position: absolute;
  bottom: 3%;
  height: 10%;
}

.texto-oculto::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    rgb(33, 32, 85) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.texto-oculto::-webkit-scrollbar-track {
  border-radius: 10px;
}

.fade-enter-active {
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

.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
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

.contenido p {
  font-weight: 400;
  font-size: .8rem;
}

@media screen and (min-width: 769px) {
  .contenido .texto-oculto {
    height: 12rem;
    font-size: 0.8vw;
  }

  .contenido h2 {
    font-size: 1.5vw;
    font-weight: 600;
    text-align: center;
  }

  .contenido p {
    font-weight: 400;
    font-size: 1vw;
  }

  .buttom {
    font-size: 1vw;
    width: 70%;
    position: absolute;
    bottom: 0%;
    height: 10%;
  }
}

.btn {

  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  padding: 2% 5%;
  border-radius: 1.5vw;
  cursor: pointer;
  width: 30%;
  height: 50%;
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

.centrar {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
}

.ocultar {
  display: none;
}
</style>
