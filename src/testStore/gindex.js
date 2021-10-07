// import Vue from "vue";
// import Vuex from "vuex";
import { createStore } from "vuex";
import auth from "../store/auth.js";

//Vue.use(Vuex);

//export default new Vuex.Store({
export const store = createStore({
  modules: {
    auth,
  },
});
