<script>

</script>

<template>
      <!-- Fondos -->
  <div class="fondo">
    <div class="fondoArticulo"></div>
    <div class="circuloFondo circuloFondo1"></div>
    <div class="circuloFondo circuloFondo2"></div>
    <div class="fondo fondo-montana">
      <img src="/img/fondo-montana.png" alt="Background-montain" />
    </div>
    <div class="fondo-oscuro"></div>
    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
  </div>

  <div class="circuitoIzquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="Circuit-left" />
  </div>

  <div class="circuitoDerecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="Circuit-right" />
  </div>

  <div class="video-banner">
    <video
      preload="auto"
      autoplay
      webkit-playsinline
      playsinline
      muted
      loop
      class="banner"

    >
      <source
        data-src="/video/banner.mp4"
        type="video/mp4"
        srcset="/video/banner.mp4"
        media="max-width:900px"
      />
      <source
      data-src="/video/banner_web.mp4"
      type="video/mp4"
      src="/video/banner_web.mp4"
    />
    </video>
  </div>

  <div class="logo-redes">

    <a class="icon" href="https://t.me/MonnerverseCripto" target="_blank">
      <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
    </a>

    <a class="icon" href="https://www.reddit.com/user/monnerverse" target="_blank">
      <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
    </a>


    <a class="icon" href="https://discord.com/invite/h7fRvek9dn" target="_blank">
      <img src="../assets/discord.svg" alt="logo discord" srcset="" />
    </a>

  </div>

</template>

<style scoped>


@font-face {
    font-family: LCDFONT;
    src: url("/Fonts/LCDFONT.TTF");
  }
  
  @font-face {
    font-family: "Bahn";
    src: url("/Fonts/BAHNSCHRIFT.TTF");
    font-stretch: semi-condensed;
    font-style: semibold;
  }
  
  img {
    height: 100%;
    width: 100%;
  }
  
  /* fondo de la pantalla */
  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%
    );
    z-index: 0;
  }
  
  .fondo-montana {
    top: -45%;
    opacity: 20%;
    height: 150%;
    z-index: 2;
  }
  
  .fondo-oscuro {
    background-color: rgb(0, 0, 0);
    z-index: 10;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    opacity: 50%;
  }
  
  .fondoArticulo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgb(0, 0, 0);
    opacity: 60%;
    mix-blend-mode: multiply;
  }
  
  .circuloFondo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 6px solid #164b2e;
    z-index: 2;
    opacity: 0.3;
  }
  
  .circuloFondo1 {
    width: 15rem;
    height: 15rem;
  }
  
  .circuloFondo2 {
    width: 30rem;
    height: 30rem;
  }
  
  .circuitoIzquierdo {
    position: absolute;
    z-index: 1;
    left: -10%;
    top: 15%;
    height: 80%;
    width: 50%;
    opacity: 100%;
  }
  
  .circuitoIzquierdo img {
    transform: rotateX(180deg);
  }
  
  .circuitoDerecho {
    position: absolute;
    z-index: 7;
    right: -10%;
    top: 15%;
    right: -13%;
    height: 80%;
    width: 55%;
  }
  
  .degradado {
    background: linear-gradient(to right, #08047a 0.5%, transparent);
    position: absolute;
    width: 50%;
    height: 180%;
    z-index: 3;
    top: 0%;
  }
  
  .degradado_izquierdo {
    transform: rotate(-60deg);
    right: 55%;
  }
  
  .degradado_derecho {
    transform: rotate(230deg);
    left: 58%;
  }

  .video-banner {
    position: absolute;
    z-index: 9;
    top: 15%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .video-banner video {
    width:  100%;
  }
  
.logo-redes {

  z-index: 1000;
}
.logo-redes {
  position: absolute;
  bottom:5rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: center;
}
.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}
</style>