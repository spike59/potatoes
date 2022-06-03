import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: "https://api.edamam.com/api/recipes/v2",
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            type: "public",
            q: plan,
            app_id: "4f5f573b",
            app_key: "d05f1002eeb288077cd030a2c28da683",
            from: 0,
            to: 9,
          },
        });
        commit("setRecipes", response.data.hits);
      } catch (error) {
        commit("setRecipes", []);
      }
    },
  },
  modules: {},
});
