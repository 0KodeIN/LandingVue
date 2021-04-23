<template>
<div class="navigation2">{{text}}</div>
</template>
<script>
export default ({ 
    props: ['text']  
})
</script>
<style scoped>
.navigation2{    
  margin-top: 0.58vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 2.928vw;
  line-height: 120%;
  padding-bottom: 2.928vw;
  font-family: 'PT-Root-UI_Medium';
  font-weight: 700;
  width: 33vw;
}
</style>