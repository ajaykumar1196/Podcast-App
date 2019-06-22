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

export const fetchPodcastMeta = podcastId => async dispatch => {
  dispatch({ type: "FETCH_PODCAST_META_REQUEST" });
  return await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}&entity=podcast`
  )
    .then(res => res.json())
    .then(result => {
      console.log(result);
      dispatch({
        type: "FETCH_PODCAST_ITUNES_META",
        payload: result.results[0]
      });
      if (result.resultCount === 0) {
        return "OPss..!!";
      }
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.rss2json.com/v1/api.json?rss_url=${
          result.results[0].feedUrl
        }&api_key=ghxffd9quapfne8cgmrnkjslptjzs96ozuzgti0s`
      )
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: "FETCH_PODCAST_META_SUCCESS",
            payload: result
          });
        });
    });
};

export const setActiveEpisodeUrl = url => {
  return {
    type: "SET_ACTIVE_EPISODE",
    payload: url
  };
};

export const setIsPlaying = isPlaying => {
  return {
    type: "SET_IS_PLAYING",
    payload: isPlaying
  };
};
