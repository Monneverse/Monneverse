<template>

    <!--FONDO-->
    <div class="fondo fondo-calculadora"></div>
    <div class="fondo filtro-superior"></div>
    <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <!--FIN FONDO-->

    <div class="Fases">
        <div class="titulo">
            <h1>phase 1</h1>
        </div>
        <div class="description">
            <p>Development of the entire monneverse ecosystem, website, spanish and english discord, telegram,
                twitter and facebook</p>
        </div>
    </div>

</template>

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
    top: 20%;
    left: 0;
    z-index: 3;
}

.fondo-oscurecer {
    z-index: 4;
    background-color: rgb(0, 0, 0);
    opacity: 60%;
    mix-blend-mode: multiply;
}

.circuito-izquierdo {
    position: absolute;
    z-index: 7;
    left: -12%;
    top: 18%;
    height: 80%;
    width: 40%;
    min-width: 30rem;
}

.circuito-derecho {
    position: absolute;
    z-index: 7;
    right: -12%;
    top: 18%;
    height: 80%;
    width: 40%;
    min-width: 30rem;
}

/* FIN ESTILO FONDO */

.Fases {
    background-color: aliceblue;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.titulo {
    color: white;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>