<script >
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"]
};
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div class="fondo_rayos">
      <img src="/img/rayos.png" alt="" />
    </div>
    <div class="fondo-benefit">
      <img src="/img/fondo-benefit.png" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>

    <div :class="{
      titulo: true,
      'animacion-aparecer': this.enterAnimation && !this.isRevert,
      'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
    }">
      <h1>BENEFITS</h1>
    </div>

    <div class="display_flex">
      <div class="benefits">
        <div :class="{
          beneficio: true,
          'animacion-aparecer': this.enterAnimation && !this.isRevert,
          'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          'animacion-desaparecer': this.enterAnimation && this.isRevert,
          'animacion-desaparecer-revert':
            this.exitAnimation && !this.isRevert,
        }">
          <img id="a" class="circulos" src="/img/plus.svg" alt="Plus-Beneficios" />
          <div class="content-price">
            <div class="titulo-benefit">
              <h1><span>$</span>1,5<b>USD</b></h1>
            </div>
          </div>
          <div class="content-text">
            <div class="sale">
              <h3>Pre-sale Price</h3>
            </div>
          </div>
        </div>

        <div :class="{
          beneficio: true,
          'animacion-aparecer': this.enterAnimation && !this.isRevert,
          'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          'animacion-desaparecer': this.enterAnimation && this.isRevert,
          'animacion-desaparecer-revert':
            this.exitAnimation && !this.isRevert,
        }">
          <img id="b" class="circulos" src="/img/plus.svg" alt="Plus-Beneficios" />
          <div class="content-price">
            <div class="titulo-two">
              <h1>Phase 1</h1>
            </div>
          </div>
          <div class="content-text">
            <div class="text">
              <p>Phase 1 of staking only for users who buy in pre-sale</p>
            </div>
          </div>
        </div>

          <div :class="{
          beneficio: true,
          'animacion-aparecer': this.enterAnimation && !this.isRevert,
          'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          'animacion-desaparecer': this.enterAnimation && this.isRevert,
          'animacion-desaparecer-revert':
            this.exitAnimation && !this.isRevert,
        }">
          <img id="b" class="circulos" src="/img/plus.svg" alt="Plus-Beneficios" />
          <div class="content-price">
            <div class="titulo-two">
              <h1><span>$</span>22,5<b>USD</b></h1>
            </div>
          </div>
          <div class="content-text">
              <div class="text">
                <p>Sale Price <br> The price Pancakeswap for purchase and sales will be $22,6 one day after the pre-sale
                  of our first 2,000,000 the public ends</p>
              </div>
          </div>
        </div>
        <div :class="{
          beneficio: true,
          'animacion-aparecer': this.enterAnimation && !this.isRevert,
          'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          'animacion-desaparecer': this.enterAnimation && this.isRevert,
          'animacion-desaparecer-revert':
            this.exitAnimation && !this.isRevert,
        }">
          <img id="d" class="circulos" src="/img/plus.svg" alt="Plus-Beneficios" />
          <div class="content-price">
            <div class="titulo-two">
              <h1>6.2%<span>*</span>48h</h1>
            </div>
          </div>
          <div class="content-text">
            <div class="sale">
              <h3>Sale Price</h3>
            </div>
            <div class="text">
              <p class="">
                Enter our first phase os staking buying in pre-sale and earn
                6.2% every 48 hours of your total capital in Monnercoins after
                the launch in Pancakeswap
              </p>
            </div>
          </div>
        </div>
      </div>
      <div :class="{
        aro: true,
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
        'animacion-desaparecer': this.enterAnimation && this.isRevert,
        'animacion-desaparecer-revert':
          this.exitAnimation && !this.isRevert,
      }">
        <img class="image1" src="../assets/aro.svg" />

        <img :class="{
          image: true,
          animated: true,
          duration1s: true,
          fadeInLeft: this.enterAnimation,
          fadeOutLeft: this.exitAnimation,
        }" src="../assets/aro.svg" />
      </div>
    </div>
  </div>
  <div class="logo-redes">

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
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

