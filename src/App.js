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
    if (
      this.state.input !== "" &&
      !this.state.currentOrders.includes(this.state.input)
    ) {
      this.setState({
        currentOrders: this.state.currentOrders.concat(this.state.input),
      });
      this.setState({
        input: "",
        error: false,
        helperText: "",
      });
    } else {
      if (this.state.input === "") {
        this.setState({ error: true, helperText: "Enter a number" });
      } else {
        this.setState({
          error: true,
          helperText: "Order already exists",
        });
      }
    }
  }

  handleClickRemove(number) {
    let index = this.state.currentOrders.indexOf(number);
    if (index > -1) {
      this.state.currentOrders.splice(index, 1);
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="App">
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

        <body className="row">
          <Grid className="order-list" container spacing={3}>
            {this.state.currentOrders.map((order) => (
              <Grid key={order} item xs={4}>
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
        </body>
      </div>
    );
  }
}

export default App;
