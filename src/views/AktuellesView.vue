<script setup lang="ts">
import GabyAktuellesImage from '@/assets/img/weg_1500x800.jpg'

import EmbedYoutubeVideo from '@/components/EmbedYoutubeVideo.vue'
import Audio from '@/components/Audio.vue'

import HistoryErklaervideoAudioFile from '@/assets/audio/History_Erklaervideo.mp3'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyAktuellesImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h1>Aktuelles</h1>
      <p>Informationen über meine Auftritte und sonstige aktuelle Tätigkeiten.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
