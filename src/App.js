import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { CardsComponent } from "./Components/Cards/cards.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Madhavi",
      enable: false,
      names: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(names => {
        this.setState({
          names: names
        });
        console.log("users", this.state.names);
      });
  }
  render() {
    return (
      <div className="App">
        <Button variant="contained" disabled={this.state.enable}>
          Disabled
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            this.setState({
              enable: true
            });
          }}
          color="primary"
          href="#contained-buttons"
        >
          Click to disable
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            this.setState({
              enable: false
            });
          }}
        >
          Click to enable
        </Button>
        {this.state.names.map(names => (
          <div key={names.id}>{names.name}</div>
        ))}
        <CardsComponent users={this.state.names} />
      </div>
    );
  }
}
export default App;
