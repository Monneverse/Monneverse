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