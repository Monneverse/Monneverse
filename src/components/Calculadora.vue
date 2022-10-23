<template>
  <!-- Fondo de la calculadora -->

  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div :class="{ fondo: true,'fondo-montana': true,
    'fondo-montana-animation': index_pagina == 4,
  }"><img src="/img/fondo-montana.png" /> </div>
  <div class="fondo fondo-oscurecer"></div>

  <!-- circuitos -->

  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
  <div class="fondoTokenomics">
    <img src="/img/fondo_Tokenomics.png" alt="" />
  </div>

  <!-- filtro azul -->

  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>

  <!-- Contenido -->
  <div class="contenido">
    <div class="calculadora">
      <div :class="{ circulo: true, 'aparecer-animation': index_pagina == 4 }">
        <img src="../assets/circulo-blanco.svg" />
      </div>

      <div :class="{
        circulo: true,
        'circulo-superior-animation': index_pagina == 4,
      }">
        <img src="../assets/circulo-colores.svg" alt="aro-multikolor" />
      </div>

      <img class="circulo circulo-verde" src="../assets/circulo-verde.svg" alt="circle green">
      <img @click="CambiarMonth" id="indicador-img"
        :class="{'indicador-calculadora':true, hour48:classindicador==1, month1:classindicador==2,month2:classindicador==3 }"
        src="../assets/indicador.svg" alt="index calculator">

      <div @click="CambiarMonth" class="descripcion">
        <p>{{porcentajeInteres}}%</p>
      </div>
      <p id="month-1">24 h</p>
      <p id="month-2">48 h</p>
      <div :class="{
        'circulo-indicador': true,
        'circulo-indicador-animation': index_pagina == 4,
      }"></div>
      <div :class="{
        'form-controles': true,
        'aparecer-animation': index_pagina == 4,
      }">
        <div class="control">
          <input type="number" min="0" @input="Calculator" name="inversion" id="inversion" v-model="inversion"
            placeholder="$ 100" />
          <label for="inversion">Invert</label>
        </div>
        <div class="control">
          <input type="number" name="interes" id="interes" v-model="interes" placeholder="$ 100" disabled />
          <label for="interes">Interest</label>
        </div>
      </div>
    </div>
  </div>

  <!-- Informacion -->
  <article :class="{ informacion: true, 'aparecer-animation': index_pagina == 4 }">
    <div class="titulo-imagen">
      <img src="../assets/add.svg" alt="" />
      <p id="title">{{porcentajeInteres}}%<span>*</span>48h</p>
    </div>

    <p id="descripcion">
      First Two Months Every 48 Hours
      <br>The Monner Will Return  {{porcentajeInteres}}% Interest
    </p>
  </article>

  <!-- redes sociales -->
  <div :class="{ 'logo-redes': true, 'logo-redes-animation': index_pagina == 4 }">

    <a class="icon" href="https://t.me/monnerversecommunity" target="_blank">
      <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
    </a>

    <a class="icon" href="https://www.reddit.com/user/monnerverse" target="_blank">
      <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
    </a>


    <a class="icon" href="https://discord.com/invite/h7fRvek9dn" target="_blank">
      <img src="../assets/discord.svg" alt="logo discord" srcset="" />
    </a>

  </div>
</template>

