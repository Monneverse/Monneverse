<script>
export default {
  props: ["enterAnimation", "exitAnimation", "isRevert"],
};
</script>
<template>
  <!--FONDOS-->
  <video
    preload="auto"
    autoplay
    webkit-playsinline
    playsinline
    muted
    loop
    class="video-fondo-alliances"
    poster="/img/fondo_binario.png"
  >
    <source
      src="/video/Full-HD-Lite-2.mp4"
      type="video/mp4"
      srcset="/video/Full-HD-Lite-2.mp4"
    />

    <p>
      Your browser doesn't support HTML5 video. Here is a
      <a href="/video/Full-HD-Lite.mp4">link to the video</a> instead.
    </p>
  </video>

  <div class="contenido-general">
    <div
      :class="{
        logo: true,
        'animacion-logo': this.enterAnimation && !this.isRevert,
        'animacion-logo-revert': this.exitAnimation && this.isRevert,
      }"
    >
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>

    <div class="fondo filtro-superior"></div>
    <div
      :class="{
        'fondo-montana': true,
        'fondo-montana-animation': this.enterAnimation && !this.isRevert,
        'fondo-montana-animation-salida': this.enterAnimation && this.isRevert,
        'fondo-montana-animation-revert': this.exitAnimation && this.isRevert,
        'fondo-montana-animation-salida-revert':
          this.exitAnimation && !this.isRevert,
      }"
      class="fondo"
    >
      <img src="/img/fondo-montana.png" />
    </div>
    <div class="fondo fondo-oscurecer"></div>
    <div
      :class="{
        'fondo-red': true,
        'animacion-aparecer': this.enterAnimation && !this.isRevert,
        'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
      }"
      class="fondo"
    >
      <img src="/img/red.png" alt="" />
    </div>
    <div class="fondo-telefono">
      <img src="/img/fondo_Cel.png" alt="" srcset="" />
    </div>
<!-- 
    <div class="video-banner">
      <video
        preload="auto"
        autoplay
        webkit-playsinline
        playsinline
        muted
        loop
        class="banner banner_web"
      >
        <source
          data-src="/video/banner_web.mp4"
          data-mw="900"
          media="(min-width:900px)"
          type="video/mp4"
          src="/video/banner_web.mp4"
        />
      </video>
    </div> -->

    <div class="contenido-principal">
      <div class="texto"></div>

      <!--UPCOMING ALLIANCES-->
      <div
        :class="{
          'content-forms': true,
          'animacion-aparecer': this.enterAnimation && !this.isRevert,
          'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          'animacion-content-up': this.enterAnimation && this.isRevert,
          'animacion-content-up-revert': this.exitAnimation && !this.isRevert,
          'animacion-desaparecer': this.enterAnimation && this.isRevert,
          'animacion-desaparecer-revert': this.exitAnimation && !this.isRevert,
        }"
      >
        <section
          :class="{
            circulos: true,
            'animacion-aparecer': this.enterAnimation && !this.isRevert,
            'animacion-aparecer-revert': this.exitAnimation && this.isRevert,
          }"
        >
          <div class="circulo">
            <img src="../assets/circulo.svg" alt="circle-alliances" />
          </div>

          <div class="circulo-medio">
            <img src="../assets/circulo-medio.svg" alt="circle-alliances" />
          </div>
        </section>
        <section class="arco">
          <div
            :class="{
              semi_circulo: true,
              'animacion-arco': this.enterAnimation && !this.isRevert,
              'animacion-arco-revert': this.exitAnimation && this.isRevert,
              'animacion-arco-salida': this.enterAnimation && this.isRevert,
              'animacion-arco-revert-salida':
                this.exitAnimation && !this.isRevert,
            }"
          >
            <img
              src="../assets/aro-iluminado-brillante.svg"
              alt="ring-illuminated"
            />
          </div>
        </section>
        <section class="Alianzas">
          <div class="alianzas">
            <a href="https://www.reddit.com/user/monnerverse" target="_blank"
              ><span><img src="../assets/reddit-4.svg" /></span>REDDIT</a
            >

            <a target="_blank" href="https://t.me/MonnerverseCripto"
              ><span><img src="../assets/Telegram_logo.svg" /></span>TELEGRAM</a
            >
            <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->

            <a href="https://discord.com/invite/h7fRvek9dn" target="_blank"
              ><span><img src="../assets/discord.svg" /></span>DISCORD</a
            >
          </div>
        </section>

        <section class="rectangulos">
          <div class="rectangulo-medio">
            <div class="contenido">
              <img
                src="../assets/rectangulo-medio.svg"
                alt="rectangle-medium"
              />
              <div class="imagenes">
                <img src="../assets/methodBuy/visa.svg" alt="visa" />
                <img
                  src="../assets/methodBuy/masterCard.svg"
                  alt="masterdCard"
                />
              </div>
            </div>
          </div>
          <div class="rectangulo">
            <img src="/img/rectangulo.svg" alt="rectangle" />
            <p>UPCOMING ALLIANCES</p>
          </div>
        </section>
      </div>
    </div>

    <div
      :class="{
        puntero: true,
        animated: true,
        duration1s: true,
        fadeInUp: this.enterAnimation,
        fadeOutDown: this.exitAnimation,
      }"
    >
      <img src="/img/puntero.svg" alt="puntero" />
    </div>
  </div>

  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

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

