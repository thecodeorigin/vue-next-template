import { ActionTree } from "vuex";
import { State } from "./state";

export type Actions = ActionTree<State, State>;

export const actions: Actions = {
  vueServerInit({ rootState, commit }) {
    if (!rootState.vueServerReady) {
      commit("SET_VUE_SERVER_READY", true);
    }
  },
};
