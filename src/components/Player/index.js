import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./player.css";
import { connect } from "react-redux";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <AudioPlayer src={this.props.activeEpisodeUrl} autoplay />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeEpisodeUrl: state.player.activeEpisodeUrl,
    isPlaying: state.player.isPlaying
  };
};

export default connect(mapStateToProps)(Player);
