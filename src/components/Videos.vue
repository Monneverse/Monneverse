<script setup>
import Youtube from "./video_youtube.vue"
</script>
<template>

    <div :class="{
        fondo: true, 'fondo__aparecer': this.enterAnimation && !this.isRevert,
        'fondo__aparecer2': this.enterAnimation && this.isRevert,
        'fondo__desaparecer': this.exitAnimation && this.isRevert,
        'fondo__desaparecer2': this.exitAnimation && !this.isRevert
    }">
        <img src="/img/rayos.png" alt="" />
    </div>
    <div :class="{
        fondo: true
    }" class="fondo-benefit">
        <img src="/img/fondo-benefit.png" alt="" />
    </div>
    <div :class="{'imagen-youtube':true, animated:true, duration1s:true, lightSpeedIn:this.enterAnimation, lightSpeedOut:this.exitAnimation}"><img src="../assets/YouTube-Icon.svg" alt="Youtube image"></div>
    <div class="contenido">
        <Youtube v-for="videoy in videosPlay" :class="{
            video: true, 'video__aparecer': this.enterAnimation && !this.isRevert,
            'video__aparecer_revert': this.enterAnimation && this.isRevert,
            'video__desaparecer_revert': this.exitAnimation && this.isRevert,
            'video__desaparecer': this.exitAnimation && !this.isRevert
        }" :title="videoy.title" :description="videoy.description" :list="videoy.playlist" :redes="videoy.redes">
        </Youtube>


    </div>
    <div class="arrow"></div>
    <div class="arrow2"></div>
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
export default {
    props: ["enterAnimation", "exitAnimation", "isRevert"],
    data() {
        return {
            videosPlay: [{
                title: "Titulo del video",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolor aperiam labore porro dolorum quod qui odit quia sit quis inventore. Dignissimos iste excepturi ipsa. Quam quas at veritatis harum.",
                playlist: ["https://www.youtube.com/embed/FR_ENQQwqN4", "https://www.youtube.com/embed/9x0ktT1zmlo"],
                redes: [
                    {
                        name: "discord",
                        url: "https://discord.com/invite/h7fRvek9dn",
                        icon: "src/assets/discord.svg"
                    },
                    {
                        name: "Telegram",
                        url: "https://t.me/monnerversecommunity",
                        icon: "src/assets/Telegram_logo.svg"
                    },
                    {
                        name: "reddit",
                        url: "https://www.reddit.com/user/monnerverse",
                        icon: "src/assets/reddit-4.svg"
                    }
                ]
            },
            {
                title: "Titulo del video",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolor aperiam labore porro dolorum quod qui odit quia sit quis inventore. Dignissimos iste excepturi ipsa. Quam quas at veritatis harum.",
                playlist: ["https://www.youtube.com/embed/9x0ktT1zmlo"],
                redes: [
                    {
                        name: "discord",
                        url: "https://discord.com/invite/h7fRvek9dn",
                        icon: "src/assets/discord.svg"
                    }
                ]
            }, {
                title: "Titulo del video",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolor aperiam labore porro dolorum quod qui odit quia sit quis inventore. Dignissimos iste excepturi ipsa. Quam quas at veritatis harum.",
                playlist: ["https://www.youtube.com/embed/f10mB6fKszU", "https://www.youtube.com/embed/FR_ENQQwqN4", "https://www.youtube.com/embed/9x0ktT1zmlo"],
                redes: [
                    {
                        name: "discord",
                        url: "https://discord.com/invite/h7fRvek9dn",
                        icon: "src/assets/discord.svg"
                    }, {
                        name: "reddit",
                        url: "https://www.reddit.com/user/monnerverse",
                        icon: "src/assets/reddit-4.svg"
                    }
                ]
            },
            ]
        }
    }
}

</script>


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
  z-index: 5;
}
.fondo-benefit img {
  position: absolute;
  top: -5%;
  height: 115vh;
}

