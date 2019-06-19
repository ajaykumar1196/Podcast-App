const initialState = {
  items: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PODCASTS_SUCCESS":
      console.log(action.payload);
      return { ...state, items: action.payload, isLoading: false };
    case "FETCH_PODCASTS_FAILURE":
      console.log(action.payload);
      return { ...state, isLoading: false };
    case "FETCH_PODCASTS_REQUEST":
      console.log(action.payload);
      return { ...state, items: [], isLoading: true };
    default:
      return state;
  }
};
