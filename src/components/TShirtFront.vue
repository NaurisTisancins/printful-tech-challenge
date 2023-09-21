<template>
  <div>
    <IMGComponent :url="this.path" :width="width" :height="height" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IMGComponent from './IMGComponent.vue';

export default {
  components: { IMGComponent },
  data() {
    return {
      path: '../../public/t-shirt-front.jpg',
      width: 400,
      height: 400,
    };
  },
  props: {},
  computed: {
    ...mapState(['positionView']),
  },
  watch: {
    positionView(oldState, newState) {
      if (oldState !== newState) {
        this.switchView();
      }
    },
  },
  methods: {
    switchView() {
      switch (this.positionView) {
        case 'front':
          this.path = '../../public/t-shirt-front.jpg';
          console.log('front');
          break;
        case 'back':
          this.path = '../../public/t-shirt-back.jpg';
          console.log('back');
          break;
        case 'side':
          this.path = '../../public/t-shirt-side.jpg';
          console.log('side');
          break;
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
