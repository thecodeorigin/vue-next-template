import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = GetterTree<State, State>;

export const getters: Getters = {};
