<script setup lang="ts">

</script>

<template>
  <div class="footer component-grid">
    <div class="text">
      <p>Footer</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss';
@use '@/assets/scss/colours.scss';

div.text {
  grid-column-start: 2;
  grid-column-end: 3;
  border-top: 1px solid grey;
}

div.text p {
  margin-left: variables.$text-margin-left;
  margin-right: variables.$text-margin-right;
}
</style>
