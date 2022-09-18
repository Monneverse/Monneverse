<script setup>
import Header from "./components/Header.vue";
import Info from "./components/Informacion.vue";
import Bienvenida from "./components/Bienvenida.vue";
import Calculadora from "./components/Calculadora.vue";
import Alianzas from "./components/Alianzas.vue";
</script>

<template>
  <header>
    <Header></Header>
  </header>

  <main>
    <!-- 
    para agregar una pantalla agreguela dentro de uno de los div libre
    sino hay div libre, cree uno con el siguiente #Id respetando la secuencia, por ejemplo
    si el ultimo div tiene el id 5, entonces el que usted cree, debe ser el id 6
    y dentro de su div van los componentes, puede eliminar las clases 
    guiese del ejemplo div 1
    -->
    <div id="1">
      <Bienvenida />
      <Info />
    </div>
    <div id="2" class="container red"></div>
    <div id="3" class="container upcoming_alliance"></div>
    <div id="4" class="container green">
      <Calculadora />
    </div>
    <div id="5" class="container orange"></div>
  </main>
</template>
<script>
let id = 1;

document.addEventListener("wheel", function () {
  document.getElementById(id).style.visibility = "hidden";
  if (event.deltaY > 0) {
    if (id < 5) id = id + 1;
  } else {
    if (id > 1) id = id - 1;
  }
  document.getElementById(id).style.visibility = "visible";
  location.hash = "#" + id;
  window.history.pushState({}, document.title, window.location.pathname);
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
}

#app,
main {
  height: 100%;
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

/* Style cambiar de div */

.green {
  background-color: green;
}

.upcoming_alliance {
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
}

.orange {
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
}

.red {
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
}

::-webkit-scrollbar {
  display: none;
}

.container {
  padding: 0%;
  margin: 0%;
  height: 100%;
}
</style>