<script>
const State = Object.freeze({ Hour0: 1, Hour24: 2, Hour48: 3 });
export default {
  props: {
    index_pagina: {
      type: Number,
      required: true,
    },
  },
  computed: {
    classindicador: {
      get() {
        switch (this.indicador) {
          case State.Hour0:
            return 1
            break;
          case State.Hour24:
            return 2
            break;
          case State.Hour48:
            return 3
            break;
          default:
            return 1
            break;
        }

      }
    }
  },
  data() {
    return {
      inversion: 1500,
      porcentajeInteres: 6.2,
      interes: 0,
      indicador: State.Hour0
    };
  },
  methods: {
    Calculator() {
      if (this.indicador == State.Hour0) {
        this.interes = 0;
      } else if (this.indicador == State.Hour24) {
        this.interes = (
          (this.inversion * (this.porcentajeInteres / 100)) /
          2
        ).toFixed(2);
      } else {
        this.interes = (
          this.inversion *
          (this.porcentajeInteres / 100)
        ).toFixed(2);
      }
    },
    CambiarMonth() {
      if (this.indicador < 3) {
        this.indicador++;
      } else {
        this.indicador = State.Hour0;
      }
      this.Calculator();
    },
  },
  mounted() {
    this.Calculator();
    this.indicador = State.Hour0
  },
};
</script>

<style scoped>
@font-face {
  font-family: "work Sans";
  src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap")
}


/* estilos generales */
img {
  height: 100%;
  width: 100%;
}



/* Fondo de la calculadora */
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
}

.fondo-montana {
  top: -38%;
  opacity: 20%;
  height: 150%;
  z-index: 2;
}

.filtro-superior {
  z-index: 1;
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
}

