<script setup lang="ts">
import Audio from '@/components/Audio.vue'

import GabyAusdruckImage from '@/assets/img/tuer_1500x800.jpg'
import HistoryErklaervideoAudioFile from '@/assets/audio/History_Erklaervideo.mp3'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyAusdruckImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">        
      <nav>
        <ul>
          <li><a href="#sprecherin">Sprecherin</a></li>
          <li><a href="#schauspielerin">Schauspielerin</a></li>
          <li><a href="#musikantin">Musikantin</a></li>
        </ul>
      </nav>

      <h2>Sprecherin</h2>
      <a name="sprecherin"></a>
      <p>St. Moritz Spot:</p>
      <Audio v-bind:filepath="HistoryErklaervideoAudioFile" title="St. Moritz Spot" mediatype="audio/mpeg" />

      <h2>Schauspielerin</h2>
      <a name="schauspielerin"></a>
      <p>Imagevideo <a href="https://www.youtube.com/watch?v=FREg70BgTKY">Le pont - Arbeit in Würde</a></p>

      <h2>Musikantin</h2>
      <p>Tätigkeiten als Musikantin, z.B. Rabe & Garatti:</p>
      <Audio v-bind:filepath="HistoryErklaervideoAudioFile" title="Rabe & Garatti" mediatype="audio/mpeg" />

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
@use '@/assets/scss/variables.scss';

.grid-kuenstlerin {
  display: grid;
  grid-template-columns: 20% 80%;

}

@media (max-width: variables.$mobile-width) {
  .grid-kuenstlerin {
    display: grid;
    grid-template-columns: 100%;
  }
}
</style>
