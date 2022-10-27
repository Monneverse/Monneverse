<script setup>
import Header from "./components/Header.vue";
import Bienvenida from "./components/Bienvenida.vue";
import Calculadora from "./components/Calculadora.vue";
import Alliances from "./components/Alliances.vue";
import ContenedorArticulo from "./components/ContenedorArticulo.vue";
import Coins from "./components/Coins.vue";
import Benefits from "./components/Benefits.vue";
import Benefits_card from "./components/Benefits_card.vue";
import Benefits_card2 from "./components/Benefits_card2.vue";
import Beneficio from "./components/Benefit.vue";
import Alianzas from "./components/UpcomingAlliances.vue";
import Exchanges from "./components/Exchanges.vue";
import Logos_auditorias from "./components/Logos_auditorias.vue";
import News from "./components/News.vue";
import Tokenomics from "./components/Tokenomics.vue";
import Fase from "./components/Phases.vue";
import Fase2 from "./components/Phase2.vue";
import Fase3 from "./components/Phase3.vue";
import Fase4 from "./components/Phase4.vue";
import Fase5 from "./components/Phase5.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Header :orientacion="orientacion" :index="index" :isVisible="isVisibleLogo" :setPage="setOnPage" :setNext="next"
      :indexPagina="index_pagina">
    </Header>
  </header>

  <main class="scroll-main">
    <!-- 
    para agregar una pantalla agreguela dentro de uno de los div libre
    sino hay div libre, cree uno con el siguiente #Id respetando la secuencia, por ejemplo
    si el ultimo div tiene el id 5, entonces el que usted cree, debe ser el id 6
    y dentro de su div van los componentes, puede eliminar las clases 
    guiese del ejemplo div 1

    Fonts para el proyecto calibri, Bahnschrift semibold semiconden, work sans, work sans Semibold
     LCD, LCD MOno, Roboto
    -->
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 1 }">
      <Bienvenida />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 2 }">
      <Alliances :index_pagina="index_pagina" />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 3 }">
      <Alianzas />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 4 }">
      <Calculadora :index_pagina="index_pagina" />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 5 }">
      <ContenedorArticulo :index_pagina="index_pagina" />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 6 }">
      <Exchanges />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 7 }">
      <Logos_auditorias />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 8 }">
      <Coins :index_pagina="index_pagina" />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 9 }">
      <Benefits :index_pagina="index_pagina" />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 10 }">
      <Beneficio :index_pagina="index_pagina" />
    </div>

    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 11 }">
      <Benefits_card :index_pagina="index_pagina" />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 12 }">
      <Benefits_card2 :index_pagina="index_pagina" />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 13 }">
      <Tokenomics :index_pagina="index_pagina" />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 14 }">
      <News />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 15 }">
      <Fase />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 16 }">
      <Fase2 />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 17 }">
      <Fase3 />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 18 }">
      <Fase4 />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == 19 }">
      <Fase5 />
    </div>
    <div id="container" :class="{ container: true, 'mostrar-container': index_pagina == limite }">
      <Footer :index_pagina="index_pagina" :limite="limite" :enter="enterAnimation" :exit="exitAnimation"></Footer>
    </div>
  </main>
