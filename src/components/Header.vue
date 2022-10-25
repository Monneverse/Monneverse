<template>

  <!-- logo de la página -->
  <div :class="{ logo: true, mostrar: isVisible }">
    <a href="" @click="this.setPage(1, false)">
      <img src="/img/logo.svg" alt="logo monneverse" /></a>
  </div>

  <!-- menu hamberguesa -->
  <div :class="{ 'menu-Burger': true, 'menu-Burger-active': isExpanded }" @click="isExpanded = !isExpanded">
    <div class="line line__1"></div>
    <div class="line line__2"></div>
    <div class="line line__3"></div>
  </div>

  <!-- navagacion -->
  <div id="barra" :class="{ 'barra-navegacion': true, 'barra-navegacion-active': isExpanded }">

    <nav class="barra" @mouseout="exit_mouse">
      <!-- logo menu -->
      <div class="logo-menu">
        <img src="/img/logo.svg" alt="logo monneverse" />
      </div>

      <!-- links -->
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

      <!-- boton meta -->
      <div class="btnMeta">
        <button @click="addTokenFunction()" class="add">Add Token To MetaMask</button>
      </div>

      <!-- boton WHITEPAPER -->
      <div class="container-whitepaper">
        <button class="btn" @click="reDirect">WHITEPAPER </button>
      </div>

      <!-- div indicador -->
      <div id="animacion" :class="{ animacion: true, invisible: indexF == 0, }"></div>


      <!-- redes -->
      <div class="logo-redes">
        <a class="icon" href="https://t.me/monnerversecommunity" target="_blank">
          <img src="../assets/Telegram_logo.svg" alt="logo telegram" srcset="" />
        </a>

        <a class="icon" href="https://www.reddit.com/user/monnerverse" target="_blank">
          <img src="../assets/reddit-4.svg" alt="logo reddit" srcset="" />
        </a>

        <a class="icon" href="https://discord.com/invite/h7fRvek9dn" target="_blank">
          <img src="../assets/discord.svg" alt="logo discord" srcset="" />
        </a>
      </div>

    </nav>
  </div>

  <!-- boton bajar -->
  <div :class="{'arrow-container':true, 'animated':true, 'fadeInDown':true, 
  right:this.orientacion ==3,center:this.orientacion ==2, left:this.orientacion ==1 }">
    <div @click="this.setNext()" class="arrow-2">
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="arrow-1 animated hinge infinite zoomIn"></div>
  </div>


</template>

<script lang="js">
export default {
  data() {
    return {
      distancia: 0,
      animando: false,
      event: "click",
      isExpanded: false
    };
  },
  props: ["index", "isVisible", "setPage", "setNext", "indexPagina","orientacion"],
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
        if (window.screen.width > 850) {
          var anim = document.getElementById("animacion");
          var link = document.getElementsByClassName("home")[0];
          anim.style.minWidth = link.offsetWidth + "px";
          anim.style.left = this.getOffset(link).left + "px";
        }
      } catch (error) {
        console.log("EL ERROR ES " + error);
      }
    },
    async addTokenFunction() {
      const tokenAddress = '0xCD1e230ebA2E1ACEE43eB1AF3948bdb333044893';
      const tokenSymbol = 'MNR';
      const tokenDecimals = 18;
      const tokenImage = 'https://i.postimg.cc/xCHLP8sw/icon-32x32.png';

      try {
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },
          },
        });

        if (wasAdded) {
          console('Thanks for your interest!');
        } else {
          console('HelloWorld Coin has not been added');
        }
      } catch (error) {
        console.log(error);
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
/* Fuentes */

@font-face {
  font-family: "Bahn";
  src: url("/Fonts/BAHNSCHRIFT9.ttf");
  font-style: semibold;
  font-stretch: semi-condensed;
}

/* Style of web */

/* Global y util */

img {
  width: 100%;
  height: 100%;
}

.invisible {
  opacity: 0;
}

.logo-redes,
.logo-menu,
.menu-Burger,
.logo {
  display: none;
}

.mostrar {
  display: block;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}


/* Navegacion */

.barra-navegacion {
  position: fixed;
  top: 2rem;
  width: 100%;
  height: 3rem;
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
  max-width: 50rem;
}


.barra a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: var(--color-letra);
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
  min-width: 1rem;
  height: 70%;
  border-radius: 0.4rem;
  background: var(--degradado-linear-navegacion);
  z-index: 0;
  transition: all 0.4s ease 0s;
}


