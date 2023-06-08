<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  filepath: string,
  mediatype: string,
  title: string
}>();

const filepath = ref();
const mediatype = ref();
const title = ref();

onMounted(() => {
  filepath.value = props.filepath
  mediatype.value = props.mediatype
  title.value = props.title
})
</script>

<template>
  <div class="audio-wrapper">
    <span class="title">{{ title }}</span>
    <audio controls v-if="filepath">
      <source v-bind:src="filepath" v-bind:type="mediatype" />
    </audio>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss';

.audio-wrapper {
  display: grid;
  grid-template-columns: minmax(max-content, 20%) auto;
  align-items: center;
}

.audio-wrapper audio {
  height: 3em;
}

.audio-wrapper .title {
  vertical-align: middle;
}

@media (max-width: variables.$mobile-width) {
  .audio-wrapper {
    display: grid;
    grid-template-columns: 100%;
  }
}

</style>

