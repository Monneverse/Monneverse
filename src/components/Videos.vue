<template>

    <div class="fondo">
        <img src="/img/rayos.png" alt="" />
    </div>
    <div class="fondo">
        <img src="/img/fondo-benefit.png" alt="" />
    </div>
    <div class="imagen-youtube"><img src="../assets/YouTube-Icon.svg" alt="Youtube image"></div>
    <div class="contenido">

    </div>
</template>


<script>


</script>


<style scoped>
body {
    background-color: #121026;
}

img {
    width: 100%;
    height: 100%;
}

/* fondos */

.fondo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.imagen-youtube {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 15rem;
    height: auto;
    z-index: 1;
}

.contenido {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: 75%;
    z-index: 2;
    border: 1px solid red;
    box-sizing: border-box;
}
</style>