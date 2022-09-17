<script setup>

import Bienvenida from "./components/Bienvenida.vue";
import Header from "./components/Header.vue";
import Info from "./components/Informacion.vue";
import Bienvenida from "./components/Bienvenida.vue";
</script>

<template>
  <header>
    <Header></Header>
  </header>

  <main>
  <Bienvenida></Bienvenida>
  <main>
    <Info></Info>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
}

html,
body {
  height: 100%;
  padding: 0%;
  margin: 0%;
  overflow: hidden;
  background-color: #333;
}
::-webkit-scrollbar {
  display: none;
}
header,
Header {
  width: 100%;
  position: fixed;
  z-index: 999;
}
main {
  z-index: 0;
}
</style>
