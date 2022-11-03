<script setup>
import Youtube from "./video_youtube.vue"
</script>
<template>

    <div class="fondo">
        <img src="/img/rayos.png" alt="" />
    </div>
    <div class="fondo">
        <img src="/img/fondo-benefit.png" alt="" />
    </div>
    <div class="imagen-youtube"><img src="../assets/YouTube-Icon.svg" alt="Youtube image"></div>
    <div class="contenido">
        <Youtube class="video" title="Video de youtube"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolor aperiam labore porro dolorum quod qui odit quia sit quis inventore. Dignissimos iste excepturi ipsa. Quam quas at veritatis harum.">
        </Youtube>
        <Youtube class="video" title="Video de youtube"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolor aperiam labore porro dolorum quod qui odit quia sit quis inventore. Dignissimos iste excepturi ipsa. Quam quas at veritatis harum.">
        </Youtube>
        <Youtube class="video" title="Video de youtube"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolor aperiam labore porro dolorum quod qui odit quia sit quis inventore. Dignissimos iste excepturi ipsa. Quam quas at veritatis harum.">
        </Youtube>
    </div>

    <div class="logo-redes">

        <a class="icon" href="https://t.me/monnerversecommunity" target="_blank">
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


<script>


</script>


<style scoped>
body {
    background-color: #121026;
}

img {
    width: 100%;
    height: 100%;
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

.imagen-youtube {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 15rem;
    height: auto;
    z-index: 1;
}

.contenido {
    position: relative;
    top: 25%;
    left: 5%;
    width: 90%;
    height: 75%;
    padding: 1rem;
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    justify-content: baseline;
    gap: 1rem;
    align-items: center;
    padding: 2rem;
    overflow: hidden;
    overflow-x: scroll;
    overscroll-behavior-x: initial;
    scroll-snap-type: x mandatory;
  }


  .contenido::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .contenido::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,
        rgb(33, 32, 85) 0%,
        rgba(1, 209, 88, 1) 100%);
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
    min-width: 25rem;
    height: 90%;
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
  height: auto;
  margin-left: 1rem;
}

</style>