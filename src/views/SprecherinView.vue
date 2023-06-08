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
      <Audio v-bind:filepath="HistoryErklaervideoAudioFile" title="Erklärvideo Geschichte" mediatype="audio/mpeg" />
      
      <p>Some other content below video</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
