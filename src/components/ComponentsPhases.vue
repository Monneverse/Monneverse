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
  isVisible: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="componentes">
    <div class="divDesc">
      <div class="circulo-indicador"></div>
      <b>{{ title }}</b>
      <br />
      <transition name="fade">
        <p v-show="isVisible">
          {{ description }}
        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap");

img {
  width: 100%;
  height: 100%;
}

.componentes {
  font-family: "Work Sans", sans-serif;
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
  font-family: "work Sans";
}

.divDesc b {
  font-size: 2vw;
  font-family: "Work Sans";
}

.circulo-indicador {
  position: absolute;
  width: 3rem;
  border-radius: 50%;
  border: 5px solid white;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 80%);
  height: 3rem;
  bottom: 100%;
  left: 40%;
  align-items: center;
  z-index: 10;
}

.fade-enter-active {
  animation: opacity 0.5s ease-out;
}

@keyframes opacity {
  0% {
    opacity: 0%;
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 100%;
  }
}

.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  animation: opacity2 0.5s ease-out;
}

@keyframes opacity2 {
  0% {
    opacity: 100%;
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 0%;
  }
}
</style>
