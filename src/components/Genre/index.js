import React from "react";
import GenreList from "../GenreList";
import { withRouter } from "react-router-dom";
import { GENRES } from "../../constants/genres";
import { connect } from "react-redux";
import { fetchPodcasts } from "../../actions/index";
import Card from "../Card";
import "./genre.css";
import Loader from "../Loader";

class Genre extends React.Component {
  componentDidMount() {
    this.props.fetchPodcasts(this.props.match.params.genreId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.genreId !== prevProps.match.params.genreId) {
      this.props.fetchPodcasts(this.props.match.params.genreId);
    }
  }

  renderPodcastList = ({ podcastList }) => {
    return (
      <div className="cards">
        {podcastList.map(podcast => {
          return <Card podcast={podcast} key={podcast.collectionId} />;
        })}
      </div>
    );
  };
  renderSubGenreList = genreId => {
    if (GENRES[genreId].subGenre) {
      return (
        <div>
          <div className="element-title">
            <h3>Explore</h3>
          </div>
          <GenreList
            genresList={GENRES[this.props.match.params.genreId].subGenre}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <Loader text={"Loading..."} />
        ) : (
          <section className="genres">
            <div className="wrapper">
              <div className="section-title">
                <h1>{GENRES[this.props.match.params.genreId].name}</h1>
              </div>

              {this.renderSubGenreList(this.props.match.params.genreId)}
              <h3 className="element-title">Top Podcasts</h3>
              {this.renderPodcastList(this.props)}
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    podcastList: state.podcastList.items,
    isLoading: state.podcastList.isLoading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPodcasts }
  )(Genre)
);
