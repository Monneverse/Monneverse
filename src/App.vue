<script setup>
import Header from "./components/Header.vue";
import Bienvenida from "./components/Bienvenida.vue";
import Calculadora from "./components/Calculadora.vue";
import Alliances from "./components/Alliances.vue";
import Certificado from "./components/Certificado.vue";
import ContenedorArticulo from "./components/ContenedorArticulo.vue";
import Benefits from "./components/Benefits.vue";
import Benefits_2 from "./components/Benefits_2.vue";
import Benefits_3 from "./components/Benefits_3.vue";
import Alianzas from "./components/Alianzas.vue";
import Exchanges from "./components/Exchanges.vue";
import Logos_auditorias from "./components/Logos_auditorias.vue";
import News from "./components/News.vue";
import Tokenomics from "./components/Tokenomics.vue";
import Fases from "./components/Fases.vue";
import Footer from "./components/Footer.vue";
</script>


<template>
  <header>
    <Header :index=index :isVisible=isVisibleLogo></Header>
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
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==2}">

      <Alliances />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==3}">
      <Alianzas />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==4}">
      <Calculadora :index_pagina=index_pagina />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==5}">
      <ContenedorArticulo />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==6}">
      <Exchanges />
    </div>

    <div :class="{container:true, 'mostrar-container':index_pagina==7}">
      <Logos_auditorias />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==8}">
      <Certificado :index_pagina=index_pagina />
    </div>

    <div :class="{container:true,  'mostrar-container':index_pagina==9}">
      <Benefits />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==10}">
      <Benefits_2 />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==11}">
      <Benefits_3 />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==12}">
      <Tokenomics />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==13}">
      <News />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==14}">
      <Fases />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==15}">
      <Footer :index_pagina=index_pagina></Footer>
    </div>

  </main>
</template>
<script>




export default {
  data() {
    return {
      index: 1,
      index_pagina: 1,
      limite: 15,
      isVisibleLogo: false,
      scroll: true

    };
  },
  methods: {
   
    Navegar() {
      console.log(this.scroll);
      if (this.scroll) {
        if (event.deltaY > 0) {
          if (this.index_pagina < this.limite) this.index_pagina = this.index_pagina + 1;
        } else {
          if (this.index_pagina > 1) this.index_pagina = this.index_pagina - 1;
        }
        this.isVisibleLogo = true;
        if (this.index_pagina == 1 || this.index_pagina == 13) {
          this.isVisibleLogo = false;
        }
        this.scroll = false;

        setTimeout(() => {
          this.scroll = true;
        }, 1000)
        location.hash = "#" + this.index_pagina;
        window.history.pushState({}, document.title, window.location.pathname);
      }

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
