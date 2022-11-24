<script>
import fasesComponentes from "./ComponentsPhases.vue";
export default {
    components: {
        fasesComponentes,
    },
    props: ["enterAnimation", "exitAnimation", "isRevert"],
};
</script>
<template >
    <!--FONDO-->
    <div class="fondo fondo-calculadora"></div>
    <div class="fondo filtro-superior"></div>
    <div :class="{
        fondo: true,
        'fondo-montana': true,
        montana__desaparecer_revert: this.exitAnimation && this.isRevert,
    }">
        <img src="/img/fondo-montana.png" />
    </div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="circuito circuito-izquierdo">
        <img src="/img/calculadora/circuito-izquierdo.png" alt="" />
    </div>
    <div class="circuito circuito-derecho">
        <img src="/img/calculadora/circuito-derecho.png" alt="" />
    </div>
    <!--FIN FONDO-->
    <div class="contenido">
        <div class="elementor-widget-container">
            <!-- ========= Timeline Widget Addon For Elementor 1.4 ========= -->
            <div id="twae-wrapper-315e49f" class="twae-vertical twae-wrapper  twae-both-sided ">
                <div class="twae-start"></div>
                <div id="twea-timeline-315e49f" class="twae-timeline">
                    <div id="story-73fac55" class="twae-story twae-repeater-item twae-story-right twae-story-icon">
                        <div class="twae-labels">
                            <div class="twae-label-big">25 December</div>
                        </div>
                        <div class="twae-icon"><i aria-hidden="true" class="far fa-clock"></i></div>
                        <div class="twae-arrow"></div>
                        <div class="twae-content">
                            <div class="twae-title">New Games Sports Related</div>
                            <div class="twae-description">
                                <p>Shiba World Cup changes its name to Shiba Sports Token </p>
                            </div>
                        </div>
                    </div>
                    <div id="story-9d87de0" class="twae-story twae-repeater-item twae-story-left twae-story-icon">
                        <div class="twae-labels">
                            <div class="twae-label-big">18 December</div>
                        </div>
                        <div class="twae-icon"><i aria-hidden="true" class="far fa-clock"></i></div>
                        <div class="twae-arrow"></div>
                        <div class="twae-content">
                            <div class="twae-title">End World Cup</div>
                            <div class="twae-description">
                                <p>Shiba World Cup changes its name to Shiba Sports Token </p>
                            </div>
                        </div>
                    </div>
                    <div id="story-07113bd" class="twae-story twae-repeater-item twae-story-right twae-story-icon">
                        <div class="twae-labels">
                            <div class="twae-label-big">1 December</div>
                        </div>
                        <div class="twae-icon"><i aria-hidden="true" class="far fa-clock"></i></div>
                        <div class="twae-arrow"></div>
                        <div class="twae-content">
                            <div class="twae-title">Footballers NFTs launch </div>
                            <div class="twae-description"></div>
                        </div>
                    </div>
                    <div id="story-cef0cb2" class="twae-story twae-repeater-item twae-story-left twae-story-icon">
                        <div class="twae-labels">
                            <div class="twae-label-big">20 November</div>
                        </div>
                        <div class="twae-icon"><i aria-hidden="true" class="far fa-clock"></i></div>
                        <div class="twae-arrow"></div>
                        <div class="twae-content">
                            <div class="twae-title">Start World Cup Betting</div>
                            <div class="twae-description"></div>
                        </div>
                    </div>
                    <div id="story-0bc9e8b" class="twae-story twae-repeater-item twae-story-right twae-story-icon">
                        <div class="twae-labels">
                            <div class="twae-label-big">18 November</div>
                        </div>
                        <div class="twae-icon"><i aria-hidden="true" class="far fa-clock"></i></div>
                        <div class="twae-arrow"></div>
                        <div class="twae-content">
                            <div class="twae-title">Shiba World Cup token fans launch </div>
                            <div class="twae-description"></div>
                        </div>
                    </div>
                </div>
                <div class="twae-end"></div>
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

.montana__desaparecer_revert {
    animation: montana__aparecer 1s ease-in-out 0s 1 normal;
    -webkit-animation: montana__aparecer 1s ease-in-out 0s 1 normal;
}

@keyframes montana__aparecer {
    100% {
        height: 80%;
    }
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
    right: -14%;
    transform: scaleY(-1);
}

/* FIN ESTILO FONDO */
.contenido {
    border: 2px solid red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 80%;
    z-index: 3;
    padding: 1rem;
    box-sizing: border-box;
}


/* Style mobile */
@media screen and (max-width: 900px) {

    .circuito {
        display: none;
    }

    .fondo-montana {
        height: 90%;
        top: 30%;
        width: 120%;
    }
}
</style>