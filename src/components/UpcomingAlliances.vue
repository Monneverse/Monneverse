<template>
  <div class="upcoming_alliance">
    <h1>UPCOMING ALLIANCES</h1>
  </div>
  <div class="visa_img">
    <img src="../assets/methodBuy/visa.svg" />
  </div>
  <div class="mastercard_img">
    <img src="../assets/methodBuy/masterCard.svg" />
  </div>

  <div class="circulos_redes">
    <div class="semi_circle">
      <img src="../assets/aro-iluminado-brillante.svg" />
    </div>
    <div class="circle">
      <img src="../assets/circulo-colores.svg" />
    </div>
  </div>
  <!--FONDO-->
  <div class="fondo fondo-calculadora"></div>
  <div class="fondo filtro-superior"></div>
  <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
  <div class="fondo fondo-oscurecer"></div>
  <div class="fondo-mundial">
    <img src="/img/fondo-mundial.png" alt="" srcset="" />
  </div>
  <div class="fondo_rayos">
    <img src="/img/rayos.png" alt="" />
  </div>
  <div class="fondoTokenomics">
    <img src="/img/fondo_Tokenomics.png" alt="" />
  </div>
  <div id="logo-1" class="logo">
    <img src="/img/logo.svg" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/img/logo.svg" alt="" />
  </div>

  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
  <div class="rectangulo"></div>
  <div class="rectangulo-medio"></div>
  <!--FIN FONDO-->

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

<script></script>

<style scoped>
@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

/*INICIO ESTILO FONDO*/

img {
  height: 100%;
  width: 100%;
  user-select: none;
}

.fondo {
  position: fixed;
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
  top: 20%;
  left: 0;
  z-index: 2;
}

