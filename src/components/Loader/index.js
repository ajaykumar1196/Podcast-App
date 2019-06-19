import React from "react";
import "./loader.css";
const Loader = props => {
  return (
    <div className="loader">
      <div>
        <div className="loading" />
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default Loader;
