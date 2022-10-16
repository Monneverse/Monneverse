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
    <!-- <div class="luces">
        <img src="/img/luz.png" alt="" />
    </div> -->
    <div class="reflector reflector-izquierdo">
        <div class="luz-1"></div>
        <div class="luz-2"></div>
        <div class="luz-3"></div>
    </div>
    <div class="reflector reflector-derecho">
        <div class="luz-1"></div>
        <div class="luz-2"></div>
        <div class="luz-3"></div>
    </div>
    <div class="degradado_azuliz"></div>
    <div class="degradado_azulde"></div>
    <!--FIN FONDO-->

    <div class="titulo">
        <p>news</p>
    </div>
    <div class="cryptopotato">
        <a href=""><img src="/img/News/criptopotato.svg"></a>
    </div>
    <div class="coinquora">
        <a href=""><img src="/img/Exchanges/Coinquora.png"></a>
    </div>
    <div class="coinrepublic">
        <a href=""><img src="/img/News/TheCoinRepublic.png"></a>
    </div>

    <div class="circulo"></div>
    <div class="indicador"></div>

    <div class="criptotendencia">
        <a
            href="https://criptotendencia.com/2022/08/03/por-que-monner-puede-convertirse-en-una-de-las-mejores-criptomonedas-para-invertir/"><img
                src="/img/Exchanges/criptotend.png"></a>
    </div>
    <div class="coinspeaker">
        <a href="https://www.coinspeaker.com/monner-coin-revolutionize-crypto/"><img
                src="/img/Exchanges/coinspeaker.png"></a>
    </div>
    <div class="territoriobitcoin">
        <a href="https://www.territoriobitcoin.com/una-nueva-criptomoneda-en-tendencia/"><img
                src="/img/Exchanges/territoriobtc.png"></a>
    </div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');

img {
    width: 100%;
    height: 100%;
}

/* INICIO ESTILO FONDO */

.indicador {
    position: absolute;
    top: 45%;
    left: 46%;
    width: 5%;
    height: 20%;
    border-radius: 2rem;
    background: linear-gradient(to top,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
    z-index: 8;
}

.circulo {
    position: absolute;
    top: 31%;
    left: 46%;
    width: 4.7%;
    height: 10%;
    border-radius: 5rem;
    z-index: 8;
    background: #1A1E29;
}

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

.luces {
    position: absolute;
    bottom: -16%;
    left: -9%;
    width: 120%;
    height: 160%;
    z-index: 99;
    opacity: 100%;
}

.degradado_azuliz {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    transform: rotate(-60deg);
    top: 0%;
    z-index: 6;
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
    z-index: 6;
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
}

.circuito-derecho {
    right: -10%;
    transform: scaleY(-1);
}

/* FIN ESTILO FONDO */

.titulo {
    position: absolute;
    top: 15%;
    left: 44.5%;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 8;
}

.titulo p {
    font-size: 2.5vw;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Work Sans', sans-serif;
}

.cryptopotato {
    position: absolute;
    top: 18%;
    left: 15%;
    width: auto;
    height: auto;
    z-index: 9;
}

.coinquora {
    position: absolute;
    top: 42%;
    left: 12%;
    width: auto;
    height: auto;
    z-index: 9;
}

.coinrepublic {
    position: fixed;
    top: 70%;
    left: 12%;
    width: 30%;
    height: 30%;
    z-index: 9;
}

.coinrepublic img {
    position: fixed;
    top: 60%;
    left: 15%;
    width: 25%;
    height: 30%;
    border: 1px solid white;

}

img:hover {
    transform: scale(1.5);
    transition: transform 0.3s;
}

.criptotendencia {
    position: absolute;
    top: 65%;
    right: 15%;
    width: auto;
    height: auto;
    z-index: 9;
}

.coinspeaker {
    position: absolute;
    top: 14%;
    right: 13%;
    width: auto;
    height: auto;
    z-index: 9;
}

.territoriobitcoin {
    position: absolute;
    top: 42%;
    right: 9%;
    width: auto;
    height: auto;
    z-index: 9;
}

@keyframes luz {
    0% {
        opacity: 40%;
    }

    50% {
        opacity: 80%;
    }

    100% {
        opacity: 100%;
    }
}

.reflector {
    position: absolute;
    bottom: 0%;
    left: 5%;
    width: 40%;
    height: 100%;
    z-index: 10;
    animation-duration: 3s;
    animation-name: reflector;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.reflector-derecho {
    left: 55%;
}

@keyframes reflector {
    0% {
        opacity: 40%;
    }

    50% {
        opacity: 80%;
    }

    100% {
        opacity: 100%;
    }
}

.luz-1 {
    position: absolute;
    width: 30%;
    height: 130%;
    border-radius: 50%;
    bottom: -30%;
    transform: rotate(-30deg);
    background: radial-gradient(ellipse at center,
            rgba(255, 255, 255, 1) 0%,
            transparent 55%,
            rgba(184, 184, 184, 0) 100%);
    filter: blur(3rem);
    left: 30%;
}

.luz-2 {
    position: absolute;
    width: 30%;
    height: 160%;
    border-radius: 50%;
    bottom: -30%;
    left: 40%;
    transform: rotate(0deg);
    background: radial-gradient(ellipse at center,
            rgba(255, 255, 255, 1) 0%,
            transparent 55%,
            rgba(184, 184, 184, 0) 100%);
    filter: blur(3rem);
}

.luz-3 {
    position: absolute;
    width: 30%;
    height: 130%;
    border-radius: 50%;
    bottom: -30%;
    left: 55%;
    transform: rotate(-150deg);
    background: radial-gradient(ellipse at center,
            rgba(255, 255, 255, 1) 0%,
            transparent 55%,
            rgba(184, 184, 184, 0) 100%);
    filter: blur(3rem);
}
</style>