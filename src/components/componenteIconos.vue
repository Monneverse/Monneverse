<script setup>
defineProps({
  //icono imagen
  iconos: {
    type: String,
    required: true,
  },
  //nombre icono
  iconname: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="contenedor_icono">
    <div class="icono">
      <img :src=iconos class="icon_coin" />
    </div>
    <div class="name_coin">
      <p>{{iconname}}</p>
    </div>
  </div>
</template>

<style scoped>
.contenedor_icono {
  background: linear-gradient(to left, #48d0ab 10%, #097561 50%, #111111 70%, black 100%);
  border-radius: 8px;
  position: absolute;
  overflow: visible;
  display: flex;
  align-items: center;
  margin: 0%;
  height: 70%;
  z-index: 7;
  width: 80%;
  top: 0%;
  gap: 2rem;
}

.contenedor_icono .icono .icon_coin {
  position: absolute;
  top: 0%;
  display: absolute;
  width: 32%;
  height: 100%;
  background-color: #19612E;
  border-radius: 20%;
}

/* .contenedor_icono:hover {
  width: 88%;
  transition: 0.5s;
}

.contenedor_icono:hover .icono {
  width: 100%;
} */

/* .icono {
  transition: transform 0.75s;
  position: relative;
  overflow: visible;
  background-color: grey;
  display: flex;
  height: 100%;
  width: 30%;
} */

.icon_coin {
  position: relative;
  border-radius: 40%;
  overflow: visible;
  min-width: 4.4vw;
  height: 95%;
  padding: 0%;
  left: 0%;
}

.icon_coin img {
  object-fit: contain;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0%;
  top: 0%;
}

.name_coin {
  position: absolute;
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  left: 34%;
  justify-content: center;
  align-content: center;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.3vw;
  float: center;
}

.name_coin {
  color: white;
  text-align: center;
}
</style>