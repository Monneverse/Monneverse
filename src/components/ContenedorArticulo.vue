<script setup>
import Articulo from "./Articulo.vue";

</script>

<template>
    <div class="logoEmpresa">
        <img src="/img/logo.svg" alt="logo empresa">
    </div>
    <div class="fondo fondoArticulo">
        <img src="/img/fondo_Articulo.png" alt="fondo Articulo">
    </div>
    <div class="circuitoIzquierdo">
        <img src="/img/Articulo/circuito-izquierdo.png" alt="">
    </div>
    <div class="circuitoDerecho">
        <img src=" /img/Articulo/circuito-derecho.png" alt="">
    </div> 

    <div class="containe">
        <div class="con">
            <Articulo contenedor = "Presale and benefits For investors" img="/img/Articulo/imagenArticulo1.png" />
            <Articulo contenedor = "How to avoid being scammed by investing in monner coin?"  img ="/img/Articulo/imagenArticulo2.png"/>
            <Articulo contenedor = "Why will monner become one of the best cryptocurrencies to investin?"  img ="/img/Articulo/imagenArticulo3.png"/>
        </div>
       
    </div>
 
</template>

<style scoped>

img {
    width: 100%;
    height: 100%;
}

.fondo {
    width: 100%;
    height: 100%;
    z-index: 0;
}

.circuitoIzquierdo {
    position: absolute;
    z-index: 1;
    left: -10%;
    top: 15%;
    height: 80%;
    width: 50%;
    min-width: 30rem;
}

.circuitoDerecho {
    position: absolute;
    z-index: 1;
    right: -10%;
    top: 15%;
    height: 80%;
    width: 55%;
    min-width: 30rem;
}

.logoEmpresa {
    position: relative;
    top: 2rem;
    left: 2rem;
    width: 5rem;
    height: 5rem;
    z-index: 2;
}

.contenido{
        display: flex;
    }

.containe{

    width: 100%;
    height: 100%;
    background-color: chartreuse;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
}
.con{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70rem;
    height: 30rem;
}


</style>