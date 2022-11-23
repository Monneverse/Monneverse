<template>
  <!-- Fondo de la calculadora -->

  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div :class="{
    fondo: true, 'fondo-montana': true,
    'fondo-montana-animation': this.enterAnimation && !this.isRevert,
    'fondo-montana-animation2': this.enterAnimation && this.isRevert,
    fondo_montana_animation_enter_revert: this.exitAnimation && this.isRevert,
    fondo_montana_animation_enter_revert2: this.exitAnimation && !this.isRevert,
  }"><img src="/img/fondo-montana.png" /> </div>
  <div class="fondo fondo-oscurecer"></div>

  <!-- circuitos -->

  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>

  <!-- filtro azul -->

  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>

  <!-- Contenido -->
  <div class="contenido">
    <div class="calculadora">

      <div :class="{
        'circulo-indicador': true,
        'circulo_indicador_animation': this.enterAnimation && !this.isRevert,
        'circulo_indicador_animation_revert': this.exitAnimation && this.isRevert,
        'circulo_indicador_animation_salida': this.exitAnimation && !this.isRevert,
        'circulo_indicador_animation_salida_revert': this.enterAnimation && this.isRevert,
      
      }"></div>


      <div :class="{
        'aparecer': this.enterAnimation && !this.isRevert,
        'aparecer_revert': this.exitAnimation && this.isRevert,
        'aparecer_revert': this.exitAnimation && !this.isRevert,
        'aparecer': this.enterAnimation && this.isRevert,
      }">

        <div :class="{ circulo: true }">
          <img src="../assets/circulo-blanco.svg" />
        </div>
        <div @click="CambiarMonth" class="descripcion">
          <p>{{ porcentajeInteres }}%</p>
        </div>

        <div :class="{
          'form-controles': true
        }">
          <div class="control">
            <input type="text" inputmode="numeric" @input="Calculator" name="inversion" id="inversion"
              v-model="inversion" placeholder="$ 100" />
            <label for="inversion">Invert</label>
          </div>
          <div class="control">
            <input type="text" name="interes" id="interes" v-model="interes" placeholder="$ 100" />
            <label for="interes">Interest</label>
          </div>
        </div>

      </div>

      <div :class="{
        circulo_rotar: true,
        'rotar': this.enterAnimation && !this.isRevert,
        'rotar_revert': this.exitAnimation && this.isRevert,
        'rotar_derecha': this.exitAnimation && !this.isRevert,
        'rotar_derecha_revert': this.enterAnimation && this.isRevert,
      }">
        <div class="circulo circulo_rotar">
          <img src="../assets/circulo-colores-texto.svg" alt="aro-multikolor" />
        </div>
        <img :class="{
          circulo: true, 'circulo-verde': true
        }" src="../assets/circulo-verde.svg" alt="circle green">

        <div @click="CambiarMonth" :class="{
          'indicador': true,
          hour48: classindicador == 1, month1: classindicador == 2, month2: classindicador == 3
        }">
          <img src="../assets/indicador.svg" alt="index calculator">

        </div>

      </div>

    </div>
  </div>

  <!-- Informacion -->
  <article :class="{ informacion: true, 'aparecer-animation': this.enterAnimation && !this.isRevert }">
    <div class="titulo-imagen">
      <img src="../assets/add.svg" alt="" />
      <p id="title">{{ porcentajeInteres }}%<span>*</span>48h</p>
    </div>

    <p class="descripcion_information">
      First Two Months Every 48 Hours
      <br>The Monner Will Return {{ porcentajeInteres }}% Interest
    </p>

    <p class="descripcion_information seg_linea">Note: Our Staking is only for the first <span>320</span>  holders that enter our pre-sale</p>
  </article>

  <!-- redes sociales -->
  <div :class="{
    'logo-redes': true,
    'desplazar_redes': this.enterAnimation && !this.isRevert,
    'desplazar_redes_revert': this.exitAnimation && this.isRevert,
    'desplazar_redes_salida': this.exitAnimation && !this.isRevert,
  }">

    <a class="icon" href="https://t.me/MonnerverseCripto" target="_blank">
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

