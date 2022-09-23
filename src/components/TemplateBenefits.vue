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
      <h1></h1>
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

  margin-bottom: 5%;

  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: "Work Sans", sans-serif;
}

.benefit:nth-child(2) {
  width: 58%;
  margin-bottom: 10%;
}
.benefit:nth-child(3) {
  margin: 0;
  width: 75%;
}

.benefit h1 {
  width: 100%;
  font-weight: 500;
  font-size: 6vw;
  text-align: center;
}

.benefit span {
  font-size: 1.5vw;
}
.dolar {
  color: rgb(55, 243, 149);
  font-size: 6vw;
}
.content_price {
  width: 70%;
  height: 100%;
  background-color: #161431;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 10% 70%;
  align-items: center;
}
.content_text {
  position: relative;
  left: 15%;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.content_text h3 {
  font-size: 1.6vw;
  font-weight: 400;
}
.content_text p {
  width: 80%;
  font-weight: 300;
  font-size: .9vw;
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
