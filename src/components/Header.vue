<script setup lang="ts">
import Rabe from '../components/Rabe.vue'
</script>

<template>
  <div class="component-grid">
    <div class="header">
      <div class="icon">
        <RouterLink to="/">
          <Rabe />
        </RouterLink>
      </div>
      <nav>
          <RouterLink to="/">Sprecherin</RouterLink>
          <RouterLink to="/about">About me</RouterLink>
          <RouterLink to="/contact">Kontakt</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">

.header {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, auto);
}

.header nav {
  margin-right: 1em;
  text-align: right;
}

.header nav a {
  margin-right: 0.5em;
}

@media (max-width: 1000px) {
  .header {
    grid-template-columns: 20% 80%;
  }

  .header nav {
    display: grid;
    row-gap: 0.3em;
  }
}

@media (max-width: 319px) {
  .header {
    grid-template-columns: 100%;
  }

  .header nav {
    text-align: left;
  }

  .header .icon {
    display: none;
  }

}
</style>
