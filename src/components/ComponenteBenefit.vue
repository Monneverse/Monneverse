<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    segundoTitulo: {
      type: String,
      required: true,
    },
    segundoTexto: {
      type: String,
      required: true,
    },
    index_pagina: {
      type: Number,
      required: true,
    },
    mostrarBtn: {
      type: Boolean,
      required: true,
    },
    ruta: {
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
  <div
    :class="index_pagina == 13 ? 'transparente' : 'fondo-oscuro'"
    class="benefit"
  >
    <div class="div titulo_1">
      <h2 class="centrar">
        {{ titulo }}
      </h2>
      <p>
        {{ texto }}
      </p>
    </div>

    <div class="div titulo_2">
      <h2 class="centrar">
        {{ segundoTitulo }}
      </h2>
      <p class="centrar">
        {{ segundoTexto }}
      </p>
    </div>
    <div v-show="mostrarBtn" class="div">
      <a class="btn centrar" :href="ruta">READ MORE</a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.benefit {
  width: 50%;
  height: 65%;
  border-radius: 4%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: "Work Sans", sans-serif;
  margin-right: 5%;
}
.benefit:hover {
  transform: translateY(-3%);
  box-shadow: inset 0 0 0px whitesmoke, inset 0px 0 0px rgb(6, 38, 58),
    inset 0px 0 0px rgb(7, 64, 25), 
    inset 0px 0 0px rgb(5, 12, 28),
    inset 0px 0 0px rgb(4, 41, 10), 0 0 50px #fff,
    -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(1, 64, 12);
  transition: 0.5s ease-out;
}
.benefit:last-child {
  margin-right: 0;
}
.fondo-oscuro {
  background-color: #161431;
}
.benefit .div {
  width: 90%;
  height: 20%;
  margin: 0 auto;
}
.titulo_1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  text-transform: uppercase;
}
.titulo_2 {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 50%;
}
.div h2 {
  font-size: 1.5vw;
  font-weight: 600;
}
.div p {
  font-weight: 300;
  font-size: 1.2vw;
}
.titulo_2 p {
  text-align: justify;
}
.btn {
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  padding: 2% 5%;
  border-radius: 1.5vw;
  cursor: pointer;
  width: 45%;
  font-size: 1.1vw;
  font-family: "Work Sans", sans-serif;
}

.btn:hover {
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px rgb(6, 38, 58),
    inset -20px 0 80px rgb(7, 64, 25), inset 20px 0 300px rgb(5, 12, 28),
    inset -20px 0 300px rgb(4, 41, 10), 0 0 50px #fff,
    -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(1, 64, 12);
  transition: 0.5s ease-out;
}
.transparente {
  background-color: rgb(22, 20, 49, 0.6);
  margin: 0 auto;
  margin-right: 0;
  display: flex;
  justify-content: center;
  width: 75%;
}
.centrar {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
