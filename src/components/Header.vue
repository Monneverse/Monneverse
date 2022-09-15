

<template>
  <div id="barra" class="barra-navegacion">
    <div class="animacion"></div>
    <nav class="barra">

        <a id="a1" href="#" @mouseover="hover_mover('a1')">ARTICLES</a>
        <a href="#">BENEFITS</a>
        <a href="#">TOKENOMICS</a>
        <a href="#">NEWS</a>
        <a href="#">ROADMAPS</a>
        <a href="#">SEARCH</a>
       
    
    </nav>
    
   
    <button class="btn" @click="increment">WHITEPAPER</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    hover_mover(id) {
      alert(id);
    },
  },
  mounted() {},
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
  left:6rem;
  min-width: 6.5rem;
  height: 70%;
  border-radius: 0.4rem;
  background-color: #ffc000;
}
.barra a:hover {
  background-color: #ffc000;
  padding: 0rem 0.4rem;
}

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