.container-whitepaper {

  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
}

.btn {
  font-family: "Bahn";
  font-size: 1.2rem;
  border-radius: .5rem;
  border-style: none;
  border-color: transparent;
  text-align: center;
  background-color: var(--color-secundario);
  padding: 1rem;
  width: 42%;
  height: 100%;
  min-width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  background-color: var(--color-secundario-hover);
}




/* ADD METATASK */

.add {
  border: none;
  width: min-content;
  min-width: 15rem;
  height: auto;
  background: linear-gradient(90deg, rgba(85, 0, 255, 1) 35%, rgba(214, 0, 255, 1) 100%);
  border-radius: 3rem;
  color: var(--color-letra);
  font-size: 1.2rem;
  padding: .5rem;
  margin-left: 1rem;
  font-family: "Bahn";
  transition: ease-in all .5s;
  animation: btnMeta infinite alternate 5s;
  cursor: hand;
}

@keyframes add {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 70%;
  }
}

/* ADD METATASK */

/* SCROLL */
.arrow-container {
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;
  user-select: none;
  padding: 0%;

  position: fixed;
  bottom:  .5rem;
}
.left {
  left: 2rem;
  transform: translate(0%,0);
}
.center {
  left: 50%;
  transform: translate(-50%,0);
}
.right {
  right:   2rem;
  transform: translate(0%,0);
}
.arrow-1 {
  width: 100%;
  height: 100%;
  background: var(--color-secundario);
  opacity: 0.5;
  border-radius: 50%;
  position: absolute;
  top: 0%;
  left: 0%;
  margin: 0%;
  padding: 0%;
  cursor: pointer;

}

.arrow-2 {
  width: 60px;
  height: 60px;
  background: var(--color-secundario);
  border-radius: 50%;
  position: relative;
  top: 0%;
  left: 0%;
  z-index: 1;
  display: table;
  margin: 0%;
  padding: 0%;
  cursor: pointer;
  user-select: none;
}

.arrow-2:hover {
  background: var(--color-secundario-hover);
}

.arrow-2 i.fa {
  font-size: 30px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: #000;
}

/* Custom Animate.css */

.animated .hinge {
  -webkit-animation-duration: 1.6s;
  animation-duration: 1.6s;
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.4, .4, .4);
    transform: scale3d(.4, .4, .4);
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.4, .4, .4);
    transform: scale3d(.4, .4, .4);
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}



/* SCROLL */

/* style of mobile */
@media only screen and (max-width: 900px) {


  .animacion {
    display: none;
    opacity: 0;
  }

  .barra-navegacion {
    position: absolute;
    top: -100%;
    left: -100%;
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
    transform-origin: 0% 100%;
    transition: all 300ms;
  }

  .barra-navegacion-active {
    top: 0;
    left: 0;
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
    background-color: var(--color-secundario);
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
    background-color: var(--color-secundario);
    transform-origin: 0% 100%;
    transition: transform 300ms;
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
  }

  .btn {
    position: fixed;
    bottom: 1rem;
    right: 5%;
    width: auto;
    height: auto;
    padding: .8rem;
    font-size: 3vw;
  }

  .logo {
    display: none;
  }

  /* redes sociales */
  .logo-menu {
    display: block;
  }

  .logo-redes {
    display: none;
    margin-top: 15%;
    width: 100%;
    height: 5rem;
    border-top: 1px solid white;
    padding-top: 1rem;
    z-index: 14;

  }

  .barra-navegacion-active .logo-redes {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }


  .logo-redes .icon {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }

  .logo-redes .icon:hover {
    width: 2.6rem;
    height: 2.6rem;
  }
  .btnMeta{
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
}
</style>
