<!-- InputComponent.vue -->
<template>
  <form @submit.prevent="submitForm">
    <h4 class="form-title">{{ formTitle }}</h4>
    <div class="input-rows">
      <div class="input-row">
        <label for="x">Top</label>
        <input type="number" id="y" v-model="shapeData.x" /><br />
      </div>

      <div class="input-row">
        <label for="y">Left</label>
        <input type="number" id="y" v-model="shapeData.y" /><br />
      </div>

      <div class="input-row">
        <label for="w">Width</label>
        <input type="number" id="w" v-model="shapeData.w" /><br />
      </div>

      <div class="input-row">
        <label for="h">Height</label>
        <input type="number" id="h" v-model="shapeData.h" /><br />
      </div>

      <div class="input-row">
        <label for="color">Color</label>
        <input type="color" id="color" v-model="shapeData.color" /><br />
      </div>
      <button type="number">Submit</button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      shapeData: {
        x: this.shape.x,
        y: this.shape.y,
        w: this.shape.w,
        h: this.shape.h,
        color: this.shape.color,
      },
    };
  },
  props: {
    formTitle: String,

    shape: Object,
  },
  computed: {
    ...mapState(['shape1', 'shape2', 'positionView']),
  },
  methods: {
    submitForm() {
      this.$store.dispatch(
        this.shape.id === 1 ? 'saveShape1Data' : 'saveShape2Data',
        this.shapeData
      );
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.input-rows {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
}

.input-row {
  display: flex;
  flex-direction: column;
  width: 50px;
}

button {
  height: 24px;
}
</style>
