<script setup>
import Header from "./components/Header.vue";
import Info from "./components/Informacion.vue";
import Bienvenida from "./components/Bienvenida.vue";
import Calculadora from "./components/Calculadora.vue";
import Alliances from "./components/Alliances.vue";
import Certificado from "./components/Certificado.vue";
import ContenedorArticulo from "./components/ContenedorArticulo.vue";
import Benefits from "./components/Benefits.vue";
import Alianzas from "./components/Alianzas.vue";
import Exchanges from "./components/Exchanges.vue";

</script>


<template>
  <header>
    <Header :index=index :index_pagina=index_pagina></Header>
  </header>

  <main>
    <!-- 
    para agregar una pantalla agreguela dentro de uno de los div libre
    sino hay div libre, cree uno con el siguiente #Id respetando la secuencia, por ejemplo
    si el ultimo div tiene el id 5, entonces el que usted cree, debe ser el id 6
    y dentro de su div van los componentes, puede eliminar las clases 
    guiese del ejemplo div 1
    -->
    <div :class="{container:true,  'mostrar-container':index_pagina==1}">
      <Bienvenida />
      <Info />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==2}">
      <Alliances />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==3}">
      <Alianzas />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==4}">
      <Calculadora />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==5}">
      <ContenedorArticulo />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==6}">
      <Exchanges />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==7}">
      <Certificado />
    </div>

    <div id="8" class="container red">
      <Benefits />
    </div>
  </main>
</template>
<script>
let id = 1;
let limite = 8;

document.addEventListener("wheel", function () {
  document.getElementById(id).style.visibility = "hidden";
  if (event.deltaY > 0) {
    if (id < limite) id = id + 1;
  } else {
    if (id > 1) id = id - 1;
  }
  document.getElementById(id).style.visibility = "visible";
  location.hash = "#" + id;
  window.history.pushState({}, document.title, window.location.pathname);
});

export default {
  data() {
    return {
      index: 1,
      index_pagina: 1,
      limite: 7

    };
  },
  methods: {
    Navegar() {
      if (event.deltaY > 0) {
        if (this.index_pagina < this.limite) this.index_pagina = this.index_pagina + 1;
      } else {
        if (this.index_pagina > 1) this.index_pagina = this.index_pagina - 1;
      }
      console.log(this.index_pagina);
      location.hash = "#" + this.index_pagina;
      window.history.pushState({}, document.title, window.location.pathname);
    }
  },
  mounted() {
    this.index_pagina = 1;
    document.addEventListener("wheel", this.Navegar);
  },
};
</script>
<style>
/* Fuentes Aquí */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");

/*  */
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

.upcoming_alliance {}

.orange {
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
}

.red {
  background: radial-gradient(circle at center,
      #48d0ab 0%,
      #097561 50%,
      #505863 100%);
}



::-webkit-scrollbar {
  display: none;
}

.container {
  visibility: hidden;
  padding: 0%;
  margin: 0%;
  height: 100%;
}

.mostrar-container {
  visibility: visible;
}
</style>
