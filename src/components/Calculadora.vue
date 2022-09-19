
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

        <img src="../assets/indicador.svg">
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
        <input type="number" min="0" name="inversion" id="inversion" placeholder="$ 100">
        <label class="tag-inversion" for="inversion">Invert</label>

      </div>
      <div class="interes">
        <input type="number" name="interes" id="interes" placeholder="$ 100">
        <label class="tag-inversion" for="interes">Interest</label>

      </div>
    </div>
    <div class="logo-redes">
      <div class="icon icon-telegram">
        <font-awesome-icon icon="fa-brands fa-telegram" />
        <div class="fondo-icono"></div>

      </div>
      <div class="icon icon-reddit">
        <font-awesome-icon icon="fa-brands fa-reddit" />
        <div class="fondo-icono"> </div>

      </div>
      <div class="icon icon-discord">
        <font-awesome-icon icon="fa-brands fa-discord" />

      </div>
    </div>

</template>

<script>



export default {

  data() {
    return {
      inversion: 0,
      porcentajeInteres: 12.6,
      interes: 0,
      meses: 0
    };
  },
  methods: {
    Calculator() {
      let txtInversion = document.getElementById("inversion");
      let txtInteres = document.getElementById("interes");

      let inversion = parseInt(txtInversion.value);
      let interes = inversion * (this.porcentajeInteres / 100);
      txtInteres.value = interes.toFixed(2);

    }
  },
  mounted() {
    let txtInversion = document.getElementById("inversion");
    let txtInteres = document.getElementById("interes");
    txtInversion.addEventListener('input', this.Calculator);
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

.medidor {
  position: relative;
  top: 0;
  left: 0;
  z-index: 7;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circulo {
  position: absolute;
  left: 0;
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
  transform: rotate(-80deg);
}
.form-controles {
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 9;
  display: flex;
  width: 100%;
  justify-content: center;
}

.inversion,.interes {
  color: #f9f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#inversion,
#interes {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  color: #067F4E;
  padding: .1rem;
  padding-right: 1rem;
  width: 100%;
  min-height: 2.5rem;
  border-radius: 2rem;
  max-width: 10rem;
  text-align: center;
  margin-left: 5rem;
  margin-right: 5rem;
}

.tag-inversion {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: white;

}

.informacion #title {
  font-size: 5rem;
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
  top: 28%;
  left: 46%;
  z-index: 11;
}

#month-2 {
  font-family: 'Work Sans', sans-serif;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 85%;
  left: 63%;
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
  position: relative;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}

.icon {
  font-size: 4rem;
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

.icon-discord {
  border-radius: 50%;
  background-color: #5865F2;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-discord {
  color: #ffffff;
  font-size: 2rem;
}
</style>