p {
  text-align: justify;
}

.display_flex {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
  display: none;
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

#titulo22{
  width: 1005;
  margin-left: 0;
  border-radius: 1px solid red;
}
.benefits {
  position: absolute;
  z-index: 14;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  height: auto;
  top: 14%;
}

.beneficio {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.beneficio:nth-child(1) {
  height: 20%;
}

.beneficio:nth-child(2) {
  height: 10%;
}

.beneficio:nth-child(3) {
  height: 10%;
}

.beneficio:nth-child(5) {
  opacity: 0 !important;
  margin-top: 4.5rem;
  height: 25rem;
}

@media screen and (max-width: 900px) {
  .beneficio:nth-child(4) {
    display: block;
  }
}

.content-price {
  width: 100%;
  height: 3.5rem;
}

.titulo-benefit {
  margin: 0;
  width: 100;
  height: 100%;
  background-color: #161431;
  border-radius: 0.4em;
}

.titulo-benefit h1 {
  font-family: "Work Sans", sans-serif;
  color: white;
  margin: 0;
  font-size: 1.8rem;
  margin-left: 5%;
}

.titulo-benefit h1 span {
  color: #37f395;
}

.titulo-benefit h1 b {
  font-size: 1.5rem;
}

.info {
  font-family: "Work Sans", sans-serif;
  color: white;
  position: relative;
  top: -10px;
  left: 5%;
  font-size: 1.2rem;
}

.info-two {
  font-family: "Work Sans", sans-serif;
  color: white;
  position: relative;
  top: 0px;
  left: 15%;
  font-size: 1.2rem;
}

.titulo-two {
  height: 100%;
  width: 100%;
  background-color: #161431;
  display: flex;
  align-items: center;
  border-radius: 0.4em;
}

.titulo-two h1 {
  font-family: "Work Sans", sans-serif;
  color: white;
  margin: 0;
  font-size: 1.8rem;
  margin-left: 5%;
}

.titulo-two h1 span {
  color: #37f395;
}

.content-text {
  height: 70%;
  width: 90%;
  margin-left: 5%;
}

.content-text h3 {
  color: white;
}

.content-text p {
  font-family: "Work Sans", sans-serif;
  color: white;
  font-size: 0.7rem;
}

.sale {
  font-family: "Work Sans", sans-serif;
  color: white;
  font-size: 0.8rem;
}

.text {
  height: 0%;
}

.fondo {
  position: absolute;
  top: 0;
  z-index: -1233;
  width: 100%;
  height: 100%;
  background-color: #121026;
}

.scroll {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.scroll p span {
  color: yellow;
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
  top: -5%;
  background-size: no-repeat center center;
  z-index: 5;
}

.fondo-benefit>img {
  height: 150vh;
}

@media screen and (min-width: 769px) {
  .fondo_rayos {
    z-index: -2;
    left: 0%;
  }

  .fondo-benefit>img {
    width: 100%;
    height: 115vh;
  }

  .fondo_rayos img {
    width: 100%;
  }
}

@media screen and (min-width: 769px) {
  .benefits {
    flex: none;
    top: 20%;
    width: 70%;
    height: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 30px;
    grid-template-areas:
      "a b"
      "c d"
      "e f";
  }

  .titulo {
    width: 0;
    top: 10rem;
    left: 18%;
  }

  .titulo h1 {
    font-size: 4.5vw;
  }

  .fondo_rayos {
    display: initial;
  }
}

.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 100000;
  display: none;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}

@media screen and (min-width: 769px) {
  .logo-redes {
    display: flex;
    z-index: 100000;
  }
}

.icon img {
  width: 100%;
  height: 100%;
}

.circulos {
  position: relative;
  top: 20%;
  left: -3%;
  width: 1rem;
  z-index: 33;
}

#a {
  top: 2.5rem;
}

#b {
  top: 2.5rem;
}

#c {
  top: 1.5rem;
}

#d {
  top: 2.5rem;
}

