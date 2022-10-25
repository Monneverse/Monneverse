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
    <img src="../../public/img/semi_circulo.png" alt="" />
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
    <img src="/img/celFondo.svg" alt="" srcset="" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>


  <div class="welcome">
    <p class="title"> Welcome to <br>Monnerverse</p>
    <p class="subtitle">Utilities DeFi</p>
    <p class="description">Take advantage of this opportunity and <b>reserve</b> your spot in our
      pre-sale</p>
  </div>
</template>

<script>
export default {};
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

img {
  width: 100%;
  height: 100%;
}

.video-fondo {
  position: fixed;
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
  bottom: 0%;
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
  left: 55%;
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
  font-size: 9vh;
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
    height: 90%;
    width: 100%;
    z-index: 6;
  }

  #logo-1 {
    width: 30%;
    height: fit-content;
    position: fixed;
    top: 5%;
    left: 0%;
  }

  #logo-2 {
    width: 12%;
    right: 18%;
    top: 20%;
    z-index: 6;
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

    margin-top: 2rem;
  }

  .welcome .description {
    font-size: 5vw;
    margin-top: 3rem;
  }

  .degradado {
    width: 80%;
  }



}
</style>
