<script>
import fasesComponentes from "./ComponentsPhases.vue";
export default {
    components: {
        fasesComponentes,
    },
    props: ["enterAnimation", "exitAnimation", "isRevert", "SetBloquearScroll"],
};
</script>
<template >
    <!-- Comienzo fondo -->
    <div class="fondo fondo-degradiente"></div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="circuito">
        <img src="/img/circuitoFaseNew.png" alt="" />
    </div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="logo">
        <img src="/img/logo.svg" alt="" />
    </div>

    <div class="degradado degradado_derecho"></div>
    <!-- Fin fondo -->
    <h2>ROAD MAP</h2>
    <div class="contenido" @mouseenter="this.SetBloquearScroll(false)" @touchstart="this.SetBloquearScroll(false)"
        @touchend="this.SetBloquearScroll(true)" @mouseleave="this.SetBloquearScroll(true)">

        <div class="contenido__fase">
            <div class="contenido__fase__linea"></div>
            <div class="contenido__fase__circulo contenido__fase__circulo_start"></div>
            <div class="contenido__fase__circulo contenido__fase__circulo_end"></div>
            <!-- Fase Q1 -->
            <div class="fase">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>Q1</h3>

                <div class="fase__contenido">

                    <ul>
                        <li>
                            -Development of our entire ecosystem
                        </li>
                        <li> -Liquidity lock</li>
                        <li> -Audits and KYC approved</li>
                        <li> -Audits and KYC approved</li>
                        <li> -working mining farms</li>
                        <li>-Start of <span class="resaltar">MNR</span> pre-sale in Pinksale</li>
                        <li>-listed on PancakeSwap at <span class="resaltar">17.5usd</span></li>
                        <li> -Injection of liquidity to raise our price after its first listing and protect it from
                            sales.
                        </li>
                        <li> -Price protection firm with Bank Security, a group of private investors and a line of
                            credit
                            created to protect and maximize the price of our token.</li>
                    </ul>

                </div>
           
            </div>
            <!-- Fase Q2 -->
            <div class="fase">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>Q2</h3>
                <div class="fase__contenido">

                    <ul>
                        <li>
                            -Start of staking for awarded holders.

                        </li>
                        <li> -Listed on <span class="resaltar">Bitmart</span> and <span class="resaltar">Gate.io</span>
                        </li>
                        <li> -Opening to the public (holders) of our main facilities</li>
                        <li> -Conference in NY before private investors on our renewable energy patents (<span
                                class="resaltar">MonnerPlaner</span>
                            and <span class="resaltar">MonnerMinner</span>) with the lowest costs and the highest
                            quality standards. <span class="resaltar">50%</span> of the
                            investment raised will go towards our locked liquidity to boost our price.
                        </li>
                        <li> -Official launch of <span class="resaltar">MonnerCard, MonnerWallet, MonneTrading.</span>
                        </li>
                        <li> -Certik Audit</li>
                        <li>-Audit of Financial Soundness</li>
                    </ul>

                </div>
           
            </div>

            <!-- Fase Q3 -->
            <div class="fase">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>Q3</h3>
                <div class="fase__contenido">

                    <ul>
                        <li>
                            - 20,000 headlines

                        </li>
                        <li> - 45,000 members on Telegram</li>
                        <li> - Implementation of <span class="resaltar">MonnerHosting</span> and development of <span
                                class="resaltar">Monner BlockChain</span></li>
                        <li> - Opening of <span class="resaltar">MonnerGame</span> (betting center) in virtual reality.
                        </li>
                    </ul>

                </div>

            </div>
            <!-- Fase Q4 -->
            <div class="fase">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>Q4</h3>
                <div class="fase__contenido">

                    <ul>
                        <li>
                            - Expansion of our marketing campaign

                        </li>
                        <li> - 7 high power solar mining farms that will send daily liquidity to our token.</li>
                        <li> - 5,000 homes in the US, BRAZIL, PANAMA, GUATEMALA, COLOMBIA and others with renewable
                            energy boards patented under the <span class="resaltar">MNR</span> name with a 20-year
                            guarantee.
                        </li>
                        <li> - Publication of Q-5, Q-6, Q-7, Q-8.
                        </li>
                        <li> - <span class="resaltar">Monner</span> will innovate year after year until it becomes the
                            project with the greatest
                            potential in the world.</li>
                    </ul>

                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
/* style of web */

/* globales y utiles */
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

.fondo-degradiente {
    background: radial-gradient(circle at center,
            #48d0ab 0%,
            #097561 50%,
            #505863 90%);
    z-index: 1;
}

.fondo-oscurecer {
    z-index: 2;
    background-color: #072d28;
    opacity: 60%;
    mix-blend-mode: multiply;
}

.circuito {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

.logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: .5;
}

.degradado {
    background: linear-gradient(to right, #090380 55%, transparent);
    position: fixed;
    width: 50%;
    height: 180%;
    z-index: 2;
    top: 0%;
    opacity: 70%;
    user-select: none;
    pointer-events: none;
}

.degradado_derecho {
    transform: rotate(230deg);
    left: 60%;
}

.contenido {
    font-family: "BAHNSCHRIFT9.ttf", "Arial", "Montserrat", "Work Sans";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    padding-left: .5rem;
    height: 70%;
    z-index: 6;
    overflow: hidden;
    overflow-y: scroll;
    overscroll-behavior-y: initial;
    scroll-snap-type: y mandatory;
    box-sizing: border-box;
    direction: initial;
    scroll-behavior: smooth;
}

h2 {
    color: var(--color-secundario);
    text-align: center;
    position: absolute;
    top: 12%;
    width: 100%;
    z-index: 5;
}

.contenido::-webkit-scrollbar:vertical {
    width: 10px;
}

.contenido::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,
            rgb(33, 32, 85) 0%,
            rgba(1, 209, 88, 1) 100%);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

.contenido ::-webkit-scrollbar-track {
    border-radius: 10px;
}

::-webkit-scrollbar {
    display: block;
}

.contenido__fase {

    width: 100%;
    height: 330%;
    padding: 1rem;

}

.contenido__fase__linea {
    position: relative;
    width: .3rem;
    border-radius: 2rem;
    background-color: bisque;
    height: 100%;
    z-index: 1;
}

.contenido__fase__circulo {
    position: relative;
    left: 0;
    transform: translate(-30%, 0);
    border-radius: 50%;
    z-index: 2000;
    background-color: bisque;
    width: .8rem;
    height: .8rem;
}

.contenido__fase__circulo_start {
    top: -100%;

}

.contenido__fase__circulo_end {
    top: -1%;
}

.fase {
    position: relative;
    top: -100%;
    width: 95%;
    color: white;
    padding: 2rem;
    box-sizing: border-box;

}

.fase h3 {
    margin-left: 1.7rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.fase .fase__contenido {
    font-size: 2vh;
    border-left: 2px solid white;
    padding-left: 1.5rem;
}

.fase .fase__contenido .resaltar {
    color: var(--color-secundario);
}

.fase .fase__contenido ul {
    position: relative;
}

.reloj {
    width: 1.8rem;
    height: 1.8rem;
    background-color: #05874F;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .1rem;
    border: 2px solid white;
    position: relative;
    left: -3rem;
    top: 4.5rem;
    z-index: 11;
}

.reloj img {
    width: 1.5rem;
    height: 1.5rem;
}

/* Style mobile */
@media screen and (min-width: 900px) {

    .circuito {
        width: 90%;
        transform: translate(-40%, -50%);
        z-index: 2;
    }

    .logo {
        top: 60%;
        left: 60%;
        width: 25%;
        z-index: 3;
    }
 

}
</style>