.circulos img {
  margin: 0 auto;
  width: 4%;
  z-index: 5;
}

@media screen and (min-width:769px) {
  .aro {
    top: -40%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
    z-index: 999;
    width: 100%;
    height: 30%;
  }

  .aro img {
    width: 30%;
    margin-right: 2%;
    margin-bottom: 0;
  }

  .image {
    position: relative;
    z-index: 1;
    top: -30%;
  }

  .animacion-aro {
    animation-name: aro;
    -webkit-animation-name: aro;
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes aro {
    0% {
      left: -25%;
    }

    100% {
      left: 0%;
    }
  }

  .circulos {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 30%;
    left: -4%;
    width: 8%;
    z-index: 33;
  }

  #a {
    top: 30%;
  }

  #b {
    top: 30%;
  }

  #c {
    top: 30%;
  }

  #d {
    top: 30%;
  }

  .beneficio {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
  }

  .beneficio:nth-child(1) {
    position: relative;
    top: 50%;
    width: 80%;
    height: 150%;
    display: flex;
    flex-direction: column;
  }

  .beneficio:nth-child(2) {
    width: 80%;
    height: 150%;
    display: flex;
    flex-direction: column;
  }

  .beneficio:nth-child(3) {
    position: relative;
    height: 80%;
    top: 30%;
  }

  .beneficio:nth-child(4) {
    height: 80%;
    margin-top: 0;
  }

  .content-price {
    width: 100%;
    height: 50%;
  }

  .content-text {
    width: 100%;
    height: 50%;
  }

  .titulo-benefit {
    margin: 0;
    width: 100;
    height: 100%;
    background-color: #161431;
    border-radius: 0.4em;
  }

  .titulo-benefit h1 {
    font-family: "Work Sans", sans-serif;
    color: white;
    margin: 0;
    font-size: 4vw;
    margin-left: 5%;
  }

  .titulo-benefit h1 span {
    color: #37f395;
  }

  .titulo-benefit h1 b {
    font-size: 1.8vw;
  }

  .info {
    font-family: "Work Sans", sans-serif;
    color: white;
    position: relative;
    top: -10px;
    left: 15%;
    font-size: 1.5vw;
  }

  .info-two {
    font-family: "Work Sans", sans-serif;
    color: white;
    position: relative;
    top: 5px;
    left: 18%;
    font-size: 1.5vw;
    height: 15%;
  }

  .titulo-two {
    height: 100%;
    width: 100%;
    background-color: #161431;
    display: flex;
    align-items: center;
    border-radius: 0.4em;
  }

  .titulo-two h1 {
    font-family: "Work Sans", sans-serif;
    color: white;
    margin: 0;
    font-size: 4vw;
    margin-left: 5%;
  }

  .titulo-two h1 span {
    color: #37f395;
  }

  .content-text {
    height: 50%;
    width: 100%;
    margin-left: 5%;
  }

  .content-text h3 {
    color: white;
  }

  .content-text p {
    font-family: "Work Sans", sans-serif;
    color: white;
    font-size: 1vw;
  }

  .sale {
    font-family: "Work Sans", sans-serif;
    color: white;
    font-size: 1.1vw;
    width: 90;
  }

  .sale h3 {
    font-weight: 400;
  }

  .text {
    height: 80%;
  }

  .scroll {
    scroll-snap-type: initial;
    overflow-y: hidden;
  }
}

@media (min-width:769px) and (width < 900px) {
  .beneficio:nth-child(1) {
    position: relative;
    top: 50%;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }

  .beneficio:nth-child(2) {
    position: relative;
    height: 80%;
    top: 30%;
  }

  .beneficio:nth-child(4) {
    margin-top: 0;
  }
}

.animacion-caja1 {
  animation-name: caja1;
  -webkit-animation-name: caja1;
  animation-duration: 5s;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes caja1 {
  0% {
    position: absolute;
    top: -50%;
    left: 25%;
    background-color: white;
    width: 430px;
  }

  100% {
    top: 60%;
    left: -23%;
  }
}

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
