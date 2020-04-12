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
    this.setState({
      inputAdd: e.target.value,
      errorAdd: false,
      helperTextAdd: "",
    });
  }

  handleClickAdd(e) {
    e.preventDefault();
    if (!this.state.currentOrders.includes(this.state.inputAdd)) {
      this.setState({
        currentOrders: this.state.currentOrders.concat(this.state.inputAdd),
      });
      this.setState({
        inputAdd: "",
        errorAdd: false,
        helperTextAdd: "",
      });
    } else {
      this.setState({ errorAdd: true, helperTextAdd: "Order already exists" });
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
        <header className="row">
          <h1 className="title">ORDERS READY</h1>
          <form
            className="order-form"
            noValidate
            autoComplete="off"
            onSubmit={this.handleClickAdd.bind(this)}
          >
            <div className="order-input">
              <TextField
                id="text-box"
                name="addTextField"
                label="Order Number"
                error={this.state.errorAdd}
                helperText={this.state.helperTextAdd}
                value={this.state.inputAdd}
                onChange={this.handleAddChange.bind(this)}
              />
              <Button type="submit" className="btn" variant="contained">
                Add Order
              </Button>
            </div>
          </form>
        </header>

        <body className="row">
          <Grid className="order-list" container spacing={3}>
            {this.state.currentOrders.map((order) => (
              <Grid key={order} item xs={3}>
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
