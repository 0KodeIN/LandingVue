<template>
<div class="flex_container">
  <img src="@/assets/img/backpack.png" class="backpack">          
  <div class="inform">
    <img src="@/assets/img/inf.png" class= "inf_img" alt="">
    <img src="@/assets/img/inf.png" class= "inf_img" alt="">
    <img src="@/assets/img/inf.png" class= "inf_img" alt="">
    <img src="@/assets/img/inf.png" class= "inf_img" alt="">
  </div>      
</div>
</template>
<script>
export default ({

})
   
</script>
<style scoped>
.flex_container{
  display: flex;
  width: 87vw;
}
.inf_img{
  width: 14.541vw;
  height: 15.541vw;
}
.inf_img:nth-child(1){
  margin-bottom: 0.833vw;
}
.inf_img:nth-child(2){
  margin-left: 0.833vw;
  margin-bottom: 0.833vw;
}
.inf_img:nth-child(3){
 margin-bottom: 3vw;
}
.inf_img:nth-child(4){
  margin-left: 0.833vw;
  padding-bottom: 0px;
}
.backpack{
  width: 35vw;
  height: 35vw;
}
.inform{ 
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  margin-left: 6.69vw;
}
@media (max-width:640px){
  .backpack{
    display: none;
  }
  .inform{ 
  width: 93vw;
  margin-left: 6.69vw;
  }
  .inf_img{
  width: 31vw;
  height: 31vw;
  }
  
}
</style>