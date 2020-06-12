import React, { Component } from "react";
import HeroCard from "./HeroCard";
import { Row, Col, Container } from "react-bootstrap";

export default class Home extends Component {
  state = {
    isLoading: true,
    allHeroes: [],
    superhero: "",
    searchedHeroes: [],
  };

  componentDidMount() {
    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((res) => res.json())
      .then((heroes) => this.setState({ allHeroes: heroes, isLoading: false }));
  }

  handleFormInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  searchSuperHero = (e) => {
    e.preventDefault();
    const superhero = this.state.superhero;
    const searchedHeroes = this.state.allHeroes.filter((hero) =>
      hero.name.toString().toLowerCase().includes(superhero.toLowerCase())
    );
    this.setState({ superhero: "", searchedHeroes: searchedHeroes });
  };

  render() {
    if (this.state.isLoading)
      return <h1 className="text-white"> Your SuperHeroes are Loading...</h1>;
    return (
      <>
        <Container>
          <form
            onSubmit={this.searchSuperHero}
            className="row justify-content-md-center my-1 form-group"
          >
            <div className="col-8 form-group m-0">
              <input
                type="text"
                name="superhero"
                value={this.state.superhero}
                onChange={this.handleFormInput}
                className="form-control mr-sm-2 p-2"
                placeholder="Search the Superhero or Supervillian..."
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
          <Row className="align-center my-2">
            {this.state.searchedHeroes.map((hero, index) => (
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
