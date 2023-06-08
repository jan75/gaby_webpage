<script setup lang="ts">
import Spacer from '@/components/Spacer.vue'
import Audio from '@/components/Audio.vue'

import GabyHomeImage from '@/assets/img/gaby_home.jpg'
import HistoryErklaervideoAudioFile from '@/assets/audio/History_Erklaervideo.mp3'
</script>

<template>
  <div class="component-grid">
    <div class="header-img">
      <img v-bind:src="GabyHomeImage" alt="Banner" title="Banner" />
    </div>
    <div class="text">
      <div class="grid-kuenstlerin">
        
        <nav>
          <ul>
            <li><a href="#musikantin">Musikantin</a></li>
            <li><a href="#schauspielerin">Schauspielerin</a></li>
          </ul>
        </nav>

        <div>
          <h1>Künstlerin</h1>
          <p>Meine Tätigkeiten als Künstlerin in den Bereichen Musik und Schauspiel.</p>
        </div>

        <span></span>

        <div>
          <a name="musikantin"></a>
          <h2>Musikantin</h2>
          <p>Erwähnung von Projekt Rabe & Garatti mit Demo etc. Nur als Beispiel</p>

          <Audio v-bind:filepath="HistoryErklaervideoAudioFile" title="Rabe & Garatti" mediatype="audio/mpeg" />

          <Audio v-bind:filepath="HistoryErklaervideoAudioFile" title="Song: Hermann" mediatype="audio/mpeg" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Fusce id velit ut tortor. Dictumst quisque sagittis purus sit. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Eget egestas purus viverra accumsan in nisl. Sit amet venenatis urna cursus eget. Vel fringilla est ullamcorper eget nulla. Ut consequat semper viverra nam libero justo laoreet. Eget arcu dictum varius duis at consectetur lorem donec massa. Sed arcu non odio euismod lacinia. Nunc scelerisque viverra mauris in aliquam sem fringilla. Porttitor leo a diam sollicitudin. Id neque aliquam vestibulum morbi. Nunc scelerisque viverra mauris in aliquam sem fringilla. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Metus dictum at tempor commodo.
            Risus viverra adipiscing at in tellus integer. Elementum pulvinar etiam non quam. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet massa vitae tortor condimentum. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Diam in arcu cursus euismod quis viverra nibh cras. Nunc non blandit massa enim nec dui. Tellus elementum sagittis vitae et leo duis ut diam quam. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Tincidunt eget nullam non nisi est sit amet. Gravida arcu ac tortor dignissim convallis aenean et tortor. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Vitae auctor eu augue ut lectus arcu bibendum at. Sed adipiscing diam donec adipiscing tristique risus nec. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Imperdiet sed euismod nisi porta lorem mollis aliquam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.
            Quisque id diam vel quam elementum pulvinar etiam non quam. Velit aliquet sagittis id consectetur purus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Dignissim sodales ut eu sem. Vel eros donec ac odio tempor orci. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ut tellus elementum sagittis vitae et leo duis ut. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Aliquam faucibus purus in massa tempor nec feugiat. Ipsum a arcu cursus vitae. Nec ullamcorper sit amet risus nullam eget felis eget. Consequat ac felis donec et odio pellentesque. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices neque ornare aenean euismod elementum nisi quis. Eget nullam non nisi est sit amet facilisis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Condimentum vitae sapien pellentesque habitant.
            Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Est placerat in egestas erat imperdiet. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nunc mattis enim ut tellus elementum sagittis. Elit pellentesque habitant morbi tristique senectus et netus et. Commodo viverra maecenas accumsan lacus. Sem et tortor consequat id porta nibh venenatis cras. Quis blandit turpis cursus in hac. Mattis pellentesque id nibh tortor id aliquet lectus proin. Amet luctus venenatis lectus magna fringilla urna porttitor. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Pharetra vel turpis nunc eget lorem dolor sed. Rutrum tellus pellentesque eu tincidunt tortor. Ut pharetra sit amet aliquam id diam maecenas ultricies. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc.
          </p>

          <Spacer />

          <a name="schauspielerin"></a>
          <h2>Schauspielerin</h2>
          <p>Showreel <a href="#"><q>Showreel</q></a></p>
          <p>Imagevideo <a href="https://www.youtube.com/watch?v=FREg70BgTKY" ><q>Le pont - Arbeit in Würde</q></a></p>

        </div>

      </div>
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
