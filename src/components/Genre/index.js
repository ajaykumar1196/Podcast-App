import React from "react";
import GenreList from "../GenreList";
import { GENRES } from "../../constants/genres";
class Genre extends React.Component {
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
    console.log(GENRES[this.props.match.params.genreId].subGenre);
    return (
      <section className="genres">
        <div className="wrapper">
          <div className="section-title">
            <h1>{GENRES[this.props.match.params.genreId].name}</h1>
          </div>

          {this.renderSubGenreList(this.props.match.params.genreId)}
          <h3 className="element-title">Top Podcasts</h3>
        </div>
      </section>
    );
  }
}

export default Genre;
