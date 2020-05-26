import React from "react";
import { Card } from "react-bootstrap";

export default function HeroCard({ heroData }) {
  return (
    <Card bg="secondary" text="white">
      <Card.Img variant="top" src={heroData.images.sm} />
      <Card.Body>
        <Card.Title className="text-center">
          <h4>{heroData.name}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
