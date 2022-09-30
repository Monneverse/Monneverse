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


    <article class="container2">
        <h5 class="titulo1">{{titulo}}</h5>
        <div class="imagenDeArticulo">
            <img :src=img alt="" class="imagenArticulo01" />
        </div>
        <a class="leer_Mas"  target="_blank" :href=url>READ MORE</a>
    </article>


</template>



<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

img {
    width: 100%;
    height: 100%;
}

.container2 {
    left: 0%;
    bottom: -10%;
    margin: 3%;
    position: relative;
    width: 33%;
    height: 70%;
    z-index: 3;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #252850;
    padding: 1%;

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
    margin-bottom: 1%;


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
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>