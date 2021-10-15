import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    errorMessages: [],
  },
  getters: {
    getErrorMessages(state) {
      return state.errorMessages;
    },
  },
  mutations: {
    addErrorMessageKey(state, payload) {
      state.errorMessages.push(payload.key);
    },
    removeErrorMessageKey(state, payload) {
      const keyIndex = state.errorMessages.indexOf(payload.key);
      state.errorMessages.splice(keyIndex, 1);
    },
  },
});
