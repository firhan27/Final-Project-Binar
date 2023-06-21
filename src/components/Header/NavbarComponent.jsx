import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import fontLogin from "../../assets/image/fontLogin.png";
import { FaSearch } from "react-icons/fa";

const NavbarComponent = ({ type }) => {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Nav className="mr-auto mb-3 align-items-center">
          <Navbar.Brand as={Link} to="/" className="text-dark">
            <div>
              <img
                src={logo}
                alt="logo"
                fluid
                style={{ width: "70px", height: "50px" }}
              />
            </div>
          </Navbar.Brand>
          <div style={{ width: "20px" }}></div>
          <InputGroup className="">
            <FormControl
              type="text"
              placeholder="Cari..."
              className="mr-sm-2 search-input"
            />
            <InputGroup.Text className="search-input">
              <FaSearch style={{ fontSize: "14px" }} />
            </InputGroup.Text>
          </InputGroup>
        </Nav>
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
