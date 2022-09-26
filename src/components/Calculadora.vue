<template>

  <!-- Fondo de la calculadora -->
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div :class="{fondo:true, 'fondo-montana':true,'fondo-montana-animation':index_pagina==4} ">
    <img src="/img/fondo-montana.png" />
  </div>
  <div class="fondo fondo-oscurecer"></div>


  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>

  <div class="contenido">
    <div class="calculadora">
      <div :class="{circulo:true,  'aparecer-animation':index_pagina==4}">
        <img src="../assets/circulo-blanco.svg" srcset="">
      </div>

      <div :class="{circulo:true,  'circulo-superior-animation':index_pagina==4}">
        <img src="../assets/circulo-colores.svg" alt="" srcset="">
      </div>
      <div :class="{circulo:true, indicador:true, 'indicador-animacion':index_pagina==4}">

        <img id="indicador-img" class="hour48" src="../assets/indicador.svg">
        <div id="indicador" @click="CambiarMonth" class="descripcion">
          <p id="cantidad">0</p>
          <p id="medida">HOURS</p>
        </div>
      </div>
      <div :class="{'indicador-texto':true, 'aparecer-animation':index_pagina==4}">
        <p id="month-1">24 h</p>
        <p id="month-2">48 h</p>
        <div :class="{'circulo-indicador':true, 'circulo-indicador-animation':index_pagina==4}"></div>
      </div>
      <div :class="{'form-controles':true,  'aparecer-animation':index_pagina==4} ">
        <div class="control">
          <input type="number" min="0" @input="Calculator" name="inversion" id="inversion" v-model="inversion"
            placeholder="$ 100">
          <label for="inversion">Invert</label>
        </div>
        <div class="porcentaje">
          <p>{{porcentajeInteres}}%</p>
        </div>
        <div class="control">
          <input type="number" name="interes" id="interes" v-model="interes" placeholder="$ 100" disabled>
          <label for="interes">Interest</label>

        </div>
      </div>
    </div>
  </div>



  <div :class="{informacion:true,  'aparecer-animation':index_pagina==4} ">
    <div class="titulo-imagen">
      <img src="../assets/add.svg" alt="">
      <p id="title">12%<span>*</span>48h</p>
    </div>

    <p id="descripcion">FIRST TWO MONTHS EVERY 48 HOURS
      THE MONNER WILL RETURN 12.6% INTEREST
    </p>
  </div>



  <div :class="{'logo-redes':true, 'logo-redes-animation':index_pagina==4} ">
    <div class="icon icon-telegram">
      <a href="https://t.me/monnerversecommunity" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="">
      </a>
    </div>
    <div class="icon icon-reddit">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="">
      </a>
    </div>
    <div class="icon icon-discord ">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="">
      </a>
    </div>
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
  data() {
    return {
      inversion: 100,
      porcentajeInteres: 12.6,
      interes: 0,
      meses: State.Hour0,
      cantidadMes: 30
    };
  },
  methods: {
    Calculator() {

      if (this.meses == State.Hour0) {
        this.interes = 0;
      } else if (this.meses == State.Hour24) {
        this.interes = ((this.inversion * (this.porcentajeInteres / 100)) / 2).toFixed(2);;
      } else {
        this.interes = ((this.inversion * (this.porcentajeInteres / 100))).toFixed(2);
      }

    },
    CambiarMonth() {
      let imgIndicador = document.getElementById("indicador-img");
      let txtCantidad = document.getElementById("cantidad");
      let txtMedida = document.getElementById("medida");
      imgIndicador.classList.forEach(x => imgIndicador.classList.remove(x));
      console.log(imgIndicador);
      if (this.meses < 3) {
        this.meses++;
      } else {
        this.meses = State.Hour0;
      }
      if (this.meses == State.Hour0) {
        txtCantidad.innerText = "0";
        txtMedida.innerText = "HOURS";
        imgIndicador.classList.add("hour48")
      } else if (this.meses == State.Hour24) {
        txtCantidad.innerText = "24";
        txtMedida.innerText = "HOURS";
        imgIndicador.classList.add("month1")
      } else {
        imgIndicador.classList.add("month2")
        txtCantidad.innerText = "48";
        txtMedida.innerText = "HOURS";
      }
      this.Calculator();
    }
  },
  mounted() {
    this.Calculator();
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap');

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
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
}

