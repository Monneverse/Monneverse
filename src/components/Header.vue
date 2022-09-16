<template>
  <div id="barra" class="barra-navegacion">
    <nav class="barra" @mouseout="exit_mouse">
      <a
        id="a1"
        class="home"
        href="#"
        @mouseover="hover_mover('a1')"
        @click="leave_mouse('a1')"
        >articles</a
      >
      <a
        id="a2"
        href="#"
        @mouseover="hover_mover('a2')"
        @click="leave_mouse('a2')"
        >benefits</a
      >
      <a
        id="a3"
        href="#"
        @mouseover="hover_mover('a3')"
        @click="leave_mouse('a3')"
        >tokenomics</a
      >
      <a
        id="a4"
        href="#"
        @mouseover="hover_mover('a4')"
        @click="leave_mouse('a4')"
        >news</a
      >
      <a
        id="a5"
        href="#"
        @mouseover="hover_mover('a5')"
        @click="leave_mouse('a5')"
        >roadmaps</a
      >
      <a
        id="a6"
        href="#"
        @mouseover="hover_mover('a6')"
        @click="leave_mouse('a6')"
        >search</a
      >
      <div id="animacion" class="animacion traslado_animacion"></div>
    </nav>

    <button class="btn">WHITEPAPER</button>
  </div>
</template>

<script>
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

function recargar() {
  var anim = document.getElementById("animacion");
  var link = document.getElementsByClassName("home")[0];
  anim.style.minWidth = link.offsetWidth + "px";
  anim.style.left = getOffset(link).left + "px";
}



export default {
  data() {
    return {
      distancia: 0,
      animando: false,
    };
  },
  methods: {
    hover_mover(id) {
      let anim = document.getElementById("animacion");
      let link = document.getElementById(id);
      anim.style.minWidth = link.offsetWidth + "px";
      anim.style.left = getOffset(link).left + "px";
    },
    exit_mouse() {
      var anim = document.getElementById("animacion");
      var link = document.getElementsByClassName("home")[0];
      anim.style.minWidth = link.offsetWidth + "px";
      anim.style.left = getOffset(link).left + "px";
    },
    leave_mouse(id) {
      var anim = document.getElementById("animacion");
      var activo = document.getElementsByClassName("home")[0];
      let link = document.getElementById(id);
      activo.classList.remove("home");
      link.classList.add("home");
    },
  },

  mounted() {
    recargar();
  },
};
window.addEventListener("resize", function () {
 
});

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");
.barra-navegacion {
  position: fixed;
  top: 0%;
  background-color: transparent;
  width: 100%;
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
  margin-right: 3rem;
}

.barra a {
  position: relative;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  height: 70%;
  margin: 0rem;
  padding: 0.6rem;
  border-radius: 0.4rem;
  z-index: 1;
}
.animacion {
  position: absolute;
  /* left: 60rem; */
  min-width: 1rem;
  width: 2rem;
  height: 70%;
  border-radius: 0.4rem;
  background-color: #ffc000;
  z-index: 0;
}

.traslado_animacion {
  transition: all 0.4s ease 0s;
}

/* .barra a:hover {
  background-color: #ffc000;
  padding: 0rem 0.4rem;
} */

.btn {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border-style: none;
  border-color: transparent;
  text-align: center;
  background-color: #ffc000;
  padding: 0.8rem;

  min-width: 8rem;
}

.btn:hover {
  background-color: red;
}
</style>
