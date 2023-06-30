import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo-skypass.png";
import client from "../../api/axios"
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi jika isi form ada yang kosong
    if (!name || !email || !phone || !password) {
      toast.warn("Harap isi semua form!");
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warn("Email tidak valid!");
      return;
    }

    // Validasi password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.warn("Kata sandi harus mengandung setidaknya minimal 8 karakter, satu huruf besar dan satu angka");
      return;
    }

    try {
      const data = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password,
      });

      const response = await client.post("/auth/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        const { verifiedToken } = response.data.data;

        // set token in cookie and redirect to page verifikasi-otp
        Cookies.set("verifiedToken", verifiedToken, {
          expires: 10 / (24 * 60),
        }); //  expired in 10 minute

        // redirect
        nav("/auth/register/verifikasi-otp");
      }
    } catch (error) {
      // if error user already exist
      if (error.response && error.response.status === 409) {
        toast.warn("Email sudah terdaftar!");
      } else if (error.response && error.response.status === 400) {
        toast.warn("password harus minimal 8 karakter");
      } else {
        toast.warn(error.response.data);
      }
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Hapus semua karakter non-digit
    setPhone(inputValue);
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
            <Form className="width-form mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText2">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nomor Telepon" maxLength="13" value={phone} onChange={handlePhoneChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Buat Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
