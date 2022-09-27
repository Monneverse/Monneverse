<script>
export default {
  props: {
 
    icono: {
      type: String,
      required: true,
    },
    
    color: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    rotar: {
      type: String,
      required: true,
    },
  },


};
</script>

<template>
  <div :class="color" class="circulo">
    <div :class="rotar" class="contenedor">
      <i><img :src="icono" alt="Benefits" /></i>
      <h2 class="texto">
        {{ texto }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.circulo {
  margin-left: 5%;
  border-radius: 100%;
  z-index: 5;
  width: 15vw;
  height: 15vw;
  margin-bottom: 5%;
  color: white;
  font-family: "Work Sans", sans-serif;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: rotate(135deg);
}

.circulo h2 {
  position: relative;
  z-index: 0;
  text-align: center;
  font-size: 1.5vw;
}
.contenedor {
  display: flex;
  width: 50%;
  height: 50%;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
}
.contenedor img {
  position: relative;
  z-index: 1;
  width: 5vw;
}
.verde {
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  color: white;
}
.blanco {
  background-color: white;
  color: rgba(1, 209, 88, 1);
}
.gasolinera {
  position: absolute;
  width: 15vw;
  height: 15vw;
  display: flex;
  justify-content: center;
}
.gasolinera img {
  position: relative;
  z-index: -4;
  width: 15vw;
  height: 15vw;
}

.texto {
  opacity: 0;
  visibility: hidden;

  background-color: none;
  border-radius: 3px;
}
.circulo:hover .contenedor img {
  transition: 0.5s ease-in-out;
  transform: translate(-20px, -40px) rotate(-25deg) scale(1.2);
  opacity: 1;
  visibility: visible;
}
.circulo:hover .contenedor .texto {
  opacity: 1;
  visibility: visible;
  transition: 0.5s linear;
}
.rotar{

transform: rotate(90deg);
  
}
.rotar_180{

transform: rotate(180deg);
  
}
.rotar_360{

transform: rotate(270deg);
  
}
</style>
