<script>
import Team from "./componenteTeam.vue";
export default {
  components: {
    Team,
  },

  props: ["enterAnimation", "exitAnimation", "isRevert"],
  data() {
    return {
      group: [
        {
          title: "CEO Brayan Gómez",
          description:
            "Certified trader in S&P500 and Nasdaq, director of private investment funds. Sales Manager at MonnerPlanet.",
          img: "/img/Team/bra.jpg",
          redes: [
            {
              name: "Instagram",
              url: "https://www.instagram.com/enriquerosass/",
              icon: "img/video-redes/instagram.png",
            },
            {
              name: "Twitter",
              url: "https://twitter.com/criptorosass",
              icon: "img/video-redes/gorjeo.png",
            },
          ],
        },
        {
          title: "CMO Anderson Ledezma",
          description:
            "7 years of experience in crypto market, NFT project developer, passionate about marketing and product expansion.",
          img: "/img/Team/ale.jpg",
          redes: [
            {
              name: "Instagram",
              url: "https://www.instagram.com/transcendentecripto",
              icon: "img/video-redes/instagram.png",
            },
            {
              name: "Twitter",
              url: "https://twitter.com/Transcendente03",
              icon: "img/video-redes/gorjeo.png",
            },
            {
              name: "Twitch",
              url: "https://www.twitch.tv/transcendentecripto",
              icon: "img/video-redes/twitch.png",
            },
            {
              name: "Tik tok",
              url: "https://www.tiktok.com/@transcendenteuniversal",
              icon: "img/video-redes/tiktok.png",
            },
          ],
        },

        {
          title: "CMO Kevin Canacuan ",
          description:
            "Developer of NFT projects, software developer. Marketing and business access on MNR and MonnerPlanet.",
          img: "/img/Team/kev.jpg",
          redes: [
            {
              name: "Telegram",
              url: "https://t.me/RankooCrypto",
              icon: "img/video-redes/Telegram_logo.svg",
            },
            {
              name: "Twitter",
              url: "https://twitter.com/RankooCrypto",
              icon: "img/video-redes/gorjeo.png",
            },
          ],
        },
        {
          title: "María Ortiz",
          description:
            "Graphic designer, lover of crypto culture and the development of projects with high growth potential.",
          img: "img/Team/mar.jpg",
          redes: [
            {
              name: "Instagram",
              url: "https://www.instagram.com/szettatrading/",
              icon: "img/video-redes/instagram.png",
            },
            {
              name: "Twitter",
              url: "https://twitter.com/zettaindahouse",
              icon: "img/video-redes/gorjeo.png",
            },
            {
              name: "Telegram",
              url: "https://t.me/goldenpicksadmin",
              icon: "img/video-redes/Telegram_logo.svg",
            },
          ],
        },
      ],
    };
  },
  methods: {
    next() {
      let panel = document.getElementById('contenidoTeam');
      let count = parseInt(( panel.scrollLeft + panel.offsetWidth) / panel.offsetWidth);
   
     
      panel.scrollLeft = panel.offsetWidth * count;

    },
    before() {
      let panel = document.getElementById('contenidoTeam');
      let count = parseInt((panel.scrollLeft - panel.offsetWidth) / panel.offsetWidth);
      if (count != (panel.scrollLeft - panel.offsetWidth) / panel.offsetWidth) {
        count++;
      }
   
      panel.scrollLeft = panel.offsetWidth * count ;
    
    },
  },
};
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
    <img src="/img/rayos.png" alt="Background-ray" />
  </div>
  <div
    :class="{
      fondo: true,
    }"
    class="fondo-benefit"
  >
    <img src="/img/fondo-benefit.png" alt="Background-monner" />
  </div>

  <div class="titulo">
    <h1>TEAM</h1>
  </div>

  <div id="contenidoTeam" class="contenido">
    <Team
      v-for="team in group"
      :class="{
        video: true,
        video__aparecer: this.enterAnimation && !this.isRevert,
        video__aparecer_revert: this.enterAnimation && this.isRevert,
        video__desaparecer_revert: this.exitAnimation && this.isRevert,
        video__desaparecer: this.exitAnimation && !this.isRevert,
      }"
      :title="team.title"
      :description="team.description"
      :redes="team.redes"
      :img="team.img"
    >
    </Team>
  </div>
  <div class="arrow" @click="next()"></div>
  <div class="arrow2" @click="before()"></div>
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
  text-align: center;
  color: #ffc000;
  font-family: "Montserrat", "Work Sans";
}

