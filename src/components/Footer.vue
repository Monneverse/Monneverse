<script>
export default {
  props: ["enterAnimation", "exitAnimation"]
};
</script>
<template>
  <!-- Fondo de la footer -->
  <div :class="{
    logo: true,
    'logo-animation': this.enterAnimation,
    'logo-animation-revert': this.exitAnimation,
  }">
    <img src="/img/logo.svg" alt="logo monneverse" />
  </div>
  <div class="fondo fondo-footer"></div>
  <div class="fondo filtro-superior"></div>
  <div class="fondo fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain"/>
  </div>
  <div class="fondo fondo-oscurecer"></div>

  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="Background-cell" srcset="" />
  </div>
  <!-- Circuitos -->
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="Circuit-left" />
  </div>
  <div :class="{
    circuito: true, 'circuito-derecho': true,
    'circuito-desaparecer': this.enterAnimation,
    'circuito-aparecer': this.exitAnimation
  }">
    <img src="/img/calculadora/circuito-derecho.png" alt="Circuit-right" />
  </div>
  <!-- Filtros azul -->
  <div class="degradado degradado_derecho"></div>
  <div class="degradado degradado_derecho"></div>

  <!-- redes sociales -->
  <div :class="{
    'fondo-redes': true,
    'fondo-redes-animation': this.enterAnimation,
    'fondo-redes-animation-revert': this.exitAnimation
  }">
    <div class="redes">
      <a href="https://t.me/MonnerverseCripto">
        <img src="../assets/footer/telegram.svg" alt="Telegram" />
      </a>
    </div>
    <div class="redes">
      <a href="https://www.facebook.com/Monnerverse-community-101148059377702/?ref=page_internal">
        <img src="../assets/footer/facebook.svg" alt="Facebook" />
      </a>
    </div>
    <div class="redes">
      <a href="https://www.reddit.com/user/monnerverse">
        <img src="../assets/footer/reddit.svg" alt="Reddit" />
      </a>
    </div>
    <div class="redes">
      <a href="https://twitter.com/monnerverse">
        <img src="../assets/footer/twitter.svg" alt="Twitter" />
      </a>
    </div>
    <div class="redes">
      <a href="https://t.me/monnerverse_community">
        <img src="../assets/footer/instagram.svg" alt="Instagram" /></a>
    </div>
    <div class="redes">
      <a href="https://discord.com/invite/h7fRvek9dn">
        <img src="../assets/footer/discord.svg" alt="Discord" />
      </a>
    </div>
  </div>
</template>



<style scoped>
/* style of web */
img {
  height: 100%;
  width: 100%;
}

/* logo */
.logo {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 40%;
  height: 40%;
  transform: translate(-50%,0);

  z-index: 9;
  max-width: 20rem;
  max-height: 20rem;
  display: none;
}

.logo-animation {
  animation-name: logo-animation;
  -webkit-animation-name: logo-animation;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.logo-animation-revert {
  animation-name: logo-animation;
  -webkit-animation-name: logo-animation;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes logo-animation {
  0% {
    top: 2rem;
    left: 2rem;
    width: 5rem;
    height: 5rem;
  }


}

/* fondo */
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
  right: -50%;
  transform: scaleY(-1);
}

.circuito-desaparecer {
  animation: circuito_desaparecer .5s normal forwards ease-in-out;
  -webkit-animation: circuito_desaparecer .5s normal forwards ease-in-out;
}

.circuito-aparecer {
  animation: circuito_desaparecer .5s reverse backwards ease-in-out;
  -webkit-animation: circuito_desaparecer .5s reverse backwards ease-in-out;
}

@keyframes circuito_desaparecer {
  0% {
    right: -14%;
  }

  100% {
    right: -50%;
  }


}

.fondo-redes-animation {
  animation-name: fondo-redes-animation;
  -webkit-animation-name: fondo-redes-animation;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.fondo-redes-animation-revert {
  animation-name: fondo-redes-animation;
  -webkit-animation-name: fondo-redes-animation;
  animation-direction: reverse;
  -webkit-animation-direction: reverse;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes fondo-redes-animation {
  0% {
    top: 120%;
  }


}


.redes:hover a img {
  transition: 0.5s ease-in-out;
  transform: translate(-20px, -40px) rotate(-25deg) scale(1.2);
  -webkit-transform: translate(-20px, -40px) rotate(-25deg) scale(1.2);
}

.fondo-redes {
  position: absolute;
  top: 60%;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #1a1e2993;
  opacity: 1;
  z-index: 9;
}

.redes {
  min-width: 2rem;
  height: auto;
  margin-left: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.redes a img {
  width: 6vw;
  height: auto;
}

.logo {
  display: block;
}

/* style of  mobile */

@media screen and (max-width: 900px) {

  .degradado {
    background: linear-gradient(to right, #08047a 0.5%, transparent);
    position: absolute;
    width: 90%;
    height: 180%;
    z-index: 7;
    top: 0%;
  }


  .degradado_derecho {
    transform: rotate(230deg);
    left: 58%;
  }


  .circuito {
    scale: 1.65;
    z-index: 2;
  }

  .fondo-redes {
    position: relative;
    top: 0%;
    margin: 0 auto;
    width: 60%;
    height: 110%;
    background-color: #1a1e29bd;
    z-index: 26;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .redes {
    min-width: 4rem;
    height: auto;
    margin-left: 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .redes a img {
    width: 2.2rem;
    height: auto;
  }

  .logo {
    display: none;
  }

  .fondo-mundial {
    position: fixed;
    bottom: 0%;
    right: 0%;
    width: 100%;
    height: 30rem;
    z-index: 3;
    opacity: 100%;
    scale: 1.5;
  }
}
</style>