</template>
<script>
const typeOrientacion = Object.freeze({ left: 1, center: 2, right: 3 });
export default {
  data() {
    return {
      index: 0,
      index_pagina: 1,
      limite: 20,
      isVisibleLogo: false,
      scroll: true,
      exitAnimation: false,
      enterAnimation: false,
      isRevert: false,
      listaPaginaDondeSeOcultaLogo: [1, 2],
      isDragging: false,
      startY: 0,
      moveY: 0,
      position: 0,
      orientacion: typeOrientacion.center
    };
  },
  methods: {
    next() {
      let newPosition = this.index_pagina;

      if (this.index_pagina < this.limite) {
        newPosition = this.index_pagina + 1;
        this.isRevert = false;
        this.CambiarContenedor(newPosition)
      }

    },
    before() {
      let newPosition = this.index_pagina;

      if (this.index_pagina > 1) {
        newPosition = this.index_pagina - 1;
        this.isRevert = false;
        this.CambiarContenedor(newPosition)
      }

    },
    setOnPage(id, visible = true) {
      this.index = id;
      this.isVisibleLogo = visible;
      switch (this.index) {
        case 1:
          this.index_pagina = 5;
          break;
        case 2:
          this.index_pagina = 9;
          break;
        case 3:
          this.index_pagina = 13;
          break;
        case 4:
          this.index_pagina = 14;
          break;
        case 5:
          this.index_pagina = 15;
          break;
        case 6:
          this.index_pagina = 1;
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
          this.index = 2;
          break;
        case 13:
          this.index = 3;
          break;
        case 14:
          this.index = 4;
          break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
          this.index = 5;
          break;
        default:
          this.index = 0;
          break;
      }
    },

    touchStart() {
      this.startY = this.touchPositionY();
    },
    touchMove() {
      this.moveY = this.touchPositionY();
      if (this.scroll) {
        if (this.startY - 100 > this.moveY)
          this.next();
        else if (this.startY + 100 < this.moveY)
          this.before();
      }

    },
    CambiarContenedor(newPosition) {
      setTimeout(() => {
        this.scroll = false;
        this.index_pagina = newPosition;
        this.isVisibleLogo = true;
        if (
          this.listaPaginaDondeSeOcultaLogo.filter(
            (x) => x == this.index_pagina
          ).length > 0
        ) {
          this.isVisibleLogo = false;
        }

        location.hash = "#" + this.index_pagina;
        window.history.pushState(
          {},
          document.title,
          window.location.pathname
        );
        this.UpdateNav(this.index_pagina);
        this.exitAnimation = false;
        this.enterAnimation = true;

      }, 500);

      setTimeout(() => {
        this.scroll = true;
        this.enterAnimation = false;
      }, 1000);
    },
    DisabledZoom() {
      const handleWheel = function (e) {
        if (e.ctrlKey || e.metaKey)
          e.preventDefault();
      };
      window.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener('keydown', function () {
        if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
          event.preventDefault();
        }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscore key
        // 61 Plus key  +/= key
      });
    },
    Navegar() {

      if (this.scroll) {
        this.exitAnimation = true;
        this.scroll = false;

        let newPosition = this.index_pagina;
        if (event.deltaY > 0) {
          if (this.index_pagina < this.limite) {
            newPosition = this.index_pagina + 1;
            this.isRevert = false;
            if(newPosition == 11){
              newPosition = 13;
            }
          }
        } else {
          if (this.index_pagina > 1) {
            newPosition = this.index_pagina - 1;
            this.isRevert = true;
            if(newPosition == 12){
              newPosition = 10;
            }
          }
        }
        this.CambiarContenedor(newPosition)
      }
    },
    touchPositionY() {
      return (this.position = event.touches[0].clientY);
    },
    returnMethods() {

      const scrolls = Array.from(document.querySelectorAll("body"));
      scrolls[0].addEventListener("touchstart", this.touchStart);
      scrolls[0].addEventListener("touchmove", this.touchMove);

      window.oncontextmenu = () => {
        event.preventDefault();
        event.stopPropagation();
        return false;
      };

    },
  },
  mounted() {
    document.addEventListener("wheel", this.Navegar);

    this.DisabledZoom();

    this.listaPaginaDondeSeOcultaLogo.push(this.limite);
    document.addEventListener("drag", this.returnMethods());
    window.bind
  },
};
</script>
<style>
/* Fuentes Aquí */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap');

@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

/* Variables */
:root {
  /* colores */
  --color-letra: white;
  --degradado-linear-navegacion: radial-gradient(circle at center,
      #32987d 0%,
      #097561 50%,
      #505863 100%);
  --color-secundario: #ffc000;
  --color-secundario-hover: #b48700;
}

/*style global  */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
}

.grabbing {
  cursor: grabbing;
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
  position: relative;
}

/* Style cambiar de div */

::-webkit-scrollbar {
  display: none;
}

.container {
  visibility: hidden;
  position: absolute;
  padding: 0%;
  margin: 0%;
  width: 100%;
  height: 100%;
}

.mostrar-container {
  visibility: visible;
}
</style>
