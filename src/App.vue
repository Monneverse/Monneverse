<script>
import Header from "./components/Header.vue";
import Bienvenida from "./components/Bienvenida.vue";
import Calculadora from "./components/Calculadora.vue";
import Alliances from "./components/Alliances.vue";
import ContenedorArticulo from "./components/ContenedorArticulo.vue";
import Coins from "./components/Coins.vue";
import Benefits from "./components/Benefits.vue";
import Benefits_card from "./components/Benefits_card.vue";
import Beneficio from "./components/Benefit.vue";
import Alianzas from "./components/UpcomingAlliances.vue";
import Exchanges from "./components/Exchanges.vue";
import Logos_auditorias from "./components/Logos_auditorias.vue";
import News from "./components/News.vue";
import Tokenomics from "./components/Tokenomics.vue";
import Fase from "./components/Phases.vue";
import FaseNew from "./components/PhaseNew.vue";
import Fase2 from "./components/Phase2.vue";
import Fase3 from "./components/Phase3.vue";
import Fase4 from "./components/Phase4.vue";
import Fase5 from "./components/Phase5.vue";
import Footer from "./components/Footer.vue";
import Videos from "./components/Videos.vue";
import Team from "./components/Team.vue";
import Diagram from "./components/Diagram.vue";
import Frame from "./components/Frames.vue";
const typeOrientacion = Object.freeze({
  left: 1,
  center: 2,
  right: 3,
  none: 4,
});
export default {
  components: {
    Header,
    Bienvenida,
    Calculadora,
    Alliances,
    ContenedorArticulo,
    Coins,
    Benefits,
    Benefits_card,
    Beneficio,
    Alianzas,
    Exchanges,
    Logos_auditorias,
    News,
    Tokenomics,
    FaseNew,
    Fase,
    Fase2,
    Fase3,
    Fase4,
    Fase5,
    Footer,
    Videos,
    Team,
    Diagram,
    Frame,
  },
  data() {
    return {
      index: 0,
      index_pagina: 1,
      limite: 24,
      pagesVisible: [1, 2],
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
      orientacion: typeOrientacion.center,
    };
  },
  methods: {
    IsPagesVisible(index) {
      if (this.pagesVisible.includes(index)) {
        return true;
      }
      if (this.index_pagina >= index - 1 && this.index_pagina <= index + 1) {
        return true;
      }
      return false;
    },
    next() {
      if (this.scroll) {
        let newPosition = this.index_pagina;

        if (this.index_pagina < this.limite) {
          this.exitAnimation = true;
          newPosition = this.index_pagina + 1;
          this.scroll = false;
          this.isRevert = false;

          if (newPosition == 5) {
            newPosition = 6;
          }
          if (newPosition == 11) {
            newPosition = 12;
          }

          if (newPosition == 19) {
              newPosition = 24;
            }
          this.CambiarContenedor(newPosition);
        }
      }
    },
    before() {
      if (this.scroll) {
        let newPosition = this.index_pagina;
        if (this.index_pagina > 1) {
          this.exitAnimation = true;
          this.scroll = false;
          newPosition = this.index_pagina - 1;
          this.isRevert = true;

          if (newPosition == 5) {
            newPosition = 4;
          }
          if (newPosition == 11) {
            newPosition = 10;
          }

          if (newPosition == 23) {
              newPosition = 18;
            }
          this.CambiarContenedor(newPosition);
        }
      }
    },
    setOnPage(id, visible = true) {
      this.index = id;
      this.isVisibleLogo = visible;
      switch (this.index) {
        case 1:
          if (this.index_pagina == 6) {
            return;
          }
          this.index_pagina = 6;
          break;
        case 2:
          if (this.index_pagina == 9) {
            return;
          }
          this.index_pagina = 9;
          break;
        case 3:
          if (this.index_pagina == 12) {
            return;
          }
          this.index_pagina = 12;
          break;
        case 4:
          if (this.index_pagina == 16) {
            return;
          }
          this.index_pagina = 16;
          break;
        case 5:
          if (this.index_pagina == 17) {
            return;
          }
          this.index_pagina = 17;
          break;
        case 6:
          if (this.index_pagina == 1) {
            return;
          }
          this.index_pagina = 1;
          break;
        default:
          break;
      }
      this.isRevert = false;
      this.enterAnimation = true;
      this.CambiarContenedor(this.index_pagina);
    },
    UpdateNav(id) {
      switch (id) {
        case 1:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.center;
          }
          this.index = 0;
          break;
        case 2:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 0;
          break;
        case 3:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 0;
          break;
        case 4:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 0;
          break;
        case 6:
          this.index = 1;
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          break;
        case 9:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 2;
          break;
        case 10:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 2;
          break;
        case 11:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 2;
          break;
        case 12:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 3;
          break;
        case 13:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 3;
          break;
        case 14:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 3;
          break;
        case 15:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.left;
          }

          this.index = 0;
          break;
        case 16:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 4;
          break;
        case 17:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 5;
          break;
        case 18:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 0;
          break;
        case 19:
          if (window.innerWidth < 900) {
            this.orientacion = typeOrientacion.left;
          } else {
            this.orientacion = typeOrientacion.right;
          }
          this.index = 0;
          break;
        case 20:
          this.index = 0;
          this.orientacion = typeOrientacion.none;
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
        if (this.startY - 100 > this.moveY) this.next();
        else if (this.startY + 100 < this.moveY) this.before();
      }
    },
    SetBloquearScroll(active) {
      this.scroll = active;
    },
    CambiarContenedor(newPosition) {
      setTimeout(() => {
        this.scroll = false;
        let mismoContenedor = this.index_pagina == newPosition;
        this.index_pagina = newPosition;
        if (!this.pagesVisible.includes(this.index_pagina)) {
          this.pagesVisible.push(this.index_pagina);
        }
        this.isVisibleLogo = true;
        if (
          this.listaPaginaDondeSeOcultaLogo.filter(
            (x) => x == this.index_pagina
          ).length > 0
        ) {
          this.isVisibleLogo = false;
        }

        location.hash = "#" + this.index_pagina;
        window.history.pushState({}, document.title, window.location.pathname);
        this.UpdateNav(this.index_pagina);
        if (mismoContenedor == false) {
          this.exitAnimation = false;
          this.enterAnimation = true;
        }
      }, 750);

      setTimeout(() => {
        this.scroll = true;

        this.enterAnimation = false;
      }, 1500);
    },
    DisabledZoom() {
      const handleWheel = function (e) {
        if (e.ctrlKey || e.metaKey) e.preventDefault();
      };
      window.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener("keydown", function () {
        if (
          event.ctrlKey == true &&
          (event.which == "61" ||
            event.which == "107" ||
            event.which == "173" ||
            event.which == "109" ||
            event.which == "187" ||
            event.which == "189")
        ) {
          event.preventDefault();
        }
      });
    },
    Navegar() {
      if (this.scroll) {
        this.scroll = false;
        let newPosition = this.index_pagina;

        if (event.deltaY > 0) {
          if (this.index_pagina < this.limite) {
            newPosition = this.index_pagina + 1;
            if (newPosition == 5) {
              newPosition = 6;
            }
            if (newPosition == 11) {
              newPosition = 12;
            }
            if (newPosition == 19) {
              newPosition = 24;
            }
            this.isRevert = false;
          }
        } else {
          if (this.index_pagina > 1) {
            newPosition = this.index_pagina - 1;

            if (newPosition == 5) {
              newPosition = 4;
            }
            if (newPosition == 11) {
              newPosition = 10;
            }
            if (newPosition == 23) {
              newPosition = 18;
            }
            this.isRevert = true;
          }
        }

        if (newPosition == this.index_pagina) {
          this.isRevert = false;
          this.scroll = true;
          return;
        }

        this.exitAnimation = true;

        this.CambiarContenedor(newPosition);
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
    window.addEventListener("resize", () => {
      this.UpdateNav(this.index_pagina);
    });
    document.addEventListener("keydown", (event) => {
      if (event.code == "ArrowUp") {
        this.before();
      } else if (event.code == "ArrowDown") {
        this.next();
      } else if (event.code == "ArrowLeft") {
        this.before();
      } else if (event.code == "ArrowRight") {
        this.next();
      }
    });
    setTimeout(() => {
      this.pagesVisible.push(12);
    }, 10000);
    document.addEventListener("wheel", this.Navegar);

    this.DisabledZoom();

    this.listaPaginaDondeSeOcultaLogo.push(this.limite);
    document.addEventListener("drag", this.returnMethods());
    this.orientacion = typeOrientacion.none;
    this.orientacion = typeOrientacion.center;
    this.CambiarContenedor(1);
  },
};
</script>

