import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink
} from "reactstrap";

class LaunchCards extends Component {
  constructor(props) {
    super();
  }
//Using reactstrap render and return all upcoming launches with data from props
  render() {
    return (
        <div class="container">
          {this.props.rockets.map(rocket => (
            <div className="cards" key={rocket.id}>
              <Card>
                <CardBody>
                  <CardTitle>{rocket.name}</CardTitle>
                  <CardSubtitle>
                    {rocket.rocket.agencies[0].abbrev}, ({
                      rocket.rocket.agencies[0].name
                    })
                  </CardSubtitle>
                </CardBody>
                <img
                  className="rocketImg"
                  width="100%"
                  src={rocket.rocket.imageURL}
                  alt="NoImageDisplayed"
                />
                <CardBody>
                  <CardText>
                    <li>Takeoff: {rocket.net}</li>
                    <li>Location: {rocket.location.name}</li>
                  </CardText>
                  <CardLink href={rocket.rocket.agencies[0].wikiURL}>
                    Agency Wiki
                  </CardLink>
                  <CardLink href={rocket.rocket.wikiURL}>
                    Launch/Rocket Wiki
                  </CardLink>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
    );
  }
}
export default LaunchCards;