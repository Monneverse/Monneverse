<template>
  <div class="contenido">
    <div class="imagen">
      <img class="img-team" :src="img" alt="Team" srcset="" />
    </div>

    <div class="contenido-texto">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <p>{{ description }}</p>
    </div>
    <!-- <div class="redes-videos">
      <a v-for="red in redes" class="icon" :href="red.url" target="_blank">
        <img :src="red.icon" :alt="red.name" />
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["title", "description", "redes", "img"],
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
  height: 30%;
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
  width: 100%;
  min-width: 90%;
  margin-bottom: 0.1rem;
}

.contenido-texto h2 {
  padding: 0;
  margin: 0;
  font-size: 3vh;
  margin-bottom: 0.5rem;
}

.contenido-texto p {
  padding: 0;
  margin: 0;
  font-size: 1.6vh;
  height: max-content;
}

.imagen {
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 13rem;
  overflow: hidden;
  border-radius: 50%;
}
.imagen img {
  width: 100%;
  height: auto;
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
  background-color: rgba(255, 255, 255, 0.399);
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
