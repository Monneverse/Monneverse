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
            <h1>phase 2</h1>
        </div>
        <div class="description">
            <p>official pre-sale of 2,000,000 monners. at $1.5. publication on www.monneverse.com of the portafolios
                by monnerstaking at the end of the pre-sale.
            </p>
        </div>
    </div>

    <div class="circulos">
        <img src="/img/aros1.png">
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
    left: 24%;
    bottom: 54%;
    width: 50%;
    height: 25%;
    z-index: 7;
}

.componentes1 {
    position: absolute;
    top: 45%;
    left: 0%;
    width: 25%;
    height: 64%;
}

.componentes2 {
    position: absolute;
    top: 55%;
    left: 36%;
    width: 25%;
    height: 64%;
}

.componentes3 {
    position: absolute;
    top: 45%;
    right: 0%;
    width: 25%;
    height: 64%;
}
</style>