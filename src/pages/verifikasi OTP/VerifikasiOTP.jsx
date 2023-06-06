import React from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import "./VerifikasiOTP.css";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import logo from "../../assets/image/logo.png";

const VerifikasiOTP = () => {
  const handleCodeOTPChange = (e) => {
    const phoneNumber = e.target.value.replace(/\D/g, "").slice(0, 13);
    e.target.value = phoneNumber;
  };
  return (
    <>
      <Navbar bg="light" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="size-logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Link to="/register">
          <p className="fs-2 ms-4 txt-color">
            <IoArrowBack />
          </p>
        </Link>
        <h2 className="text-center mb-5 fw-bold">Masukkan OTP</h2>
        <div className="d-flex justify-content-center align-items-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text>
                Ketik 6 digit kode yang dikirimkan ke <b>J****@gmail.com</b>
              </Form.Text>
              <div className="mt-4 mb-5 text-center">
                <Form.Control size="lg" type="email" placeholder="Masukkan 6 digit kode" onChange={handleCodeOTPChange} maxLength="6" pattern="\d*" />
                <Form.Text>Kirim ulang OTP dalam 60 detik</Form.Text>
              </div>
            </Form.Group>
            <Button className="custom-button-otp text-light w-100" type="submit">
              Simpan
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default VerifikasiOTP;
