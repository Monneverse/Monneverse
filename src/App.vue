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
import Benefits_4 from "./components/Benefits_4.vue";
import Benefits_5 from "./components/Benefits_5.vue";
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
    <Header :index=index :isVisible=isVisibleLogo :setPage=setOnPage></Header>
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

      <Alliances :index_pagina=index_pagina />
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
      <Benefits :index_pagina=index_pagina />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==10}">
      <Benefits_2 :index_pagina=index_pagina />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==11}">
      <Benefits_3 :index_pagina=index_pagina />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==12}">
      <Benefits_4 :index_pagina=index_pagina />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==13}">
      <Benefits_5 :index_pagina=index_pagina />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==14}">
      <Tokenomics :index_pagina=index_pagina />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==15}">
      <News />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==16}">
      <Fases />
    </div>
    <div :class="{container:true, 'mostrar-container':index_pagina==17}">
      <Footer :index_pagina=index_pagina></Footer>
    </div>

  </main>
</template>
<script>




export default {
  data() {
    return {
      index: 0,
      index_pagina: 1,
      limite: 17,
      isVisibleLogo: false,
      scroll: true,
      exitAnimation: false,
      enterAnimation: false,
      listaPaginaDondeSeOcultaLogo: [1, 2, 17]

    };
  },
  methods: {
    setOnPage(id) {
      this.index = id;

      switch (this.index) {
        case 1:
          this.index_pagina = 5;
          break;
        case 2:
          this.index_pagina = 9;
          break;
        case 3:
          this.index_pagina = 14;
          break;
        case 4:
          this.index_pagina = 15;
          break;
        case 5:
          this.index_pagina = 16;
          break;
        default:
          break;
      }

      location.hash = "#" + this.index_pagina;
      window.history.pushState({}, document.title, window.location.pathname);
    },
    UpdateNav(id) {
      switch (id) {
        case 5:
          this.index = 1;
          break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
          this.index = 2;
          break;
        case 14:
          this.index = 3;
          break;
        case 15:
          this.index = 4;
          break;
        case 16:
          this.index = 5;
          break;
        default:
          this.index = 0;
          break;
      }

    },
    Navegar() {
      if (this.scroll) {
        this.beforeAnimation = true
        this.scroll = false;

        let newPosition = 0
        if (event.deltaY > 0) {
          if (this.index_pagina < this.limite)
            newPosition = this.index_pagina + 1;
        } else {
          if (this.index_pagina > 1)
            newPosition = this.index_pagina - 1;
        }

        setTimeout(() => {
          this.index_pagina = newPosition
          this.isVisibleLogo = true;
          if (this.listaPaginaDondeSeOcultaLogo.filter(x => x == this.index_pagina).length > 0) {
            this.isVisibleLogo = false;
          }

          location.hash = "#" + this.index_pagina;
          window.history.pushState({}, document.title, window.location.pathname);
          this.UpdateNav(this.index_pagina)
          this.beforeAnimation = false
          this.afterAnimation = true
        }, 500)

        setTimeout(() => {
          this.scroll = true;
          this.afterAnimation = false
        }, 1000)


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
