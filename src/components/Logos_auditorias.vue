<template>
  <div class="texto_auditoria">
    <p
      :class="{
        animated: true,
        duration1s: true,
        zoomIn: this.enterAnimation,
        zoomOut: this.exitAnimation,
      }"
    >
      audited by the <br />most reliable companies
    </p>
  </div>
  <div class="fondo"></div>
  <div class="fondo-oscuro1"></div>
  <div class="fondo-oscuro"></div>
  <div id="logo-1" class="logo">
    <img src="/img/logo.svg" alt="logo" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/img/fondo-montana.png" alt="Background-montain" srcset="" />
  </div>
  <div class="fondo-mundial">
    <img src="/img/fondo_Cel.png" alt="Background-cell" srcset="" />
  </div>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="Circuit" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="Circuit" />
  </div>
  <div class="circuito circuito-izquierdo">
    <img src="/img/calculadora/circuito-izquierdo.png" alt="Circuit" />
  </div>
  <div class="circuito circuito-derecho">
    <img src="/img/calculadora/circuito-derecho.png" alt="Circuit" />
  </div>
  <div
    :class="{
      luces: true,
      animated: true,
      duration1s: true,
      fadeIn: this.enterAnimation,
      fadeOut: this.exitAnimation,
    }"
  >
    <img src="/img/luz.png" alt="Light" />
  </div>
  <div
    class="fondoSolidity"
    :class="{
      animated: true,
      duration1s: true,
      zoomIn: this.enterAnimation,
      zoomOut: this.exitAnimation,
    }"
  ></div>
  <div
    class="fondoCertik"
    :class="{
      animated: true,
      duration1s: true,
      zoomIn: this.enterAnimation,
      zoomOut: this.exitAnimation,
    }"
  ></div>
  <br />
  <div
    class="logos_auditoria"
    :class="{
      animated: true,
      duration1s: true,
      zoomIn: this.enterAnimation,
      zoomOut: this.exitAnimation,
    }"
  >
    <a href="" target="_blank">
      <img
        src="/img/Exchanges/solidity1.png"
        class="auditoria1 zoomIn animated"
        alt="Solidity"
    /></a>
    <a
      href="https://sites.google.com/view/certik-kyc-approved/certik-kyc-approved"
      target="_blank"
      ><img class="auditoria2" src="/img/Exchanges/certik.png" alt="Certik"
    /></a>
    <button
      class="btn_registro"
      :class="{
        animated: true,
        duration1s: true,
        fadeInLeft: this.enterAnimation,
        fadeOutLeft: this.exitAnimation,
      }"
    >
      <a
        href="https://www.flbusinessgo.com/companies/L22000347356/"
        target="_blank"
      >
        register EEUU</a
      >
    </button>
  </div>
  <div
    :class="{
      circulos: true,
      animated: true,
      duration1s: true,
      fadeInRight: this.enterAnimation,
      fadeOutRight: this.exitAnimation,
    }"
  >
    <img src="../assets/aro.svg" />
  </div>
  <div class="logo-redes">
    <div class="icon icon-telegram">
      <a href="https://t.me/MonnerverseCripto" target="_blank">
        <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
      </a>
    </div>
    <div class="icon icon-reddit">
      <a href="https://www.reddit.com/user/monnerverse" target="_blank">
        <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
      </a>
    </div>
    <div class="icon icon-discord">
      <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
        <img src="../assets/discord.svg" alt="logo discord" srcset="" />
      </a>
    </div>
  </div>
  <div class="degradado degradado_izquierdo"></div>
  <div class="degradado degradado_derecho"></div>
</template>

<script>
export default {
  props: ["enterAnimation", "exitAnimation"],
};
</script>

<style scoped>
@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT9.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

/* FONDO */
img {
  height: 100%;
  width: 100%;
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121026;
  height: 100%;
  width: 100%;
  display: flex;
}

.luces {
  position: absolute;
  bottom: -18%;
  left: -9%;
  width: 120%;
  height: 140%;
  z-index: 4;
}

