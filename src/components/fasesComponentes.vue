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
                <button>{{title}}</button><br>
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
    font-size: 1.5vw;
}

.divDesc p button {
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 100%);
    border-radius: 0.5rem;
    margin-bottom: 15px;
    padding: 0.7rem;
    font-size: 2vw;
    color: white;
    text-transform: uppercase;
}
</style>