<template>
  <header>
    <Header
      :orientacion="orientacion"
      :index="index"
      :isVisible="isVisibleLogo"
      :setPage="setOnPage"
      :setNext="next"
      :indexPagina="index_pagina"
    >
    </Header>
  </header>

  <main class="scroll-main">
    <div v-show="index_pagina == 1" v-if="IsPagesVisible(1)" class="container">
      <Bienvenida
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div v-show="index_pagina == 2" v-if="IsPagesVisible(2)" class="container">
      <Alliances
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div v-show="index_pagina == 3" v-if="IsPagesVisible(3)" class="container">
      <Alianzas
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div v-show="index_pagina == 4" v-if="IsPagesVisible(4)" class="container">
      <Calculadora
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div v-show="index_pagina == 5" v-if="IsPagesVisible(5)" class="container">
      <Coins
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div v-show="index_pagina == 6" v-if="IsPagesVisible(6)" class="container">
      <ContenedorArticulo
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div v-show="index_pagina == 7" v-if="IsPagesVisible(7)" class="container">
      <Exchanges
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div v-show="index_pagina == 8" v-if="IsPagesVisible(8)" class="container">
      <Logos_auditorias
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
      />
    </div>

    <div v-show="index_pagina == 9" v-if="IsPagesVisible(9)" class="container">
      <Benefits
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div
      v-show="index_pagina == 10"
      v-if="IsPagesVisible(10)"
      class="container"
    >
      <Beneficio
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div
      v-show="index_pagina == 11"
      v-if="IsPagesVisible(11)"
      class="container"
    >
      <Benefits_card
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
        :SetBloquearScroll="SetBloquearScroll"
      />
    </div>

    <div
      v-show="index_pagina == 12"
      v-if="IsPagesVisible(12)"
      class="container"
    >
      <Tokenomics
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="index_pagina == 13"
      v-if="IsPagesVisible(13)"
      class="container"
    >
      <Diagram
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 14)"
      v-if="IsPagesVisible(14)"
      class="container"
    >
      <Frame
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 15)"
      v-if="IsPagesVisible(15)"
      class="container"
    >
      <Videos
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 16)"
      v-if="IsPagesVisible(16)"
      class="container"
    >
      <News
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 17)"
      v-if="IsPagesVisible(17)"
      class="container"
    >
      <FaseNew
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
        :SetBloquearScroll="SetBloquearScroll"
        :next="next"
        :before="before"
      />
    </div>
    <div
      v-show="(index_pagina == 18)"
      v-if="IsPagesVisible(18)"
      class="container"
    >
      <Team
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 19)"
      v-if="IsPagesVisible(19)"
      class="container"
    >
      <Fase
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>

    <div
      v-show="(index_pagina == 20)"
      v-if="IsPagesVisible(20)"
      class="container"
    >
      <Fase2
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 21)"
      v-if="IsPagesVisible(21)"
      class="container"
    >
      <Fase3
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 22)"
      v-if="IsPagesVisible(22)"
      class="container"
    >
      <Fase4
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="(index_pagina == 23)"
      v-if="IsPagesVisible(23)"
      class="container"
    >
      <Fase5
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
    <div
      v-show="index_pagina == limite"
      v-if="IsPagesVisible(24)"
      class="container"
    >
      <Footer
        :exitAnimation="exitAnimation"
        :enterAnimation="enterAnimation"
        :isRevert="isRevert"
      />
    </div>
  </main>
</template>

<style>
/* Fuentes Aquí */
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

@font-face {
  font-family: "Work Sans", serif;
  src: url("/Fonts/WorkSans.ttf");
  font-style: semibold;
}

/* Variables */
:root {
  /* colores */
  --color-letra: white;
  --degradado-linear-navegacion: radial-gradient(
    circle at center,
    #32987d 0%,
    #097561 50%,
    #505863 100%
  );
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
