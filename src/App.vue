<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="wrapper main-grid">
    <header>
      <Header />
    </header>

    <content>
      <RouterView />
    </content>
    
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  margin-top: 2em;
}
.main-grid {
  display: grid;
  grid-template-columns: 100%;
  row-gap: 0.7em;
}


</style>
