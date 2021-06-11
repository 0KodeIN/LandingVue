<template>
<div class="head_container">
   <div class="head_text">
         <h1 class="text_container">
            <b>О вкусной <br> и здоровой еде</b>
         </h1>
         <p class="text_container2">
               Питание является одним из основных условий существования человека,
               а проблема питания — одной из основных проблем человеческой культуры.
         </p>      
      </div>
    <img src="@/assets/img/salat.png" class="salat_img">    
</div>
</template>
<script>
export default ({    
})
</script>
<style scoped>
.head_container{
  display: flex;
  justify-content:space-between;
  width: 100%;
  margin-top: 5.49vw;
  max-width: 1600px;
}
.salat_img{
 width: 50%;
}
.head_text{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color:none;
  width: 50%;
}
.text_container{
  width: 28vw;   
  font-size: 3.95vw;
  padding-left: 5.12vw;
  margin-top: 7.1vw;
}
.text_container2{
  width: 28.9vw;   
  font-size: 1.17vw;
  padding-left: 5.12vw;
  padding-top: 2.34vw;
 
}
@media (max-width:640px){
 .salat_img{
  display: none;
 }
 .head-text{
  display: none;
 }
 .text_container2{
  
  font-size: 16px;
  width: 39vw;
 }
.text_container{
  
  font-size: 24px;
  width: 39vw;
 }
}
</style>