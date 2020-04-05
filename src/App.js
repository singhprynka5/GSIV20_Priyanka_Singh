import React, { Component } from "react";
import MoviesContainer from "./container/MoviesContainer";
import DetailContainer from "./container/DetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={MoviesContainer} exact={true} />
          <Route path="/details" component={DetailContainer} />
        </Switch>
      </Router>
    );
  }
}
