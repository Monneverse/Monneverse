<template>
    <!-- Fondo de la calculadora -->
    <div class="fondo fondo-footer"></div>
    <div class="fondo filtro-superior"></div>
    <div :class="{fondo:true, 'fondo-montana':true,'fondo-montana-animation':index_pagina==4} ">
        <img src="/img/fondo-montana.png" />
    </div>
    <div class="fondo fondo-oscurecer"></div>


    <div class="circuito circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
</template>

<script>

</script>


<style scoped>
img {
    height: 100%;
    width: 100%;
}

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
</style>