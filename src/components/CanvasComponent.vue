<template>
  <div>
    <canvas
      :class="[this.positionView === 'side' ? 'side-canvas' : 'canvas']"
      ref="canvas"
    ></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'shape1',
      'shape2',
      'positionView',
      'canvasWidth',
      'canvasHeight',
      'canvasSideWidth',
      'canvasSideHeight',
    ]),
  },
  watch: {
    shape1(oldState, newState) {
      for (let key in oldState) {
        if (oldState[key] === newState[key]) {
          this.initializeCanvas();
        }
      }
    },
    shape2(oldState, newState) {
      for (let key in oldState) {
        if (oldState[key] === newState[key]) {
          this.initializeCanvas();
        }
      }
    },
    positionView(oldState, newState) {
      if (oldState !== newState) {
        this.initializeCanvas();
      }
    },
  },

  mounted() {
    this.initializeCanvas();
  },
  methods: {
    initializeCanvas() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const isSide = this.positionView === 'side';

      // Set canvas dimensions
      canvas.width = isSide ? this.canvasSideWidth : this.canvasWidth;
      canvas.height = isSide ? this.canvasSideHeight : this.canvasHeight;

      context.fillStyle = this.$store.state.shape1.color;
      context.fillRect(
        isSide ? this.$store.state.shape1.x / 3 : this.$store.state.shape1.x,
        isSide ? this.$store.state.shape1.y / 3 : this.$store.state.shape1.y,
        isSide ? this.$store.state.shape1.w / 3 : this.$store.state.shape1.w,
        isSide ? this.$store.state.shape1.h / 3 : this.$store.state.shape1.h
      );
      context.fillStyle = this.$store.state.shape2.color;
      context.fillRect(
        isSide ? this.$store.state.shape2.x / 3 : this.$store.state.shape2.x,
        isSide ? this.$store.state.shape2.y / 3 : this.$store.state.shape2.y,
        isSide ? this.$store.state.shape2.w / 3 : this.$store.state.shape2.w,
        isSide ? this.$store.state.shape2.h / 3 : this.$store.state.shape2.h
      );
    },
  },
};
</script>

<style scoped>
canvas {
  position: absolute;
}
.canvas {
  top: 65px;
  left: 90px;
}

.side-canvas {
  top: 65px;
  left: 150px;
}
</style>
