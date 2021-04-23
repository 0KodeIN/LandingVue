<template>  
  <nav class='header'>
      <div class="header-text">Основы
         <div class="radio">
            <input type="radio" id="btn_1" name="btn"  value="1" checked onclick="scrollMenu('#btn1')">   
            <label for="btn_1"></label>
         </div>
      </div>
      <div class="header-text">Нормативы
         <div class="radio">
            <input type="radio" id="btn_2" name="btn"  value="2" checked onclick="scrollMenu('#btn2')">   
            <label for="btn_2"></label>
         </div>
      </div>
      <div class="header-text">Вопросы
         <div class="radio">
            <input type="radio" id="btn_3" name="btn"  value="3" checked onclick="scrollMenu('#btn3')">   
            <label for="btn_3"></label>
         </div>
       </div>
  </nav>
</template>
<script>
export default ({    
})
</script>

<style scoped>
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
</style>
