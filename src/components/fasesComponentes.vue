<script setup>
defineProps({
    //icono imagen
    title: {
        type: String,
        required: true,
    },
    //nombre icono
    description: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="componentes">
        <div class="divDesc">
            <p>
                <b>{{title}}</b><br>
                {{description}}
            </p>
        </div>
    </div>

</template>



<style scoped >
img {
    width: 100%;
    height: 100%;
}

.componentes {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-content: center;
    position: absolute;
    text-align: center;
    font-size: 1.5vw;
    height: 100%;
    z-index: 7;
    width: 72%;
    left: 10%;
    top: 40%;
}

.divDesc {
    background: red;
    flex-direction: column;
    position: relative;
    min-height: 100%;
    min-width: 30%;
    display: flex;
    z-index: 4;
    left: 0;
    top: 0;
}

.divDesc p b {
    background: linear-gradient(to right,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
    justify-content: center;
    text-align: center;
    border-radius: 15%;
    font-size: 2vw;
}
</style>