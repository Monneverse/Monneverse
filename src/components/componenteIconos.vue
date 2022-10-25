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
    <div class="icon">
      <img :src="iconos" class="icon_coin" />
    </div>
    <div class="name_coin">
      <p>{{ iconname }}</p>
    </div>
  </div>
</template>

<style scoped>
.contenedor_icono {
  display: flex;
  height: 100%;
  z-index: 7;
  width: 100%;
}
/* .contenedor_icono:hover {
  width: 88%;
  transition: 0.5s;
}

.contenedor_icono:hover .icono {
  width: 100%;
} */

.icon {
  transition: transform 0.75s;
  display: flex;
  height: 80%;
  width: 30%;
  background-color: #161431;
  border-radius: 1rem;
}

.icon_coin {
  margin: 4px auto;
  width: 50%;
  height: 80%;
  padding: 0%;
}
@media screen and (width > 769px) {
  .icon {
    transition: transform 0.75s;
    display: flex;
    height: 80%;
    width: 35%;
    background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
    border-radius: 1rem;
    margin-right: 10px;
  }
  .icon_coin {
    margin: 4px auto;
    width: 100%;
    height: 80%;
    padding: 0%;
  }
}

.name_coin {
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  margin: 0 auto;

  font-family: Calibri;
  text-transform: uppercase;
  left: 14%;
  font-weight: bold;
  font-size: 1.3vw;
  color: white;
  text-align: center;
  width: 100%;
  height: 80%;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .name_coin {
    font-size: 8vw;
    border-radius: 0.6em;
  }

  .icon_coin {
    width: 18vw;
  }
}
</style>
