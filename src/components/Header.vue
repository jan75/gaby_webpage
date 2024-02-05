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
          <RouterLink to="/">Aktuelles</RouterLink>
          <RouterLink to="/ausdruck">Ausdruck</RouterLink>
          <RouterLink to="/about">Über mich</RouterLink>
          <RouterLink to="/kontakt">Kontakt</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss';

.header {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-left: variables.$text-margin-left;
  margin-right: variables.$text-margin-right;
}

.header nav {
  text-align: right;
  padding-top: 30px;
}

.header nav a {
  margin-right: 0.8em;
  font-size: 14pt;
  color: #464646;
  text-decoration: none;
}

@media (max-width: variables.$mobile-width) {
  .header {
    grid-template-columns: 20% 80%;
  }

  .header nav {
    display: grid;
    row-gap: 0.3em;
    padding-top: 0px;
  }
}

@media (max-width: variables.$supersmall-width) {
  .header {
    grid-template-columns: 100%;
  }

  .header nav {
    text-align: left;
    padding-top: 0px;
  }

  .header .icon {
    display: none;
  }

}
</style>
