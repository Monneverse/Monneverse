<template>

    <div class="contenido">
        <div class="contenido-texto">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>

        <iframe  class="video-youtube" :src="video" title="YouTube video player" frameborder="0"
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
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    text-align: center;
    gap: 1rem;
    padding: 0%;
    margin: 0%;
}

.contenido-texto h2 {
    font-size: 4vh;
}

.video-youtube {
    width: 100%;
    height: 60%;
    border-radius: 1rem;
}

.redes-videos {
    margin: .5rem auto;
    width: 80%;
    height: 3rem;
    border-radius: 10rem;
    background-color: black;
}
</style>