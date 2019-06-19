import podcastListReducer from "./podcastListReducer";
import { combineReducers } from "redux";

export default combineReducers({
  podcastList: podcastListReducer
});
