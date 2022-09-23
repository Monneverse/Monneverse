<template>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
  <div class="reflector reflector-izquierdo">
    <div class="luz-1"></div>
    <div class="luz-2"></div>
    <div class="luz-3"></div>
  </div>
  <div class="reflector reflector-derecho">
    <div class="luz-1"></div>
    <div class="luz-2"></div>
    <div class="luz-3"></div>
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
  <div class="fondo">
    <div :class="{imagen:true, 'imagen-animation':index_pagina==8}">
      <img src="/img/certificado.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    index_pagina: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  padding: 0%;
  margin: 0%;
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121026;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen {
  height: 75%;
  width: auto;
}
.imagen-animation {
  animation-name: bajar;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
@keyframes bajar {
  0% {
    position: relative;
    top: -100%;
  }
  100% {
    position: relative;
    top: 0%;
  }
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
  left: -10%;
  animation-name: mover_izquierdo;
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes mover_izquierdo {
  0% {
    left: -10%;
  }

  100% {
    left: 0%;
  }
}

.circuito-derecho {
  right: -10%;
  animation-name: mover_derecho;
  animation-duration: 5s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}

@keyframes mover_derecho {
  0% {
    right: -10%;
  }

  100% {
    right: 0%;
  }
}

.degradado {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 3;
  animation-duration: 3s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
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

@keyframes luz {
  0% {
    opacity: 20%;
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 100%;
  }
}

.reflector {
  position: absolute;
  bottom: 0%;
  left: 15%;
  width: 40%;
  height: 90%;
  z-index: 10;
  animation-duration: 3s;
  animation-name: reflector;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes reflector {
  0% {
    opacity: 40%;
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 100%;
  }
}
.reflector-derecho {
  left: 40%;
}
.luz-1 {
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  bottom: -30%;
  transform: rotate(-30deg);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
  filter: blur(3rem);
  left: 30%;
}
.luz-2 {
  position: absolute;
  width: 30%;
  height: 140%;
  border-radius: 50%;
  bottom: -30%;
  left: 40%;
  transform: rotate(0deg);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
  filter: blur(3rem);
}
.luz-3 {
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  bottom: -30%;
  left: 55%;
  transform: rotate(-150deg);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
  filter: blur(3rem);
}
</style>

