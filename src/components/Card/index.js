import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = props => {
  return (
    <div className="podcast-result" title={props.podcast.name}>
      <Link to={`/podcast/${props.podcast.collectionId}`}>
        <div className="podcast-details">
          <div className="podcast-image">
            <img
              className="podcast-artwork"
              alt={props.podcast.collectionName}
              src={props.podcast.artworkUrl600}
            />
          </div>
          <div className="podcast-meta">
            <div
              className="podcast-title underline"
              title={props.podcast.collectionName}
            >
              {props.podcast.collectionName}
            </div>
            <div className="podcast-author underline">
              {props.podcast.artistName}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
