<script setup>
import Header from "./components/Header.vue";
import Info from "./components/Informacion.vue";
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <Info></Info>
  <main></main>
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
}
</style>
