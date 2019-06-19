import React from "react";

import "./Card.css";

const Card = props => {
  return (
    <div
      className="podcast-result"
      onClick={() => props.handleSelectedPodcast(props.podcast)}
      title={props.podcast.name}
    >
      <div className="podcast-details">
        <div className="podcast-image">
          <img
            alt={props.podcast.collectionName}
            src={props.podcast.artworkUrl600}
          />
        </div>
        <div className="podcast-meta">
          <div className="podcast-title" title={props.podcast.collectionName}>
            {props.podcast.collectionName}
          </div>
          <div className="podcast-author">{props.podcast.artistName}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
