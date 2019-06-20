const initialState = {
  meta: {},
  podcastItunesMeta: {},
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PODCAST_META_SUCCESS":
      return { ...state, meta: action.payload, isLoading: false };
    case "FETCH_PODCAST_META_FAILURE":
      return { ...state, isLoading: false };
    case "FETCH_PODCAST_META_REQUEST":
      return { ...state, meta: {}, isLoading: true };
    case "FETCH_PODCAST_ITUNES_META":
      return { ...state, podcastItunesMeta: action.payload };
    default:
      return state;
  }
};