<script lang="js">
const State = Object.freeze({ Hour0: 1, Hour24: 2, Hour48: 3 });
export default {
  props: {
    enterAnimation: {
      type: Boolean,
      required: true,
    },
    exitAnimation: {
      type: Boolean,
      required: true,
    },
    isRevert: {
      type: Boolean,
      required: true,
    }
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
      interes: "$ 0",
      indicador: State.Hour48
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
      this.interes = "$ " + this.interes;
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
    this.indicador = State.Hour48;
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT9.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Arial";
  src: url("/Fonts/arial.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Montserrat";
  src: url("/Fonts/Montserrat-Regular.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
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
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-name: fondo-montana-animation;
  animation-name: fondo-montana-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.fondo-montana-animation2 {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-name: fondo-montana-animation;
  animation-name: fondo-montana-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.fondo_montana_animation_enter_revert {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-name: fondo-montana-animation;
  animation-name: fondo-montana-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.fondo_montana_animation_enter_revert2 {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-name: fondo-montana-animation;
  animation-name: fondo-montana-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes fondo-montana-animation {
  0% {
    height: 100%;
    top: 20%;
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


/* Filtro azul */


.degradado {
  background: linear-gradient(to right, #040077 0%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 3;
  animation-duration: 5s;
  -webkit-animation-duration: 5s;
  animation-name: luz;
  -webkit-animation-name: luz;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
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
  min-width: 60rem;
  z-index: 8;
  user-select: none;
  margin: 3rem;
}

.aparecer {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: aparecer-animation;
  -webkit-animation-name: aparecer-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.aparecer_revert {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: aparecer-animation;
  -webkit-animation-name: aparecer-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
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

.circulo_rotar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 7;
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
  -webkit-animation-name: circulo-superior-animation;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;

}

.rotar_revert {
  animation-name: rotar;
  -webkit-animation-name: rotar;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.rotar {
  animation-name: rotar;
  -webkit-animation-name: rotar;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.rotar_derecha {
  animation-name: rotar_derecha;
  -webkit-animation-name: rotar_derecha;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.rotar_derecha_revert {
  animation-name: rotar_derecha;
  -webkit-animation-name: rotar_derecha;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: normal;
  -webkit-animation-direction: normal;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes rotar {
  0% {
    transform: rotate(-80deg) translate(-100%, 40%);
  }

  100% {
    transform: rotate(0deg) translate(0%, 0%);
    ;
  }
}

@keyframes rotar_derecha {
  0% {
    transform: rotate(-10deg) translate(40%, 100%);
  }

  100% {
    transform: rotate(0deg) translate(0%, 0%);
    ;
  }
}

.indicador {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 25%;
  height: 25%;
}

.indicador>img {
  transition: transform 0.4s ease-in 0s;
}

.form-controles {
  position: absolute;
  top: 82%;
  left: -5%;
  width: 100%;
  z-index: 100;
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
  z-index: 1000;
}

.control>input {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 1.5rem;
  color: #067f4e;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 60%;
  max-width: 4rem;
  min-height: 2.5rem;
  border-radius: 2rem;
  max-width: 8rem;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
}



#interes {
  background-color: white;
  user-select: none;
  pointer-events: none;
}

.control>label {
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
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
  transform: translate(0%, 450%);
  z-index: 20;
  color: white;
  font-size: 4vh;
}

#month-2 {
  position: absolute;
  bottom: 20%;
  z-index: 20;
  transform: translate(450%, 0);
  color: white;
  font-size: 4vh;
}

.circulo-indicador {
  position: relative;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  width: 2rem;
  border-radius: 50%;
  background-color: white;
  height: 2rem;

  z-index: 10;
}



.circulo_indicador_animation {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: circulo-indicador-animation;
  -webkit-animation-name: circulo-indicador-animation;
  animation-direction: normal;
  -webkit-animation-direction: normal;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.circulo_indicador_animation_revert {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: circulo-indicador-animation;
  -webkit-animation-name: circulo-indicador-animation;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes circulo-indicador-animation {
  0% {
    position: relative;
    left: 70%;
    top: -10%;
    transform: translate(-50%, -50%);
    width: 6rem;
    height: 6rem;
  }

  100% {
    position: relative;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 3rem;
  }
}

.circulo_indicador_animation_salida {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: circulo_indicador_salida;
  -webkit-animation-name: circulo_indicador_salida;
  animation-direction: normal;
  -webkit-animation-direction: normal;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.circulo_indicador_animation_salida_revert {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: circulo_indicador_salida;
  -webkit-animation-name: circulo_indicador_salida;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes circulo_indicador_salida {

  0% {
    position: absolute;
    right: 48%;
    top: 17%;
    width: 3rem;
    height: 3rem;
  }

  100% {
    position: absolute;
    top: 20%;
    right: 20%;
    width: 6rem;
    height: 6rem;
  }

}

.descripcion {
  color: white;
  position: absolute;
  width: 100%;
  top: 1.5rem;
  left: 0rem;
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
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  color: #c27e01;
  font-size: 5vh;
  font-weight: 600;
}



/* Clases de animaciones */
.hour48>img {
  transform: rotate(-80deg);
  margin-top: 1.8%
}

.month1>img {
  transform: rotate(65deg);
  margin-top: 1.8%
}

.month2>img {
  transform: rotate(200deg);
  margin-top: 1.8%
}

/* Informacion*/
.informacion {
  position: absolute;
  top: 30%;
  transform: translate(0, -10%);
  left: 3rem;
  max-width: 35rem;
  width: 30%;
  z-index: 9;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  color: white;
}

.informacion #title {
  font-size: 11vh;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-weight: 600;

}

@media screen and (max-width: 1450px) {
  .informacion #title {
    font-size: 9vh;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
    font-weight: 600;

  }
}

@media screen and (max-width: 1150px) {
  .informacion #title {
    font-size: 7vh;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
    font-weight: 600;

  }
}

@media screen and (max-width: 950px) {
  .informacion #title {
    font-size: 5vh;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
    font-weight: 600;

  }
}

.informacion #title span {
  color: #01c28d;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
}

.informacion .descripcion_information {
  margin-top: 2rem;
  margin-left: 4.5rem;
  margin-bottom: 0rem;
  text-align: start;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 2.5vh;
  font-weight: 400;
  width: 100%;
}
.informacion .descripcion_information span {
  color: #ffc000;
  font-weight: 900;
}
.seg_linea {
  font-size: 2vh;
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

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}

.desplazar_redes {
  animation-name: redes_animation;
  -webkit-animation-name: redes_animation;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.desplazar_redes_revert {
  animation-name: redes_animation;
  -webkit-animation-name: redes_animation;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}


@keyframes redes_animation {
  0% {
    left: 45%;
  }

  100% {
    left: 1rem;
  }
}




/* style of mobile */


@media screen and (max-width: 900px) {
  .calculadora {
    position: relative;
    top: 0%;
    left: 0%;
    height: 90%;
    width: 70%;
    max-width: 30rem;
    min-width: 25rem;
    z-index: 8;
    user-select: none;
    display: flex;
    justify-content: center;
    margin: 3rem;
  }

  .titulo-imagen>img {
    width: 2rem;
  }

  .informacion {
    position: absolute;
    top: 15%;
    left: 5%;
    max-width: 75rem;
    width: 90%;
    z-index: 9;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
    color: white;
  }

  .informacion .descripcion_information {
    margin-top: 2%;
    margin-left: 0rem;
    text-align: start;
    font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
    font-size: 1.5vh;
    font-weight: 300;
    width: 100%;
  }


  .form-controles {
    bottom: 70%;
    left: -5%;
    transform: translate(0, 100%);
    width: 100%;
    margin-top: 1rem;
  }

  .control>input {
    font-size: 1.2rem;
  }

  .control>label {
    font-size: 1rem;
  }


  .circulo-indicador {
    position: relative;
    left: 0%;
    top: 30%;
    transform: translate(0%, 0%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: white;
    display: none;

    z-index: 10;
  }



  .descripcion {
    top: 3%;
    left: 0%;
  }


  .descripcion>p {
    font-size: 1rem;
  }


  .logo-redes {
    display: none;
  }
}
</style>


