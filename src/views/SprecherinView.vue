<script setup lang="ts">
import GabyHomeImage from '@/assets/img/gaby_home.jpg'

import EmbedYoutubeVideo from '@/components/EmbedYoutubeVideo.vue'
import Audio from '@/components/Audio.vue'

import HistoryErklaervideoAudioFile from '@/assets/audio/History_Erklaervideo.mp3'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyHomeImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h1>Sprecherin</h1>

      <p>Audio demos:</p>
      <Audio v-bind:filepath="HistoryErklaervideoAudioFile" mediatype="audio/mpeg" />

      <p>Imagevideo <a href="https://www.youtube.com/watch?v=FREg70BgTKY" ><q>Le pont - Arbeit in Würde</q></a></p>
      
      <p>Some other content below video</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
