import React, { Component } from "react";
import HeroCard from "./component/HeroCard";
import { Row, Col, Container } from "react-bootstrap";

export default class App extends Component {
  state = {
    heroes: [],
  };
  componentWillMount() {
    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((res) => res.json())
      .then((heroes) => this.setState({ heroes: heroes }));
  }

  render() {
    // console.log(this.state.heroes.map((hero) => hero.images.sm));
    return (
      <Container>
        <Row className="align-center">
          {this.state.heroes.map((hero) => (
            <Col sm={6} md={4} lg={3} className="my-3" key={hero.id}>
              <HeroCard heroData={hero} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
