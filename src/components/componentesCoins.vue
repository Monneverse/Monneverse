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
    <div class="container-texto">
      <span>{{ texto }}</span>
    </div>
    <div class="container-capi">
      <h1 class="capitalizacion">{{ capitalizacion }}</h1>
    </div>
    <div class="container-text2">
      <p class="texto2">{{ texto2 }}</p>
      <div class="triangulo">
        <img src="/img/coins/triangulo.png" alt="" />
      </div>
    </div>

    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="container-precio">
      <div class="caja">
        <img :src="caja" alt="" />

        <div class="div">
          <h2 class="precio"><b>$</b> {{ precio }}</h2>
          <span>USD</span>
        </div>
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
  height: 90%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Work Sans", sans-serif;
}

.icono {
  width: 30%;
  height: 10%;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icono img {
  width: 100%;
  border-radius: 100%;
  -webkit-box-shadow: 0px 2px 28px 1px rgba(97, 250, 128, 0.5);
  -moz-box-shadow: 0px 2px 28px 1px rgba(97, 250, 128, 0.5);
  box-shadow: 0px 2px 28px 1px rgba(97, 250, 128, 0.5);
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
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 500;
  font-size: 1.7vw;
}

.container-texto span {
  font-size: 1vw;
}
.container-capi {
  width: 100%;
  height: 10%;
}
.container-capi .capitalizacion {
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.3vw;
  font-size: 3vw;
}
.sigla{

  font-family: "Barlow Semi Condensed", sans-serif;
}
.container-text2 {
  width: 100%;
  height: 15%;
  text-align: center;
}
.container-text2 .texto2 {
  height: 20%;
  text-align: center;
  font-size: 1vw;
}
.triangulo {
  display: flex;
  justify-content: center;
}

.triangulo img {
  position: relative;
  top: -5%;
  left: 0;

  width: 150%;
  height: 50%;
  z-index: -1;
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

.container-precio {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}


.caja img {
  width: 100%;
}

.container-precio h2 {
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 3vw;
  font-weight: 600;
}
.container-precio h2 b {
  color: rgb(18, 225, 142);
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 3vw;
  font-weight: 600;
}
.div {
  position: relative;
  top: -45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-precio .div span {
  font-size: 1.5vw;
  font-weight: 500;
  text-align: center;
}
</style>