.contenido {
  position: relative;
  top: 25%;
  left: 2.5%;
  width: 95%;
  height: 75%;
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  overflow: hidden;
  overflow-x: scroll;
  overscroll-behavior-x: initial;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  direction: initial;
  scroll-behavior: smooth;
  font-family: "Work Sans", "BAHNSCHRIFT9.ttf", "Arial", "Montserrat";
}

.contenido {
  left: 1%;
  justify-content: flex-start;
  height: 62%;
  width: 98%;
  padding: 0.1rem;
}

.contenido::-webkit-scrollbar:horizontal {
  height: 10px;
}

.contenido::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    rgb(33, 32, 85) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.contenido ::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar {
  display: block;
}

.video {
  display: block;
  position: unset;
  width: 30%;
  box-sizing: border-box;
  min-width: 25rem;
  padding: 0.5rem;
  margin: 0;
  height: 100%;
}

.video__aparecer {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.3s normal 1 ease-in-out;
  -webkit-animation: aparecer 0.3s normal 1 ease-in-out;
}

.video__aparecer:nth-child(1) {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.8s normal 1 ease-in-out;
  -webkit-animation: aparecer 0.8s normal 1 ease-in-out;
}

.video__aparecer:nth-child(2) {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.6s normal 1 ease-in-out;
  -webkit-animation: aparecer 0.6s normal 1 ease-in-out;
}

.video__aparecer:nth-child(3) {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.4s normal 1 ease-in-out;
  -webkit-animation: aparecer 0.4s normal 1 ease-in-out;
}

.video__desaparecer_revert {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.9s reverse 1 ease-in-out forwards;
  -webkit-animation: aparecer 0.9s normal 1 ease-in-out;
}

.video__desaparecer_revert:nth-child(1) {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.4s reverse 1 ease-in-out forwards;
  -webkit-animation: aparecer 0.4s reverse 1 ease-in-out forwards;
}

.video__desaparecer_revert:nth-child(2) {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.6s reverse 1 ease-in-out forwards;
  -webkit-animation: aparecer 0.6s reverse 1 ease-in-out forwards;
}

.video__desaparecer_revert:nth-child(3) {
  position: relative;
  left: 0;
  top: 0;
  animation: aparecer 0.8s reverse 1 ease-in-out forwards;
  -webkit-animation: aparecer 0.8s reverse 1 ease-in-out forwards;
}

.video__desaparecer {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.3s normal 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.3s normal 1 ease-in-out forwards;
}

.video__desaparecer:nth-child(1) {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.8s normal 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.8s normal 1 ease-in-out forwards;
}

.video__desaparecer:nth-child(2) {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.6s normal 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.6s normal 1 ease-in-out forwards;
}

.video__desaparecer:nth-child(3) {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.4s normal 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.4s normal 1 ease-in-out forwards;
}

.video__aparecer_revert {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.3s reverse 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.3s reverse 1 ease-in-out forwards;
}

.video__aparecer_revert:nth-child(1) {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.8s reverse 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.8s reverse 1 ease-in-out forwards;
}

.video__aparecer_revert:nth-child(2) {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.6s reverse 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.6s reverse 1 ease-in-out forwards;
}

.video__aparecer_revert:nth-child(3) {
  position: relative;
  left: 0;
  top: 0;
  animation: desaparecer 0.4s reverse 1 ease-in-out forwards;
  -webkit-animation: desaparecer 0.4s reverse 1 ease-in-out forwards;
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
  .video {
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    padding: 0 5%;
    max-width: 15rem;
  }

  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 25px;
    height: 25px;
    top: 56%;
    left: 94%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(-50deg);
    transform: rotate(-50deg);
    border-left: none;
    border-top: none;
    border-right: 4px #ffc000 solid;
    border-bottom: 4px #ffc000 solid;
    z-index: 999;
  }

  .arrow:before {
    content: "";
    width: 15px;
    height: 15px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #ffc000 solid;
    border-bottom: 2px #ffc000 solid;
    animation-duration: 2s;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    animation-name: arrow;
    -webkit-animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

  .arrow2,
  .arrow2:before {
    position: absolute;
    left: 50%;
  }

  .arrow2 {
    width: 25px;
    height: 25px;
    top: 56%;
    left: 9%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    border-left: none;
    border-top: none;
    border-right: 4px #ffc000 solid;
    border-bottom: 4px #ffc000 solid;
    z-index: 999;
  }

  .arrow2:before {
    content: "";
    width: 15px;
    height: 15px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #ffc000 solid;
    border-bottom: 2px #ffc000 solid;
    animation-duration: 2s;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    animation-name: arrow2;
    -webkit-animation-name: arrow2;
  }

  @keyframes arrow2 {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

  .logo-redes {
    display: none;
  }
}
</style>
