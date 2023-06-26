import React, { useEffect, useState } from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import "./VerifikasiOTP.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import logo from "../../assets/image/logo.png";
import axios from "axios";
import Cookies from "js-cookie";

const VerifikasiOTP = () => {
  const history = useNavigate();
  const [otp, setOTP] = useState("");
  const [resendTimer, setResendTimer] = useState(false);
  const [countdown, setCountdown] = useState(60);

  // validate user has token or not, otherwise: direct user to register
  useEffect(() => {
    // Cek apakah cookie verifyToken ada
    const verifyToken = Cookies.get("verifiedToken");

    // Jika cookie verifyToken tidak ada, redirect ke halaman register
    if (!verifyToken) {
      history("/register");
    }
  }, [history]);

  // submit otp
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.warn("Kode OTP harus terdiri dari 6 digit!");
      return;
    }

    // peripheral
    const data = {
      otp,
      verifiedToken: Cookies.get("verifiedToken"),
    };

    const url = "https://skypass-dev.up.railway.app/auth/otp/verify";

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // clear cookie
        Cookies.remove("verifiedToken");
        // if success redirect to login
        toast.success("Pendaftaran berhasil!");
        history("/auth/login");
      }
    } catch (error) {
      // if otp is wrong
      if (error.response && error.response.status === 400) {
        // do something in fron end (ex: display error message!)
        toast.warn("Kode OTP salah!");
        console.log(error.response.data.message);
      } else {
        // else for user not allowed to attempt otp
        toast.warn("Tidak diizinkan untuk mencoba OTP!");
        // clear cookie
        Cookies.remove("verifiedToken");
        history("/auth/register");
      }
    }
  };

  // resend otp (use for your button resend otp)
  const handleResendOTP = async (e) => {
    e.preventDefault();

    const url = `https://skypass-dev.up.railway.app/auth/otp/resend?token=${Cookies.get("verifiedToken")}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // if success
      if (response.status === 200) {
        const { verifiedToken } = response.data.data;

        // set token in cookie
        Cookies.set("verifiedToken", verifiedToken, {
          expires: 10 / (24 * 60),
        }); //  expired in 10 minute

        // start countdown for "Kirim ulang OTP dalam 60 detik!"
        setResendTimer(true);
        let countdownValue = 60;
        const countdownInterval = setInterval(() => {
          countdownValue--;
          setCountdown(countdownValue);
          if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            setResendTimer(false);
          }
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTPChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Hapus semua karakter non-digit
    setOTP(inputValue);
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
                <Form.Control size="lg" type="text" maxLength="6" pattern="\d{6}" placeholder="Masukkan 6 digit kode" value={otp} onChange={handleOTPChange} />
                {resendTimer ? (
                  <Form.Text className="text-center" onClick={handleResendOTP}>
                    Kirim ulang OTP dalam <span className="tx-resend">{countdown}</span> detik!
                  </Form.Text>
                ) : (
                  <Form.Text className="resend text-center fs-5" onClick={handleResendOTP}>
                    Kirim ulang OTP!
                  </Form.Text>
                )}
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
