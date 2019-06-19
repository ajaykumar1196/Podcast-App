import React from "react";
import { Link } from "react-router-dom";
import "./GenreList.css";
import { GENRES } from "../../constants/genres";
const GenreList = props => {
  const renderList = props.genresList.map(genre => {
    return (
      <Link key={genre} className="genres__item" to={`/genre/${genre}`}>
        <span> {GENRES[genre].name}</span>
      </Link>
    );
  });

  return (
    <div className="genres-container">
      <div className="genres__items">{renderList}</div>
    </div>
  );
};

export default GenreList;
