<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  filepath: string,
  mediatype: string
}>();

const filepath = ref();
const mediatype = ref();

onMounted(() => {
  filepath.value = props.filepath
  mediatype.value = props.mediatype
})
</script>

<template>
  <div class="audio-wrapper">
    <audio controls v-if="filepath">
      <source v-bind:src="filepath" v-bind:type="mediatype" />
    </audio>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss';

.audio-wrapper {
  width: 60%;
}

.audio-wrapper audio {
  width: 100%;
  height: 100%;
}

@media (max-width: variables.$mobile-width) {
  .audio-wrapper {
    width: 100%;
  }
}

</style>

