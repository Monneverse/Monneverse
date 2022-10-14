<template>
  <div :class="{ logo: true, mostrar: isVisible }">
    <a href="" :class="{ link: true, home: indexF == 6 }" @mouseover="hover_mover('a0')" @click="this.setPage(0)">
      <img src="/img/logo.svg" alt="logo monneverse" /></a>
  </div>
  <div id="barra" class="barra-navegacion">
    <div class="content-nav">
    </div>
    <nav class="barra" @mouseout="exit_mouse">
      <a id="a1" :class="{ link: true, home: indexF == 1 }" @mouseover="hover_mover('a1')"
        @click="this.setPage(1)">articles</a>
      <a id="a2" :class="{ link: true, home: indexF == 2 }" @mouseover="hover_mover('a2')"
        @click="this.setPage(2)">benefits</a>
      <a id="a3" :class="{ link: true, home: indexF == 3 }" @mouseover="hover_mover('a3')"
        @click="this.setPage(3)">tokenomics</a>
      <a id="a4" :class="{ link: true, home: indexF == 4 }" @mouseover="hover_mover('a4')"
        @click="this.setPage(4)">news</a>
      <a id="a5" :class="{ link: true, home: indexF == 5 }" @mouseover="hover_mover('a5')"
        @click="this.setPage(5)">roadmaps</a>
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
          var anim = document.getElementById("animacion");
          var link = document.getElementsByClassName("link")[this.index - 1];
          anim.style.minWidth = link.offsetWidth + "px";
          anim.style.left = this.getOffset(link).left + "px";
        } catch (error) { }

        return this.index;
      },
    },
  },
  methods: {
    hover_mover(id) {
      let anim = document.getElementById("animacion");
      anim.classList.remove("invisible");
      let link = document.getElementById(id);
      anim.style.minWidth = link.offsetWidth + "px";
      anim.style.left = this.getOffset(link).left + "px";
    },
    exit_mouse() {
      var anim = document.getElementById("animacion");
      var link = document.getElementsByClassName("home")[0];
      if (this.indexF == 0) {
        anim.classList.add("invisible");
      }
      anim.style.minWidth = link.offsetWidth + "px";
      anim.style.left = this.getOffset(link).left + "px";
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
        var anim = document.getElementById("animacion");
        var link = document.getElementsByClassName("home")[0];
        anim.style.minWidth = link.offsetWidth + "px";
        anim.style.left = this.getOffset(link).left + "px";
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");

.invisible {
  opacity: 0;
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
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
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

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  #barra {
    display: none;
  }

  .btn {
    position: fixed;
    top: 91%;
    left: 57%;
    width: 40%;
    height: 8%;
    padding: 0rem;
    font-size: 5vw;
  }

  .logo {
    display: none;
  }
}
</style>
