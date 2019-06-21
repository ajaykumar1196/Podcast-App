const initialState = {
  volume: 50,
  activeEpisodeUrl: null,
  isPlaying: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_EPISODE":
      return { ...state, activeEpisodeUrl: action.payload };
    case "SET_IS_PLAYING":
      return { ...state, isPlaying: action.payload };
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
