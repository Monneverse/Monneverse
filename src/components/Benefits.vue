<script>
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"],
};
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div class="fondo fondo_rayos">
      <img src="/img/rayos.png" alt="Background ray" />
    </div>
    <div class="fondo fondo_benefit">
      <img src="/img/fondo-benefit.png" alt="Background monner" />
    </div>
  </div>

  <div class="contenido">
    <h1
      class="contenido_title"
      :class="{
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
      }"
    >
      BENEFITS
    </h1>

    <div
      class="benefit"
      :class="{
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <div class="benefit_title">
        <img class="benefit_img_plus" src="/img/plus.svg" alt="Plus-Benefits" />
        <h2 class="title">
          <span class="highlight">FAIR LAUNCH</span>
           in Pinksale
          <img
            class="title_img"
            src="/img/pinksale.png"
            alt="Pinksale"
            srcset=""
          />
        </h2>
      </div>
      <p class="description">
        Starting price at <span class="highlight">FAIR LAUNCH</span>
      </p>
    </div>

    <div
      class="benefit"
      :class="{
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <div class="benefit_title">
        <img class="benefit_img_plus" src="/img/plus.svg" alt="Plus-Benefits" />
        <h2 class="title">7.5% <span class="highlight"> * </span> 24h</h2>
      </div>
      <p class="description">
        <span class="highlight">Important Note : <br /> </span>
        Starking 7.5% every 24 hours is only for the wallets that invested to
        our
        <span class="highlight">FAIR LAUNCH</span>
      </p>
    </div>

    <div
      class="benefit"
      :class="{
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <div class="benefit_title">
        <img class="benefit_img_plus" src="/img/plus.svg" alt="Plus-Benefits" />
        <h2 class="title">Benefits for our early investors</h2>
      </div>
      <p class="description">
        Investors of our <span class="highlight">FAIR LAUNCH</span> will have
        access to our daily payment of 7.5% of their investment. will get
        <span class="highlight">$300</span>
        in bonus MNR in our
        <span class="highlight">MonnerGame</span>
        game center (available soon). And founder privileges in all our projects
        from
        <span class="highlight">$300</span> and up.
        <span class="highlight">Note : </span>
        The Wallets that invested in Fair Launch will be published on our
        official website and will be recognized as a benefited wallet
      </p>
    </div>

    <div
      :class="{
        aro: true,
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
      }"
    >
      <img class="aro_superior" src="../assets/aro.svg" alt="Ring" />

      <img
        :class="{
          aro_inferior: true,
          animated: true,
          duration1s: true,
          fadeInLeft: this.enterAnimation,
          fadeOutLeft: this.exitAnimation,
        }"
        src="../assets/aro.svg"
        alt="Ring"
      />
    </div>
  </div>

  <!-- redes sociales -->

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
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.fondo_rayos {
  z-index: 2;
}

.fondo_benefit {
  z-index: 3;
  height: 100%;
}

.fondo_benefit img {
  position: relative;
  top: -5%;
  height: 115vh;
}

/* redes sociales */
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
  height: 3rem;
  margin-left: 1rem;
}

/* Contenido Principal */

.contenido {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%);
  width: 70%;
  height: 90%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  padding: 1rem;
  font-family: "Work Sans", sans-serif;
}

.contenido .contenido_title {
  color: white;
  font-size: 4rem;
  margin: 3.8% 0 0 4%;
}

.contenido .benefit {
  width: 48%;
  color: white;
  margin-top: 1rem;
}

.contenido .benefit .benefit_title {
  border-radius: 0.2rem;
  background-color: #161431;
  display: flex;
  justify-content: start;
  gap: 2rem;
  padding: 1rem;
}

.contenido .benefit .benefit_title .benefit_img_plus {
  width: 2rem;
  height: 2rem;
  margin-left: -2rem;
}

.contenido .benefit .benefit_title .title {
  display: flex;
  align-items: center;
  font-size: 1.7rem;
}

.contenido .benefit .benefit_title .title .highlight {
  color: #37f395;
  font-size: 1.9rem;
}

.contenido .benefit .benefit_title .title .title_img {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
}

.contenido .benefit .description {
  margin-top: 0.8rem;
  margin-left: 3rem;
  font-size: 1.3rem;
  text-align: justify;
}

.contenido .benefit .description .highlight {
  color: #ffc007;
  font-weight: 500;
}

/* version tablet */
@media screen and (max-width: 1250px) {
  .contenido {
    width: 95%;
  }
}

@media screen and (max-width: 900px) {
  .contenido {
    width: 98%;
    height: 90%;
    margin-top: 1.5rem;
  }

  .contenido .contenido_title {
    margin: 1rem auto;
    font-size: 3rem;
  }

  .contenido .benefit {
    margin: 0 auto;
    width: 80%;
    color: white;
    margin-top: 0.5rem;
  }

  .contenido .benefit .benefit_title {
    padding: 0.2rem;
    -webkit-box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.93);
    -moz-box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.93);
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.93);
  }

  .contenido .benefit .benefit_title .benefit_img_plus {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: -1rem;
  }

  .contenido .benefit .benefit_title .title {
    font-size: 1rem;
  }

  .contenido .benefit .benefit_title .title .highlight {
    color: #37f395;
    font-size: 1.2rem;
  }

  .contenido .benefit .benefit_title .title .title_img {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 1rem;
  }

  .contenido .benefit .description {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  .logo-redes {
    display: none;
  }

  .fondo_benefit {
    display: none;
  }
  .aro {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .aro {
    top: 25%;
    right: 28%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
    z-index: 999;
    width: 100%;
    height: 30%;
  }

  .aro img {
    width: 40%;
    margin-right: 2%;
    margin-bottom: 0;
  }

  .aro_superior {
    position: relative;
    z-index: 1;
    top: -5%;
  }
  .aro_inferior {
    position: relative;
    z-index: 1;
    top: -45%;
  }
}

/* Animaciones */
.animacion-aparecer {
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
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

.animated.duration1s {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
</style>
