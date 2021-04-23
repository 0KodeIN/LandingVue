<template>
<div class="container">
<div><anchor></anchor></div>
<div><head-container/></div>
<div><navigation-1 text='Основы'/></div>
<div><navigation-2 text='Правильно организованное питание'/></div>
<div><navigation-1 text='Нормативы'/></div>
<div><navigation-2 text='Нормативы правильного питания'/></div>
</div>
</template>

<script>
import Anchor from '@/components/Anchor'
import HeadContainer from '@/components/HeadContainer'
import Navigation1 from '@/components/Navigation1.vue'
import Navigation2 from '@/components/Navigation2.vue'

export default {
  components: {
    Anchor,
    HeadContainer,
    Navigation1,
    Navigation2,   
  }
}
</script>
<style scoped>

</style>

