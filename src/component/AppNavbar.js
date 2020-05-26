import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            width="40px"
            height="40px"
            alt="Logo"
            className="mx-2 my-auto"
          />
          Know your SuperHero
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
