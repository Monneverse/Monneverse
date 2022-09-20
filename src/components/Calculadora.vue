
<template>

  <div class="logo">
    <img src="/img/logo.svg" alt="logo monneverse">
  </div>
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
  <div class="medidor">
    <div class="circulo">
      <img src="../assets/circulo-blanco.svg" srcset="">
    </div>

    <div class="circulo">
      <img src="../assets/circulo-colores.svg" alt="" srcset="">
    </div>
    <div class="circulo indicador">

      <img id="indicador-img" class="hour48" src="../assets/indicador.svg">
      <div id="indicador" @click="CambiarMonth" class="descripcion">
        <p id="cantidad">48</p>
        <p id="medida">HOURS</p>
      </div>
    </div>
  </div>

  <div class="informacion">
    <p id="title">12%<span>*</span>48h</p>
    <p id="descripcion">FIRST TWO MONTHS EVERY 48 HOURS
      THE MONNER WILL RETURN 12.6% INTEREST
    </p>
  </div>

  <p id="month-1">1st Month</p>
  <p id="month-2">2st Month</p>
  <div class="form-controles">

    <p></p>
    <div class="inversion">
      <input type="number" min="0" @input="Calculator" name="inversion" id="inversion" v-model="inversion" placeholder="$ 100">
      <label class="tag-inversion" for="inversion">Invert</label>

    </div>
    <div class="interes">
      <input type="number" name="interes" id="interes" v-model="interes" placeholder="$ 100" disabled>
      <label class="tag-inversion" for="interes">Interest</label>

    </div>
  </div>
  <div class="logo-redes">
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


const State = Object.freeze({ Hour48: 1, Month1: 2, Month2: 3 });
export default {

  data() {
    return {
      inversion: 0,
      porcentajeInteres: 12.6,
      interes: 0,
      meses: State.Hour48,
      cantidadMes: 30
    };
  },
  methods: {
    Calculator() {
    
      if (this.meses == State.Hour48) {
        this.interes = (this.inversion * (this.porcentajeInteres / 100)).toFixed(2);;
      } else if (this.meses == State.Month1) {
        this.interes = ((this.inversion * (this.porcentajeInteres / 100)) * (this.cantidadMes / 2)).toFixed(2);;
      } else {
        this.interes  = ((this.inversion * (this.porcentajeInteres / 100)) * (this.cantidadMes)).toFixed(2);
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
        this.meses = State.Hour48;
      }
      if (this.meses == State.Hour48) {
        txtCantidad.innerText = "48";
        txtMedida.innerText = "HOURS";
        imgIndicador.classList.add("hour48")
      } else if (this.meses == State.Month1) {
        txtCantidad.innerText = "1st";
        txtMedida.innerText = "MONTH";
        imgIndicador.classList.add("month1")
      } else {
        imgIndicador.classList.add("month2")
        txtCantidad.innerText = "2st";
        txtMedida.innerText = "MONTH";
      }
      this.Calculator();
    }
  },
  mounted() {
   
    this.inversion = 10;
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
  height: 100%;
  top: 0%;
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

.medidor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
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
  margin-top: 0%;
  height: 55%;
  width: 70%;
}

.indicador img {
  position: relative;
  top: 2rem;
  right: 0rem;
  scale: .5;

  user-select: none;
  pointer-events: none;
  transition: transform 0.4s ease-in 0s;
}

.hour48 {
  transform: rotate(-80deg);
}

.month1 {
  transform: rotate(65deg);
}

.month2 {
  transform: rotate(200deg);
}

.form-controles {
  position: absolute;
  top: 75%;
  left: 0%;
  z-index: 9;
  display: flex;
  width: 100%;
  justify-content: center;
}

.inversion,
.interes {
  color: #f9f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#inversion,
#interes {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  color: #067F4E;
  padding-right: 1rem;
  width: 8rem;
  min-height: 2.5rem;
  border-radius: 2rem;
  max-width: 8rem;
  text-align: center;
  margin-left: 5rem;
  margin-right: 5rem;
}
#interes:disabled{
  background-color: white;
  user-select: none;
  pointer-events: none;
}
.tag-inversion {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  color: white;
  padding: 0rem;
  text-align: center;
  width: 5rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
}

.informacion {
  position: absolute;
  top: 40%;
  left: 3%;
  max-width: 20rem;
  z-index: 9;
  font-family: 'Work Sans', sans-serif;
  color: white;

}

.informacion #title {
  font-size: 10vh;
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






#month-1 {
  font-family: 'Work Sans', sans-serif;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 15%;
  left: 46.5%;
  z-index: 11;
}

#month-2 {
  font-family: 'Work Sans', sans-serif;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 70%;
  left: 60%;
  z-index: 11;
}

.logo-redes {
  position: absolute;
  bottom: 0%;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}

.icon {
  width: 3rem;
  height: auto;
  z-index: 18;
  margin-left: 1rem;
}

.fa-telegram {
  position: relative;
  color: #5CBAE7;
  z-index: 18;
}

.fa-reddit {
  position: relative;
  color: #FF4500;
  z-index: 18;
}

.fondo-icono {
  position: relative;
  top: -75%;
  left: 20%;
  width: 60%;
  height: 50%;
  background-color: white;
  z-index: 17;
}

.icon-discord > img {
  border-radius: 50%;
  background-color: #5865F2;
  width: 4rem;
  height: 4rem;
}


</style>


