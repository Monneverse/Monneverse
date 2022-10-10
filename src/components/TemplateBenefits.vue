<script>
export default {
  data() {
    return {
      valores: [
        {
          icono: "/img/plus.svg",
          symbol: "$",
          precio: "1,5",
          moneda: "USD",
          sale_price: "Pre-sale Price",
          texto: "",
        },
        {
          icono: "/img/plus.svg",
          symbol: "",
          precio: "Phase 1",
          moneda: "",
          sale_price: "",
          texto:
            "Phase 1 of staking only for users who buy in pre-sale",
        },
        {
          icono: "/img/plus.svg",
          symbol: "$",
          precio: "22,5",
          moneda: "USD",
          sale_price: "Sale Price",
          texto:
            "The price on Pancakeswap for purchases and sales will be $22,6 one day after the pre-sale of our first 2,000,000 Monners to the public ends",
        },
        {
          icono: "/img/plus.svg",
          symbol: "",
          precio: "1500%",
          moneda: "",
          sale_price: "",
          texto:
            "The price increase is made in order to reward our first headlines. You can earn up to 1500% of your initial investment at the end of the pre-sale",
        },
        {
          icono: "/img/plus.svg",
          symbol: "",
          precio: "12%*48h",
          moneda: "",
          sale_price: "Sale Price",
          texto:
            "Enter our first phase os staking buying in pre-sale and earn 12.6% every 48 hours of your total capital in Monnercoins after the launch in Pancakeswap",
        },
      ],
    };
  },
};
</script>

<template>
  <div v-for="valor in valores" class="benefit">
    <i><img class="icon-discord" :src="valor.icono" alt="" /></i>
    <div class="content_price">
      <h1>
        <b class="dolar">{{ valor.symbol }}</b
        >{{ valor.precio }}<span>{{ valor.moneda }}</span>
      </h1>
    </div>
    <div class="content_text">
      <h3>{{ valor.sale_price }}</h3>
      <p v-show="valor.texto">
        {{ valor.texto }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap");

.benefit {
  width: 50%;
  height: 15%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: "Work Sans", sans-serif;
}

.benefit:nth-child(5){
  width: 60%;
}



.benefit h1 {
 
  width: 85%;
  margin: 0 auto;
  font-weight: 4  00;
  font-size: 4.5vw;
  text-align: left;
}


.benefit span {
  font-size: 1vw;
}
.dolar {
  color: rgb(55, 243, 149);
  font-size: 4.5vw;
}
.content_price {
  width: 70%;
  height: 100%;
  background-color: #161431;
  border-radius: 0.5rem;
  display: grid;
  display: flex;
  align-items: center;
  justify-items: center;

}

.content_price:hover {
  box-shadow:
    inset 0 0 60px whitesmoke,
    inset 20px 0 80px rgb(6, 38, 58),
    inset -20px 0 80px rgb(7, 64, 25),
    inset 20px 0 300px rgb(5, 12, 28),
    inset -20px 0 300px rgb(4, 41, 10),
    0 0 50px #fff,
    -10px 0 80px rgb(1, 13, 37),
    10px 0 80px rgb(1, 64, 12);
    transition: 0.5s ease-in;
   
}

.content_text {
  margin-left: 4.5vw;
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

}
.content_text h3 {
  font-size: 1.6vw;
  font-weight: 400;
}
.content_text p {
  width: 90%;
  font-weight: 300;
  font-size: 0.9vw;
  text-align: justify;
  align-items: left;
}
i {
  position: relative;
  left: 4%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
i img {
  align-items: flex-start;
  top: 0;
  right: 4%;
  height: 50%;
}
</style>
