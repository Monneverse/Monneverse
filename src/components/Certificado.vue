<template>
    <div class="circuito circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>

    <div class="degradado degradado_izquierdo"></div>
    <div class="degradado degradado_derecho"></div>
    <div class="fondo">
        <div class="imagen">
            <img src="/img/certificado.png" alt="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
img {
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0%;
}

.fondo {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #121026;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagen {
    height: 75%;
    width: auto;

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

.degradado {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    width: 50%;
    height: 180%;
    z-index: 3;
    animation-duration: 3s;
    animation-name: luz;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    top: 0%;
}

.degradado_izquierdo {
    transform: rotate(-60deg);
    right: 50%;
}

.degradado_derecho {
    transform: rotate(230deg);
    left: 55%;
}

@keyframes luz {
    0% {
        opacity: 20%;
    }

    50% {
        opacity: 50%;
    }

    100% {
        opacity: 100%;
    }
}
</style>

