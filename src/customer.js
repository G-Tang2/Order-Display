import React, { Component } from "react";
import Backuser from "./backuser";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class customer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Backuser />
      </div>
    );
  }
}

export default customer;
