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
    ruta: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="benefit">
    <div class="div titulo_1">
      <h2>
        {{ titulo }}
      </h2>
      <p>
        {{ texto }}
      </p>
    </div>

    <div class="div titulo_2">
      <h2>
        {{ segundoTitulo }}
      </h2>
      <p>
        {{ segundoTexto }}
      </p>
    </div>
    <div class="div">
      <a class="btn" :href="ruta">READ MORE</a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.benefit {
  width: 70%;
  height: 65%;
  background-color: #161431;
  border-radius: 4%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: "Work Sans", sans-serif;
}
.div {
  width: 90%;
  margin: 0 auto;
}
.titulo_1 {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}
.div h2 {

    font-size: 1.5vw;
    font-weight: 600;
}
.div p{
  font-weight: 300;
  font-size: 1.2vw;
}
.titulo_2 p {
  text-align: justify;
}
.btn {
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
  padding: 2% 5%;
  border-radius: 1.5vw;
  cursor: pointer;
}
</style>
