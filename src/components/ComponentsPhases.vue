<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
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
  <div class="contenedor__fases">
    <div class="circulo-indicador" @click="isVisible = !isVisible"></div>
    <b>{{ title }}</b>
    <br />
    <transition name="fade">
      <p v-show="isVisible">
        {{ description }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
/* Style of web */
img {
  width: 100%;
  height: 100%;
}


.contenedor__fases {
  font-family: "Work Sans", sans-serif;
  position: relative;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 9;
  margin: 10px;
  padding: 1rem;
  color: white;
}

.contenedor__fases p {
  font-size: 1.3vw;
  font-family: Roboto;
}

.contenedor__fases b {
  font-size: 1.8vw;
  font-family: "Work Sans";
}

.circulo-indicador {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 3rem;
  height: 3rem;
  align-items: center;
  border-radius: 50%;
  border: 5px solid white;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 80%);
  margin-bottom: .5rem;
  z-index: 10;
  cursor: pointer;
}

/* animaciones (required) */
.fade-enter-active {
  animation: opacity 0.5s linear;
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


/* Style of mobile */
@media screen and (max-width: 900px) {

  .circulo-indicador {
    position: absolute;
    top: 3%;
    left: 0%;
    transform: translate(-100%, 0%);
    width: 2rem;
    height:2rem;

  }
  .contenedor__fases  {
    width: 100%;
    align-items: flex-start;
  }

  .contenedor__fases p {
    font-size: 3vw;
    font-family: Roboto;
    margin-top: 1rem;
    
  }

  .contenedor__fases b {
    font-size: 3.5vw;
    
  }

}
</style>
