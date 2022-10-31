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
@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT9.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

.contenedor_icono {
  display: flex;
  height: 100%;
  z-index: 7;
  width: 100%;
}

.icon {
  transition: transform 0.75s;
  display: flex;
  width: 5rem;
  height: 4rem;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  border-radius: 1rem;
}

@media only screen and (width > 769px) {
  .icon {
    width: 4rem;
  }
}

.icon_coin {
  margin: 4px auto;
  width: 80%;
  height: 80%;
  padding: 0%;
}

.name_coin {
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8em;
  margin: 0 auto;

  font-family: "Work Sans", serif;
  text-transform: uppercase;
  left: 14%;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;

  width: 100%;
  height: 4rem;
}

@media only screen and (width > 769px) {
  .name_coin {
    background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
    display: flex;
    justify-content: left;
    border-radius: 0.8em;
    font-family: "Work Sans", serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: .8rem;
    color: white;
    width: 60%;
    height: 4rem;
    margin-left: 4%;
  }

  .name_coin p {
    margin: 20px;
  }
}
</style>
