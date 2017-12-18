import React, { Component } from "react";

class Stars extends Component {
  constructor(props) {
    super();
  }
//render and return divs for background image
  render() {
    return (
        <div>
        <div className="stars" />
        <div className="twinkling" />
        <div className="clouds" />
        </div>
    );
  }
}

export default Stars;