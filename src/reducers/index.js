import podcastListReducer from "./podcastListReducer";
import podcastMetaReducer from "./podcastMetaReducer";
import { combineReducers } from "redux";

export default combineReducers({
  podcastList: podcastListReducer,
  podcastMeta: podcastMetaReducer
});
