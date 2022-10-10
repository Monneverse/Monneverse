<template>
  <video src="/video/VideoBinario.m4v" autoplay="true" muted="true" loop="true" class="video-fondo"
    poster="/img/fondo_binario.png" />
  <div id="logo-1" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>

  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-oscuro"></div>
  <div class="fondo-oscuro-superior">
    <img src="/img/fondo-oscuro-superior.png" alt="" srcset="" />
  </div>
  <div class="fondo-mundial">
    <img src="/img/fondo-mundial.png" alt="" srcset="" />
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
  <div class="welcome fadeInLeft animated">
    <p>Welcome to <b>Monnerverse</b></p>
  </div>
  <div class="welcome_text fadeInRight animated">
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
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT.TTF");
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
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center,
      #48d0ab 100%,
      #097561 50%,
      #505863 0%);
  z-index: 3;
  opacity: 70%;
}

.logo {
  position: fixed;
  z-index: 5;
  opacity: 40%;
}

#logo-1 {
  max-width: 28rem;
  max-height: 21rem;
  position: absolute;
  top: 0;
  left: 0%;
  right: 10%;
  bottom: 25%;
  margin: auto;
  z-index: 6;
  opacity: 80%;
}

#logo-2 {
  right: 26%;
  top: 8%;
  z-index: 5;
}

.fondo-suave {
  position: absolute;
  top: 70%;
  z-index: 2;
  opacity: 70%;
}

.fondo-montana {
  position: absolute;
  top: 27%;
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
  top: 7%;
  width: 85%;
  height: 100%;
  z-index: 6;
  opacity: 100%;
}

.semi-circle {
  position: fixed;
  left: 38%;
  top: 75%;
  width: 30%;
  height: 60%;
  z-index: 8;
  opacity: 100%;
}

.animated.hinge {
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
}

.degradado {
  background: linear-gradient(to right, #040077 50%, transparent);
  position: absolute;
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

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {

  .video-fondo {
    width: 100em;
    height: 100em;
  }

  .fondo-mundial {
    position: absolute;
    top: 11em;
    left: -10em;
    width: 50em;
    height: 40em;
    z-index: 7;
    opacity: 90%;
  }

  .fondo-montana {
    display: none;
  }

  .fondo-oscuro {
    position: absolute;
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
    position: absolute;
    top: 0em;
  }

  .degradado_derecho {
    width: 50em;
    opacity: 100%;
  }

  .degradado_izquierdo {
    display: none;
  }

  #logo-1 {
    width: 17em;
    max-height: 14rem;
    position: absolute;
    top: 0;
    left: -1em;
    right: 50%;
    bottom: -58%;
    z-index: 6;
    opacity: 60%;
  }

  #logo-2 {
    width: 14em;
    left: 10em;
    top: 10em;
    z-index: 5;
    opacity: 70%;
  }

}

.welcome {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 25%;
  left: 5%;
  width: 30%;
  z-index: 7;
}

.welcome p {
  font-size: 4.8vw;
  font-weight: 600;
  font-family: "Bahn";
  color: white;
  text-align: left;
}

.welcome p b {
  text-decoration: bold;
}

.welcome_text {
  position: fixed;
  display: flex;
  top: 50.8%;
  left: 5%;
  justify-content: left;
  width: 35%;
  z-index: 7;
}

.welcome_text p {
  font-family: "Bahn";
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

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .welcome {
    position: absolute;
    justify-content: center;
    top: 5em;
    left: 0.6em;
    width: 100%;
    z-index: 6;
  }

  .welcome p {
    font-size: 16.2vw;
    font-family: "Bahn";
    color: white;
    text-align: left;
  }

  .welcome_text {
    position: absolute;
    top: 16em;
    left: 1em;
    justify-content: center;
    width: 83%;
    z-index: 9;
  }

  .welcome_text p {
    font-size: 6vw;
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
    font-size: 14.5vw;
  }
}
</style>
