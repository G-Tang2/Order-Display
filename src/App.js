import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      error: false,
      helperText: "",
      currentOrders: [],
      mouseTimer: null,
      cursorStyle: "default",
      cursorVisible: true,
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      error: false,
      helperText: "",
    });
  }

  handleClick(e) {
    e.preventDefault();
    // check if input is empty
    if (this.state.input === "") {
      this.setState({ error: true, helperText: "Enter a number" });
    } else if (!this.state.currentOrders.includes(this.state.input)) {
      this.setState({
        currentOrders: this.state.currentOrders.concat(this.state.input),
        input: "", // clear textbox input
        error: false, // reset error
        helperText: "", // reset error message
      });
    } else {
      this.setState({
        error: true,
        helperText: "Duplicate order",
      });
    }
  }

  handleClickRemove(number) {
    let index = this.state.currentOrders.indexOf(number);
    if (index > -1) {
      this.state.currentOrders.splice(index, 1);
      this.forceUpdate();
    }
  }

  handleMouseMove() {
    if (this.state.mouseTimer) {
      clearTimeout(this.state.mouseTimer);
    }
    if (!this.state.cursorVisible) {
      this.setState({ cursorStyle: "default", cursorVisible: true });
    }
    this.setState({
      mouseTimer: setTimeout(this.disappearCursor.bind(this), 3000),
    });
  }

  disappearCursor() {
    this.setState({
      mouseTimer: null,
      cursorStyle: "none",
      cursorVisible: false,
    });
  }

  render() {
    return (
      <div
        className="App"
        onMouseMove={this.handleMouseMove.bind(this)}
        style={{ cursor: this.state.cursorStyle }}
      >
        <div className="row">
          <h1 className="title">ORDERS READY</h1>
          <form
            className="order-form"
            noValidate
            autoComplete="off"
            onSubmit={this.handleClick.bind(this)}
          >
            <div className="order-input">
              <TextField
                inputProps={{maxLength:4}}
                id="text-box"
                name="TextField"
                label="No."
                error={this.state.error}
                helperText={this.state.helperText}
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
              />
              <Button type="submit" className="btn" variant="contained">
                Add
              </Button>
            </div>
          </form>
        </div>

        <div className="row">
          <Grid className="order-list" container spacing={3}>
            {this.state.currentOrders.map((order) => (
              <Grid className="num-container" key={order} item xs={4}>
                <Paper className="order-container">
                  {order}
                  <Fab
                    color="None"
                    className="close-icon"
                    size="small"
                    onClick={() => this.handleClickRemove(order)}
                  >
                    <CloseIcon />
                  </Fab>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
