<script>
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"],
};
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div :class="{
      fondo_rayos: true,
      'animacion-desplazamiento': this.enterAnimation && !this.isRevert,
      'animacion-desplazamiento-revert': this.exitAnimation && this.isRevert,
      'animacion-desaparecer': this.enterAnimation && this.isRevert,
      'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
    }">
      <img src="/img/rayos.png" alt="" />
    </div>
    <div :class="{
      'fondo-benefit': true,
      'animacion-benefit': this.enterAnimation && !this.isRevert,
      'animacion-benefit-revert': this.exitAnimation && this.isRevert,
      'animacion-benefit-up': this.enterAnimation && this.isRevert,
      'animacion-benefit-up-revert': this.exitAnimation && !this.isRevert,
    }">
      <img src="/img/fondo-benefit.png" alt="Background-monner" />
    </div>

    <div class="reflector reflector-izquierdo">
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>
    <div class="reflector reflector-derecho">
      <div class="luz-1"></div>
      <div class="luz-2"></div>
      <div class="luz-3"></div>
    </div>

    <div :class="{
      titulo: true,
      'animacion-desplazamiento-titulo':
        this.enterAnimation && !this.isRevert,
      'animacion-desplazamiento-titulo-revert':
        this.exitAnimation && this.isRevert,
      'animacion-desaparecer': this.enterAnimation && this.isRevert,
      'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
    }">
      <h1>BENEFITS</h1>
    </div>

    <div :class="{
      benefits: true,
    }">
      <div class="contenido">
        <div :class="{
          'contenedor-parrafo': true,
          'animacion-aparecer': this.enterAnimation && !this.isRevert,
          'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          'animacion-desaparecer': this.enterAnimation && this.isRevert,
          'animacion-desaparecer-revert':
            this.exitAnimation && !this.isRevert,
        }">
          <p>
            <span>MNR</span> was created in order to solve the energy problems that the common world and the crypto
            ecosystem have at
            the moment. We want to supply homes and industries from different continents of the planet with our
            renewable energy generating plates, in addition to offering our energy supply system to the largest mining
            parks in the world, at a very low cost and with the immediate option of transforming the current mining .
            for ecological mining. In addition, we have different projects that seek to improve the cryptographic
            ecosystem and make it more accessible to anyone. We recommend you read our Whitepaper and find out about our
            future alliances with <span>Visa</span> and <span>Mastercard</span> and the projects under development that
            will raise the
            price of our token. <br />
            <br />
          </p>
        </div>
       
      </div>
    </div>
  </div>
  <div class="logo-redes">
    <div class="icon icon-telegram">
      <a href="https://t.me/MonnerverseCripto" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
      </a>
    </div>
    <div class="icon icon-reddit">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
      </a>
    </div>
    <div class="icon icon-discord">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="" />
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

img {
  width: 100%;
  height: 100%;
}

