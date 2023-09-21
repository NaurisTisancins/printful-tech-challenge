<script>
import TShirtFront from './components/TShirtFront.vue';
import InputComponent from './components/InputComponent.vue';
import PositionSelector from './components/PositionSelector.vue';

export default {
  components: {
    TShirtFront,
    InputComponent,
    PositionSelector,
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <PositionSelector />
      <TShirtFront />
      <InputComponent
        :formTitle="'Figure 1'"
        :shape="this.$store.state.shape1"
      />
      <InputComponent
        :formTitle="'Figure 2'"
        :shape="this.$store.state.shape2"
      />
    </div>
  </header>

  <main></main>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
