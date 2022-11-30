<template>
  <!-- video de fondo -->
  <video preload="auto" autoplay webkit-playsinline playsinline muted loop class="video-fondo"
    poster="/img/fondo_binario.png">
    <source data-src="/video/Full-HD-Lite-2.mp4" type="video/mp4" src="/video/Full-HD-Lite-2.mp4" />
  </video>

  <!-- logos de fondos -->
  <div id="logo-1" class="logo">
    <img src="/img/logo.svg" alt="logo-monner" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo.svg" alt="logo-monner" />
  </div>

  <!-- imagenes fondos -->
  <div class="semi-circle">
    <img src="../assets/aro-iluminado-brillante.svg" alt="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain"  />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain"  />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain"  />
  </div>
  <div class="fondo-oscuro"></div>
  <div class="fondo-oscuro-superior"> </div>
  <div class="iluminacionLogo"></div>
  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="Background-cell"  />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>

  <div class="welcome" :class="{
    animated: true,
    duration1s: true,
    fadeInLeft: this.enterAnimation,
    fadeOutLeft: this.exitAnimation,
  }">
    <p class="title">
      <b>Welcome to</b>
      <br /> <span>$MNR</span> Energy Project
    </p>
    <p class="subtitle">Utilities DeFi</p>
    <p class="description">
      Take advantage of this opportunity and <b>reserve</b> your spot in our
      pre-sale
    </p>
    <a target="_blank" href="" class="btn_new">Buy in pre-Sale</a>

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
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
  z-index: 0;
  opacity: 40%;
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
  width: 28%;
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
  background-color: #0f161c;
  opacity: 70%;
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
  left: 52%;
  top: 75%;
  width: 40%;
  height: 60%;
  transform: translate(50%, 0%);
  z-index: 7;
  opacity: 100%;
  user-select: none;
  pointer-events: none;
  rotate: 180deg;
}

.animated.hinge {
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
}

.btn_new {
  padding: .5rem;
  margin-top: 5%;
  min-width: 15rem;
  background: linear-gradient(90deg, rgba(85, 0, 255, 1) 35%, rgba(214, 0, 255, 1) 100%);
  border-radius: 2rem;
  color: #fff;
  font-family: "Bahn";
  font-style: semibold;
  font-stretch: semi-condensed;
  font-size: 1.5rem;
  text-align: center;
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
        #0f161c 100%);
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
  top: 20%;
  left: 4rem;
  width: 50%;
  z-index: 7;
  gap: 0.2rem;
  z-index: 100;
}

.welcome .title {
  font-size: 4.5vw;
  font-family: "Bahn";
  font-stretch: semi-condensed;
  font-style: semibold;
  color: white;
  text-align: left;
  font-weight: 600;
  margin-bottom: 2rem;
}

.welcome .title span {
  color: #ffc000;
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
  padding: .5rem;
  margin-top: 5%;
  min-width: 15rem;
  background: linear-gradient(90deg, rgba(85, 0, 255, 1) 35%, rgba(214, 0, 255, 1) 100%);
  border-radius: 2rem;
  color: #fff;
  font-family: "Bahn";
  font-style: semibold;
  font-stretch: semi-condensed;
  font-size: 1.5rem;
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
    margin-bottom: 0rem;
  }

  .welcome .title {
    font-size: 7vh;
  }

  .welcome .subtitle {
    font-size: 6vh;

    margin-top: 0rem;
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
