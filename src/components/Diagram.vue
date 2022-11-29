<script>
export default {};
</script>
<template>
  <div
    :class="{
      fondo: true,
      fondo__aparecer: this.enterAnimation && !this.isRevert,
      fondo__aparecer2: this.enterAnimation && this.isRevert,
      fondo__desaparecer: this.exitAnimation && this.isRevert,
      fondo__desaparecer2: this.exitAnimation && !this.isRevert,
    }"
  >
    <img src="/img/rayos.png" alt="" />
  </div>
  <div
    :class="{
      fondo: true,
    }"
    class="fondo-benefit"
  >
    <img src="/img/fondo-benefit.png" alt="" />
  </div>
  <div class="titulo">
    <h1>TOKENOMIC</h1>
  </div>

  <div class="contenido">
    <img class="web" src="/img/Diagram/TNK1.png" alt="diagram" srcset="" />
    <img
      class="movil"
      src="/img/Diagram/TNK2.png"
      alt="diagram"
      srcset=""
    />
  </div>
  <div class="arrow"></div>
  <div class="arrow2"></div>
  <div class="logo-redes">
    <a class="icon" href="https://t.me/MonnerverseCripto" target="_blank">
      <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
    </a>

    <a
      class="icon"
      href="https://www.reddit.com/user/monnerverse"
      target="_blank"
    >
      <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
    </a>

    <a
      class="icon"
      href="https://discord.com/invite/h7fRvek9dn"
      target="_blank"
    >
      <img src="../assets/discord.svg" alt="logo discord" srcset="" />
    </a>
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
</template>

<style scoped>
body {
  background-color: #121026;
}

.animated.duration1s {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

img {
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
}

::-webkit-scrollbar {
  display: block;
}

/* fondos */

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.fondo-benefit {
  background-size: no-repeat center center fixed;
  z-index: 1;
}

.fondo-benefit img {
  position: absolute;
  top: 0%;
  height: 115vh;
}

.fondo__aparecer {
  animation: aparecer_ocultar 1s ease-in-out forwards;
  -webkit-animation: aparecer_ocultar 1s ease-in-out forwards;
}

.fondo__desaparecer {
  animation: aparecer_ocultar 1s ease-in-out reverse;
  -webkit-animation: aparecer_ocultar 1s ease-in-out reverse;
}

.fondo__aparecer2 {
  animation: aparecer_ocultar 1s ease-in-out forwards;
  -webkit-animation: aparecer_ocultar 1s ease-in-out forwards;
}

.fondo__desaparecer2 {
  animation: aparecer_ocultar 1s ease-in-out reverse;
  -webkit-animation: aparecer_ocultar 1s ease-in-out reverse;
}

.movil {
  display: none;
}

@keyframes aparecer_ocultar {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.titulo {
  position: absolute;
  top: 15%;
  width: 100%;
  height: auto;
  z-index: 1;
}
.titulo h1 {
  text-align: center ;
  color: white;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 2.5rem;
  font-weight: 500;
}

.contenido {
  position: relative;
  top: 10%;
  z-index: 29;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  left: 0%;
  height: auto;
  width: 80%;
}


@keyframes aparecer {
  0% {
    left: 127%;
  }
}

@keyframes desaparecer {
  100% {
    left: -127%;
  }
}

/* redes sociales */
.logo-redes {
  position: absolute;
  bottom: 0rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}

/* style mobile */
@media screen and (max-width: 900px) {
  .contenido {
    top: 15%;
    width: 100%;
    height: 90%;
  }
  .contenido img {
    width: auto;
    height: auto;
  }
  .logo-redes {
    display: none;
  }
  .web {
    display: none;
  }
  .movil {
    display: block;
  }
  .fondo-benefit {
    display: none;
  }
}

.degradado {
  background: linear-gradient(to right, #090380 55%, transparent);
  position: absolute;
  width: 100%;
  height: 180%;
  z-index: 19;
  animation-duration: 3s;
  animation-name: luz;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: -10%;
  opacity: 70%;
}

@media screen and (width > 600px) {
  .degradado {
    width: 50%;
    top: 40%;
  }
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

@media screen and (width <=769px) {
  .degradado_izquierdo {
    display: none;
  }
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}
</style>
