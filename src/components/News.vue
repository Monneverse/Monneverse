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
    <div class="luces">
        <img src="/img/luz.png" alt="" />
    </div>
    <div class="degradado_azuliz"></div>
    <div class="degradado_azulde"></div>
    <!--FIN FONDO-->

    <div class="titulo">
        <p>news</p>
    </div>
    <div class="contenedor_moneda">
        <div class="coinquora">
            <a href=""><img src="/img/News/CoinQuora.svg"></a>
        </div>
        <div class="cryptopotato">
            <a href=""><img src="/img/News/criptopotato.svg"></a>
        </div>
        <div class="coinrepublic">
            <a href=""><img src="/img/News/coinrepublic.svg"></a>
        </div>
    </div>
    <div class="contenedor_monedaR">
        <div class="criptotendencia">
            <a
                href="https://criptotendencia.com/2022/08/03/por-que-monner-puede-convertirse-en-una-de-las-mejores-criptomonedas-para-invertir/"><img
                    src="/img/News/CriptoTendencia.png"></a>
        </div>
        <div class="coinspeaker">
            <a href="https://www.coinspeaker.com/monner-coin-revolutionize-crypto/"><img
                    src="/img/News/CoinSpeaker.png"></a>
        </div>
        <div class="territoriobitcoin">
            <a href="https://www.territoriobitcoin.com/una-nueva-criptomoneda-en-tendencia/"><img
                    src="/img/News/TerritorioBitcoin.png"></a>
        </div>
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

.circuito-izquierdo {
    position: absolute;
    z-index: 7;
    left: -20%;
    top: 18%;
    height: 80%;
    width: 40%;
    min-width: 30rem;
}

.circuito-derecho {
    position: absolute;
    z-index: 7;
    right: -20%;
    top: 18%;
    height: 80%;
    width: 40%;
    min-width: 30rem;
}

/* FIN ESTILO FONDO */

.titulo {
    position: absolute;
    top: 15%;
    left: 42.5%;
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

.contenedor_moneda {
    grid-template-rows: 20% 20% 20%;
    grid-template-columns: 28%;
    position: absolute;
    display: grid;
    height: 80%;
    z-index: 7;
    width: 60%;
    left: 16%;
    top: 21%;
    gap: 10%;
}

.contenedor_moneda>img {
    justify-content: center;
    align-items: center;
    position: relative;
    display: grid;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.contenedor_monedaR {
    grid-template-rows: 20% 20% 20%;
    grid-template-columns: 28%;
    position: absolute;
    display: grid;
    height: 80%;
    z-index: 7;
    width: 60%;
    right: -28%;
    top: 21%;
    gap: 10%;
}

.contenedor_monedaR>img {
    justify-content: center;
    align-items: center;
    position: relative;
    display: grid;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.contenedor_monedaR img:hover {
    transform: scale(1.5);
    transition: transform 0.3s;
}

.contenedor_moneda img:hover {
    transform: scale(1.5);
    transition: transform 0.3s;
}
</style>