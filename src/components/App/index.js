import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";
import "./App.css";
import Genre from "../Genre";
import Genres from "../Card";
import Podcast from "../Podcast";
import Error404 from "../Error404";
import Header from "../Header";
import Player from "../Player";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/genres" component={Genres} />
            <Route
              exact
              path="/genre/:genreId"
              component={props => <Genre {...props} />}
            />
            <Route exact path="/podcast/:podcastId" component={Podcast} />
            <Route component={Error404} />
          </Switch>
          <Player />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
