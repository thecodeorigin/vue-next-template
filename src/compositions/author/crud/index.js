import lifecycle from "./lifecycle";
import crud from "./crud";
import state from "./state";

export default {
  ...lifecycle,
  ...crud,
  ...state
};
