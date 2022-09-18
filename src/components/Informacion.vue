<template>
  <div class="welcome fadeInLeft animated">
    <p>welcome to <b>monneverse</b></p>
  </div>

  <div class="welcome_text fadeInRight animated">
    <p>
      Take advantage of this opportunity and <b>reserve</b> your spot in our
      pre-sale
    </p>
  </div>
</template>

<script></script>

<style>
@import url("http://fonts.cdnfonts.com/css/bahnschrift");

.welcome {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 30%;
  left: 8.8%;
  width: 30%;
  z-index: 6;
}

.welcome p {
  font-size: 3.4vw;
  font-family: "Bahnschrift", sans-serif;
  color: white;
  text-align: center;
  text-transform: uppercase;
}

.welcome p b {
  text-decoration: bold;
}

.welcome_text {
  position: fixed;
  display: flex;
  top: 55%;
  left: 4%;
  justify-content: center;
  width: 40%;
  z-index: 6;
}

.welcome_text p {
  font-size: 2vw;
  font-family: "Bahnschrift", sans-serif;
  color: white;
  text-align: center;
  text-transform: capitalize;
}

.welcome_text p b {
  text-transform: uppercase;
}
</style>
