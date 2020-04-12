import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./App.css";

class Backuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAdd: "",
      errorAdd: false,
      helperTextAdd: "",
      inputRemove: "",
      errorRemove: false,
      helpTextRemove: "",
      currentOrders: [],
      helperTextAdd: "",
    };
  }

  handleAddChange(e) {
    this.setState({ inputAdd: e.target.value });
  }

  handleRemoveChange(e) {
    this.setState({ inputRemove: e.target.value });
  }

  handleClickAdd() {
    if (!this.state.currentOrders.includes(this.state.inputAdd)) {
      this.setState({
        currentOrders: this.state.currentOrders.concat(this.state.inputAdd),
      });
      this.setState({ inputAdd: "" });
      this.setState({ errorAdd: false });
    } else {
      this.setState({ errorAdd: true });
      this.setState({ helperTextAdd: "Order already exists" });
    }
  }

  handleClickRemove() {
    let index = this.state.currentOrders.indexOf(this.state.inputRemove);
    if (index > -1) {
      this.state.currentOrders.splice(index, 1);
      this.setState({ inputRemove: "" });
      this.setState({ errorRemove: false });
    } else {
      this.setState({ errorRemove: true });
      this.setState({ helperTextRemove: "Order does not exist" });
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Orders Ready</h1>
        <form className="order-form" noValidate autoComplete="off">
          <div className="order-input">
            <TextField
              id="test"
              Name="addTextField"
              label="Order ID"
              error={this.state.errorAdd}
              helperText={this.state.helperTextAdd}
              value={this.state.inputAdd}
              onChange={this.handleAddChange.bind(this)}
            />
            <Button
              className="btn"
              variant="contained"
              onClick={this.handleClickAdd.bind(this)}
            >
              Add Order
            </Button>
          </div>
          <div className="order-input">
            <TextField
              id="test"
              label="Order ID"
              error={this.state.errorRemove}
              helperText={this.state.helperTextRemove}
              value={this.state.inputRemove}
              onChange={this.handleRemoveChange.bind(this)}
            />
            <Button
              className="btn"
              variant="contained"
              onClick={this.handleClickRemove.bind(this)}
            >
              Remove Order
            </Button>
          </div>
        </form>

        <Grid className="order-list" container spacing={3}>
          {this.state.currentOrders.map((order) => (
            <Grid item xs={3}>
              <Paper className="order-container">{order}</Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Backuser;
