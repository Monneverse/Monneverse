<template>
  <div :class="{ logo: true, mostrar: isVisible }">
    <a href="" @click="this.setPage(1, false)">
      <img src="/img/logo.svg" alt="logo monneverse" /></a>
  </div>
  <div :class="{'menu-Burger':true, 'menu-Burger-active':isExpanded }" @click="isExpanded = !isExpanded">
    <div class="line line__1"></div>
    <div class="line line__2"></div>
    <div class="line line__3"></div>
  </div>
  <div id="barra" :class="{'barra-navegacion':true, 'barra-navegacion-active':isExpanded}">

    <nav class="barra" @mouseout="exit_mouse">
      <div class="logo-menu">
        <img src="/img/logo.svg" alt="logo monneverse" />
      </div>
      <a id="a1" :class="{ link: true, home: indexF == 1 }" @mouseover="hover_mover('a1')"
        @click="this.setPage(1); isExpanded = false;">articles</a>
      <a id="a2" :class="{ link: true, home: indexF == 2 }" @mouseover="hover_mover('a2')"
        @click="this.setPage(2); isExpanded = false;">benefits</a>
      <a id="a3" :class="{ link: true, home: indexF == 3 }" @mouseover="hover_mover('a3')"
        @click="this.setPage(3); isExpanded = false;">tokenomics</a>
      <a id="a4" :class="{ link: true, home: indexF == 4 }" @mouseover="hover_mover('a4')"
        @click="this.setPage(4); isExpanded = false;">news</a>
      <a id="a5" :class="{ link: true, home: indexF == 5 }" @mouseover="hover_mover('a5')"
        @click="this.setPage(5); isExpanded = false;">roadmaps</a>
      <div id="animacion" :class="{
        animacion: true,
        traslado_animacion: true,
        invisible: indexF == 0,
      }"></div>
    </nav>
  </div>

  <div class="container-whitepaper">
    <button class="btn" @click="reDirect">WHITEPAPER</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distancia: 0,
      animando: false,
      event: "click",
      isExpanded: false
    };
  },
  props: {
    index: {
      type: Number,
      required: false,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    setPage: {
      type: Function,
      required: true,
    },
  },
  computed: {
    indexF: {
      get() {
        try {
          if (window.screen.width > 850) {
            var anim = document.getElementById("animacion");
            var link = document.getElementsByClassName("link")[this.index - 1];
            anim.style.minWidth = link.offsetWidth + "px";
            anim.style.left = this.getOffset(link).left + "px";
          }
        } catch (error) { }

        return this.index;
      },
    },
  },
  methods: {
    hover_mover(id) {
      if (window.screen.width > 850) {
        let anim = document.getElementById("animacion");
        anim.classList.remove("invisible");
        let link = document.getElementById(id);
        anim.style.minWidth = link.offsetWidth + "px";
        anim.style.left = this.getOffset(link).left + "px";
      }
    },
    exit_mouse() {
      if (window.screen.width > 850) {
        var anim = document.getElementById("animacion");
        var link = document.getElementsByClassName("home")[0];
        if (this.indexF == 0) {
          anim.classList.add("invisible");
        }
        anim.style.minWidth = link.offsetWidth + "px";
        anim.style.left = this.getOffset(link).left + "px";
      }

    },
    getOffset(el) {
      var _x = 0;
      var _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    },
    recargar() {
      try {
        if(window.screen.width > 850){
        var anim = document.getElementById("animacion");
        var link = document.getElementsByClassName("home")[0];
        anim.style.minWidth = link.offsetWidth + "px";
        anim.style.left = this.getOffset(link).left + "px";
        }
      } catch (error) {
        console.log("EL ERROR ES " + error);
      }
    },
    reDirect() {
      location.replace(
        "https://sites.google.com/view/whiterpaper-monnerverse/p%C3%A1gina-principal"
      );
    },
  },
  mounted() {
    this.recargar();
    window.addEventListener("resize", this.recargar);
  },
};
</script>

<style scoped>
/* Style of web */
.invisible {
  opacity: 0;
}

.menu-Burger {
  display: none;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
  display: none;
}

.mostrar {
  display: block;
}

.barra-navegacion {
  position: fixed;
  top: 0%;
  background-color: transparent;
  width: 96%;
  height: 3rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.barra {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  max-width: 40rem;
}


.barra a {

  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  height: 70%;
  margin: 0rem;
  padding: 0.6rem;
  border-radius: 0.4rem;
  z-index: 1;
  cursor: pointer;
}

.animacion {
  position: absolute;
  /* left: 60rem; */
  min-width: 1rem;
  width: 2rem;
  height: 70%;
  border-radius: 0.4rem;
  background: radial-gradient(circle at center,
      #32987d 0%,
      #097561 50%,
      #505863 100%);
  z-index: 0;
}

.traslado_animacion {
  transition: all 0.4s ease 0s;
}

.container-whitepaper {
  position: fixed;
  width: 30%;
  top: 5%;
  left: 77%;

}

.btn {
  font-family: "Montserrat";
  font-size: 1.1vw;
  font-weight: bold;
  border-radius: .5rem;
  border-style: none;
  border-color: transparent;
  text-align: center;
  background-color: #ffc000;
  padding: 0.6rem;
  width: 42%;
  height: 15%;
  min-width: 8rem;
}

.btn:hover {
  background-color: #b48700;
}



/* style of mobile */
@media only screen and (max-width: 850px) {

  .animacion {
    display: none;
    opacity: 0;
  }



  .barra-navegacion {
    display: none;
    position: absolute;
    top: 0;
    margin-left: -50%;
    transform-origin: 0% 100%;
    transition: all 300ms;
  }

  .barra-navegacion-active {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70%;
    max-width: 20rem;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    padding-top: 5rem;
    opacity: 100%;
    background: linear-gradient(#092D2A 0%,
        #092D2A 30%,
        #092D2A 70%,
        #111418 100%);
    border-top-right-radius: 3rem;
  }

  .barra-navegacion-active>.barra {

    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  .barra>* {
    padding: 0;
    margin: 0;
    width: 90%;
    text-align: right;

  }

  .barra>a:hover {
    background-color: #ffc000;
  }

  .logo-menu {
    width: 70%;
    box-shadow: #505863 20px;
    position: relative;
    left: 50%;
    transform: translate(-50%, -0);
    margin-bottom: 2rem;
  }

  .menu-Burger {
    position: absolute;
    display: flex;
    top: 2rem;
    left: 2rem;
    z-index: 1000;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 2.5rem;
    width: 3rem;


  }

  .menu-Burger>.line {
    height: .2rem;
    border-radius: 2rem;
    width: 90%;
    background-color: #ffc000;
    transform-origin: 0% 100%;
    transition: transform 300ms;
  }

  .menu-Burger>.line {
    height: .2rem;
    border-radius: 2rem;
    width: 90%;
    background-color: #ffc000;
    transform-origin: 0% 100%;
    transition: all 600ms;
  }

  .menu-Burger-active .line__1 {
    transform: rotate(45deg) translate(-5px, -2px);
  }

  .menu-Burger-active .line__2 {
    opacity: 0;
    margin-left: -50rem;

  }

  .menu-Burger-active .line__3 {
    transform: rotate(-45deg) translate(1px, -1px);
    ;
  }

  .btn {
    position: fixed;
    bottom: 5%;
    right: 5%;
    width: auto;
    height: auto;
    padding: .8rem;
    font-size: 3vw;
  }

  .logo {
    display: none;
  }
}
</style>
