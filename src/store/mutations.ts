import { MutationTree } from "vuex";
import { State } from "./state";

export type Mutations = MutationTree<State>;

export const mutations: Mutations = {
  SET_VUE_SERVER_READY(state, vueServerReady) {
    state.vueServerReady = vueServerReady;
  },
};