.fondo-oscurecer {
  z-index: 3;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

/* Fondo calculadora animacion */

.fondo-montana-animation {
  animation-duration: .5s;
  animation-name: fondo-montana-animation;
  animation-iteration-count: 1;
}

@keyframes fondo-montana-animation {
  0% {
    height: 50%;
    top: 50%;
  }

  100% {
    height: 100%;
    top: 0%;
  }
}


/* Circuito */
.circuito {
  position: absolute;
  z-index: 4;
  height: 80%;
  width: 50%;
  min-width: 30rem;
  top: 12%;
}

.circuito-izquierdo {
  left: -3%;
}

.circuito-derecho {
  right: -10%;
  visibility: hidden;
  transform: scaleY(-1);
}

.fondoTokenomics {
  position: absolute;
  top: -8.3%;
  width: 100%;
  height: 120%;
  z-index: 3;
  opacity: 60%;
}

/* Filtro azul */


.degradado {
  background: linear-gradient(to right, #040077 0%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 3;
  animation-duration: 5s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: 0%;
  visibility: hidden;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
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

/* contenido principal y calculadora */
.contenido {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.calculadora {
  position: relative;
  top: 0%;
  left: 10%;
  height: 90%;
  width: 70%;
  max-width: 60rem;

  z-index: 8;
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 3rem;
}

.aparecer-animation {
  animation-duration: 0.5s;
  animation-name: aparecer-animation;
  animation-iteration-count: 1;
}

@keyframes aparecer-animation {
  0% {
    opacity: 0%;
  }

  40% {
    opacity: 0%;
  }

  45% {
    opacity: 100%;
  }
}


.circulo {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circulo-verde {
  top: 18%;
  left: 15%;
  height: 70%;
  width: 70%;
}

.circulo img {

  height: 60%;
  width: 70%;
}

.circulo-superior-animation {
  animation-name: circulo-superior-animation;
  animation-duration: .5s;
  animation-iteration-count: 1;
}

.indicador-animacion {
  animation-name: circulo-superior-animation;
  animation-duration: .5s;
  animation-iteration-count: 1;
}

@keyframes circulo-superior-animation {
  0% {
    top: 100%;
    left: -40%;
    transform: rotate(-80deg);
  }

  100% {
    top: 0;
    left: 0;
    transition: rotate(0deg);
    transform: rotate(0deg);
  }
}

.indicador-calculadora {
  scale: 0.3;
  margin-top: 1.8%;
  transition: transform 0.4s ease-in 0s;
}


.form-controles {
  position: absolute;
  top: 82%;
  left: -5%;
  width: 100%;
  z-index: 8;
  display: flex;
  justify-content: center;
}

.control {
  color: #f9f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
}

.control>input {
  font-family: "work Sans";
  font-size: 1.5rem;
  color: #067f4e;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 8rem;
  min-height: 2.5rem;
  border-radius: 2rem;
  max-width: 8rem;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
}



#interes:disabled {
  background-color: white;
  user-select: none;
  pointer-events: none;
}

.control>label {
  font-family: "work Sans", sans-serif;
  font-size: 1.5rem;
  color: white;
  padding: 0rem;
  text-align: center;
  width: 5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}




#month-1 {
  position: absolute;
  top: 0;
  transform: translate(0%,600%);
  z-index: 20;
  color: white;
  font-size: 3vh;
  font-family: "work Sans";
}

#month-2 {
  position:absolute;
  bottom:  20%;
  z-index: 20;
  transform: translate(450%,0);
  color: white;
  font-size: 3vh;
  font-family: "work Sans";
}

.circulo-indicador {
  position: absolute;
  width: 2rem;
  border-radius: 50%;
  background-color: white;
  height: 2rem;
  top: 17%;
  z-index: 10;
}



.circulo-indicador-animation {
  animation-duration: .5s;
  animation-name: circulo-indicador-animation;
  animation-direction: normal;
  animation-iteration-count: 1;
}

@keyframes circulo-indicador-animation {
  0% {
    position: absolute;
    top: -10%;
    right: 10%;
    width: 6rem;
    height: 6rem;
  }

  100% {
    position: absolute;
    right: 48%;
    top: 17%;
    width: 3rem;
    height: 3rem;
  }
}

.descripcion {
  color: white;
  position: absolute;
  width: 100%;
  top: 3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 17;
}


.descripcion>p {
  width: 100%;
  text-align: center;
  user-select: none;
  font-family: "work Sans", sans-serif;
  color: #ffc000;
  font-size: 6vh;
  font-weight: 600;
}



/* Clases de animaciones */
.hour48 {
  transform: rotate(-80deg);
  scale: 0.3;
  margin-top: 1.8%
}

.month1 {
  transform: rotate(65deg);
  scale: 0.3;
  margin-top: 1.8%
}

.month2 {
  transform: rotate(200deg);
  scale: 0.3;
  margin-top: 1.8%
}

/* Informacion*/
.informacion {
  position: absolute;
  top: 40%;
  left: 3rem;
  max-width: 35rem;
  width: 30%;
  z-index: 9;
  font-family: "work Sans", sans-serif;
  color: white;
}

.informacion #title {
  font-size: 11vh;
  font-family: "work Sans", sans-serif;
  font-weight: 600;
  
}

@media screen and (max-width: 1250px) {
  .informacion #title {
  font-size: 9vh;
  font-family: "work Sans", sans-serif;
  font-weight: 600;
  
}
}
@media screen and (max-width: 1150px) {
  .informacion #title {
  font-size: 7vh;
  font-family: "work Sans", sans-serif;
  font-weight: 600;
  
}
}
@media screen and (max-width: 950px) {
  .informacion #title {
  font-size: 5vh;
  font-family: "work Sans", sans-serif;
  font-weight: 600;
  
}
}
.informacion #title span {
  color: #01c28d;
  font-family: "work Sans", sans-serif;
}

.informacion #descripcion {
  margin-top: 2rem;
  text-align: start;
  font-family: "work Sans", sans-serif;
  font-size: 2.5vh;
  font-weight: 300;
  width: 100%;
}

.titulo-imagen {
  display: flex;
  justify-content: start;
  align-items: center;
}

.titulo-imagen>img {
  width: 3rem;
  height: auto;
  margin-right: 1rem;
  margin-top: .7rem;
}

/* redes sociales */
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

.logo-redes-animation {
  animation-name: redes_animation;
  animation-duration: .5s;
  animation-iteration-count: 1;
}

@keyframes redes_animation {
  0% {
    left: 45%;
  }

  100% {
    left: 1rem;
  }
}

.icon {
  width: 3rem;
  height: auto;
  margin-left: 1rem;
}
</style>


