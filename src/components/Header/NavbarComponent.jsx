import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-dark">
          <div>
            <img src={logo} alt="logo" fluid style={{ width: "70px", height: "50px" }} />
          </div>
        </Navbar.Brand>
        <Form className="d-flex w-50">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        </Form>
        <Nav className="me mr-auto">
          <Button className="button-color text-light" as={Link} to={"/login"}>
            Masuk
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;