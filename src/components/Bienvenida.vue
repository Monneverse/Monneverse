<script setup>
defineProps({
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
  },
});
</script>

<template>
  <!-- video de fondo -->
  <video autoplay="true" muted="true" loop="true" class="video-fondo" poster="/img/fondo_binario.png">
    <source src="/video/Full-HD-Lite.mp4" type="video/mp4">
    <source src="/video/fondo-lite.mp4">
    <img src="/img/fondo_binario.png" />
  </video>

  <!-- logos de fondos -->
  <div id="logo-1" class="logo">
    <img src="/img/logo_Grande.png" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo.svg" alt="" />
  </div>


  <!-- imagenes fondos -->
  <div class="semi-circle ">
    <img src="/img/semi_circulo.png" alt="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-oscuro"></div>
  <div class="fondo-oscuro-superior">
    <img src="/img/fondo-oscuro-superior.png" alt="" srcset="" />
  </div>
  <div class="iluminacionLogo"></div>
  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="" srcset="" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>


  <div :class="{
    welcome: true,
    welcome_animation: this.exitAnimation && !this.isRevert,
    welcome_animation_revert: this.enterAnimation && this.isRevert
  }">
    <p class="title">
      <LabelAnimation :class="{
        animacion_salida: this.exitAnimation && !this.isRevert,
        animacion_salida_revert: this.enterAnimation && this.isRevert,
      }">Welcome to</LabelAnimation> <br>Monnerverse
    </p>
    <p class="subtitle">Utilities DeFi</p>
    <p class="description">Take advantage of this opportunity and <b>reserve</b> your spot in our
      pre-sale</p>
  </div>
</template>


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

img {
  width: 100%;
  height: 100%;
}

.video-fondo {
  position: fixed;
  top: 0;
  left: -40%;
  width: 140%;
  scale: 2;
  height: 100%;
  z-index: 0;
  opacity: 100%;
}

.fondo-oscuro {
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
  z-index: 3;
  opacity: 70%;
}

.logo {
  position: fixed;
  z-index: 5;
  opacity: 40%;
}

#logo-1 {
  width: 34%;
  height: 56%;
  position: fixed;
  top: 0;
  left: 0%;
  right: -2%;
  bottom: 25%;
  margin: auto;
  z-index: 6;
  opacity: 90%;
}

#logo-2 {
  width: 12%;
  right: 18%;
  top: 10%;
  z-index: 6;
}

.fondo-suave {
  position: fixed;
  top: 70%;
  z-index: 2;
  opacity: 70%;
}

.fondo-montana {
  position: fixed;
  top: 20%;
  left: 0%;
  width: 100%;
  z-index: 6;
}

.fondo-oscuro-superior {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 100%;
}

.fondo-mundial {
  position: fixed;
  bottom: -6rem;
  right: -15%;
  width: 80%;
  min-width: 60rem;
  height: 90%;
  min-height: 40rem;
  z-index: 7;
  opacity: 100%;
}

.semi-circle {
  position: fixed;
  left: 38%;
  top: 75%;
  width: 30%;
  height: 60%;
  z-index: 7;
  opacity: 100%;
}

.animated.hinge {
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
}

