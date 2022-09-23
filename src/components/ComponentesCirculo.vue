<script>
export default {
  data() {
    return {
      values: [
        {
          icono: "/img/plus.svg",
          color: "verde",
          texto: "MONNERCARD",
        },
        { icono: "/img/plus.svg", color: "blanco", texto: "BENEFITS" },
        {
          icono: "/img/plus.svg",
          color: "blanco",
          texto: "MINNERSOLAR",
        },
        {
          icono: "/img/plus.svg",
          color: "verde",
          texto: "STALKING",
        },
      ],
    };
  },
};
</script>

<template>
  <div v-for="value in values" class="circulo">
    <div class="contenedor">
      <i><img alt="" /></i>
      <h2
        :class="{
          blanco: value.color == 'blanco',
          verde: value.color == 'verde',
        }"
      >
        {{ value.texto }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.circulo {
  margin-left: 5%;
  border-radius: 100%;
  z-index: 5;
  width: 15vw;
  height: 15vw;
  background-color: aquamarine;
  margin-bottom: 5%;
  color: white;
  font-family: "Work Sans", sans-serif;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: rotate(135deg);
}
.circulo h2 {
}
.circulo:nth-child(1) {
  background-color: white;
}
.circulo:nth-child(2) {
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
}
.circulo:nth-child(3) {
  background: linear-gradient(
    90deg,
    rgb(18, 17, 65) 0%,
    rgba(1, 209, 88, 1) 100%
  );
}
.circulo:nth-child(4) {
  background-color: white;
}
.circulo h2 {
  text-align: center;
  background-color: rgb(82, 80, 80, 0.6);
}
.contenedor {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 50%;
  align-items: center;
}
.verde {
  color: rgba(1, 209, 88, 1);
  border: 2px solid rgba(1, 209, 88, 1);
  border-radius: 2rem;
}
.blanco {
  color: white;
  border: 2px solid rgb(219, 219, 237);
  border-radius: 2rem;
}
</style>
