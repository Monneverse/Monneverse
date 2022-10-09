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
        <a class="leer_Mas" target="_blank" :href=url>READ MORE</a>
    </article>


</template>



<style scoped >
@font-face {
    font-family: "WorkSans";
    src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap")
}

img {
    width: 100%;
    height: 100%;
}

.container2 {
    left: 0%;
    margin: 3%;
    width: 100%;
    height: 100%;
    z-index: 3;
    border-radius: 1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #161431;
    padding: 1%;
}

.titulo1 {
    height: 15%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

}

h5 {
    width: 100%;
    height: 20%;
    font-family: "WorkSans", sans-serif;
    font-size: 1.2vw;
    font-weight: 600;
    text-align: center;
}

.imagenDeArticulo {
    width: 80%;
    height: 60%;
}

.leer_Mas {
    color: white;
    width: 50%;
    height: 14%;
    border-radius: 1vw;
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
    font-family: "WorkSans", sans-serif;
    font-size: 1vw;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>