.filtro-superior {
  z-index: 1;
  background: radial-gradient(circle at center,
      #f9f9fa 0%,
      #c8ced4 50%,
      #a8aaaf 100%);
  mix-blend-mode: multiply;
}

.fondo-montana {
  z-index: 2;
}

.fondo-montana-animation {
  animation-duration: 1s;
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

.fondo-oscurecer {
  z-index: 3;
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
}

.aparecer-animation {
  animation-duration: .5s;
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

.calculadora {
  position: relative;
  top: 0%;
  left: 15%;
  height: 90%;
  width: 90%;
  max-width: 60rem;
  user-select: none;
  display: flex;
  justify-content: center;
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


.circulo img {
  height: 60%;
  width: 70%;
}

.circulo-superior-animation {
  animation-name: circulo-superior-animation;
  animation-duration: 1s;
  animation-iteration-count: 1;
}

.indicador-animacion {
  animation-name: circulo-superior-animation;
  animation-duration: 1s;
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

.indicador img {
  position: relative;
  top: 1.5rem;
  right: 0rem;
  width: 40%;
  max-width: 10rem;
  height: auto;
  user-select: none;
  pointer-events: none;
  transition: transform 0.4s ease-in 0s;
}


.form-controles {
  position: absolute;
  top: 82%;
  left: 0%;
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
}

.control>input {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  color: #067F4E;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 8rem;
  min-height: 2.5rem;
  border-radius: 2rem;
  max-width: 8rem;
  text-align: center;
  margin-left: 5rem;
  margin-right: 5rem;
}

#interes:disabled {
  background-color: white;
  user-select: none;
  pointer-events: none;
}

.control>label {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  color: white;
  padding: 0rem;
  text-align: center;
  width: 5rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
}

.porcentaje>p {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  color: white;
}

.indicador-texto {
  width: 100%;
  display: flex;
  justify-content: center;
}

.indicador-texto>p {
  font-family: 'Work Sans', sans-serif;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  z-index: 9;
}

#month-1 {
  top: 23%;
}

#month-2 {
  top: 75%;
  left: 75%;
}

.circulo-indicador {
  position: absolute;
  width: 3rem;
  border-radius: 50%;
  background-color: white;
  height: 3rem;
  top: 15%;
  z-index: 10;
}

.circulo-indicador-animation {
  animation-duration: 1s;
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
  top: 48%;
  width: 7rem;
  left: calc(50%-4rem);
  font-family: 'Work Sans', sans-serif;
  font-size: 3.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.descripcion>p {
  width: 100%;
  text-align: center;
  user-select: none;
}

.descripcion :first-child {
  color: #01C28D;
  font-size: 3rem;
}





/* Clases de animaciones */
.hour48 {
  transform: rotate(-80deg);
}

.month1 {
  transform: rotate(65deg);
}

.month2 {
  transform: rotate(200deg);
}

.informacion {
  position: absolute;
  top: 40%;
  left: 6rem;
  max-width: 30rem;
  z-index: 9;
  font-family: 'Work Sans', sans-serif;
  color: white;

}

.informacion #title {
  font-size: 10vh;
}

@media(max-width: 1400px) {
  .informacion #title {
    font-size: 8vh;
  }
}

.informacion #title span {
  color: #01C28D;
  font-family: 'Work Sans', sans-serif;
}

.informacion #descripcion {
  margin-top: 2rem;
  text-align: start;
  font-size: 1.6rem;
  text-transform: uppercase;

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

}

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
  animation-duration: 1s;
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

.degradado {
  background: linear-gradient(to right, #08047A 0.5%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 3;
  animation-duration: 1s;
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
</style>


