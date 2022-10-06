<script setup>
import coin from "./componentesCoins.vue";
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

  <div class="degradado_azuliz"></div>
  <div class="degradado_azulde"></div>
  <!--FIN FONDO-->
  <div class="contenedor_coins">
    <div class="card_coin">
      <coin
        icono="/img/coins/kucoin.svg"
        titulo="KuCoin token "
        sigla="(KCS)"
        texto="TOP 52 approx capitalization"
        capitalizacion="900 M USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of KuCoin token (KCS) would have a value of"
        logo="/img/logo.svg"
        precio="90.000"
        caja="/img/coins/caja.png"
      />
    </div>
    <div class="card_coin">
      <coin
        icono="/img/coins/axie.svg"
        titulo="Axie Infinity"
        sigla="(AXS)"
        texto="TOP 48 approx capitalization"
        capitalizacion="1.05 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of AXIE INFINITY (AXS) would have a value of"
        logo="/img/logo.svg"
        precio="105.000"
        caja="/img/coins/caja.png"
      />
    </div>
    <div class="card_coin">
      <coin
        icono="/img/coins/monero.svg"
        titulo="Decentraland"
        sigla="(MANA)"
        texto="TOP 42 approx capitalization"
        capitalizacion="1.30 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of Decentraland (MANA) would have a value of"
        logo="/img/logo.svg"
        precio="130.000"
        caja="/img/coins/caja.png"
      />
    </div>

    <div class="card_coin">
      <coin
        icono="/img/coins/monero.svg"
        titulo="Monero"
        sigla="(XRM)"
        texto="TOP 28 approx capitalization"
        capitalizacion="2.68 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of  Monero (XRM) would have a value of"
        logo="/img/logo.svg"
        precio="268.000"
        caja="/img/coins/caja.png"
      />
    </div>
    <div class="card_coin">
      <coin
        icono="/img/coins/chain.svg"
        titulo="Chainlink"
        sigla="(LINK)"
        texto="TOP 21 approx capitalization"
        capitalizacion="3.72 B USD"
        texto2="Each Monner DeFi (MRN) with this capitalization of Chainlink (LINK) would have a value of"
        logo="/img/coins/logo.svg"
        precio="372.000"
        caja="/img/coins/caja.png"
      />
    </div>
  </div>

  <div class="cuadros-derecho">
    <img src="/img/coins/cuadros.svg" alt="" />
  </div>
  <div class="cuadros-izquierdo">
    <img src="/img/coins/cuadros.svg" alt="" />
  </div>
  <div class="monner">
    <h3>MONNER’S TOTAL SUPPLY:</h3>
    <h1>10.000 (MNR)</h1>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100;400;500;600&family=Work+Sans:wght@300;400;500;600;700&display=swap");
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
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
  z-index: 1;
}

.filtro-superior {
  z-index: 2;
  background: radial-gradient(
    circle at center,
    #f9f9fa 0%,
    #c8ced4 50%,
    #a8aaaf 100%
  );
  mix-blend-mode: multiply;
}

.fondo-montana {
  height: 100%;
  top: 0%;
  left: 0;
  z-index: 3;
}

.fondo-oscurecer {
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}

.degradado_azuliz {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  transform: rotate(-60deg);
  top: 0%;
  z-index: 7;
  right: 50%;
  width: 50%;
  height: 180%;
}

.degradado_azulde {
  background: linear-gradient(to right, #08047a 0.5%, transparent);
  position: absolute;
  transform: rotate(230deg);
  top: -12%;
  left: 50%;
  width: 50%;
  height: 180%;
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
}

/* FIN ESTILO FONDO */

.contenedor_coins {
  position: absolute;
  z-index: 14;
  width: 95%;
  height: 90%;
  left: 2.5%;
  bottom: -2%;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
  align-items: stretch;
}

.cuadros-derecho {
  width: 20%;
  position: absolute;
  top: 90%;
  z-index: 18;
  transform: rotate(600grad);
}
.cuadros-izquierdo {
  width: 20%;
  position: absolute;
  top: 90%;
  right: 0;
  z-index: 18;
}
.monner {
  position: absolute;
  top: 88%;
  left: 35%;
  z-index: 456;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 20%;

}
.monner h3{
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1.5vw;
  font-weight: 600;

}

.monner h1{
  color: #ffffff;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 3vw;
  font-weight: 600;

}
</style>
