import React from "react";
import "./home.css";
import GenreList from "../GenreList";
import { DEFAULT_GENRES } from "../../constants/genres";
class Home extends React.Component {
  render() {
    return (
      <section className="home ">
        <div className="wrapper">
          <div className="section-title">
            <h1>Browse</h1>
          </div>
          <div className="element-title">
            <h3>Genres</h3>
          </div>

          <GenreList genresList={DEFAULT_GENRES} />
          <h3 className="element-title">Top Podcasts</h3>
        </div>
      </section>
    );
  }
}

export default Home;
