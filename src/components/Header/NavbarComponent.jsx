import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import fontLogin from "../../assets/image/fontLogin.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-dark">
          <div>
            <img src={logo} alt="logo" fluid style={{ width: "70px", height: "50px" }} />
          </div>
        </Navbar.Brand>
        <Nav className="me mr-auto">
          <Button className="button-color text-light" as={Link} to={"/login"}>
            <img src={fontLogin} alt="font-login" className="font-button" />
            Masuk
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
