<script>
export default {
    props: ["enterAnimation", "exitAnimation", "isRevert", "SetBloquearScroll", "next", "before"],
    mounted() {
        let roadmap = document.getElementById("contenido");
        roadmap.addEventListener('scroll', (event) => {

            if (roadmap.scrollTop == 0) {
                this.SetBloquearScroll(true);
                this.before();
            }

            if (roadmap.offsetHeight + roadmap.scrollTop + 5 >= roadmap.scrollHeight) {
                this.SetBloquearScroll(true);
                this.next();
            }
        });
    }
};
</script>
<template >
    <!-- Comienzo fondo -->

    <div class="fondo ">
        <img src="/img/rayos.png" alt="Background-Ray" />
    </div>
    <div class="fondo">
        <img src="/img/fondo-benefit.png" alt="Background-monner" />
    </div>

    <div class="aro">
        <img src="../assets/aro.svg" alt="Ring"/>
        <img src="../assets/aro.svg" alt="Ring"/>
    </div>
    <!-- Fin fondo -->
    <h2>ROAD MAP</h2>
    <div id="contenido" class="contenido" @click=" this.SetBloquearScroll(false)" 
        @mouseenter="this.SetBloquearScroll(false)" @touchstart="this.SetBloquearScroll(false)"
        @touchend="this.SetBloquearScroll(true)" @mouseleave="this.SetBloquearScroll(true)">

        <div id="contenido__fase" class="contenido__fase">
            <div id="linea" class="contenido__fase__linea"></div>
            <div class="contenido__fase__circulo contenido__fase__circulo_start"></div>
            <div class="contenido__fase__circulo contenido__fase__circulo_end"></div>
            <!-- Fase Q1 -->
            <div class="fase">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>F1</h3>

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
                        <li>-listed on PancakeSwap at <span class="resaltar">$ 7.0 usd</span></li>
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
            <div class="fase Q2">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>F2</h3>
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
                <h3>F3</h3>
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
            <div class="fase Q4">
                <div class="reloj">
                    <img src="/img/reloj.png" alt="reloj">
                </div>
                <h3>F4</h3>
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
                        <li> - Publication of F-5, F-6, F-7, F-8.
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

@font-face {
    font-family: "Arial";
    src: url("/Fonts/arial.ttf");
    font-style: semibold;
    font-stretch: semi-condensed;
}

@font-face {
    font-family: "Montserrat";
    src: url("/Fonts/Montserrat-Regular.ttf");
    font-style: semibold;
    font-stretch: semi-condensed;
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
    top: 2rem;
    left: 2rem;
    width: 5rem;
    height: 5rem;
    z-index: 12;
    display: none;
}

.aro {
    top: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 999;
    left: 68%;
    width: 30%;
}

.aro img:nth-child(2) {
    margin-top: -4rem;
    width: 90%;
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
    font-family: "BAHNSCHRIFT9", "Arial", "Montserrat", "Work Sans";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    padding-left: .5rem;
    margin-top: .5rem;
    height: 70%;
    z-index: 6;
    overflow: hidden;
    overflow-y: scroll;
    overscroll-behavior-y: initial;
    scroll-snap-type: y mandatory;
    box-sizing: border-box;
    direction: initial;
    scroll-behavior: smooth;
    padding-bottom: 0;
}

h2 {
    color: var(--color-secundario);
    text-align: center;
    position: absolute;
    top: 5rem;
    width: 100%;
    z-index: 5;
    font-family: "Montserrat", "Work Sans";
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
    padding: 1rem;
    padding-bottom: 0;
    height: 300%;
}

.contenido__fase__linea {
    position: relative;
    top: 0;
    left: 0;
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
    background-color: bisque;
    width: .8rem;
    height: .8rem;
}

.contenido__fase__circulo_start {
    top: -100%;

}

.contenido__fase__circulo_end {
    top: -1rem;
}

.fase {
    position: relative;
    top: -100%;
    width: 95%;
    color: white;
    padding: 2rem;
    box-sizing: border-box;
    padding-bottom: 0;
    z-index: 100;

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
    z-index: 100;
}

.fase .fase__contenido .resaltar {
    color: var(--color-secundario);
}

.fase .fase__contenido ul {
    position: relative;
    padding: 0;
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
    z-index: 100;
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

    .contenido {
        height: 81%;
        top: 57%;
        padding-bottom: 2.5rem;
        box-sizing: border-box;
    }

    .contenido__fase {

        width: 50%;
        position: relative;
        left: 25%;

        height: 200%;
    }







    .contenido__fase__linea {
        position: relative;
        z-index: 10;
    }
}
</style>