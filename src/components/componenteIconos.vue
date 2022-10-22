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
img {
  width: 100%;
  height: 100%;
}

.contenedor_icono {
  background: linear-gradient(to right,
      #029F50 0%,
      #0A664E 50%,
      #0E444D 100%);
  border-radius: 1.3rem;
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0%;
  left: 20%;
  height: 70%;
  z-index: 7;
  width: 74%;
  top: 0%;
  gap: 2rem;
}

.icon_coin {
  position: absolute;
  top: 0%;
  right: 15%;
  width: 32%;
  height: 100%;
  background: linear-gradient(to left,
      #029F50 0%,
      #0A664E 50%,
      #0E444D 100%);
}

/* .contenedor_icono:hover {
  width: 88%;
  transition: 0.5s;
}

.contenedor_icono:hover .icono {
  width: 100%;
} */

.icono {
  transition: transform 0.75s;
  position: relative;
  display: flex;
  height: 100%;
  width: 30%;
}

.icon_coin {
  position: absolute;
  border-radius: 1rem;
  overflow: visible;
  min-width: 4.3vw;
  height: 100%;
  padding: 0%;
  right: 120%;
}

.name_coin {
  position: absolute;
  font-family: Calibri;
  text-transform: uppercase;
  text-align: center;
  left: 14%;
  font-weight: bold;
  font-size: 1.3vw;
  float: center;
  color: white;
  text-align: center;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .name_coin {
    font-size: 8vw;
  }

  .icon_coin {
    width: 18vw;
  }
}
</style>