<template>
<div class="content5">
         <div class="point">Безопасно ли облизывать колотушки миксера?</div> 
             <span class="spoiler" v-on:click="isOpen = !isOpen">
             <i></i> 
             <span class="spoilerContent">
             <div :class="['point_text', {closed: !isOpen}]">
             Один из самых острых вопросов современной пищевой эпохи:
             можно ли <br> облизывать колотушки миксера, если вы взбивали
             сырое тесто для печенья или<br> даже глотать сырые яйца целиком,
             хотя те, кого это интересует, составляют<br> меньшинство.
             Некоторые выступают против того, чтобы облизывать колотушки,
             и <br> тому подобного, а другие считают, что это помогает строить
             иммунную систему, <br> и что риск довольно мал. <br>
             Те, кто против этого, утверждают, что вы рискуете получить
             сальмонеллу и что <br> риск этого довольно велик, особенно когда речь 
             идет о безопасности ваших <br> детей. Тем не менее, большинство людей 
             с сильным иммунитетом легко <br> справятся с сальмонеллой без каких-либо
             осложнений, поэтому противники <br> данного утверждения считают,
             что риск заразиться чрезвычайно низок. Они <br> говорят, что нет никакой 
             веской причины, чтобы не облизывать колотушки. По их <br> мнению,
             есть много других вещей, которые убьют вас с большей вероятностью.
             </div>
          </span>
        </span>
      </div>
</template>

<script>
   export default ({  
     data() {
      return {
        isOpen: false
      }
     },
     methods: {
      spoiler(obj) {
      console.log(obj)
      obj.className == 'spoiler' ?
      obj.className = 'spoiler revealed' :
      obj.className = 'spoiler';
      }
   }   
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
font-family: 'Roboto Condensed', sans-serif;
section 
{
  background:none;
  padding: 2px 4px;   
}
.content5 {
  background: #f3f3f3;
  margin-left:  auto;
  margin-right:  auto;  
  width: 100%;
}
.spoiler 
{ 
  padding-top: 24px;
  position: relative;
  background: #F3F3F3;
  
}
.spoilerContent
{
  padding-top: 10px;
  display: block;   
  background: #E5E5E5;
  margin-bottom: 10px; 
}
.closed
{
  display: none;
}
.spoiler.revealed span 
{
  display: block;
}
.spoiler.revealed i {
  top: -10px;
  transform: rotate(-45deg);
}
.spoiler i {
  cursor: pointer; 
  display: block; 
  position: absolute;
  top: -18px; left: 76vw; width: 8px; height: 8px;
  border-top: 2px solid #f68a46; border-right: 2px solid #f68a46;
  transform: rotate(135deg);
}
.point
{
 margin-left: 20px;
}

.point_text
{
 margin-left: 20px;
 opacity: 60%;
}
@media (max-width:640px){
  .content5 { 
  min-width: 320px;
  
}
}
@media (max-width:448px){
  .spoiler i {
  
  top: -18px; left: 77.2vw; width: 8px; height: 8px;
  
}
  
  

}
</style>