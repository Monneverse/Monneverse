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
      <div class="name_coin">
        <p>{{iconname}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor_icono {
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: absolute;
  overflow: hidden;
  display: flex;
  margin: 4.5%;
  height: 70%;
  z-index: 7;
  left: -4%;
  width: 25%;
  top: -4%;
}

.contenedor_icono:hover {
  width: 88%;
  transition: 0.5s;
}

.contenedor_icono:hover .icono {
  width: 100%;
}

.icono {
  transition: transform 0.75s;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 100%;
  width: 100%;
}

.icon_coin {
  position: relative;
  border-radius: 40%;
  overflow: hidden;
  min-width: 4.5vw;
  height: 95%;
  padding: 0%;
  left: 4%;
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
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  justify-content: center;
  align-content: center;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.3vw;
  float: left;
  margin: 8%;
}
</style>