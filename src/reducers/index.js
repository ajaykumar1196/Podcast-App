import podcastListReducer from "./podcastListReducer";
import podcastMetaReducer from "./podcastMetaReducer";
import playerReducer from "./playerReducer";
import { combineReducers } from "redux";

export default combineReducers({
  podcastList: podcastListReducer,
  podcastMeta: podcastMetaReducer,
  player: playerReducer
});
