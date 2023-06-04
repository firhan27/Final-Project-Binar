import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const Login = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="bg_color display-none">
          <img src={logo} alt="logo" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <div>
            <h3 className="fw-bold">Masuk</h3>
            <Form className="width-form mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <Link to="/reset-password" className="txt-color fw-bold">
                    Lupa Kata Sandi
                  </Link>
                </div>

                <Form.Control type="password" placeholder="Masukkan password" />
              </Form.Group>
              <Button type="submit" className="custom-button">
                Submit
              </Button>
              <div className="d-flex justify-content-center">
                <Form.Text>
                  <Link to="/register" className="txt-color">
                    Daftar di sini
                  </Link>
                </Form.Text>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
