<script setup>
defineProps({
    //Titulo
    title: {
        type: String,
        required: true,
    },
    //Description
    description: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="componentes">
        <div class="divDesc">
            <div class="circulo-indicador"></div>
            <p>
                <b>{{title}}</b>
                <br>
                {{description}}
            </p>
        </div>
    </div>

</template>



<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');

img {
    width: 100%;
    height: 100%;
}

.componentes {
    font-family: 'Work Sans', sans-serif;
    position: relative;
    z-index: 7;
}

.divDesc {
    flex-direction: column;
    position: relative;
    text-align: center;
    text-transform: capitalize;
    display: flex;
    z-index: 4;
    margin: 10px;
    color: white;
}

.divDesc p {
    font-size: 1.3vw;
    font-family: Roboto;
}

.divDesc b {
    font-size: 1.8vw;
    font-family: "Work Sans";
}

.circulo-indicador {
    position: absolute;
    width: 3rem;
    border-radius: 50%;
    border: 5px solid white;
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 80%);
    height: 3rem;
    bottom: 100%;
    left: 40%;
    align-items: center;
    z-index: 10;
}
</style>