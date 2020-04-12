import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Readfile from "./readfile";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputAdd: "", inputRemove: "", currentOrders: [] };
  }

  handleAddChange(e) {
    this.setState({ inputAdd: e.target.value });
  }

  handleRemoveChange(e) {
    this.setState({ inputRemove: e.target.value });
  }

  handleClickAdd() {
    this.setState({
      currentOrders: this.state.currentOrders.concat(this.state.inputAdd),
    });
    console.log(this.state.currentOrders);
  }

  handleClickRemove() {
    let index = this.state.currentOrders.indexOf(this.state.inputRemove);
    if (index > -1) {
      this.state.currentOrders.splice(index, 1);
    }
    console.log(this.state.currentOrders);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1>Orders Ready</h1>
        <input type="text" onChange={this.handleAddChange.bind(this)} />
        <input
          type="button"
          value="Add Order"
          onClick={this.handleClickAdd.bind(this)}
        />
        <input type="text" onChange={this.handleRemoveChange.bind(this)} />
        <input
          type="button"
          value="Remove Order"
          onClick={this.handleClickRemove.bind(this)}
        />
        <Grid container spacing={3}>
          {this.state.currentOrders.map((order) => (
            <Grid item xs={6}>
              <Paper>{order}</Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
