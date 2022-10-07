<script setup>
import fasesComponentes from './fasesComponentes.vue';
</script>

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
            <p>development of the entire monneverse ecosystem, website, spanish and english discord, telegram,
                twitter and facebook</p>
        </div>
    </div>

    <div class="circulos">
        <img src="/img/Imagen1.png">
    </div>

    <button class="readMore" @click="LearnMore">
        Learn More
    </button>

    <div class="circulos1">
        <img src="/img/Imagen1.png">
    </div>

    <div class="componentes1">
        <fasesComponentes title="development" description="development of the entire monnerverse ecosystem website,
             spanish and english, discord, telegram, twitter and facebook." />
    </div>

    <div class="componentes2">
        <fasesComponentes title="collection" description="Collection of documents for important Exchanges:
         CoinGecko,CoinMarketCap, Poloniex, L-Bank, Hotbit, KuCoin, LAKATOKEN,Probit, MEXC global among others." />
    </div>

    <div class="componentes3">
        <fasesComponentes title="started" description="Collection of documents for important Exchanges:
         CoinGecko,CoinMarketCap, Poloniex, L-Bank, Hotbit, KuCoin, LAKATOKEN,Probit, MEXC global among others." />
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
        LearnMore() {
            var btn = document.getElementsByClassName("readMore");
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

.circuito-izquierdo {
    position: absolute;
    left: -12%;
    top: 18%;
    height: 80%;
    width: 40%;
    min-width: 30rem;
    z-index: 5;
}

.circuito-derecho {
    position: absolute;
    right: -12%;
    top: 18%;
    height: 80%;
    width: 40%;
    min-width: 30rem;
    z-index: 5;
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
    top: 25%;
}

.titulo {
    color: white;
    right: 28%;
    bottom: 10%;
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
    font-size: 1.4vw;
    text-transform: capitalize;
}

.circulos {
    position: absolute;
    left: 27%;
    bottom: 58%;
    width: 45%;
    height: 25%;
    z-index: 5;
}

.circulos1 {
    position: absolute;
    left: 22%;
    bottom: 48%;
    width: 55%;
    height: 30%;
    z-index: 5;
}

.readMore {
    position: absolute;
    top: 42.5%;
    left: 44%;
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
    top: 60%;
    left: 0%;
    width: 25%;
    height: 64%;
}

.componentes2 {
    position: absolute;
    top: 70%;
    left: 36%;
    width: 25%;
    height: 64%;
}

.componentes3 {
    position: absolute;
    top: 60%;
    right: 0%;
    width: 25%;
    height: 64%;
}
</style>