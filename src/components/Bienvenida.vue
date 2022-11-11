<template>
  <!-- video de fondo -->
  <video
    preload="auto"
    autoplay="true"
    muted="true"
    loop="true"
    class="video-fondo"
    poster="/img/fondo_binario.png"
  >
    <source src="/video/Full-HD-Lite-2.mp4" type="video/mp4" />
  </video>

  <!-- logos de fondos -->
  <div id="logo-1" class="logo">
    <img src="/img/logo_Grande.png" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo.svg" alt="" />
  </div>

  <!-- imagenes fondos -->
  <div class="semi-circle">
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

  <div
    class="welcome"
    :class="{
      animated: true,
      duration1s: true,
      fadeInLeft: this.enterAnimation,
      fadeOutLeft: this.exitAnimation,
    }"
  >
    <p class="title">
      <b>Welcome to</b>
      <br />Monnerverse
    </p>
    <p class="subtitle">Utilities DeFi</p>
    <p class="description">
      Take advantage of this opportunity and <b>reserve</b> your spot in our
      pre-sale
    </p>
    <button class="btn_new">Buy in pre-Sale</button>
  </div>
</template>
<script>
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"],
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

img {
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
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
  user-select: none;
  pointer-events: none;
}

.fondo-oscuro {
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
  z-index: 3;
  opacity: 70%;
  user-select: none;
  pointer-events: none;
}

.logo {
  position: fixed;
  z-index: 5;
  opacity: 40%;
  user-select: none;
  pointer-events: none;
}

#logo-1 {
  width: 34%;
  height: fit-content;
  position: fixed;
  top: 0;
  left: 0%;
  right: -2%;
  bottom: 25%;
  margin: auto;
  z-index: 6;
  opacity: 90%;
  user-select: none;
  pointer-events: none;
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
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 80%;
  z-index: 6;
  user-select: none;
  pointer-events: none;
}

.fondo-oscuro-superior {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 100%;
  user-select: none;
  pointer-events: none;
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
  user-select: none;
  pointer-events: none;
}

.semi-circle {
  position: fixed;
  left: 38%;
  top: 75%;
  width: 30%;
  height: 60%;
  z-index: 7;
  opacity: 100%;
  user-select: none;
  pointer-events: none;
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
  user-select: none;
  pointer-events: none;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 60%;
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
    background: radial-gradient(
      circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%
    );
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
    background: radial-gradient(
      circle at center,
      #48d0ab 10%,
      #097561 30%,
      #0f161c 100%
    );
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
  gap: 0.2rem;
  z-index: 100;
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
  color: #ffc000;
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

.btn_new {
  padding: 0.7rem;
  margin-top: 5%;
  min-width: 10rem;
  background: linear-gradient(
    90deg,
    #06e2ff 10%,
    #28a3ff 30%,
    #2e94ff 50%,
    #4070ff 70%,
    #5e31ff 100%
  );
  border-radius: 2rem;
  color: #fff;
  font-family: "Bahn";
  font-style: semibold;
  font-stretch: semi-condensed;
  font-size: 1.5vw;
}

@media screen and (max-width: 900px) {
  .fondo-montana {
    display: none;
  }

  .video-fondo {
    position: fixed;
    top: -10%;
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
    color: #ffc000;
    font-size: 10vw;
  }
}
</style>
