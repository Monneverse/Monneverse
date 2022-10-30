<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="contenedor__fases">
    <div class="circulo-indicador"></div>
    <b>{{ title }}</b>
    <p>
      {{ description }}
    </p>
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
  font-family: "Work Sans", sans-serif;
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

/* Style of mobile */
@media screen and (max-width: 900px) {

  .circulo-indicador {
    position: absolute;
    top: 10%;
    left: 0%;
    transform: translate(-100%, 0%);
    width: 2rem;
    height: 2rem;

  }

  .contenedor__fases {
    width: 100%;
    height: 40%;
    align-items: flex-start;
  }


  .contenedor__fases p {
    font-size: 4vw;
    font-family: "Work Sans", sans-serif;
    margin-top: .2rem;

  }

  .contenedor__fases b {
    font-size: 5vw;

  }

}
</style>
