import React, { Component } from "react";
import HeroCard from "./HeroCard";
import { Row, Col, Container } from "react-bootstrap";

export default class Home extends Component {
  state = {
    isLoading: true,
    heroes: [],
  };
  componentDidMount() {
    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((res) => res.json())
      .then((heroes) => this.setState({ heroes: heroes, isLoading: false }));
  }

  render() {
    if (this.state.isLoading)
      return <h1 className="text-white"> Your SuperHeroes are Loading...</h1>;
    return (
      <>
        <Container>
          <Row className="align-center">
            {this.state.heroes.map((hero) => (
              <Col sm={6} md={4} lg={3} className="my-3" key={hero.id}>
                <HeroCard heroData={hero} isHome={this.props.isHome} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
