<template>
  <video src="/public/video/Multimedia1.mp4" autoplay="true" muted="true" loop="true" class="video-fondo"
    poster="/img/fondo_binario.png" />
  <div id="logo-1" class="logo">
    <img src="/img/logo_Grande.png" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo.svg" alt="" />
  </div>
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
    <img src="/img/fondoCel2.png" alt="" srcset="" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
  <div class="welcome">
    <p> Welcome to</p>
  </div>
  <div class="welcome1">
    <p>Monnerverse</p>
  </div>
  <div class="welcome_text">
    <p>
      <span>Utilities DeFi</span>
      <br>
      Take advantage of this opportunity and <b>reserve</b> your spot in our
      pre-sale
    </p>
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
  left: 26%;
  top: 10%;
  width: 85%;
  height: 100%;
  z-index: 6;
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

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
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
    top: 30%;
    left: -12em;
    width: 50em;
    height: 40em;
    z-index: 8;
    opacity: 100%;
  }

  .fondo-montana {
    position: fixed;
    top: 25%;
    left: -59%;
    width: 200%;
    height: 100%;
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
    left: -26%;
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
    left: 12em;
    top: 5em;
    z-index: 5;
    opacity: 70%;
  }

  .semi-circle {
    position: fixed;
    left: 0%;
    top: 36em;
    width: 13em;
    height: 14em;
    z-index: 10;
    opacity: 100%;
  }
}

.welcome {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 21%;
  left: -3%;
  width: 38%;
  z-index: 7;
}

.welcome1 {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 32.4%;
  left: -.2%;
  width: 35%;
  z-index: 7;
}

.welcome p {
  font-size: 6.5vw;
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  color: white;
  text-align: left;
}

.welcome1 p {
  font-size: 6vw;
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  color: white;
  text-align: left;
}

.welcome p b {
  text-decoration: bold;
  font-weight: 100;
}

.welcome_text {
  position: fixed;
  display: flex;
  top: 50.8%;
  left: 2%;
  justify-content: left;
  width: 35%;
  z-index: 7;
}

.welcome_text p {
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  font-size: 2vw;
  color: white;
  text-align: left;
  text-transform: capitalize;
}

.welcome_text p b {
  text-transform: uppercase;
}

.welcome_text p span {
  color: #FFC000;
  font-size: 3.5vw;
  font-family: "Bahn";
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .welcome {
    position: fixed;
    justify-content: center;
    top: 4em;
    left: -2%;
    width: 100%;
    z-index: 99;
  }

  .welcome1 {
    position: fixed;
    justify-content: center;
    top: 8em;
    left: 0.2em;
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
    top: 14em;
    left: 0.5em;
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
