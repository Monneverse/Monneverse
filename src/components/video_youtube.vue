<template>

    <div class="contenido">
        <div class="contenido-texto">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>

        <iframe class="video-youtube" :src="video" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>

        </iframe>

        <div class="redes-videos">
            <a v-for="red in redes" class="icon" :href="red.url" target="_blank">
                <img :src="red.icon" :alt="red.name" />
            </a>
        </div>
        <div class="flecha">
            <div :class="{hide:index==0}" @click=" before()" class="left"></div>
            <div :class="{hide:index==list.length-1}" @click="next()" class="right"></div>
        </div>

    </div>
</template>


<script>
export default {
    props: ["title", "description", "list", "redes"],
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

    },
    methods: {
        before() {
            if (this.index > 0) {
                this.index = this.index - 1;
            }
        }, next() {
            if (this.index < this.list.length -1) {
                this.index = this.index + 1;
            }
        }
    }
}

</script>


<style scoped>
img {
    width: 100%;
    height: 100%;
}

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

.flecha {
    width: 100%;
    padding: 0;
    height: 3rem;
    position: relative;
    top: -38%;
    display: flex;
    justify-content: space-between;
    z-index: 3;
}

.flecha div {
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    opacity: 50%;
    border-radius: 5rem;
}

.flecha  .hide {
    opacity: 0 ;
}

.redes-videos {
    margin: .2rem auto;
    width: 80%;
    height: 3rem;
    border-radius: 10rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.icon {
    height: 80%;
    width: 2rem;
}

/* style mobile */
@media screen and (max-width: 1370px) {
    .contenido {
        gap: 2rem;
    }
}
</style>