.fondo__aparecer {
    animation: aparecer_ocultar 1s ease-in-out forwards;
}

.fondo__desaparecer {
    animation: aparecer_ocultar 1s ease-in-out reverse;
}

.fondo__aparecer2 {
    animation: aparecer_ocultar 1s ease-in-out forwards;
}

.fondo__desaparecer2 {
    animation: aparecer_ocultar 1s ease-in-out reverse;
}

@keyframes aparecer_ocultar {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
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
    left: 2.5%;
    width: 95%;
    height: 75%;
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: flex-start;
    padding: 2rem;
    overflow: hidden;
    overflow-x: scroll;
    overscroll-behavior-x: initial;
    scroll-snap-type: x mandatory;
    box-sizing: border-box;
    direction: initial;
    scroll-behavior: smooth;

}

@media screen and (max-width: 1370px) {
    .imagen-youtube {
        width: 12rem;
    }

    .contenido {
        left: 1%;
        justify-content: flex-start;
        height: 62%;
        width: 98%;
        padding: .1rem;
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
}



.video {

    display: block;
    position: unset;
    width: 30%;
    box-sizing: border-box;
    min-width: 25rem;
    padding: .5rem;
    margin: 0;
    height: 100%;
}

.video__aparecer:nth-child(1) {
    position: relative;
    left: 0;
    top: 0;
    animation: aparecer .8s normal 1 ease-in-out;
}

.video__aparecer:nth-child(2) {
    position: relative;
    left: 0;
    top: 0;
    animation: aparecer .6s normal 1 ease-in-out;
}

.video__aparecer:nth-child(3) {
    position: relative;
    left: 0;
    top: 0;
    animation: aparecer .4s normal 1 ease-in-out;
}

.video__desaparecer_revert:nth-child(1) {
    position: relative;
    left: 0;
    top: 0;
    animation: aparecer .4s reverse 1 ease-in-out forwards;

}

.video__desaparecer_revert:nth-child(2) {
    position: relative;
    left: 0;
    top: 0;
    animation: aparecer .6s reverse 1 ease-in-out forwards;

}

.video__desaparecer_revert:nth-child(3) {
    position: relative;
    left: 0;
    top: 0;
    animation: aparecer .8s reverse 1 ease-in-out forwards;

}

.video__desaparecer:nth-child(1) {
    position: relative;
    left: 0;
    top: 0;
    animation: desaparecer .8s normal 1 ease-in-out forwards;
}

.video__desaparecer:nth-child(2) {
    position: relative;
    left: 0;
    top: 0;
    animation: desaparecer .6s normal 1 ease-in-out forwards;
}

.video__desaparecer:nth-child(3) {
    position: relative;
    left: 0;
    top: 0;
    animation: desaparecer .4s normal 1 ease-in-out forwards;
}

.video__aparecer_revert:nth-child(1) {
    position: relative;
    left: 0;
    top: 0;
    animation: desaparecer .8s reverse 1 ease-in-out forwards;

}

.video__aparecer_revert:nth-child(2) {
    position: relative;
    left: 0;
    top: 0;
    animation: desaparecer .6s reverse 1 ease-in-out forwards;

}

.video__aparecer_revert:nth-child(3) {
    position: relative;
    left: 0;
    top: 0;
    animation: desaparecer .4s reverse 1 ease-in-out forwards;

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
        left: 50%
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
        content: '';
        width: 15px;
        height: 15px;
        top: 50%;
        margin: -10px 0 0 -10px;
        border-left: none;
        border-top: none;
        border-right: 2px #ffc000 solid;
        border-bottom: 2px #ffc000 solid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow;
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
        left: 50%
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
        content: '';
        width: 15px;
        height: 15px;
        top: 50%;
        margin: -10px 0 0 -10px;
        border-left: none;
        border-top: none;
        border-right: 2px #ffc000 solid;
        border-bottom: 2px #ffc000 solid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow2;
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