<template>
  <div>
    <button @click="() => setPositionView('front')">Front</button>
    <button @click="() => setPositionView('back')">Back</button>
    <button @click="() => setPositionView('side')">Side</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['positionView']),
  },

  methods: {
    setPositionView(position) {
      this.$store.dispatch('savePositionView', position);
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 4px;
}
</style>
