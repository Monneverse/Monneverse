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
          sale_price: "Minimun purchase 1,5 USD Pre-sale Price",
          texto: "",
        },
       
        {
          icono: "/img/plus.svg",
          symbol: "$",
          precio: "22,5",
          moneda: "USD",
          sale_price: "Sale Price",
          texto:
            "Our PancakeSwap price will range from $8,200 to $10,000 thanks to: - Our limited supply of 10,000 MNR. - Scheduled Burns. -Our sponsors. - The GREAT injection of liquidity made by our team with its line of credit from the USA and private investors. We will take into account all the tools that allow us to make our prices grow",
        },

        {
          icono: "/img/plus.svg",
          symbol: "",
          precio: "Phase 1",
          moneda: "",
          sale_price: "",
          texto: "Phase 1 of staking only for users who buy in pre-sale",
        },


        {
          icono: "/img/plus.svg",
          symbol: "",
          precio: "6.2%*48h",
          moneda: "",
          sale_price: "Sale Price",
          texto:
            "Enter our first phase os staking buying in pre-sale and earn 6.2% every 48 hours of your total capital in Monnercoins after the launch in Pancakeswap",
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
  width: 100%;
  height: 10%;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: "Work Sans", sans-serif;
}

.benefit:nth-child(1) {
  width: 15rem;

}
.benefit:nth-child(2) {
  width: 19rem;
  margin-bottom: 5rem;
}
.benefit:nth-child(3) {
  width: 21rem;
}
.benefit:nth-child(4) {
  width: 24rem;
}

.benefit h1 {
  width: 85%;
  margin: 0 auto;
  font-weight: 600;
  font-size: 3.1rem;
  text-align: left;
}
@media screen and (min-width: 768px) {
  .benefit {
    width: 100%;
    height: 100%;
    margin-bottom: 5rem;
  }
  .benefit h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  .benefit:nth-child(1) {
    width: 23rem;
    grid-area: a;
    display: flex;
  }
  .benefit:nth-child(2) {
    width: 23rem;
    grid-area: d;
    display: flex;
  }
  .benefit:nth-child(3) {
    width: 23rem;
    display: flex;
    grid-area: b;
  }
  .benefit:nth-child(4) {
    width: 23rem;
    grid-area: c;
    display: flex;
  }
}

.benefit span {
  font-size: 3vw;
}
.dolar {
  color: rgb(55, 243, 149);
  font-size: 3rem;
}
.content_price {
  width: 70%;
  height: 100%;
  background-color: #161431;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-items: center;
}

.content_price:hover {
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px rgb(6, 38, 58),
    inset -20px 0 80px rgb(7, 64, 25), inset 20px 0 300px rgb(5, 12, 28),
    inset -20px 0 300px rgb(4, 41, 10), 0 0 50px #fff,
    -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(1, 64, 12);
  transition: 0.5s ease-in;
}
@media screen and (min-width: 768px) {
  .benefit span {
    font-size: 1vw;
  }
  .dolar {
    color: rgb(55, 243, 149);
    font-size: 4.5vw;
  }
  .content_price {
    width: 88%;
    height: 50%;

    background-color: #161431;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-items: center;
  }
}

.content_text {
  margin-left: 2.5rem;
  width: 80rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

}
.content_text h3 {
  font-size: 1rem;
  font-weight: 400;
}
.content_text p {
  width: 17rem;
  font-weight: 300;
  font-size:.57rem;
  text-align: justify;
  align-items: left;
}
i {
  position: relative;
  left: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
i img {
  align-items: flex-start;
  top: 0;
  right: 4%;
  height: 1.6rem;
}
@media screen and (width > 768px) {
  .content_text {
    background-color: aqua!important;
    margin-top: -30px;
    margin-left: 15%;
    height: 0;
  }
  .content_text h3 {
    margin: 0;
    font-size: 1.2vw;
    font-weight: 400;
  }
  .content_text p {
    width: 100%;
    height: 5%;
    font-weight: 300;
    font-size: 0.9vw;


  }
  i{
    height: 50%;
  }
  i img {
    align-items: flex-start;
    top: -100%;
    right: 44%;
    height: 2rem;

  }
}
</style>
