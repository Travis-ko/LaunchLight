import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super();
  }
//simple relative navbar
  render() {
    return (
      <div className="nav-bar">
        <img id="logo" src="./rocketboy.png" alt="rocket" />
        <h1>LaunchLight</h1>
      </div>
    );
  }
}

export default NavBar;
