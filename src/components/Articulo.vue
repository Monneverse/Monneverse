<script setup>
defineProps({
    titulo: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})
</script>


<template>


    <div class="container2">
        <h5 class="titulo1">{{titulo}}</h5>
        <div class="imagenDeArticulo">
            <img :src=img alt="" class="imagenArticulo01" />
        </div>
        <a class="leer_Mas"  target="_blank" :href=url>READ MORE</a>
    </div>


</template>



<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

img {
    width: 100%;
    height: 100%;
}

.container2 {
    left: 10%;
    top: 15%;
    margin: 5%;
    position: relative;
    width: 18%;
    min-width: 16rem;
    height: 35%;
    min-height: 20rem;
    z-index: 3;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #252850;
    padding: 1rem;

}

.titulo1 {

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;


}

h5 {
    font-family: "Work Sans", sans-serif;
    font-size: 1rem;
}

.imagenDeArticulo {
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;


}

.leer_Mas {
    color: white;
    margin-left: -30%;
    width: 60%;
    border-radius: 3rem;
    padding: 1rem;
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
    font-family: "Work Sans", sans-serif;
    font-size: 120%;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    scale: 1.2;
}
</style>