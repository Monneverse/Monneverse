<template>

    <div class="logo">
      <img src="/img/logo.svg" alt="logo monneverse">
    </div>

    <!--FONDO-->
    <div class="fondo-video">
      <video
    src="/video/video_binario.mp4"
    autoplay="true"
    muted="true"
    loop="true"
    class="fondo-video"
    poster="/img/fondo_binario.png"></video>
    </div>
   

    <div class="fondo filtro-superior"></div>
    <div class="fondo fondo-montana"><img src="/img/fondo-montana.png" /></div>
    <div class="fondo fondo-oscurecer"></div>
    <div class="fondo fondo-red">
      <img src="img/red.png" alt="">
    </div>
  
    <!--CIRCULOS-->
    <div class="circulo">

    <div class="circulo-medio">
   
    
    <div class="alianzas">
    
    <a href="#"><Span><img src="/img/Alianzas/reddit.png" /></Span>REDDIT</a>
    <!-- <font-awesome-icon icon="fa-brands fa-reddit" /> -->
    
  
    <a href="#"><SPan><img src="/img/Alianzas/telegram.png" /></SPan>TELEGRAM</a>
    <!-- <font-awesome-icon icon="fa-brands fa-telegram" /> -->
  
    <a href="#"><span><img src="/img/Alianzas/discord.png" /></span>DISCORD</a>
    <!-- <font-awesome-icon icon="fa-brands fa-discord" /> -->
    </div>
    </div>
    </div>
    <div class="semi_circulo">
      <img src="img/semi_circulo.png" alt="">
    </div>
    <!--UPCOMING ALLIANCES-->
    <div class="rectangulo">
     <p>UPCOMING ALLIANCES</p>
    </div>
    <!-- VISA MASTERD CARD -->
    <div class="rectangulo-medio">
        <div class="tarjetas">
          <img src="/img/Alianzas/visa.png" alt="">
          <img src="/img/Alianzas/mastercard.png" alt="">
        </div>
    </div>
    <div class="puntero">
      <img src="img/puntero.png" alt="">
    </div>

  </template>
  <script></script>

  <style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");
.logo {
  position: relative;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 12;
}
    .fondo-video{
      width : 100%;
      height: 100%;
     
    }
    .fondo-video video{
     position : absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     object-fit : cover;
     opacity: 40%;
     z-index: 0;
    }
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.fondo-calculadora {
  z-index: 0;
  background: radial-gradient(
    circle at center,
    #48d0ab 0%,
    #097561 50%,
    #505863 100%
  );
}
.filtro-superior {
  z-index: 1;
  background: radial-gradient(
    circle at center,
    #f9f9fa 0%,
    #c8ced4 50%,
    #a8aaaf 100%
  );
  mix-blend-mode: multiply;
}
.fondo-montana {
  height: 100%;
  top: 20%;
  left: 0;
  z-index: 2;
}
.fondo-oscurecer {
  z-index: 4;
  background-color: rgb(0, 0, 0);
  opacity: 60%;
  mix-blend-mode: multiply;
}
.fondo-red img{
  position: relative;
  top: 35%;
  height: 75%;
  z-index:3;
}
.circulo{
    width: 40%;
    height: 80%;
    margin: 0 auto;
    background-color: rgb(238, 236, 234, 0.4);
    position: absolute;
    border-radius: 100%;
    top: 22%;
    left: 30%;
    z-index: 5;
  }

  .circulo-medio{
    width: 90%;
    height: 90%;
    margin: 0 auto;
    border-radius: 100%;
    background-color: rgba(248, 248, 247, 0.4);
    position: relative;
    bottom: -7%;
  }

.alianzas{
  margin: 0;
  position: relative;
  top:20%;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.alianzas a{
  text-align: center;
  color: black;
  display:flex;
  flex-direction: column;
  font-weight:100;
  font-family: 'Work Sans', sans-serif;
}
.alianzas a span{
  
  padding: 0;
  margin: 0 auto;
  width: 4rem;
  height: 4rem;
  background-color: #ecf3f2;
  border-radius: 100%;
  text-align: center;
  -webkit-box-shadow: -16px 3px 135px 10px rgba(8,8,8,1);
  -moz-box-shadow: -16px 3px 135px 10px rgba(8,8,8,1);
  box-shadow: -16px 3px 135px 10px rgba(8,8,8,1);
 

}
.alianzas img{
  position: relative;
  top:10%;
  width: 3rem;
  height: 3rem;
  margin: auto auto;
}

.semi_circulo{
   position: absolute;
   z-index: 7;
   width: 40%;
   height: 80%;
   padding: 0;
   margin: 0;
   top:23%;
   left: 30%;
   transform: rotate(3.142rad);

}

 
 .rectangulo{
    width: 50%;
    height: 35%;
    position: absolute;
    top: 60%;
    left: 25%;
    background: rgb(8,7,32);
    background: linear-gradient(90deg, rgba(8,7,32,1) 0%, rgba(1,209,88,1) 100%);
    border-radius: 2.5rem; 
    text-align: center;
    z-index: 5;
}
.rectangulo p{
    font-weight: 700;
    position: relative;
    top: 50%;
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    font-weight:100;
    font-family: 'Work Sans', sans-serif;
}
.rectangulo-medio{
    width: 44%;
    height: 20%;
    background-color: white;
    position: absolute;
    top: 56%;
    left: 28%;
    border-radius: 1.5rem; 
     -webkit-box-shadow: -1px 4px 72px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 4px 72px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 4px 72px -8px rgba(0,0,0,0.75);
    z-index: 6;
}
.tarjetas{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
 

}
.tarjetas img{
  width: 28%; 
}
.puntero{
  position: absolute;
   z-index: 7;
   width: 20%;
   height: 40%;
   padding: 0;
   margin: 0;
   top:80%;
   left: 40%;
 
}
  </style>