.degradado {
  background: linear-gradient(to right, #090380 55%, transparent);
  position: fixed;
  width: 50%;
  height: 180%;
  z-index: 7;
  top: 0%;
  opacity: 90%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 60%;
}

.animacion_salida {
  position: relative;
  top: 0;
  left: 0;
  animation: retirar__texto 1000ms 1 normal;
}

.animacion_salida_revert {
  position: relative;
  top: 0;
  left: 0;
  animation-name: retirar__texto_revert;
  animation-duration: 1s;

}

.welcome_animation {
  animation-name: ocultar;
  animation-duration: 1s;
}

.welcome_animation_revert {
  animation-name: ocultar_revert;
  animation-duration: 2s;

}

@keyframes ocultar {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
@keyframes ocultar_revert {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes retirar__texto {
  0% {
    top: 0;
    left: 0;
  }

  100% {
    top: -5%;
    left: -115%;
  }
}

@keyframes retirar__texto_revert {
  0% {
    top: -5%;
    left: -115%;
  }

  100% {
    top: 0;
    left: 0;
  }


}

@media only screen and (min-device-width: 412px) and (max-device-width: 915px) {
  img {
    width: 100%;
    height: 100%;
  }

  .video-fondo {
    top: 0%;
    width: 100em;
    height: 100em;
    z-index: 0;
  }

  .fondo-oscuro {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100em;
    height: 100em;
    background: radial-gradient(circle at center,
        #48d0ab 0%,
        #097561 50%,
        #505863 100%);
    z-index: 1;
  }

  .fondo-mundial {
    position: fixed;
    top: 40%;
    left: -16em;
    width: 50em;
    height: 40em;
    z-index: 8;
    opacity: 100%;
  }

  .fondo-montana {
    position: fixed;
    top: 36%;
    left: 0%;
    width: 100%;
    height: 70%;
  }

  .fondo-oscuro {
    position: fixed;
    top: 0;
    left: -15em;
    width: 50em;
    height: 80em;
    background: radial-gradient(circle at center,
        #48d0ab 10%,
        #097561 30%,
        #0F161C 100%);
    z-index: 3;
    opacity: 70%;
  }

  .degradado {
    position: fixed;
    top: 10%;
    left: -2%;
    z-index: 9;
  }

  .degradado_derecho {
    width: 60em;
    opacity: 100%;
    opacity: 80%;
  }

  .degradado_izquierdo {
    display: none;
  }

  #logo-1 {
    width: 17em;
    max-height: 14rem;
    position: fixed;
    top: 0em;
    left: 0em;
    right: 50%;
    bottom: -58%;
    z-index: 9;
    opacity: 70%;
  }

  #logo-2 {
    width: 8em;
    left: 17em;
    top: 12em;
    z-index: 5;
    opacity: 70%;
  }

  .semi-circle {
    position: fixed;
    left: 0%;
    top: 52em;
    width: 13em;
    height: 14em;
    z-index: 10;
    opacity: 100%;
  }
}

.welcome {
  position: fixed;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  top: 21%;
  left: 4rem;
  width: 30%;
  z-index: 7;
  gap: .2rem;
}


.welcome .title {
  font-size: 6vw;
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  color: white;
  text-align: left;
  font-weight: 600;
}

.welcome .subtitle {
  color: #FFC000;
  font-size: 3.5vh;
  font-family: "Bahn";
}

.welcome .description {
  font-size: 1.5vw;
  color: white;
  text-align: left;
  text-transform: capitalize;
  font-family: "work Sans", sans-serif;
  font-weight: 300;
}

.welcome .description b {
  text-transform: uppercase;
}


@media screen and (max-width: 900px) {
  .fondo-montana {
    display: none;
  }

  .video-fondo {
    position: fixed;
    top: 0;
    left: -40%;
    width: 140%;
    scale: 3;
    height: 100%;
    z-index: 0;
    opacity: 100%;
  }

  #logo-1 {
    display: none;
  }

  #logo-2 {
    width: 30%;
    left: 30%;
    bottom: -50%;
    z-index: 8;
  }

  .fondo-mundial {
    position: fixed;
    bottom: -10rem;
    right: -45%;
  }

  .welcome {
    top: 15%;
    left: 2rem;
    width: 90%;
  }

  .welcome .title {
    font-size: 8vh;
  }

  .welcome .subtitle {
    font-size: 6vh;

    margin-top: 1rem;
  }

  .welcome .description {
    font-size: 5vw;
    margin-top: 1rem;
  }

  .degradado {
    width: 80%;
  }



}

@media only screen and (min-device-width: 412px) and (max-device-width: 915px) {
  .welcome {
    position: fixed;
    justify-content: center;
    top: 8em;
    left: 2%;
    width: 100%;
    z-index: 99;
  }

  .welcome1 {
    position: fixed;
    justify-content: center;
    top: 12em;
    left: 0em;
    width: 100%;
    z-index: 6;

  }

  .welcome p {
    font-size: 18vw;
    font-family: "Bahn";
    color: white;
    text-align: left;
  }

  .welcome1 p {
    font-size: 16vw;
    font-family: "Bahn";
    color: white;
    text-align: left;
  }

  .welcome_text {
    position: fixed;
    top: 18em;
    left: 2.5em;
    justify-content: center;
    width: 65%;
    z-index: 9;

  }

  .welcome_text p {
    font-size: 7vw;
    font-family: "Bahn";
    color: white;
    text-align: left;
    text-transform: capitalize;
  }

  .welcome_text p b {
    text-transform: uppercase;

  }

  .welcome_text p span {
    color: #FFC000;
    font-size: 10vw;

  }
}
</style>
