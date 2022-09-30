<template>
    <!-- Fondo de la footer -->
    <div :class="{logo: true , 'logo-animation':index_pagina==this.limite}">
        <img src="/img/logo.svg" alt="logo monneverse">
    </div>
    <div class="fondo fondo-footer"></div>
    <div class="fondo filtro-superior"></div>
    <div :class="{fondo:true, 'fondo-montana':true} ">
        <img src="/img/fondo-montana.png" />
    </div>
    <div class="fondo fondo-oscurecer"></div>

    <!-- Circuitos -->
    <div class="circuito circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <!-- Filtros azul -->
    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>

    <!-- redes sociales -->
    <div :class="{'fondo-redes':true, 'fondo-redes-animation':index_pagina==this.limite}">

        <div class="redes">
            <a href="https://t.me/monnerversecommunity">
                <img src="../assets/footer/telegram.svg" alt="">
            </a>
        </div>
        <div class="redes">
            <a href="https://www.facebook.com/Monnerverse-community-101148059377702/?ref=page_internal">
                <img src="../assets/footer/facebook.svg" alt="">
            </a>
        </div>
        <div class="redes">
            <a href="https://www.reddit.com/user/monnerverse">
                <img src="../assets/footer/reddit.svg" alt="">
            </a>
        </div>
        <div class="redes">
            <a href="https://twitter.com/monnerverse">
                <img src="../assets/footer/twitter.svg" alt="" />
            </a>
        </div>
        <div class="redes">
            <a href="https://t.me/monnerverse_community"> <img src="../assets/footer/instagram.svg" alt=""></a>
        </div>
        <div class="redes">
            <a href="https://discord.com/invite/h7fRvek9dn">
                <img src="../assets/footer/discord.svg" alt="">
            </a>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        index_pagina: {
            type: Number,
            required: true,
        },
        limite: {
            type: Number,
            required: true,
        },
    },
};
</script>


<style scoped>
img {
    height: 100%;
    width: 100%;
}
/* logo */
.logo {
    position: absolute;
    top: 15%;
    left: 43%;
    width: 30%;
    height: 30%;
    z-index: 9;
    max-width: 20rem;
    max-height: 20rem;
}

.logo-animation {
    animation-name: logo-animation;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

@keyframes logo-animation {
    0% {
        top: 2rem;
        left: 2rem;
        width: 5rem;
        height: 5rem;
    }

    100% {
        top: 15%;
        left: 43%;
        width: 30%;
        height: 30%;
    }
}
/* fondo */
.fondo {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.fondo-footer {
    z-index: 0;
    background: radial-gradient(circle at center,
            #48d0ab 0%,
            #097561 50%,
            #505863 100%);
}

.filtro-superior {
    z-index: 1;
    background: radial-gradient(circle at center,
            #f9f9fa 0%,
            #c8ced4 50%,
            #a8aaaf 100%);
    mix-blend-mode: multiply;
}

.fondo-montana {
    z-index: 2;
}

.fondo-montana-animation {
    animation-duration: 1s;
    animation-name: fondo-montana-animation;
    animation-iteration-count: 1;
}

@keyframes fondo-montana-animation {
    0% {
        height: 50%;
        top: 50%;
    }

    100% {
        height: 100%;
        top: 0%;
    }
}

.fondo-oscurecer {
    z-index: 3;
    background-color: rgb(0, 0, 0);
    opacity: 60%;
    mix-blend-mode: multiply;
}
/* circuito */
.circuito {
    position: absolute;
    z-index: 4;
    height: 80%;
    width: 40%;
    min-width: 30rem;
    top: 20%;

}

.circuito-izquierdo {
    left: -10%;
    animation-name: mover_izquierdo;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes mover_izquierdo {
    0% {
        left: -10%;
    }

    100% {
        left: 0%;
    }

}

.circuito-derecho {
    right: -10%;
    animation-name: mover_derecho;
    animation-duration: 5s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
}

@keyframes mover_derecho {
    0% {
        right: -10%;
    }

    100% {
        right: 0%;
    }

}
/* redes */
.fondo-redes {
    position: absolute;
    left: 0;
    bottom: 10%;
    width: 100%;
    height: 60%;
    background-color: #1a1e2957;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.fondo-redes-animation {
    animation-name: fondo-redes-animation;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

@keyframes fondo-redes-animation {
    0% {
        bottom: -70%;
    }

    100% {
        bottom: 10%;
    }
}

.redes {
    min-width: 2rem;
    width: 8rem;
    height: auto;
    margin: 5%;
    padding: 1rem;
}

.redes a img {
    width: 5rem;
    height: auto;
}

.redes:hover a img {
    transition: 0.5s ease-in-out;
    transform: translate(-20px, -40px) rotate(-25deg) scale(1.2);
}
</style>