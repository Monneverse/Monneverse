<script>
export default {
  props: ["titulo", "img", "url"]
}
</script>

<template>
  <article class="container2">
    <h5 class="titulo1">{{ titulo }}</h5>
    <div class="imagenDeArticulo">
      <img  :src="img" alt="article" class="imagenArticulo01" />
    </div>
    <a class="leer_Mas" target="_blank" :href="url">READ MORE</a>
  </article>
</template>

<style scoped>
@font-face {
  font-family: "WorkSans";
  src: url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");
}

img {
  width:100%;
  height: 100%;
  border-radius: 2rem;
}

.container2 {
  width: 100%;
  height: 100%;
  z-index: 3;
  border-radius: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #161431;
  padding: 1%;
  flex: none;
  margin-right: 30px;
}

@media screen and (width > 769px) {
  .container2 {
    width: 25%;
    height: 75%;
    margin-right: 0px;

  }
}

.titulo1 {
  height: 20%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

h5 {
  width: 100%;
  height: 20%;
  font-family: "calibri", sans-serif;
  font-size: 1.2vw;
  font-weight: 600;
  text-align: center;
}

.imagenDeArticulo {
  width: 100%;
  height: 60%;
}

.leer_Mas {
  color: white;
  width: 50%;
  height: 14%;
  border-radius: 3rem;
  background: linear-gradient(to left, #029f50 0%, #0a664e 50%, #0e444d 100%);
  font-family: "WorkSans", sans-serif;
  font-size: 1vw;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 100px) {
  .titulo1 {
    height: 10%;
    font-size: 100%;
  }
  .leer_Mas {
    font-size: 90%;
    border-radius: 3rem;
    font-weight: 600;
  }
  .imagenDeArticulo {
    width: 100%;
    height: 65%;
  }
}

@media screen and (max-width: 900px) {
  .leer_Mas {
    width: 70%;
  }
}
</style>
