<template>
<div id="btn3" class="navigation1">{{text}}</div>
</template>
<script>
export default ({ 
    props: ['text'] 
})
</script>
<style scoped>
.navigation1{
  margin-top: 5.56vw;
  color:#FF5F33;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 1.46vw;
  line-height: 120%;
}
@media (max-width:640px){
.navigation1{
  
  font-size: 16px;
  line-height: 140%;
}
}
</style>