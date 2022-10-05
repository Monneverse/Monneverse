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

    <div class="logos_auditoria">
        <a href="https://solidity.finance/audits/MONNERVERSE/" target="_blank"><img src="/img/Exchanges/mesa1.png"
                class="auditoria1"></a>
        <a><img src="/img/Exchanges/mesa2.png" class="auditoria2"></a>
        <button class="btn_registro" @click="reDirect">registro EEUU</button>
    </div>
    <div class="circulos">
        <img src="/img/imagen1.png">
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
export default {
    data() {
        return {
            event: "click"
        }
    },
    methods: {
        reDirect() {
            location.replace("https://sites.google.com/view/whiterpaper-monnerverse/p%C3%A1gina-principal");
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');

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
    height: 180%;
    z-index: 2;
}

.degradado_azulde {
    background: linear-gradient(to right, #08047A 0.5%, transparent);
    position: absolute;
    transform: rotate(230deg);
    top: -12%;
    left: 50%;
    width: 50%;
    height: 180%;
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
    left: 25%;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.texto_auditoria p {
    font-size: 3vw;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
}

.auditoria1 {
    position: absolute;
    top: 45%;
    left: 14%;
    width: 24%;
    height: 20%;
    z-index: 5;
}

.auditoria1:hover {
    position: absolute;
    width: 25%;
    border: 2px solid #121026;
    border-radius: 2%;
    -webkit-box-shadow: 0px 22px 28px 5px #08047A;
    -moz-box-shadow: 0px 22px 28px 5px #08047A;
    box-shadow: -22px 22px 28px 5px #08047A;
}

.auditoria2 {
    position: absolute;
    top: 45%;
    right: 14%;
    width: 24%;
    height: 20%;
    z-index: 5;
}

.auditoria2:hover {
    position: absolute;
    width: 25%;
    border: 2px solid #121026;
    border-radius: 2%;
    -webkit-box-shadow: 0px 22px 28px 5px #08047A;
    -moz-box-shadow: 0px 22px 28px 5px #08047A;
    box-shadow: 22px 22px 28px 5px #08047A;
}

.btn_registro {
    position: absolute;
    bottom: 20%;
    right: 44%;
    width: 14%;
    height: 8%;
    z-index: 5;
    text-transform: capitalize;
    font-size: 2vw;
    font-weight: 600;
    font-family: Calibri;
    color: white;
    z-index: 999;
    background: linear-gradient(to right,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
    border-radius: 0.6rem;
}

.circulos {
    position: absolute;
    left: 40%;
    bottom: 14%;
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