.fondo {
  position: absolute;
  top: 0;
  z-index: -1233;
  width: 100%;
  height: 100%;
  background-color: #121026;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}

.titulo {
  position: absolute;

  width: 100%;
  top: 5rem;
  text-align: center;
  z-index: 45;
}

.titulo h1 {
  font-size: 2.4rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}

@media screen and (min-width: 769px) {
  .animacion-desplazamiento-titulo {
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    animation-name: titulo;
    -webkit-animation-name: titulo;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  .animacion-desplazamiento-titulo-revert {
    animation-duration: 0.8s;
    -webkit-animation-duration: 0.8s;
    animation-name: titulo;
    -webkit-animation-name: titulo;
    animation-direction: reverse;
    -webkit-animation-direction: reverse;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  @keyframes titulo {
    0% {
      top: 10rem;
      left: 18%;
    }
  }
}

.benefits {
  position: absolute;
  top: 12%;
  z-index: 8;
  width: 100%;
  height: 100%;
  row-gap: 5%;
}

.contenido {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height: 1.8rem;
  width: 90%;
  height: 80%;
}

.contenido span {
  color: var(--color-secundario);
}

.contenedor-parrafo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: rgba(32, 29, 64, 0.2);
  margin: 0 auto;
  border-radius: 3vw;
}



.contenedor-parrafo p {
  font-size: 3vw;
  font-family: "WorkSans", sans-serif;
  font-weight: 100;
  width: 90%;
  text-align: justify;
  color: white;
}

@media screen and (min-width: 769px) {
  .benefits {
    position: absolute;
    top: 24%;
    width: 100%;
    height: 75%;
  }

  .contenido {
    margin: 0;
    width: 80%;
    height: 80%;
  }

  .titulo {
    width: 0%;
    top: 5rem;
    left: 30%;
  }

  .titulo h1 {
    font-size: 4.5vw;
  }

  .contenedor-parrafo {
    width: 85%;
    height: 100%;
  }

  .contenedor-parrafo p {
    font-size: 1.5vw;
  }
}

@media screen and (width > 500px) and (width < 900px) {
  .contenedor-parrafo p {
    font-size: 2vw;
  }
}

.fondo_rayos {
  position: absolute;
  left: -50%;
  width: 100%;
  height: 100%;
  z-index: -23;
  background-size: no-repeat center center fixed;
}

.fondo_rayos img {
  height: 100%;
}

.fondo-benefit {
  position: relative;
  background-size: no-repeat center center;
  top: 0%;
  z-index: 5;
}

.fondo-benefit>img {
  width: 200%;
  height: 115vh;
}

@media screen and (min-width: 769px) {
  .fondo_rayos {
    z-index: -2;
    left: -10%;
  }

  .fondo-benefit>img {
    width: 100%;
    height: 115vh;
  }

  .fondo_rayos img {
    width: 100%;
  }
}

.animacion-desplazamiento {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: desplazamiento;
  -webkit-animation-name: desplazamiento;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-desplazamiento-revert {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: desplazamiento;
  -webkit-animation-name: desplazamiento;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes desplazamiento {
  0% {
    left: 0%;
  }
}

.animacion-benefit {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: abajo;
  -webkit-animation-name: abajo;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-benefit-revert {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: abajo;
  -webkit-animation-name: abajo;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-benefit-up {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: arriba;
  -webkit-animation-name: arriba;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-benefit-up-revert {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: arriba;
  -webkit-animation-name: arriba;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes abajo {
  0% {
    top: -5%;
  }
}

@keyframes arriba {
  0% {
    top: -5%;
  }
}

.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

@media screen and (max-width: 900px) {
  .logo-redes {
    display: none;
  }
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}

.reflector {
  position: absolute;
  top: 60%;
  bottom: 0%;
  left: 10%;
  width: 40%;
  height: 90%;
  z-index: 1;
  display: none;
  animation-duration: 6s;
  -webkit-animation-duration: 6s;
  animation-name: reflector;
  -webkit-animation-name: reflector;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
}

/* 
@keyframes reflector {
  0% {
    opacity: 10%;
  }

  50% {
    opacity: 30%;
  }

  100% {
    opacity: 50%;
  }
} */

.reflector-derecho {
  z-index: 0;
  left: 50%;
}

.reflector-izquierdo {
  z-index: 0;
}

.luz-1 {
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  bottom: -30%;
  transform: rotate(-30deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.5) 0%,
      transparent 47%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
  left: 30%;
}

.luz-2 {
  position: absolute;
  width: 30%;
  height: 140%;
  border-radius: 50%;
  bottom: -30%;
  left: 40%;
  transform: rotate(0deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 47%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
}

.luz-3 {
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  bottom: -30%;
  left: 55%;
  transform: rotate(-150deg);
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 47%,
      rgba(184, 184, 184, 0) 100%);
  filter: blur(3rem);
}

.animacion-aparecer {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-name: aparecer;
  -webkit-animation-name: aparecer;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-aparecer-revert {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: aparecer;
  -webkit-animation-name: aparecer;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-desaparecer {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: aparecer;
  -webkit-animation-name: aparecer;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-desaparecer-revert {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  animation-name: aparecer;
  -webkit-animation-name: aparecer;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes aparecer {
  0% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
