import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Backuser from "./backuser";
import Frontuser from "./customer";
import NavBar from "./navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Backuser} />
            <Route path="/orders_ready">
              <Frontuser component={Frontuser} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
