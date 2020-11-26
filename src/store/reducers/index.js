import { combineReducers } from "redux";

import auth from "./auth/index";
import contractAddress from "./contractAddress/index";
import user from "./user/index";

const rootReducer = combineReducers({
  auth,
  contractAddress,
  user
});

export default rootReducer;
