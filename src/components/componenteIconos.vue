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
  display: flex;
  justify-content: center;
  border: 1px solid greenyellow;
}

.contenedor_icono {
  border: 1px solid #ccc;
  background: linear-gradient(to left, #48d0ab 0%, #097561 50%, #505863 100%);
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 9%;
  width: 5%;
  z-index: 7;
  margin: 1.5%;
}

.contenedor_icono:hover {
  width: 19%;
  transition: 0.75s;
}

.contenedor_icono:hover .icono {
  width: 110%;
}

.icono {
  position: absolute;
  width: 100%;
  height: 98%;
  display: flex;
  overflow: hidden;
  transition: 0.75s;
}

.icon_coin {
  height: 100%;
  min-width: 70px;
  position: absolute;
  padding: 0%;
  overflow: hidden;
  border-radius: 40%;
}

.icon_coin img {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0%;
  width: 100%;
  object-fit: contain;

}

.name_coin {
  font-size: 1.3rem;
  float: left;
  margin: 5%;
  white-space: nowrap;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
}
</style>