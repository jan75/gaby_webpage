<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  videoId: string,
  title: string,
  maxWidth?: string
  maxHeight?: string
}>();

const url = ref();
const title = ref();
const width = ref();
const height = ref();

onMounted(() => {
  url.value = "https://www.youtube-nocookie.com/embed/" + props.videoId;
  title.value = props.title;

  if (props.maxWidth) {
    width.value = props.maxWidth;
  } else {
    width.value = '100%';
  }

  if (props.maxHeight) {
    height.value = props.maxHeight;
  } else {
    height.value = '100%';
  }
})

//const url2 = "https://www.youtube-nocookie.com/embed/FREg70BgTKY";
</script>

<template>
  <div class="embed-youtube-video-wrapper">
    <iframe v-bind:src="url" v-bind:title="title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss';

.embed-youtube-video-wrapper {
  background-color: lightgrey;
  width: 70%;
}
.embed-youtube-video-wrapper iframe {
  width: 100%;
  aspect-ratio: 16/9;
}

@media (max-width: variables.$mobile-width) {
  .embed-youtube-video-wrapper {
    width: 100%;
  }
}

</style>

