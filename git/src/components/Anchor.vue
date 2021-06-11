<template>  
  <nav class='header'>
      <a class="header-text" href="#btn1">Основы</a>
      <a class="header-text" href="#btn2">Нормативы</a>
      <a class="header-text" href="#btn3">Вопросы</a>
  </nav> 
</template>
<script>

export default ({   
  
})


</script>

<style scoped>
A:link { text-decoration: none;}
A{ color: black;}
.header{
  display: flex;
  justify-content: space-between;
  background: none;
  margin-top: 2.928vw;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-start;
  width: 26.354vw;
}
.header-text{
  font-weight: bold;
  font-size: 1.2vw;
  line-height: 120%;
  text-align: center; 
}
.radio input[type="radio"] {
  display: none;
}
.radio label{
   display: inline-block;
   cursor: pointer;
   position: relative;
   user-select: none;
   line-height: 18px;
   font-size: 20px;
}
.radio label::before{
   content: "";
   display: inline-block;
   font-size: 20px;
   width: 12px;
   height: 12px;
   border-radius: 50%;
   background:white;
}

.radio input[type="radio"]:checked + label::before{
  background: #FF5F33;
}
@media (max-width:640px){
.header-text{
  
  font-size: 12px;
  
}
.header{
  display: flex;
  justify-content: space-between;
  background: none;
  margin-top: 2.928vw;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-start;
  width: 250px;
}
}
</style>
