import React, { Component } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import HeroCard from "./HeroCard";

export default class HeroInfo extends Component {
  state = {
    heroId: this.props.match.params.id,
    loading: true,
    heroData: {},
  };

  componentDidMount() {
    fetch(
      `https://akabab.github.io/superhero-api/api/id/${this.state.heroId}.json`
    )
      .then((res) => res.json())
      .then((heroData) =>
        this.setState({ heroData: heroData, loading: false })
      );
  }

  biography = () => {
    const {
      name,
      biography,
      connections,
      appearance,
      work,
      powerstats,
    } = this.state.heroData;
    return (
      <Card bg="secondary" className="text-white my-auto">
        <Card.Header className="text-center">
          <h3>Know about {name} </h3>
        </Card.Header>
        <Card.Body>
          {name} is a{" "}
          {biography.alignment === "good" ? " Super Hero" : " Super Villian"}{" "}
          from {biography.publisher}. {name} is a {appearance.race} specimen, of{" "}
          {appearance.gender} gender.
          {appearance.gender === "Male" ? " He " : " She "} has worked with{" "}
          {connections.groupAffiliation}. <br></br>
          Known occupation is {work.occupation}.<br></br>
          <Row className="justify-content-center">
            <Col sm={12} lg={6}>
              <Table striped className="mt-2 text-white">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-center text-white">
                      Power Stats
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(powerstats).map((value, key) => (
                    <tr key={key}>
                      <td>{value}</td>
                      <td>{powerstats[value]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  workesWith = () => {
    const { biography } = this.state.heroData;
    return (
      <Card bg="secondary" className="text-white">
        <Card.Header className="text-center">
          <h3>Biography</h3>
        </Card.Header>
        <Card.Body>
          <Table striped className="text-white">
            <tbody>
              {Object.keys(biography).map((value, key) => (
                <tr key={key}>
                  <td>{value.replace(/([a-z])([A-Z])/g, "$1 $2")}</td>
                  <td>{biography[value]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <h1 className="text-white">Loading your superheroes information..</h1>
      );
    }
    return (
      <>
        <Row className="align-center mt-2 ">
          <Col sm={12} md={4} lg={3} className="my-1">
            <HeroCard heroData={this.state.heroData} />
          </Col>
          <Col sm={12} md={8} lg={9} className="my-1">
            {this.biography()}
          </Col>
        </Row>
      </>
    );
  }
}
