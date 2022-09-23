<script setup>
import Benefits from "./TemplateBenefits.vue";
import Circulos from "./ComponentesCirculo.vue";
</script>
<template>
  <!--FONDO-->

  <div class="fondo">
    <div class="fondo_rayos">
      <img src="img/rayos.png" alt="" />
    </div>
    <div class="rectangulo">
      <img src="img/rectangulo.svg" alt="" />
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse" />
    </div>
    <div class="titulo">
      <h1>BENEFITS</h1>
    </div>

    <div class="display_flex">
      <div class="benefits">
        <Benefits />
      </div>
      <div class="circulos">
        <Circulos />
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
}
.titulo {
  position: absolute;
  top: 15%;
  left: 18%;
}
.titulo h1 {
  font-size: 4vw;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
}
.benefits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  height: 80%;
  position: absolute;
  top: 15%;
  left: 15%;
}
.fondo {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #121026;
}
.fondo_rayos {
  position: absolute;

  left: -30%;
  width: 100%;
  height: 100%;
}

.fondo-oscurecer {
  position: absolute;
  z-index: 4;
  opacity: 60%;
  mix-blend-mode: multiply;
}

.rectangulo {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: -15%;
  width: 100%;
}
.rectangulo img {
  width: 20%;
  min-height: 15%;
}
.circulos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 50%;
  position: relative;
  top: 35%;
  left: 35%;
  transform: rotate(225deg);

}
.logo-redes {
  position: absolute;
  bottom: 0%;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon  img{
  width: 3.5vw;
  height: auto;
  margin-left: 1rem;
}
</style>
