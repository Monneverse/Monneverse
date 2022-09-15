

<template>
  <div id="barra" class="barra-navegacion">
    <div id="animacion" class="animacion"></div>
    <nav class="barra">
      <a id="a1" href="#" @mouseover="hover_mover('a1')">ARTICLES</a>
      <a id="a2" href="#" @mouseover="hover_mover('a2')">BENEFITS</a>
      <a id="a3" href="#" @mouseover="hover_mover('a3')">TOKENOMICS</a>
      <a id="a4" href="#" @mouseover="hover_mover('a4')">NEWS</a>
      <a id="a5" href="#" @mouseover="hover_mover('a5')">ROADMAPS</a>
      <a id="a6" href="#" @mouseover="hover_mover('a6')">SEARCH</a>
    </nav>

    <button class="btn" @click="increment">WHITEPAPER</button>
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

export default {
  data() {
    return {
      distancia: 0,
      animando: false,
    };
  },
  methods: {
    hover_mover(id) {
      if (this.animando) {
        return;
      }
      var anim = document.getElementById("animacion");
      var link = document.getElementById(id);
      var distancia_recorrer = link.offsetLeft - this.distancia;
      anim.style.left = distancia_recorrer + "px";
    },
  },
  mounted() {
    this.distancia = getOffset(document.getElementById("animacion")).left;
    var anim = document.getElementById("animacion");
    var link = document.getElementById("a1");
    anim.style.left = link.offsetLeft - this.distancia + "px";
  },
};
</script>
<style >
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
  justify-content: space-between;
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
  color: white;
  text-decoration: none;
  height: 70%;
  margin: 0rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
}
.animacion {
  position: relative;
  /* left: 60rem; */
  width: 5rem;
  height: 70%;
  border-radius: 0.4rem;
  background-color: #ffc000;
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