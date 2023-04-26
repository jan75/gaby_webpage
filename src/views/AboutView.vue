<script setup lang="ts">
import GabyAboutImage from '@/assets/img/gaby_about_me.jpg'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyAboutImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h1>Über mich</h1>
      <ul>
        <li>Geboren 1958 in Bonn</li>
        <li>Aufgewachsen in Westfalen</li>
        <li>Ausbildung zur Assistentin an Bibliotheken</li>
        <li>Übersiedlung in die Schweiz 1986</li>
        <li>Ausbildung zur Schauspielerin und Sprecherin</li>
        <li>Engagements im Freien Theater, Film, Fernsehen und Tonstudios</li>
        <li>Co-Leitung der FREIEN TRUPPE BERN</li>
        <li>Unterrichts- und Coaching-Tätigkeit für die Bereiche, Schauspiel, Präsentation und Sprechtechnik an diversen Institutionen und im eigenen Atelier</li>
        <li>Leitung Bereich Schauspiel für Kinder, Jugendliche und Erwachsene</li>
        <li>Realisation und Beteiligung an diversen sprachlich-musikalischen</li>
        <li>Projekten</li>
        <li>Gründung des musik-kabarettistischen Duos «Rabe & Garatti»</li>
        <li>Solo-Auftritte als sprechende Musikantin und Performerin</li>
        <li>Ausbildung und Weiterbildung zur Pranic Healing Praktikerin</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
