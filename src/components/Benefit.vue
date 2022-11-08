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
  <!--FONDO-->

  <div class="fondo">
    <div
      :class="{
        fondo_rayos: true,
        'animacion-desplazamiento': this.enterAnimation && !this.isRevert,
        'animacion-desplazamiento-revert': this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <img src="/img/rayos.png" alt="" />
    </div>
    <div
      :class="{
        'fondo-benefit': true,
        'animacion-benefit': this.enterAnimation && !this.isRevert,
        'animacion-benefit-revert': this.exitAnimation && this.isRevert,
        'animacion-benefit-up': this.enterAnimation && this.isRevert,
        'animacion-benefit-up-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <img src="/img/fondo-benefit.png" alt="" />
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

    <div
      :class="{
        titulo: true,
        'animacion-desplazamiento-titulo':
          this.enterAnimation && !this.isRevert,
        'animacion-desplazamiento-titulo-revert':
          this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <h1>BENEFITS</h1>
    </div>

    <div
      :class="{
        benefits: true,
      }"
    >
      <div class="contenido">
        <div
          :class="{
            'contenedor-parrafo': true,
            'animacion-aparecer': this.enterAnimation && !this.isRevert,
            'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
            'animacion-desaparecer': this.enterAnimation && this.isRevert,
            'animacion-desaparecer-revert':
              this.exitAnimation && !this.isRevert,
          }"
        >
          <p>
            Monner DeFi is a project based on the payment of dividends that have
            the largest shares listed on the New York Stock Exchange. We want to
            reward our customers for holding our token and follow its evolution
            through time. Monner is a 100% descentralized contract that will
            guarantee security to its investors under any measure. Our mission
            is to position the MNR token between the top 50 charts of
            CoinMarketCap thus giving it an approximate value of 90.000$ per
            MNR. <br />
            <br />

            Our main projects, such as MonnerPlanet (whose mission is to change
            the way energy is distributed to each american home with its
            patented renewable energy plates) and MonnerMinner (whose mission is
            to create crypto-mining farms at an industrial level, powered by
            solar energy) will be fundamental for our mission of giving worth to
            our ecosystem and currency. Other projects that can be summarized in
            our list are MonnerStaking, MonnerCard (with Visa and MasterCard),
            MonnerBlockchain, MonnerGames
          </p>
        </div>
        <div
          :class="{
            buttom: true,
            'animacion-aparecer': this.enterAnimation && !this.isRevert,
            'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
            'animacion-desaparecer': this.enterAnimation && this.isRevert,
            'animacion-desaparecer-revert':
              this.exitAnimation && !this.isRevert,
          }"
        >
          <buttom :class="ocultar" v-on:click="mostrarTexto" class="btn centrar"
            >READ {{ look ? "LESS" : "MORE" }}</buttom
          >
        </div>
      </div>
    </div>

    <div class="logo-redes">
      <div class="icon icon-telegram">
        <a href="https://t.me/monnerversecommunity" target="_blank">
          <img
            src="../assets/Telegram_logo.svg"
            alt="logo telegram"
            srcset=""
          />
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
  top: 4.5rem;
  text-align: center;
  z-index: 45;
}
.titulo h1 {
  font-size: 2.4rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}

.animacion-desplazamiento-titulo {
  animation-duration: 0.5s;
  animation-name: titulo;
  animation-iteration-count: 1;
}
.animacion-desplazamiento-titulo-revert {
  animation-duration: 0.8s;
  animation-name: titulo;
  animation-direction: reverse;
  animation-iteration-count: 1;
}
@keyframes titulo {
  0% {
    top: 10rem;
    left: 18%;
  }
}

.benefits {
  position: absolute;
  top: 20%;
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
  width: 90%;
  height: 80%;
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
.buttom {
  margin: 0 auto;
  position: relative;
  top: -30px;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (width > 769px) {
  .buttom {
    top: 0;
    height: 10%;
  }
}
.btn {
  padding: 10px;
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  border-radius: 0.5vw;
  cursor: pointer;
  width: 7rem;
  font-size: 1rem;
  font-family: "WorkSans", sans-serif;
  text-align: center;
  color: white;
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
    top: 22%;
    width: 100%;
    height: 75%;
  }
  .contenido {
    margin: 0;
    width: 80%;
    height: 90%;
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

@media screen and (width > 500px) and (width < 769px) {
  .contenedor-parrafo p {
    font-size: 2.5vw;
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
.fondo-benefit > img {
  height: 100vh;
}
@media screen and (min-width: 769px) {
  .fondo_rayos {
    z-index: -2;
    left: -10%;
  }
  .fondo-benefit > img {
    width: 100%;
    height: 115vh;
  }
  .fondo_rayos img {
    width: 100%;
  }
}

.animacion-desplazamiento {
  animation-duration: 0.5s;
  animation-name: desplazamiento;
  animation-iteration-count: 1;
}
.animacion-desplazamiento-revert {
  animation-duration: 0.8s;
  animation-name: desplazamiento;
  animation-direction: reverse;
  animation-iteration-count: 1;
}
@keyframes desplazamiento {
  0% {
    left: 0%;
  }
}
.animacion-benefit {
  animation-duration: 0.5s;
  animation-name: abajo;
  animation-iteration-count: 1;
}
.animacion-benefit-revert {
  animation-duration: 0.8s;
  animation-name: abajo;
  animation-direction: reverse;
  animation-iteration-count: 1;
}
.animacion-benefit-up {
  animation-duration: 0.8s;
  animation-name: arriba;
  animation-iteration-count: 1;
}
.animacion-benefit-up-revert {
  animation-duration: 0.8s;
  animation-name: arriba;
  animation-direction: reverse;
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

.icon {
  width: 3rem;
  height: auto;
  margin-left: 1rem;
}
@media screen and (width < 769px) {
  .logo-redes {
    display: none;
  }
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
  animation-name: reflector;
  animation-iteration-count: infinite;
  animation-direction: alternate;
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
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
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
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
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
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    transparent 47%,
    rgba(184, 184, 184, 0) 100%
  );
  filter: blur(3rem);
}
.animacion-aparecer {
  animation-duration: 0.5s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}
.animacion-aparecer-revert {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-direction: reverse;
  animation-iteration-count: 1;
}
.animacion-desaparecer {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-iteration-count: 1;
}

.animacion-desaparecer-revert {
  animation-duration: 0.8s;
  animation-name: aparecer;
  animation-direction: reverse;
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
