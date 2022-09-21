<script>
  
  export default{



data(){
  return{
    valores: [
      {icono:'/img/Alianzas/telegram.png',symbol: '$', precio:'1,5', moneda:'USD', sale_price:'Pre-sale Price', texto:''},
      {icono:'/img/Alianzas/telegram.png',symbol: '$', precio:'22,5', moneda:'USD', sale_price:'Sale Price',texto:'The price on Pancakeswap for purchases and sales will be $22,6 one day after the pre-sale of our first 2,000,000 Monners to the public ends'},
      {icono:'/img/Alianzas/telegram.png',symbol: '',  precio:'12%*48h', moneda:'', sale_price:'Sale Price', texto:'Enter our first phase os staking buying in pre-sale and earn 12.6% every 48 hours of your total capital in Monnercoins after the launch in Pancakeswap'},
    ],
   
  }
}
};
</script>


<template>
      <div v-for="valor in valores" class="benefit" >
        <div class="content_price">
        <i><img class="icon-discord " :src= valor.icono alt=""></i>    
        <h1 class="dolar">{{valor.symbol}}</h1>
        <h1>{{valor.precio}}</h1> 
        <span>{{valor.moneda}}</span>
        </div>
        <div class="content_text">
        <h3>{{valor.sale_price}}</h3>
        <p v-show="valor.texto">
          {{valor.texto}}
        </p>
       </div>
      </div>
</template>



<style scoped >
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;700&display=swap');

.benefit{

  width: 50%;
  height: 15%;
  
  margin-bottom: 8%;
 
  color: white;
  display: flex;
  flex-direction: column;
  
  font-family: 'Work Sans', sans-serif;
}
.benefit:last-child{
  margin: 0;
  width: 70%;
  
}
.benefit:last-child p{
  margin: 0;
  width: 70%;
}
.benefit h1{
 
 font-weight: 500;
 font-size: 5rem;

}
.dolar{
  color: rgb(55, 243, 149);
}
.benefit span{
 display: flex;
 font-size: 1rem;
  
}
.content_price{
width: 70%;
background-color: #161431;
border-radius: .5rem;
display: flex;
justify-content: center;
align-items: flex-end;
height: 100%;
}
.content_text{
  padding-left: 5%;
  width: 100%;
}
.content_text h3{
  font-weight: 300;
}
.content_text p{
  font-weight: 100;
  font-size: 0.8rem;
  text-align: justify;
  
}
i{
  height: 100%;
  display: flex;
  
  justify-content: center;
  align-items: flex-start;
}
i img{
  position: relative;
  align-items: flex-start;
  top: 0;
  right: 4%;
  height: 40%;
}




</style>