@font-face {
  font-family: "Arial";
  src: url("/Fonts/arial.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

@font-face {
  font-family: "Montserrat";
  src: url("/Fonts/Montserrat-Regular.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

section {
  width: 80%;
  height: 100%;
}

.video-fondo-alliances {
  position: fixed;
  left: -20%;
  scale: 1;
  opacity: 70%;
  min-width: 140%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 3;
}

.video-banner {
  position: absolute;
  z-index: 999;
  top: 15%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.video-banner .banner {
  width: 100%;
  display: none;
}

@media screen and (min-width: 500px) {
  .video-banner {
    top: 0%;
    z-index: 111;
  }

  .video-banner .banner_web {
    display: inline;
  }
}

.contenido-general {
  width: 100%;
  height: 100%;

  background: linear-gradient(to right, #0b092e 100%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contenido-principal {
  position: absolute;
  top: 6%;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 900px) {
  .contenido-principal {
    top: 15%;
  }
}

.texto {
  position: relative;
  z-index: 45;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-end;
}

.texto > section {
  width: 70%;
}

.texto > section p {
  width: 80%;
  float: right;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 4.5vw;
  text-align: left;
  color: #ffffff;
}

.content-forms {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  z-index: 20;
}

.animacion-content-up {
  -webkit-animation-name: contentUp;
  animation-name: contentUp;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-content-up-revert {
  -webkit-animation-name: contentUp;
  animation-name: contentUp;
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
}

@keyframes contentUp {
  0% {
    position: absolute;
    top: -15rem;
  }
}

@media screen and (min-width: 490px) {
  .texto {
    z-index: 45;
    display: none;
  }
}

@media screen and (min-width: 900px) {
  .texto {
    display: none;
  }

  .content-forms {
    position: absolute;
    top: 20%;
    height: 100%;
  }
}

.logo {
  position: absolute;
  top: 5rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}

.animacion-logo {
  -webkit-animation-name: animar-logo;
  animation-name: animar-logo;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-logo-revert {
  -webkit-animation-name: animar-logo;
  animation-name: animar-logo;
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes animar-logo {
  0% {
    position: absolute;
    top: 2rem;
    left: 34rem;
    width: 25rem;
    height: 5rem;
    z-index: 1;
    opacity: 10%;
  }
}

.fondo {
  width: 100%;
  height: 100%;
}

.fondo-telefono {
  position: fixed;
  bottom: 30%;
  left: -150%;
  width: 40%;
  height: 50%;
  z-index: 4;
  opacity: 20%;
}

@media screen and (width > 500px) {
  .fondo-telefono {
    display: none;
  }
}

.filtro-superior {
  position: absolute;
  z-index: 4;
  background: radial-gradient(
    circle at center,
    #14ec84 0%,
    #0b5f50 50%,
    #505863 100%
  );
  opacity: 30%;
}

.fondo-montana {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 80%;
  z-index: 6;
}

.fondo-montana img {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.fondo-montana-animation img {
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  -webkit-animation-duration: 0.78s;
  -webkit-animation-name: fondo-montana-animation;
  animation-name: fondo-montana-animation;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.fondo-montana-animation-salida img {
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  animation-name: salidaMontana;
  -webkit-animation-name: salidaMontana;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.fondo-montana-animation-revert img {
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  -webkit-animation-name: fondo-montana-animation;
  animation-name: fondo-montana-animation;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.fondo-montana-animation-salida-revert img {
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  animation-name: salidaMontana;
  -webkit-animation-name: salidaMontana;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes fondo-montana-animation {
  0% {
    top: 0%;
  }
}

@keyframes salidaMontana {
  0% {
    top: 0%;
  }

  100% {
    top: 10%;
  }
}

.fondo-oscurecer {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #010101;
  opacity: 10%;
  mix-blend-mode: multiply;
}

.fondo-red img {
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
  height: 75%;
  z-index: 4;
  opacity: 40%;
}

@media screen and (width <=500px) {
  .fondo-montana {
    display: none;
  }

  .fondo-red {
    display: none;
  }

  .fondo-oscurecer {
    opacity: 50%;
    z-index: 4;
  }

  .filtro-superior {
    position: absolute;
    opacity: 60%;
  }
}

.circulos {
  position: absolute;
  width: 100%;
}

.circulo {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.circulo img {
  width: 18rem;
}

.circulo-medio {
  position: absolute;
  top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.circulo-medio img {
  width: 16rem;
}

.arco {
  width: 100%;
  display: flex;
  justify-content: center;
}

.semi_circulo {
  position: relative;
  top: 0.5rem;
  width: 18.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 44;
}

.semi_circulo img {
  position: absolute;
  scale: 1.15;
}

@media screen and (min-width: 769px) {
  .circulos {
    top: 0;
    position: absolute;
    width: 100%;
  }

  .circulo img {
    width: 30rem;
  }

  .circulo-medio img {
    width: 28rem;
  }

  .semi_circulo {
    position: relative;
    top: -0.5rem;
    width: 32rem;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 44;
  }
}

.Alianzas {
  position: absolute;
  top: 1rem;
  width: 90%;
  display: flex;
  height: 30%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.alianzas {
  margin: 0 auto;
  position: absolute;
  top: 3.5rem;
  z-index: 66;
  width: 12rem;
  display: flex;
  justify-content: space-between;
}

.alianzas a {
  text-align: center;
  color: #010101;
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-weight: 600;
  font-size: 2vw;
}

.alianzas a span {
  padding: 0;
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  background-color: #ecf3f2;
  border-radius: 100%;
  text-align: center;
  -webkit-box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
  -moz-box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
  box-shadow: -16px 3px 135px 10px rgba(8, 8, 8, 1);
}

.alianzas img {
  position: relative;
  top: 10%;
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;
}

.alianzas a span:hover {
  cursor: pointer;
}

@media screen and (min-width: 769px) {
  .Alianzas {
    top: 3rem;
    width: 22rem;
  }

  .alianzas {
    top: 3.5rem;
    width: 19rem;
  }

  .alianzas a {
    font-size: 1rem;
    font-weight: 400;
  }

  .alianzas a span {
    width: 4rem;
    height: 4rem;
  }

  .alianzas img {
    width: 3rem;
    height: 3rem;
  }
}

.animacion-arco img {
  -webkit-animation-name: animacion-arco;
  animation-name: animacion-arco;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.animacion-arco-revert img {
  -webkit-animation-name: animacion-arco;
  animation-name: animacion-arco;
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

@keyframes animacion-arco {
  0% {
    top: 70%;
    transform: rotateZ(-180deg);
  }

  100% {
    top: 0%;
    transform: rotateZ(0deg);
  }
}

.rectangulos {
  position: absolute;
  width: 95%;
  top: 2.5rem;
  display: flex;
  justify-content: center;
}

.rectangulo {
  position: absolute;
  top: 6.2rem;
  z-index: 8;
  display: flex;
  justify-content: center;
}

.rectangulo img {
  width: 22rem;
}

.rectangulo p {
  position: absolute;
  top: 50%;
  z-index: 12;
  color: #ffffff;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
  font-size: 3.5vw;
  font-weight: 400;
}

.rectangulo-medio {
  position: absolute;
  top: 3rem;
  width: 100%;
  margin: 0 auto;
  display: flex;

  z-index: 33;
}

@media screen and (min-width: 769px) {
  .rectangulo {
    top: 12rem;
  }

  .rectangulo img {
    width: 36rem;
  }

  .rectangulo p {
    top: 6.2rem;
    font-size: 2rem;
  }

  .rectangulo-medio {
    top: 13rem;
    width: 100%;
    margin: 0 auto;
    display: flex;

    z-index: 33;
  }

  .contenido img {
    width: 30rem;
  }
}

.contenido {
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contenido img {
  width: 24rem;
}

.imagenes {
  position: relative;
  top: -6.2rem;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}

.imagenes img {
  width: 6rem;
}

.imagenes img:last-child {
  width: 4.7rem;
}

@media screen and (min-width: 769px) {
  .rectangulo-medio {
    top: 7rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    z-index: 33;
  }

  .contenido img {
    width: 40rem;
  }

  .imagenes {
    position: relative;
    top: -10rem;
    width: 35%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
  }

  .imagenes img {
    width: 8rem;
  }

  .imagenes img:last-child {
    width: 6.5rem;
  }
}

.puntero {
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 40%;
  padding: 0;
  margin: 0;
  top: 38rem;
  display: flex;
  justify-content: center;
}

.puntero img {
  width: 16rem;
}

@media screen and (max-width: 769px) {
  .puntero {
    display: none;
  }
}

.degradado {
  background: linear-gradient(to right, #090380 55%, transparent);
  position: absolute;
  width: 100%;
  height: 180%;
  z-index: 19;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  animation-name: luz;
  -webkit-animation-name: luz;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  top: -10%;
  opacity: 70%;
}

@media screen and (min-width: 600px) {
  .degradado {
    width: 50%;
    top: 20%;
  }
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

@media screen and (max-width: 900px) {
  .video-fondo-alliances {
    position: fixed;
    left: -60%;
    top: -20%;
    scale: 1;
    opacity: 30%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 3;
  }

  .logo {
    display: none;
  }

  .degradado_izquierdo {
    display: none;
  }
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
}

@media only screen and (max-width: 900px) {
  .animacion-arco-salida img {
    animation-name: animacion-arco-salida;
    -webkit-animation-name: animacion-arco-salida;
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  .animacion-arco-revert-salida img {
    animation-name: animacion-arco-salida;
    -webkit-animation-name: animacion-arco-salida;
    animation-duration: 0.8s;
    -webkit-animation-duration: 0.8s;
    animation-direction: reverse;
    -webkit-animation-direction: reverse;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  @keyframes animacion-arco-salida {
    0% {
      position: absolute;
      top: 100%;
      opacity: 0%;
    }

    100% {
      position: absolute;
      top: 0%;
      opacity: 100%;
    }
  }
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
  -webkit-animation-duration: 0.78s;
  animation-duration: 0.78s;
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

@media only screen and (max-width: 900px) {
  .animacion-desaparecer {
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    animation-name: desaparecer;
    -webkit-animation-name: desaparecer;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  .animacion-desaparecer-revert {
    -webkit-animation-duration: 0.78s;
    animation-duration: 0.78s;
    animation-name: desaparecer;
    -webkit-animation-name: desaparecer;
    animation-direction: reverse;
    -webkit-animation-direction: reverse;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  @keyframes desaparecer {
    0% {
      opacity: 0%;
    }
  }
}
</style>
