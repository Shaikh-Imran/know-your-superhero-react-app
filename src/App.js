import React, { Component } from "react";
import AppNavbar from "./component/AppNavbar";
import { Switch, Route } from "react-router";
import Home from "./component/Home";
import HeroInfo from "./component/HeroInfo";
import { Container } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <AppNavbar />

          <Switch>
            <Route path="/" exact render={() => <Home isHome={true} />} />
            <Route path="/superhero/:id" exact component={HeroInfo} />
          </Switch>
        </Container>
      </>
    );
  }
}
