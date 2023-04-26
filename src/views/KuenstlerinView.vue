<script setup lang="ts">
import EmbedYoutubeVideo from '@/components/EmbedYoutubeVideo.vue';
import GabyHomeImage from '@/assets/img/gaby_home.jpg'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyHomeImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h1>Künstlerin</h1>
      
      <EmbedYoutubeVideo title="Le pont - Arbeit in Würde" video-id="FREg70BgTKY" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