.degradado {
  background: linear-gradient(to right, #040077 50%, transparent);
  position: fixed;
  transform: rotate(-60deg);
  top: 0%;
  right: 50%;
  width: 50%;
  height: 200%;
  z-index: 2;
}

.degradado_izquierdo {
  transform: rotate(-60deg);
  right: 55%;
}

.degradado_derecho {
  transform: rotate(230deg);
  left: 55%;
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

@media only screen and (min-device-width: 75px) and (max-device-width: 900px) {
  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #121026;
    height: 100%;
    width: 100%;
    display: flex;
    opacity: 30%;
    z-index: 3;
  }

  .fondo-oscuro {
    position: fixed;
    top: 0;
    left: 0em;
    width: 24em;
    height: 52em;
    background: radial-gradient(
      circle at center,
      #48d0ab 10%,
      #097561 20%,
      #0f161c 100%
    );
    z-index: 1;
    opacity: 100%;
  }

  .luces {
    visibility: hidden;
  }

  .degradado {
    background: linear-gradient(to right, #090380 55%, transparent);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 38%;
    opacity: 90%;
  }

  .degradado_izquierdo {
    transform: rotate(-60deg);
    right: 55%;
    visibility: hidden;
  }

  .degradado_derecho {
    transform: rotate(230deg);
    left: 40%;
  }

  .fondo-montana {
    position: fixed;
    top: 24%;
    left: -143%;
    width: 70em;
    height: 40em;
    z-index: 3;
    opacity: 20%;
  }

  .fondo-mundial {
    position: fixed;
    top: 12em;
    left: -10em;
    width: 50em;
    height: 35em;
    z-index: 3;
    opacity: 80%;
  }

  .circuito-derecho {
    visibility: hidden;
  }

  .circuito-izquierdo {
    left: -70%;
  }

  #logo-1 {
    width: 63%;
    max-height: 14%;
    position: fixed;
    top: 65%;
    left: -7%;
    z-index: 3;
    opacity: 70%;
  }
}

@media only screen and (min-device-width: 412px) and (max-device-width: 915px) {
  .fondo {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #121026;
    height: 100%;
    width: 100%;
    display: flex;
    opacity: 30%;
    z-index: 3;
  }

  .fondo-oscuro {
    position: fixed;
    top: 0;
    left: 0em;
    width: 100em;
    height: 100em;
    background: radial-gradient(
      circle at center,
      #48d0ab 10%,
      #097561 20%,
      #0f161c 100%
    );
    z-index: 1;
    opacity: 100%;
  }

  .luces {
    visibility: hidden;
  }

  .degradado {
    background: linear-gradient(to right, #090380 55%, transparent);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 38%;
    opacity: 90%;
  }

  .degradado_izquierdo {
    transform: rotate(-60deg);
    right: 55%;
    visibility: hidden;
  }

  .degradado_derecho {
    transform: rotate(230deg);
    left: 40%;
  }

  .fondo-montana {
    position: fixed;
    top: 24%;
    left: -143%;
    width: 100em;
    height: 100em;
    z-index: 3;
    opacity: 20%;
  }

  .fondo-mundial {
    position: fixed;
    top: 22em;
    left: -8em;
    width: 50em;
    height: 40em;
    z-index: 3;
    opacity: 80%;
  }

  .circuito-derecho {
    visibility: hidden;
  }

  .circuito-izquierdo {
    left: -70%;
  }

  #logo-1 {
    width: 63%;
    max-height: 14%;
    position: fixed;
    top: 65%;
    left: -7%;
    z-index: 3;
    opacity: 70%;
  }
}

/* FIN FONDO */

/* TEXT */

.texto_auditoria {
  position: absolute;
  width: 100%;
  top: 20%;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.texto_auditoria p {
  font-size: 3vw;
  font-family: "Bahn";
  font-weight: 500;
  text-transform: uppercase;
}

@media only screen and (min-device-width: 1px) and (max-device-width: 900px) {
  .texto_auditoria {
    position: absolute;
    top: 11.4%;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }

  .texto_auditoria p {
    font-size: 2.7rem;
    font-family: "Bahn";
    font-weight: 500;
    text-transform: uppercase;
  }
}

/* FIN TEXT */

/* LOGOS */

.fondoSolidity {
  position: fixed;
  top: 42%;
  left: 8%;
  width: 33%;
  height: 30%;
  border-radius: 0.5rem;
  background-color: white;
  z-index: 4;
}

.auditoria1 {
  position: absolute;
  top: 46.5%;
  left: 8.41%;
  width: 32%;
  height: 20%;
  z-index: 5;
}

.fondoCertik {
  position: fixed;
  top: 42%;
  right: 6%;
  width: 33%;
  height: 30%;
  border-radius: 0.5rem;
  background-color: white;
  z-index: 4;
}

.auditoria2 {
  position: absolute;
  top: 42.7%;
  right: 7.33%;
  width: 29%;
  height: 27.9%;
  z-index: 5;
}

/* .fondoCertik:hover {
    position: absolute;
    width: 30%;
    border: 2px solid #121026;
    border-radius: 2%;
    -webkit-box-shadow: 0px 2px 28px 5px #08047A;
    -moz-box-shadow: 0px 2px 28px 5px #08047A;
    box-shadow: 0px 2px 28px 15px #08047A;
} */

@media only screen and (min-device-width: 75px) and (max-device-width: 900px) {
  .fondoSolidity {
    top: 40%;
    left: 26%;
    height: 10%;
    width: 50%;
  }

  .auditoria1 {
    top: 40%;
    left: 26%;
    height: 10%;
    width: 50%;
    border-radius: 1rem;
  }

  .auditoria1:hover {
    width: 50%;
    border: 2px solid #121026;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 28px 5px #08047a;
    -moz-box-shadow: 0px 2px 28px 5px #08047a;
    box-shadow: 0px 2px 28px 15px #08047a;
  }

  .fondoCertik {
    top: 58%;
    left: 26%;
    width: 50%;
    height: 10%;
  }

  .auditoria2 {
    top: 58%;
    left: 26%;
    width: 50%;
    height: 10%;
  }

  .auditoria2:hover {
    width: 50%;
    border: 2px solid #121026;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 28px 5px #08047a;
    -moz-box-shadow: 0px 2px 28px 5px #08047a;
    box-shadow: 0px 2px 28px 15px #08047a;
  }
}

@media only screen and (min-device-width: 412px) and (max-device-width: 915px) {
  .fondoSolidity {
    top: 35%;
    left: 26%;
    height: 15%;
    width: 50%;
  }

  .auditoria1 {
    top: 35%;
    left: 26%;
    height: 15%;
    width: 50%;
    border-radius: 1rem;
  }

  .auditoria1:hover {
    width: 50%;
    border: 2px solid #121026;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 28px 5px #08047a;
    -moz-box-shadow: 0px 2px 28px 5px #08047a;
    box-shadow: 0px 2px 28px 15px #08047a;
  }

  .fondoCertik {
    top: 55%;
    left: 26%;
    width: 50%;
    height: 15%;
  }

  .auditoria2 {
    top: 55%;
    left: 26%;
    width: 50%;
    height: 15%;
  }

  .auditoria2:hover {
    width: 50%;
    border: 2px solid #121026;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 28px 5px #08047a;
    -moz-box-shadow: 0px 2px 28px 5px #08047a;
    box-shadow: 0px 2px 28px 15px #08047a;
  }
}

@media only screen and (min-device-width: 428px) and (max-device-width: 926px) {
  .fondoSolidity {
    top: 39%;
    left: 26%;
    height: 10%;
    width: 50%;
  }

  .auditoria1 {
    top: 39%;
    left: 26%;
    height: 10%;
    width: 50%;
    border-radius: 1rem;
  }

  .auditoria1:hover {
    width: 50%;
    border: 2px solid #121026;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 28px 5px #08047a;
    -moz-box-shadow: 0px 2px 28px 5px #08047a;
    box-shadow: 0px 2px 28px 15px #08047a;
  }

  .fondoCertik {
    top: 55%;
    left: 26%;
    width: 50%;
    height: 10%;
  }

  .auditoria2 {
    top: 55%;
    left: 26%;
    width: 50%;
    height: 10%;
  }

  .auditoria2:hover {
    width: 50%;
    border: 2px solid #121026;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 28px 5px #08047a;
    -moz-box-shadow: 0px 2px 28px 5px #08047a;
    box-shadow: 0px 2px 28px 15px #08047a;
  }
}

/* FIN LOGOS */

/* BOTON */
.btn_registro {
  position: absolute;
  bottom: 8%;
  right: 44%;
  width: 14%;
  height: 8%;
  z-index: 5;
  text-transform: capitalize;
  font-size: 1.5vw;
  font-weight: 600;
  color: white;
  z-index: 999;
  background: linear-gradient(to right, #029f50 0%, #0a664e 50%, #0e444d 100%);
  border-radius: 0.6rem;
}

.btn_registro a {
  text-decoration: none;
  color: white;
}

.btn_registro {
  cursor: pointer;
}

.circulos {
  position: absolute;
  left: 40%;
  bottom: 2%;
  width: 18%;
  height: 16%;
  z-index: 7;
}

@media only screen and (min-device-width: 75px) and (max-device-width: 900px) {
  .btn_registro {
    bottom: 17%;
    left: 28%;
    width: 45%;
    height: 8%;
  }

  .btn_registro a {
    font-size: 3.5vw;
  }

  .circulos {
    bottom: 12%;
    left: 24%;
    width: 53%;
    height: 13%;
  }
}

/* FIN BOTON */

/* REDES */

.logo-redes {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  height: 5rem;
  z-index: 14;
  display: flex;
  justify-content: start;
}

.icon {
  width: 3rem;
  height: 3rem;
  z-index: 18;
  margin-left: 1rem;
}

@media only screen and (min-device-width: 75px) and (max-device-width: 900px) {
  .logo-redes {
    display: none;
  }

  .icon {
    width: 2.3rem;
  }

  .logos_auditoria {
    margin-top: 2rem;
  }
}

/* FIN REDES */
</style>
