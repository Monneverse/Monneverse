<template>

    <div class="contenido">
        <div class="contenido-texto">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>

        <iframe class="video-youtube" :src="video" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="redes-videos">

        </div>
    </div>
</template>


<script>
export default {
    props: ["title", "description", "list"],
    computed: {
        video: {
            get() {
                return this.list[this.index]
            }
        }
    },
    data() {
        return {
            index: 0
        }

    }
}

</script>


<style scoped>
.contenido {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contenido-texto {
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    text-align: center;
    gap: 1rem;
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
}


.contenido-texto h2 {
    padding: 0;
    margin: 0;
    font-size: 3.4vh;
}

.contenido-texto p {
    padding: 0;
    margin: 0;
    font-size: 2.5vh;
    height: max-content;
}

.video-youtube {
    width: 100%;
    height: 50%;
    border-radius: 1rem;
}

.redes-videos {
    margin: .2rem auto;
    width: 80%;
    height: 3rem;
    border-radius: 10rem;
    background-color: black;
}

/* style mobile */
@media screen and (max-width: 1370px) {
    .contenido {
        gap: 2rem;
    }
}
</style>