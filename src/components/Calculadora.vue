<template>
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div class="fondo fondo-montana">
    <img src="/img/fondo-montana.png" />
  </div>
  <div class="fondo fondo-oscurecer"></div>
  <div class="circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
</template>
<script></script>

<style scoped>
img {
  height: 100%;
  width: 100%;
}
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
}

.filtro-superior {
  z-index: 1;
  background: radial-gradient(
    circle at center,
    #f9f9fa 0%,
    #c8ced4 50%,
    #a8aaaf 100%
  );
  mix-blend-mode: multiply;
}
.fondo-montana {
  height: 100%;
  top: 10%;
  left: 0;
  z-index: 2;
}
.fondo-oscurecer {
  z-index: 3;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}
.circuito-izquierdo {
  position: absolute;
  z-index: 4;
  left: -10%;
  top: 20%;
  height: 80%;
  width: 40%;
  min-width: 30rem;
}
.circuito-derecho {
  position: absolute;
  z-index: 4;
  right: -10%;
  top: 20%;
  height: 80%;
  width: 40%;
  min-width: 30rem;
}
</style>
