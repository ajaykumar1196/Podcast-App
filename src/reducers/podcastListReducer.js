const initialState = {
  items: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PODCASTS_SUCCESS":
      return { ...state, items: action.payload, isLoading: false };
    case "FETCH_PODCASTS_FAILURE":
      return { ...state, isLoading: false };
    case "FETCH_PODCASTS_REQUEST":
      return { ...state, items: [], isLoading: true };
    default:
      return state;
  }
};
