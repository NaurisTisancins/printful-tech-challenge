<!-- ImageDisplay.vue -->

<template>
  <div class="canvas-overlay">
    <img :src="url" :width="width" :height="height" alt="Image Alt Text" />
    <CanvasComponent />
  </div>
</template>

<script>
import CanvasComponent from './CanvasComponent.vue';

export default {
  props: {
    url: String,
    width: Number,
    height: Number,
  },
  components: {
    CanvasComponent,
  },
};
</script>

<style scoped>
.canvas-overlay {
  position: relative;
}
</style>
