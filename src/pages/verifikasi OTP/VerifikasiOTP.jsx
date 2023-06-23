import React, { useState } from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import "./VerifikasiOTP.css";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import logo from "../../assets/image/logo.png";
import axios from "axios";

const VerifikasiOTP = () => {
  const [otp, setOTP] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        otp,
      });

      let config = {
        method: "post",
        url: "https://skypass-dev.up.railway.app/auth/otp/verify",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(response.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
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
        <div className="d-flex justify-content-center align-items-center text-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text>
                Ketik 6 digit kode yang dikirimkan ke <b>J****@gmail.com</b>
              </Form.Text>
              <div className="mt-4 mb-5">
                <Form.Control size="lg" type="text" maxLength="6" pattern="\d{6}" placeholder="Masukkan 6 digit kode" value={otp} onChange={(e) => setOTP(e.target.value)} />
                <Form.Text className="resend text-center">Kirim ulang OTP dalam 60 detik</Form.Text>
              </div>
            </Form.Group>
            <Button className="custom-button-otp text-light w-100" type="submit" onClick={handleSubmit}>
              Simpan
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default VerifikasiOTP;
