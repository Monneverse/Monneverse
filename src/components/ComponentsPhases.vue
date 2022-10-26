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
      <div class="indicador"> <b>{{ title }}</b>
      </div>
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
  font-size: 1vw;
  font-family: "Work Sans", sans-serif;
}

.divDesc b {
  font-size: 1.8vw;
  font-family: "Work Sans", sans-serif;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
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
    font-family: Roboto;
  }

  .divDesc b {
    font-size: 5vw;
    font-family: "Work Sans";
  }

  .indicador {
    position: absolute;
    width: 10rem;
    border-radius: 1rem;
    border: 1px solid white;
    background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 80%);
    height: 3rem;
    bottom: 100%;
    right: -75%;
    align-items: center;
    text-align: center;
    z-index: 10;
  }

  .circulo-indicador {
    position: absolute;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid white;
    background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 80%);
    height: 100%;
    bottom: 100%;
    left: 4%;
    align-items: center;
    z-index: 10;
    visibility: hidden;
  }
}

@media only screen and (min-device-width: 412px) and (max-device-width: 915px) {
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
    font-family: Roboto;
  }

  .divDesc b {
    font-size: 5vw;
    font-family: "Work Sans";
  }

  .indicador {
    position: absolute;
    width: 10rem;
    border-radius: 1rem;
    border: 1px solid white;
    background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 80%);
    height: 3rem;
    bottom: 100%;
    right: -50%;
    align-items: center;
    text-align: center;
    z-index: 10;
  }

  .circulo-indicador {
    position: absolute;
    width: 10rem;
    border-radius: 1rem;
    border: 1px solid white;
    background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 80%);
    height: 100%;
    bottom: 100%;
    left: 40%;
    align-items: center;
    z-index: 10;
    visibility: hidden;
  }
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

.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  animation: opacity2 0.5s linear;
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
