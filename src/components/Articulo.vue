<script setup >
    defineProps({
  contenedor: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>


<template>


    <div class="container2">
        <h5 class="titulo1">{{contenedor}}</h5>
        <div class="ddd">
            <img   :src=img alt="" class="imagenArticulo01" />
        </div>
        <button class="btn">Read More</button>
    </div>


</template>



<style scoped >
img {
    width: 100%;
    height: 100%;
}

.container2 {
    margin-left: 10%;
    margin-top: 15%;

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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1rem;
}

.ddd {
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;

}

.btn {
    color: white;
    margin-left: 2%;
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
}

img {
    scale: 1.2;
}
</style>