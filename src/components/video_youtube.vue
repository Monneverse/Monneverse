<template>
  <div class="contenido">
    <div class="contenido-texto">
      <div class="title">
        <h2>{{ title }}</h2>
        <img style="height: 2rem" :src="imglang" alt="languaje" />
      </div>
      <p>{{ description }}</p>
    </div>

    <iframe
      class="video-youtube"
      :src="video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>

    <div class="redes-videos">
      <a v-for="red in redes" class="icon" :href="red.url" target="_blank">
        <img :src="red.icon" :alt="red.name" />
      </a>
    </div>
    <div class="flecha">
      <div :class="{ hide: index == 0 }" @click="before()" class="left">
        <img src="../assets/flecha.svg" alt="arrow next" />
      </div>
      <div
        :class="{ hide: index == list.length - 1 }"
        @click="next()"
        class="right"
      >
        <img src="../assets/flecha.svg" alt="arrow next" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "list", "redes", "imglang"],
  computed: {
    video: {
      get() {
        return this.list[this.index];
      },
    },
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    before() {
      if (this.index > 0) {
        this.index = this.index - 1;
      }
    },
    next() {
      if (this.index < this.list.length - 1) {
        this.index = this.index + 1;
      }
    },
  },
};
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
  gap: 0.2rem;
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
.title {
  display: flex;
}
.title h2 {
  width: 90%;
  min-width: 90%;
  margin-bottom: 0.1rem;
  border: 1px solid red;
}
.title img {
  margin-left: 1rem;
}
.contenido-texto h2 {
  padding: 0;
  margin: 0;
  font-size: 3.4vh;
}

.contenido-texto p {
  padding: 0;
  margin: 0;
  font-size: 2vh;
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
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3rem;
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;

  position: relative;
  top: -38%;
  display: flex;
  justify-content: space-between;
  z-index: 3;
}
.left > img {
  rotate: 90deg;
}
.right > img {
  rotate: -90deg;
}

.flecha .hide {
  visibility: hidden;
}

.redes-videos {
  margin: 0.2rem auto;
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
  height: 2rem;
  width: 2rem;
}

/* style mobile */
@media screen and (max-width: 1370px) {
  .contenido {
    gap: 2rem;
  }
}
</style>
