<script setup lang="ts">
import GabyAboutImage from '@/assets/img/holz_1500x800.jpg'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyAboutImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h2>Über mich</h2>
      <ul>
        <li>Geboren 1958 in Bonn</li>
        <li>Aufgewachsen in Nordrhein-Westfalen</li>
        <li>Ausbildung als Assistentin an Bibliotheken</li>
        <li>Übersiedlung in die Schweiz 1986</li>
        <li>Ausbildung als Schauspielerin und Sprecherin</li>
        <li>Engagements im Freien Theater, Film, Fernsehen und Tonstudios</li>
        <li>Geburt der Tochter Lilo Vera</li>
        <li>Co-Leitung der FREIEN TRUPPE BERN</li>
        <li>Unterrichts- und Coaching-Tätigkeit für die Bereiche Schauspiel, Präsentation und Sprechtechnik an diversen Institutionen und im eigenen Atelier</li>
        <li>Leitung Bereich Schauspiel für Kinder, Jugendliche und Erwachsene</li>
        <li>Realisation und Beteiligung an diversen sprachlich-musikalischen</li>
        <li>Projekten</li>
        <li>Gründung des musik-kabarettistischen Duos «Rabe & Garatti»</li>
        <li>Solo-Auftritte als Musikantin und Performerin</li>
        <li>Ausbildung und Weiterbildung zur Pranic Healing Praktikerin</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
