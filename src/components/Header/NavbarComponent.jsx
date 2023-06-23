import React, { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline, IoList } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import fontLogin from "../../assets/image/fontLogin.png";
import { FiLogOut } from "react-icons/fi";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-dark">
          <div>
            <img src={logo} alt="logo" fluid style={{ width: "70px", height: "50px" }} />
          </div>
        </Navbar.Brand>
        {isLoggedIn ? (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger text-light" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 d-flex justify-content-end">
                <div className="d-flex justify-content-end ">
                  <Link to="/user/history">
                    <IoList className="fs-3 icons mx-2" />
                  </Link>
                  <Link to="/user/notifikasi">
                    <IoNotificationsOutline className="fs-3 icons mx-2" />
                  </Link>
                  <Link to="/user/profile">
                    <FiUser className="fs-3 icons mx-2" />
                  </Link>
                  <Button
                    className=" btn-logout"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setIsLoggedIn(false);
                      return navigate("/");
                    }}
                  >
                    <FiLogOut />
                    Keluar
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <Nav>
            <Button className="button-color text-light" as={Link} to={"/login"}>
              <img src={fontLogin} alt="font-login" className="font-button" />
              Masuk
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
