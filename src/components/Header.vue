

<template>
  <div id="barra" class="barra-navegacion">
    <nav class="barra">
      <div class="animacion comienzo-casa"></div>
      <a href="#" @mouseover="hover">ARTICLES</a>
      <a href="#">BENEFITS</a>
      <a href="#">TOKENOMICS</a>
      <a href="#">NEWS</a>
      <a href="#">ROADMAPS</a>
      <a href="#">SEARCH</a>
    </nav>
    <button class="btn" @click="hover">WHITEPAPER</button>
  </div>
</template>
<script>
import { createApp } from "vue";
// new createApp({
// el: "#barra",
// data: {
//     show: true,
// },
// methods: {
//     hover: function (event) {
//     alert("Hola ");
//     },
// },
// });
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");
.barra-navegacion {
  position: fixed;
  top: 0%;
  background-color: transparent;
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.barra {
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  max-width: 40rem;
  margin-right: 3rem;
  
}

.barra a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  height: 70%;
  margin: 0rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
}

.barra a:hover {
  background-color: #ffc000;
  padding: 0rem 0.4rem;
}

.btn {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border-style: none;
  border-color: transparent;
  text-align: center;
  background-color: #ffc000;
  padding: 0.8rem;

  min-width: 8rem;
}

.btn:hover {
  background-color: red;
}
</style>