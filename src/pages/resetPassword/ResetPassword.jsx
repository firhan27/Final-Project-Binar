import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./resetPassword.css";
import logo from "../../assets/image/logo.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const history = useNavigate();
  // validate user has token or not, otherwise: direct user to register
  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      history("/auth/register");
      return;
    }

    const tokenParts = token.split(".");

    if (tokenParts.length !== 3) {
      toast.error("Token tidak valid!");
      console.log("Invalid token");
      history("/auth/register");
      return;
    }

    try {
      atob(tokenParts[0]);
      atob(tokenParts[1]);
    } catch (error) {
      toast.error("Token tidak valid!");
      console.log("Invalid token");
      history("/auth/register");
      return;
    }
  }, [searchParams, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      toast.error("Password dan konfirmasi password harus sama!");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password harus memiliki minimal 8 karakter, 1 huruf besar, dan 1 angka!");
      return;
    }

    const token = searchParams.get("token");

    const data = {
      resetRequestToken: token,
      password: password,
      confirm_password: confirm_password,
    };

    try {
      const response = await axios.post("https://skypass-dev.up.railway.app/auth/reset-password", data);
      console.log(response.data);
      toast.success("Ganti kata sandi berhasil!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center bg_color display-none">
          <img src={logo} alt="logo" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <div className="w-75">
            <h3 className="fw-bold">Reset Password</h3>
            <Form className="width-form mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukan password baru </Form.Label>
                <Form.Control type="password" placeholder="Password baru" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Confirm ulang password baru!</Form.Label>
                </div>
                <Form.Control type="password" placeholder="Confirm password" value={confirm_password} onChange={(e) => setConfirm_Password(e.target.value)} />
              </Form.Group>
              <Button type="submit" className="custom-button-rst text-light w-100">
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
