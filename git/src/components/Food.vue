<template> 
<div class="true_food">
      <figure class="block">
         <div class="food_img"><img src="@/assets/img/apple.png" alt=""></div>
         <figcaption class="text-vw">
            В числе задач, стоящих перед пищевой
            промышленностью и предприятиями
            общественного питания, имеются, в
            частности, и такие, как увеличение производства
            консервированных фруктов и овощей для максимально
            возможной ликвидации сезонных спадов в их потреблении;
            рост использования бобовых; увеличение потребления населением
            океанской рыбы; постепенное вытеснение водки виноградным вином и пивом;
            расширение производства фруктовых и ягодных соков.
         </figcaption>

      </figure>
      <figure class="block">
         <div class="food_img"><img src="@/assets/img/fish.png" alt=""></div>
         <figcaption class="text-vw">
            В числе задач, стоящих перед пищевой
            промышленностью и предприятиями
            общественного питания, имеются, в
            частности, и такие, как увеличение производства
            консервированных фруктов и овощей для максимально
            возможной ликвидации сезонных спадов в их потреблении;
            рост использования бобовых; увеличение потребления населением
            океанской рыбы; постепенное вытеснение водки виноградным вином и пивом;
            расширение производства фруктовых и ягодных соков.
         </figcaption>

      </figure>
      <figure class="block">
         <div class="food_img"><img src="@/assets/img/cheez.png" alt=""></div>
         <figcaption class="text-vw">
            В числе задач, стоящих перед пищевой
            промышленностью и предприятиями
            общественного питания, имеются, в
            частности, и такие, как увеличение производства
            консервированных фруктов и овощей для максимально
            возможной ликвидации сезонных спадов в их потреблении;
            рост использования бобовых; увеличение потребления населением
            океанской рыбы; постепенное вытеснение водки виноградным вином и пивом;
            расширение производства фруктовых и ягодных соков.
         </figcaption>

      </figure>
   </div>  
</template>

<script>
export default ({    
})
</script>

<style scoped>
.true_food{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  background-color: #F3F3F3;
  border-radius: 20px 0px;
  margin: 0 auto;
  margin-top: 7.306vh;
  padding-bottom: 3.125rem;
  padding-top: 50px;   
  max-width: 1197px;  
}

.header_true_food{    
  margin-top: 1.218vh;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  padding-bottom: 40px;
  font-family: 'PT-Root-UI_Medium';
  font-weight: 700;
}
.food_img{
  width: 250px;
  text-align: center;  
}
.block:nth-child(2) .food_img{
  padding:1.42rem;
}
.block:nth-child(3) .food_img{
  padding:1.42rem;
}
.block{
  margin: 0;  
}
.text-vw{
  max-width: 300px;
  min-width: 100px;
  opacity: 60%;
  margin: 0;
  font-size: 16.8px;
}
</style>
