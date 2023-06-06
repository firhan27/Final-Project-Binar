import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const Register = () => {
  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value.replace(/\D/g, "").slice(0, 13);
    e.target.value = phoneNumber;
  };
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center bg_color display-none">
          <img src={logo} alt="logo" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <div className="w-75">
            <h3 className="fw-bold">Daftar</h3>
            <Form className="width-form mt-4">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Lengkap" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText2">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nomor Telepon" onChange={handlePhoneNumberChange} maxLength="13" pattern="\d*" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Buat Password" />
              </Form.Group>
              <Button type="submit" className="custom-button-rgs text-light w-100">
                Masuk
              </Button>
              <div className="d-flex justify-content-center mt-3">
                <Form.Text>
                  Sudah punya akun?
                  <Link to="/login" className="txt-color">
                    Masuk di sini
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

export default Register;
