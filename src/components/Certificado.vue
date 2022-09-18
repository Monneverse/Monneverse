<template>
    <div class="logo">
        <img src="../../public/img/logo.svg" alt="logo monneverse"></div>
    <div class="fondo">
        <div class="imagen">
            <img src="../../public/img/certificado.png" alt="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
img {
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0%;
}

.fondo {
    background-color: #121026;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagen {
    height: 75%;
    width: auto;
    
}
.logo{
    position: relative;
    top: 2rem;
    left: 2rem;
    width: 5rem;
    height: 5rem;
    z-index: 2;
}
</style>

