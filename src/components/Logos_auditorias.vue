<template>
    <div class="fondo"></div>
    <div class="texto_auditoria">
        <p>audited by the <br>most reliable companies</p>
    </div>
    <div class="circuito circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <div class="luces">
        <img src="/img/luz.png" alt="" />
    </div>
    <div class="fondoSolidity"> <a href="https://solidity.finance/audits/MONNERVERSE/" target="_blank">
            <img src="/img/Exchanges/solidity1.png" class="auditoria1"></a></div>
    <div class="fondoCertik"><a><img src="/img/Exchanges/certik.png" class="auditoria2"></a></div>
    <div class="logos_auditoria">
        <button class="btn_registro"><a
                href="https://sites.google.com/view/whiterpaper-monnerverse/p%C3%A1gina-principal" target="_blank">
                register EEUU</a></button>
    </div>
    <div class="circulos">
        <img src="/img/Imagen1.png">
    </div>
    <div class="logo-redes">
        <div class="icon icon-telegram">
            <a href="https://t.me/monnerversecommunity" target="_blank">
                <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="">
            </a>
        </div>
        <div class="icon icon-reddit">
            <a href="https://www.reddit.com/user/monnerverse" target="_blank">
                <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="">
            </a>
        </div>
        <div class="icon icon-discord ">
            <a href="https://discord.com/invite/h7fRvek9dn" target="_blank">
                <img src="../assets/discord.svg" alt="logo discord" srcset="">
            </a>
        </div>
    </div>
    <div class="degradado_azuliz"></div>
    <div class="degradado_azulde"></div>

</template>

<script>
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

.degradado_azuliz {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    transform: rotate(-60deg);
    top: 0%;
    right: 50%;
    width: 50%;
    height: 200%;
    z-index: 2;
}

.degradado_azulde {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    transform: rotate(230deg);
    top: -12%;
    left: 50%;
    width: 50%;
    height: 200%;
    z-index: 2;
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

.texto_auditoria {
    position: absolute;
    top: 20%;
    left: 33%;
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

.fondoSolidity {
    position: fixed;
    top: 52%;
    left: 8%;
    width: 33%;
    height: 16%;
    border-radius: 0.5rem;
    background-color: white;
    z-index: 4;
}

.auditoria1 {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    z-index: 5;
}

/* .auditoria1:hover {
    position: absolute;
    width: 32%;
    border: 2px solid #121026;
    border-radius: 2%;
    -webkit-box-shadow: 0px 2px 28px 5px #08047A;
    -moz-box-shadow: 0px 2px 28px 5px #08047A;
    box-shadow: 0px 2px 28px 15px #08047A;
} */

.fondoCertik {
    position: fixed;
    top: 52%;
    right: 6%;
    width: 33%;
    height: 16%;
    border-radius: 0.5rem;
    background-color: white;
    z-index: 4;
}

.auditoria2 {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    z-index: 5;
}

/* .auditoria2:hover {
    position: absolute;
    width: 30%;
    border: 2px solid #121026;
    border-radius: 2%;
    -webkit-box-shadow: 0px 2px 28px 5px #08047A;
    -moz-box-shadow: 0px 2px 28px 5px #08047A;
    box-shadow: 0px 2px 28px 15px #08047A;
} */

.btn_registro {
    position: absolute;
    bottom: 8%;
    left: 42%;
    width: 14%;
    height: 8%;
    z-index: 5;
    text-transform: capitalize;
    font-size: 1.5vw;
    font-weight: 600;
    color: white;
    z-index: 999;
    background: linear-gradient(to right,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
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

.logo-redes {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    width: 20rem;
    height: 5rem;
    z-index: 14;
    display: flex;
    justify-content: start;
    z-index: 6;
}

.icon {
    width: 3rem;
    height: auto;
    z-index: 18;
    margin-left: 1rem;
}
</style>