<script setup>
import fasesComponentes from './fasesComponentes.vue';
</script>
        
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
    <!--FIN FONDO-->

    <div class="Fases">
        <div class="titulo">
            <h1>phase 4</h1>
        </div>
        <div class="description">
            <p>Start of Staking phase 2</p>
        </div>
    </div>

    <div class="circulos">
        <img src="/img/imagen1.png">
    </div>

    <button class="readMore" @click="reDirect">
        Learn More
    </button>

    <div class="circulos1">
        <img src="/img/imagen1.png">
    </div>

    <div class="componentes1">
        <fasesComponentes title="Development"
            description="Development of MonnerTrading, MonnerHosting, and MonnerBlockchaine." />
    </div>

    <div class="componentes2">
        <fasesComponentes title="Conference" description="Official <b>CEO</b> conference for the public." />
    </div>

    <div class="componentes3">
        <fasesComponentes title="Presentation"
            description="Development and presentation of MonnerMetaverse-MonnerGame in augmented virtual reality." />
    </div>

    <div class="componentes4">
        <fasesComponentes title="Holders" description="15.000 holders Phase 4." />
    </div>

    <div class="componentes5">
        <fasesComponentes title="MonnerTrading" description="MonnerTrading official Launch." />
    </div>

    <div class="componentes6">
        <fasesComponentes title="MonnerMetaverse-MonnerGame"
            description="Official MonnerMetaverse-MonnerGame in argumented reality." />
    </div>

    <div class="componentes7">
        <fasesComponentes title="Staking" description="Phase 3 Staking Programming." />
    </div>

    <div class="componentes8">
        <fasesComponentes title="Scheduled" description="Scheduled burning." />
    </div>

    <div class="componentes9">
        <fasesComponentes title="Enlistment" description="Enlistment in other High Recognition Exchanges" />
    </div>
</template>
        
<script>
export default {
    data() {
        return {
            event: "click"
        }
    },
    methods: {
        reDirect() {
            location.replace("https://sites.google.com/view/community-monnerverse/p%C3%A1gina-principal");
        }
    }
}
</script>
    
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
    background: radial-gradient(circle at center,
            #f9f9fa 0%,
            #c8ced4 50%,
            #a8aaaf 100%);
    mix-blend-mode: multiply;
    z-index: 2;
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

.circuito {
    position: absolute;
    z-index: 4;
    height: 80%;
    width: 40%;
    min-width: 30rem;
    top: 20%;
}

.circuito-izquierdo {
    left: -14%;
}

.circuito-derecho {
    right: -14%;
    transform: scaleY(-1);
}

/* FIN ESTILO FONDO */



.Fases {
    justify-content: center;
    text-align: center;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 6;
    left: 27%;
    top: 50%;
}

.titulo {
    color: white;
    right: 27%;
    bottom: 8%;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 100%;
    text-transform: uppercase;
    z-index: 6;
}

.description {
    color: white;
    width: 45%;
    font-size: 1.2vw;
}

.circulos {
    position: absolute;
    left: 35%;
    bottom: 40%;
    width: 30%;
    height: 20%;
    z-index: 5;
}

.circulos1 {
    position: absolute;
    left: 32.5%;
    bottom: 30%;
    width: 35%;
    height: 30%;
    z-index: 5;
}

.readMore {
    position: absolute;
    top: 60.5%;
    left: 45%;
    border-radius: 1rem;
    margin-bottom: 15px;
    width: 10%;
    height: 7%;
    font-size: 1vw;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    z-index: 999;
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
}

.componentes1 {
    position: absolute;
    top: 30%;
    left: 0%;
    width: 20%;
    height: 64%;
}

.componentes2 {
    position: absolute;
    top: 70%;
    left: 0%;
    width: 20%;
    height: 55%;
}

.componentes3 {
    position: absolute;
    top: 20%;
    left: 24%;
    width: 27%;
    height: 55%;
}

.componentes4 {
    position: absolute;
    top: 80%;
    left: 18%;
    width: 18%;
    height: 64%;
}

.componentes5 {
    position: absolute;
    top: 20%;
    right: 30%;
    width: 18%;
    height: 64%;
}

.componentes6 {
    position: absolute;
    top: 30%;
    right: 0%;
    width: 27%;
    height: 64%;
}

.componentes7 {
    position: absolute;
    top: 80%;
    right: 19%;
    width: 18%;
    height: 64%;
}

.componentes8 {
    position: absolute;
    top: 70%;
    right: -1%;
    width: 28%;
    height: 55%;
}

.componentes9 {
    position: absolute;
    top: 80%;
    right: 35%;
    width: 28%;
    height: 55%;
}
</style>