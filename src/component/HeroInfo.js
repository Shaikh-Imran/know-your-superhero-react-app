import React, { Component } from "react";
import { Row, Col, Card, Badge, Table } from "react-bootstrap";
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
    const { biography } = this.state.heroData;
    return (
      <Card bg="secondary" className="text-white">
        <Card.Header>
          <h3>Biography</h3>
        </Card.Header>
        <Card.Body>
          <Table striped className="text-white">
            <tbody>
              {Object.keys(biography).map((value, key) => (
                <tr>
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
          <Col sm={12} md={4} lg={3}>
            <HeroCard heroData={this.state.heroData} />
          </Col>
          <Col sm={12} md={8} lg={9}>
            {this.biography()}
          </Col>
        </Row>
      </>
    );
  }
}
