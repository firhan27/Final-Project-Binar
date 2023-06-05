import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./resetPassword.css";
import logo from "../../assets/image/logo.png";

const ResetPassword = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center  bg_color display-none">
          <img src={logo} alt="logo" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <div>
            <h3 className="fw-bold">Reset Password</h3>
            <Form className="width-form mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukan password baru </Form.Label>
                <Form.Control type="password" placeholder="Password baru" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Ulangi password baru</Form.Label>
                </div>
                <Form.Control type="password" placeholder="Ulangi password" />
              </Form.Group>
              <Button type="submit" className="custom-button">
                Simpan
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
