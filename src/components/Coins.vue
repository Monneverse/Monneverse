<template>
    <!--FONDO-->
    <div class="fondo fondo-calculadora"></div>
    <div class="fondo filtro-superior"></div>
    <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="circuito circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <div class="luces">
        <img src="/img/luz.png" alt="" />
    </div>
    <div class="degradado_azuliz"></div>
    <div class="degradado_azulde"></div>
    <!--FIN FONDO-->
</template>

<script></script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}

/* INICIO ESTILO FONDO */
.fondo {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.fondo-calculadora {
    z-index: 0;
    background: radial-gradient(circle at center,
            #48d0ab 0%,
            #097561 50%,
            #505863 100%);
    z-index: 1;
}

.filtro-superior {
    z-index: 2;
    background: radial-gradient(circle at center,
            #f9f9fa 0%,
            #c8ced4 50%,
            #a8aaaf 100%);
    mix-blend-mode: multiply;
}

.fondo-montana {
    height: 100%;
    top: 10%;
    left: 0;
    z-index: 3;
}

.fondo-oscurecer {
    z-index: 4;
    background-color: rgb(0, 0, 0);
    opacity: 60%;
    mix-blend-mode: multiply;
}

.luces {
    position: absolute;
    bottom: -12%;
    left: -9%;
    width: 120%;
    height: 110%;
    z-index: 5;
    opacity: 100%;
}

.degradado_azuliz {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    transform: rotate(-60deg);
    top: 0%;
    z-index: 7;
    right: 50%;
    width: 50%;
    height: 180%;
    opacity: 70%;

}

.degradado_azulde {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    transform: rotate(230deg);
    top: -12%;
    left: 50%;
    width: 50%;
    height: 180%;
    opacity: 70%;
    z-index: 7;
}

.circuito {
    position: absolute;
    z-index: 8;
    height: 80%;
    width: 40%;
    min-width: 30rem;
    top: 40%;
}

.circuito-izquierdo {
    left: -10%;
}

.circuito-derecho {
    right: -10%;
    transform: scaleY(-1);
}

/* FIN ESTILO FONDO */
</style>