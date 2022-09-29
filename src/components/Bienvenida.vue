<template>
  <video src="/video/video_binariov2.mp4" autoplay="true" muted="true" loop="true" class="video-fondo"
    poster="/img/fondo_binario.png"></video>

  <div class="fondo-oscuro"></div>

  <div id="logo-1" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-3" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-4" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-5" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-6" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-7" class="logo">
    <img src="/img/logo_empresa.png" alt="" />
  </div>
  <div class="fondo-suave">
    <img src="/img/fondo-suave.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="" srcset="" />
  </div>
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
@import url("http://fonts.cdnfonts.com/css/bahnschrift");

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
  opacity: 25%;
}

.fondo-oscuro {
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
  z-index: 1;
  opacity: 70%;
}

.logo {
  position: fixed;
  z-index: 5;
  opacity: 40%;
}


#logo-5 {
  max-width: 28rem;
  max-height: 20rem;
  position: absolute;
  top: 0;
  left: 0%;
  right: 8%;
  bottom: 25%;
  margin: auto;
  z-index: 6;
  opacity: 50%;
}

#logo-6 {
  right: 18rem;
  top: 3rem;
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
  opacity: 100%;
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
  left: 17%;
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
  background: linear-gradient(to right, #08047A 0.5%, transparent);
  position: absolute;
  width: 50%;
  height: 180%;
  z-index: 7;
  top: 0%;
  opacity: 90%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 50%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}

.welcome {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 25%;
  left: 5%;
  width: 30%;
  z-index: 6;
}

.welcome p {
  font-size: 4.8vw;
  font-family: "Bahnschrift", sans-serif;
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
  justify-content: center;
  width: 40%;
  z-index: 6;
}

.welcome_text p {
  font-size: 2vw;
  font-family: "Bahnschrift", sans-serif;
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
}
</style>
