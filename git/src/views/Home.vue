<template>
<div class="container">
<anchor></anchor>
<head-container/>
<navigation-1 text='Основы'/>
<navigation-text text='Правильно организованное питание'/>
<food/>
<navigation-2 text='Нормативы'/>
<navigation-text text='Нормативы правильного питания'/>
<flex-container></flex-container>
<navigation-3 text='Вопросы'/>
<navigation-text text='Все что вы хотели знать о правильном питании'/>
<content5/> <content5/> <content5/> <content5/> <content5/>
<footer-1/>
</div>
</template>
<script>
import Anchor from '@/components/Anchor'
import HeadContainer from '@/components/HeadContainer'
import Navigation1 from '@/components/Navigation1.vue'
import NavigationText from '@/components/NavigationText.vue'
import Food from '@/components/Food.vue'
import FlexContainer from '@/components/FlexContainer.vue'
import Content5 from '@/components/Content5.vue'
import Navigation2 from '@/components/Navigation2.vue'
import Navigation3 from '@/components/Navigation3.vue'
import Footer1 from '@/components/Footer1.vue'
export default {
  components: {
    Anchor,
    HeadContainer,
    Navigation1,
    Navigation2,
    Navigation3,
    NavigationText,
    Food,
    FlexContainer,
    Content5,
    Footer1    
  }
}

</script>
<style scoped>

</style>