.fondo-oscurecer {
  z-index: 3;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.fondoTokenomics {
  position: absolute;
  top: -8.3%;
  width: 100%;
  height: 120%;
  z-index: 3;
  opacity: 70%;
}

.circuito-izquierdo {
  position: fixed;
  z-index: 4;
  left: -25%;
  top: 20%;
  height: 80%;
  width: 40%;
  min-width: 30rem;
}

.circuito-derecho {
  position: fixed;
  z-index: 4;
  right: -25%;
  top: 20%;
  height: 80%;
  width: 40%;
  min-width: 30rem;
}

.circuito-derecho img {
  transform: rotateX(-180grad);
}

.degradado {
  background: linear-gradient(to right, #040077 55%, transparent);
  position: fixed;
  width: 50%;
  height: 190%;
  z-index: 3;
  top: 0%;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}


/*FIN ESTILO FONDO*/

.upcoming_alliance {
  position: absolute;
  top: 17%;
  width: 100%;
  text-align: center;
  z-index: 4;
}

.upcoming_alliance h1 {
  color: white;
  font-size: 4vw;
  font-weight: 600;
  font-family: "Work Sans";
  z-index: 5;
}

.visa_img {
  position: fixed;
  width: 20%;
  height: 31%;
  top: 37%;
  left: 21%;
  z-index: 7;
}

.visa_img img:hover {
  transform: scale(1.2);
}

.mastercard_img {
  position: fixed;
  width: 18%;
  height: 32%;
  top: 37%;
  right: 23%;
  z-index: 7;
}

.mastercard_img img:hover {
  transform: scale(1.2);
}

.circulos_redes {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 20%;
  left: 0%;
  z-index: 4;
}

.semi_circle {
  position: absolute;
  left: 50%;
  top: 80%;
  margin: 0;
  padding: 0;
  width: 50%;
  min-width: 50rem;
  height: 100%;
  min-height: 50rem;
  transform: translate(-50%, 0);
  z-index: 4;
  opacity: 100%;
}

.circle {
  position: fixed;
  right: 50%;
  top: 85%;
  transform: translate(50%, 0);
  width: 50%;
  max-width: 30rem;
  height: 100%;
  max-height: 30rem;
  z-index: 4;
  opacity: 100%;
}

.rectangulo {
  width: 50%;
  height: 35%;
  position: fixed;
  top: -29%;
  left: 25%;
  background: rgb(8, 7, 32);
  background: linear-gradient(90deg,
      rgba(8, 7, 32, 1) 0%,
      rgba(1, 209, 88, 1) 100%);
  border-radius: 2.5rem;
  text-align: center;
  z-index: 5;
}

.rectangulo-medio {
  width: 44%;
  height: 20%;
  background-color: white;
  position: fixed;
  top: -18%;
  left: 28%;
  border-radius: 1.5rem;
  -webkit-box-shadow: -1px 4px 72px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 72px -8px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 4px 72px -8px rgba(0, 0, 0, 0.75);
  z-index: 6;
}

.logo-redes {
  position: absolute;
  bottom:9%;
  left: 50%;
  width: 20rem;
  height: 7rem;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;
  z-index: 8;
}

.icon {
  width: 3rem;
  height: auto;
  margin-left: 1rem;
  z-index: 8;
}


/* style mobile */

@media only screen and  (max-width: 900px) {

.degradado {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 35%;
  left: 55%;
  z-index: 9;
}

.degradado_izquierdo {
  display: none;
}

.fondo-montana {
  position: fixed;
  top: 28%;
  left: -60%;
  width: 200%;
  height: 80%;
}

.fondo-mundial {
  position: fixed;
  top: 15em;
  left: -9em;
  width: 50em;
  height: 35em;
  z-index: 3;
  opacity: 80%;
}

.fondo-calculadora {
  width: 100%;
  height: 100%;
}

.circuito-derecho {
  display: none;
}

.circuito-izquierdo {
  display: none;
}

.fondo_rayos {
  position: fixed;
  left: -35%;
  top: -30%;
  width: 150%;
  height: 150%;
  opacity: 50%;
  z-index: 0;
  background-size: no-repeat center center fixed;
}

.fondo_rayos img {
  height: 100%;
}

#logo-1 {
  position: absolute;
  top: 78%;
  left: -4%;
  opacity: 50%;
  z-index: 4;
}

.fondoTokenomics {
  position: fixed;
  top: 0%;
  left: -6%;
  width: 140%;
  height: 90%;
  visibility: hidden;
}
.degradado {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 35%;
  left: 55%;
  z-index: 9;
}

.degradado_izquierdo {
  display: none;
}

.fondo-montana {
  position: fixed;
  top: 38%;
  left: -60%;
  width: 200%;
  height: 80%;
}

.fondo-mundial {
  position: fixed;
  top: 27em;
  left: -9em;
  width: 50em;
  height: 35em;
  z-index: 3;
  opacity: 100%;
}

.fondo-calculadora {
  width: 100%;
  height: 100%;
}

.circuito-derecho {
  display: none;
}

.circuito-izquierdo {
  display: none;
}

.fondo_rayos {
  position: fixed;
  left: -35%;
  top: -30%;
  width: 150%;
  height: 150%;
  opacity: 50%;
  z-index: 0;
  background-size: no-repeat center center fixed;
}

.fondo_rayos img {
  height: 100%;
}

#logo-1 {
  position: absolute;
  top: 78%;
  left: -4%;
  opacity: 50%;
  z-index: 4;
}

.fondoTokenomics {
  position: fixed;
  top: 0%;
  left: -6%;
  width: 140%;
  height: 90%;
  visibility: hidden;
}
  .mastercard_img {
    position: fixed;
    width: 55%;
    height: 25%;
    top: 50%;
    left: 25%;
  }

  .mastercard_img img:hover {
    transform: scale(1.1);
  }

  .visa_img {
    position: absolute;
    width: 55%;
    height: 25%;
    top: 30%;
    left: 25%;
  }

  .visa_img img:hover {
    transform: scale(1.1);
  }

  .upcoming_alliance {
    position: fixed;
    top: 0%;
    left: -20%;
  }

  .upcoming_alliance h1 {
    font-size: 12vw;
    width: 5%;
    top: 12%;
    left: 19%;
  }
  .circulos_redes {
    position: fixed;
    top: 10%;
    left: -10%;
  }

  .semi_circle {
    position: fixed;
    right: 83%;
    top: 24.5%;
    width: 15%;
    height: 9%;
    z-index: 4;
    opacity: 100%;
    rotate: 180deg;
    display: none;
  }

  .circle {
    position: fixed;
    right: 83%;
    top: 25%;
    width: 15%;
    height: 20%;
    z-index: 4;
    opacity: 100%;
    display: none;
  }

  .logo-redes {
    position: fixed;
    top: 88%;
    left: 0%;
    z-index: 9;
    visibility: hidden;
  }

  .icon {
    width: 14%;
  }

  .rectangulo {
    position: fixed;
    top: -6%;
    left: 1%;
    width: 90%;
    height: 10%;
  }

  .rectangulo-medio {
    position: fixed;
    top: -8%;
    left: 4%;
    width: 85%;
    height: 10%;
  }
}

.icon:hover {
  transform: scale(1.2);
}
</style>
