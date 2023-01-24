<script setup lang="ts">
import GabyHomeImage from '@/assets/img/gaby_home.jpg'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyHomeImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h1>Die Horchmethode des Alfred A. Tomatis</h1>
      <p><strong>Die Audio-Psycho-Phonologie – APP</strong></p>
      <p>Mit gezielten Übungen wird die Horch-, Klang- u. Aussprache-fähigkeit erfolgreich gestärkt. Dies ist eine ideale Voraussetzung für SchauspielerInnen -SprecherInnen, Sänger-Innen, und Menschen, die ihre sprachliche Ausdrucksfähigkeit fördern und verbessern wollen.</p>
      <p>1. Erkenntnis:</p>
      <p class="indent">Wie man spricht so hört man/frau.</p>      
      <p>2. Erkenntnis:</p>
      <p class="indent">
        Das Gehör ist beeinflussbar durch:<br>
        <ul>
          <li>Die Haltung (Die Körperhaltung beeinflusst Die Psyche und umgekehrt)</li>
          <li>Das Training der Hörmuskulatur</li>
        </ul>
      </p>
      <p>3. Erkenntnis:</p>
      <p class="indent">        
        Das rechte Ohr ist das analytische Ohr<br>
        Das linke Ohr ist das emotionale Ohr
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
