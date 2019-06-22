const initialState = {
  activeEpisodeUrl: null,
  isPlaying: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_EPISODE":
      return { ...state, activeEpisodeUrl: action.payload };
    case "SET_IS_PLAYING":
      return { ...state, isPlaying: action.payload };
    default:
      return state;
  }
};
