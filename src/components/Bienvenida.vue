<template>
  <video
    src="/public/video/video_binario.mp4"
    autoplay="true"
    muted="true"
    loop="true"
    class="video-fondo"
    poster="/public/img/fondo_binario.png"
  ></video>

  <div class="fondo-oscuro">
    <img src="/public/img/fondo_oscuro.png" />
  </div>

  <div id="logo-1" class="logo">
    <img src="/public/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-2" class="logo">
    <img src="/public/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-3" class="logo">
    <img src="public/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-4" class="logo">
    <img src="/public/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-5" class="logo">
    <img src="/public/img/logo_empresa.png" alt="" />
  </div>
  <div id="logo-6" class="logo">
    <img src="/public/img/logo_empresa.png" alt="" />
  </div>

  <div id="logo-7" class="logo">
    <img src="/public/img/logo_empresa.png" alt="" />
  </div>

  <div class="fondo-suave">
    <img src="/public/img/fondo-suave.png" alt="" srcset="" />
  </div>
  <div class="fondo-montana">
    <img src="/public/img/fondo-montana.png" alt="" srcset="" />
  </div>
  <div class="fondo-oscuro-superior">
    <img src="/public/img/fondo-oscuro-superior.png" alt="" srcset="" />
  </div>
  <div class="fondo-mundial">
    <img src="/public/img/fondo-mundial.png" alt="" srcset="" />
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
img {
  width: 100%;
  height: 100%;
}

.video-fondo {
  position: fixed;
  left: -40%;
  width: 140%;
  scale: 2;
  height: 100%;
  z-index: 0;
}
.fondo-oscuro {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 70%;
}
.logo {
  position: fixed;
  z-index: 1;
  opacity: 40%;
}
#logo-1 {
  left: 3rem;
  top: 3rem;
}

#logo-2 {
  left: 18rem;
  top: 3rem;
}
#logo-3 {
  left: 3.5rem;
  top: 12rem;
  transform: rotate(-30deg);
}
#logo-4 {
  left: 18rem;
  top: 12rem;
  transform: rotate(-30deg);
}
#logo-5 {
  max-width: 30rem;
  max-height: 25rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#logo-6 {
  right: 18rem;
  top: 3rem;
}
#logo-7 {
  right: 18rem;
  top: 12rem;
  transform: rotate(-30deg);
}
.fondo-suave {
  position: absolute;
  top: 70%;
  z-index: 2;
  opacity: 70%;
}
.fondo-montana {
  position: absolute;
  top: 60%;
  left: 0%;
  width: 100%;
  z-index: 4;
  opacity: 70%;
}
.fondo-oscuro-superior {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 100%;
}
.fondo-mundial{
  position: fixed;
  left: 20%;
  top: 20%;
  width: 100%;
  height: 100%;
  z-index: 6;
  opacity: 100%;
}
</style>