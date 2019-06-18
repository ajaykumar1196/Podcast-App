import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import "./App.css";
import Genre from "../Genre";
import Podcast from "../Podcast";
import Error404 from "../Error404";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/genre/:genreId" component={Genre} />
            <Route exact path="/podcast/:podcastId" component={Podcast} />
            <Route component={Error404} />
          </Switch>
          {/* <Player /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
