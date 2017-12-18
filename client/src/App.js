import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./NavBar.js";
import LaunchCards from "./LaunchCards.js";
import Stars from "./Stars.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //set state of rockets array
      rockets: []
    };
  }

  componentWillMount() {
    //fetch json of upcoming launches and set state of rockets to array value
    fetch("/rockets")
      .then(res => res.json())
      .then(response => {
        this.setState({
          rockets: response.launches
        });
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Upcoming Launches!</h1>
        <LaunchCards rockets={this.state.rockets}/>
        <Stars />
      </div>
    );
  }
}

export default App;
