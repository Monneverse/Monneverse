<script>
export default {
  props: {
    icono: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    sigla: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    capitalizacion: {
      type: String,
      required: true,
    },
    texto2: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    caja: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="coin">
    <div class="icono">
      <img :src="icono" alt="" />
    </div>
    <div class="container-titulo">
      <h2 class="titulo">{{ titulo }}</h2>
      <p class="sigla">{{ sigla }}</p>
    </div>
    <div>
      <span>{{ texto }}</span>
    </div>
    <div class="container-capi">
      <h1 class="capitalizacion">{{ capitalizacion }}</h1>
    </div>
    <div class="container-text2">
      <p class="texto2">{{ texto2 }}</p>
    </div>
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="container-precio">
      <h2 class="precio">
        {{ precio }}
      </h2>
      <div>
        <img :src="caja" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.coin {
  position: relative;
  top: 10%;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Work Sans", sans-serif;
}

.icono {
  width: 60%;
  height: 10%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icono img {
  width: 50%;
}
.container-titulo {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-titulo .titulo {
  font-weight: 500;
}
.container-capi {
  height: 10%;
}
.container-capi .capitalizacion {
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 600;
}

.container-text2 {
  height: 17%;
  text-align: center;
}
.container-text2 .texto2 {
  text-align: center;
}

.logo {
  width: 60%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 70%;
  margin: 0 auto;
}

.container-precio{
  width: 60%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
