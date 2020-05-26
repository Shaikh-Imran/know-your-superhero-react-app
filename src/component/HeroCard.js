import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeroCard({ heroData, isHome = false }) {
  return (
    <Card bg="secondary" text="white">
      <Card.Img variant="top" src={heroData.images.lg} />
      <Card.Body>
        <Card.Title className="text-center text-decoration-none">
          {isHome === true && (
            <Link to={"/superhero/" + heroData.id} className="herolink">
              <h4>{heroData.name} </h4>
            </Link>
          )}
          {isHome === false && <h4>{heroData.name} </h4>}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
