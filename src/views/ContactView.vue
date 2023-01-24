<script setup lang="ts">
import GabyContactImage from '@/assets/img/gaby_contact.jpg'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyContactImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <h1>Kontakt</h1>
      <p><strong>
        Gaby Rabe<br>
        Säriswilstrasse 5<br>
        CH-3043 Uettligen
      </strong></p>
      <p>
        Tel. +41(0)31 829 37 66<br>
        rabe@schauspielunterricht-bern.ch
      </p>
      <p>Öffentliche Verkehrsmittel:</p>
      <p class="indent">
        Ab BH Bern mit dem Postbus Linie 102, Perron 4, Fahrzeit15 Min.
      </p>

      <p>Auto:</p>
      <p class="indent">
        Bern-Neufeld, Richtung Aarberg, Thalmatt, Uettligen, Fahrzeit 10 Min.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/view.scss';
</style>
