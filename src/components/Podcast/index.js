import React from "react";
import { connect } from "react-redux";
import { fetchPodcastMeta } from "../../actions/index";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import "./podcast.css";

import { DEFAULT_GENRES, GENRES } from "../../constants/genres";
class Podcast extends React.Component {
  componentDidMount() {
    this.props.fetchPodcastMeta(this.props.match.params.podcastId);
  }
  renderPodcastEpisodes = ({ items }) => {
    const Episodes = items.map(episode => {
      return (
        <div key={episode.guid}>
          <h2 className="episode-title">{episode.title}</h2>
          <div className="episode-description">
            {ReactHtmlParser(episode.description)}
          </div>

          <button
            onClick={() => this.props.onSelectPodcast(episode.enclosure.link)}
          >
            Play
          </button>
        </div>
      );
    });
    return Episodes;
  };

  renderPodcastGenres = genresId => {
    return genresId.map(genreId => {
      return DEFAULT_GENRES.includes(Number.parseInt(genreId)) ? (
        <Link to={`/genre/${genreId}`}>
          <div className="meta__genre">{GENRES[genreId].name}</div>
        </Link>
      ) : (
        ""
      );
    });
  };

  renderPodcastDetails = (podcast, description) => {
    return (
      <div>
        <div className="podcast-info">
          <div className="podcast-info__artwork">
            <img src={podcast.artworkUrl600} alt={podcast.collectionName} />
          </div>
          <div className="podcast-info__meta">
            {podcast.trackExplicitness === "explicit" ? (
              <div className="isExplicit">EXPLICIT</div>
            ) : (
              ""
            )}
            <h1 className="meta__name">{podcast.collectionName}</h1>
            <h3 className="meta__artist">{podcast.artistName}</h3>
            <div className="meta__genres">
              <div className="title--small">Genres</div>
              <div className="meta__genres__container">
                {this.renderPodcastGenres(podcast.genreIds)}
              </div>
            </div>
            <div className="meta__number-of-episodes">
              <div className="title--small">Number of Episodes</div>
              <p>{podcast.trackCount} Episodes</p>
            </div>
          </div>
        </div>
        <div className="meta__number-of-episodes--mobile">
          <div className="title--small">Number of Episodes</div>
          <p>{podcast.trackCount} Episodes</p>
        </div>
        <div className="meta__description">
          <div className="title--small">Description</div>
          <p>{description}</p>
        </div>
        <div className="meta__genres--mobile">
          <div className="title--small">Genres</div>
          <div>{this.renderPodcastGenres(podcast.genreIds)}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.podcastMeta.isLoading ? (
          <Loader text={"Loading..."} />
        ) : (
          <div className="podcast">
            <div className="wrapper">
              {this.renderPodcastDetails(
                this.props.podcastMeta.podcastItunesMeta,
                this.props.podcastMeta.meta.feed.description
              )}
              {this.renderPodcastEpisodes(this.props.podcastMeta.meta)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    podcastMeta: state.podcastMeta
  };
};
export default connect(
  mapStateToProps,
  {
    fetchPodcastMeta
  }
)(Podcast);
