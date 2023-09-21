import { createStore } from 'vuex';

export default createStore({
  state: {
    positionView: 'front',
    canvasWidth: 210,
    canvasHeight: 300,
    canvasSideWidth: 210 / 3,
    canvasSideHeight: 300 / 3,
    shape1: {
      id: 1,
      x: 50,
      y: 50,
      w: 100,
      h: 100,
      color: 'blue',
    },
    shape2: {
      id: 2,
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      color: 'red',
    },
  },
  mutations: {
    updatePositionView(state, payload) {
      state.positionView = payload;
    },
    updateShape1(state, payload) {
      state.shape1 = {
        ...state.shape1,
        x: payload.x,
        y: payload.y,
        w: payload.w,
        h: payload.h,
        color: payload.color,
      };
    },
    updateShape2(state, payload) {
      state.shape2 = {
        ...state.shape2,
        x: payload.x,
        y: payload.y,
        w: payload.w,
        h: payload.h,
        color: payload.color,
      };
    },
  },
  actions: {
    savePositionView({ commit }, positionViewData) {
      commit('updatePositionView', positionViewData);
    },
    saveShape1Data({ commit }, shapeData) {
      commit('updateShape1', shapeData);
    },
    saveShape2Data({ commit }, shapeData) {
      commit('updateShape2', shapeData);
    },
  },
  getters: {
    getPositionView() {
      return state.positionView;
    },
    getShape1() {
      return state.shape1;
    },
    getShape2() {
      return state.shape2;
    },
  },
});
