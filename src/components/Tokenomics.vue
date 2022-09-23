<template>
    <!-- Fondos -->
    <div class="fondo ">
        <div class="fondoTokenomics">
        <img src="/img/fondo_Tokenomics.png" alt="">
        </div>
    </div>

    <div class="fondo_Proximalianza">
        <h1>UPCOMING ALLIANCES</h1>
        <img src="/img/Alianzas/visa.svg" alt="">
        <img src="/img/Alianzas/mastercard-4.svg" alt="">
    </div>

</template>

<style scoped>
img {
  height: 100%;
  width: 100%;
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 0;
}


.fondoTokenomics {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.fondo_Proximalianza{
    position: absolute;
    align-items: center;
    bottom: 0%;
    left: 30%;
    background-color: black;
    width: 30%;
    height: 10%;
    border: 1px solid white;
    z-index: 2;
}

h1{
    font-size: 150%;
    position: relative;
    margin-left: 5%;
    margin-top: 6%;
    color: white;
}


</style>

<script>


</script>