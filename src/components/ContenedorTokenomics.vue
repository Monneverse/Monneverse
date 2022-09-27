<script>

</script>

<template>

    <div class="primerTitulo">
    <h2>Purchase Tax</h2>
  </div>

  <div class="fondo_Izquierdo">
    <div class="primerTexto"><h2>To buy 9% slip</h2></div>
    <div class="segundoTexto"><h2>Automatic LP 3% of order fees go back into liquidity </h2></div>
    <div class="tercerTexto"><h2>Bank Security 3% of order fees are stores in BANK SECURITY for price protection</h2></div>
    <div class="cuartoTexto"><h2>Management 1.5% of order fees go to the treasury</h2></div>
    <div class="quintoTexto"><h2>Monner Burns 1.5% is burned for stability and price increase</h2></div>
  </div>

</template>

<style scoped>
    .fondo_Izquierdo {
  position: absolute;
  top: 30%;
  left:20%;
  width: 25%;
  height: 45%;
  display: block;
  justify-content: right;
  align-items: center;
  z-index: 3;
}

.primerTexto{
  position: relative;
  width: 100%;
  height: 15%;
  text-align: right;
}

.segundoTexto{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: right;
}
.tercerTexto{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: right;
  
}

.cuartoTexto{
  position: relative;
  width: 100%;
  float: right;
  height: 20%;
  text-align: right;
  margin-top: 5%;
}

.quintoTexto{
  position: relative;
  width: 100%;
  float: right;
  height: 19%;
  text-align: right;
}

.primerTitulo h2{
  font-size: 250%;
  right: 5%;
}

.primerTitulo{
  position: absolute;
  top: 20%;
  left: 25%;
  background: linear-gradient(to left, #01AA50 0%, #0A684E 50%, #10354C 100%);
  width: 20%;
  height: 5%;
  border: 1px solid yellowgreen;
  z-index: 4;
  text-align: right;
  border-radius: 5rem;
}
</style>