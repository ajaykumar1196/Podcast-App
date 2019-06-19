export const fetchPodcasts = genreId => async dispatch => {
  dispatch({ type: "FETCH_PODCASTS_REQUEST" });
  return await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=podcast&media=podcast&country=in&genreId=${genreId}&limit=50`
  )
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_PODCASTS_SUCCESS",
        payload: result.results
      });
    });
};
