import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";

export default function AppNavbar() {
  const location = useLocation();
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        expand="lg"
        className="p-0"
      >
        <Navbar.Brand as={Link} to="/" className="p-1 m-0">
          <img
            src={logo}
            width="40px"
            height="40px"
            alt="Logo"
            className="mx-2 my-auto"
          />
          Know your SuperHero
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center p-auto">
          <Nav variant="pills" className="m-auto" activeKey={location.pathname}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" href="/">
                <h4>All</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Link href="https://www.CodersTea.com/">
              <h4>CodersTea.com</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
