import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const nav = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      emailOrPhone: emailOrPhone,
      password: password,
    };

    try {
      // hit endpoint
      const response = await axios.post(
        'https://skypass-dev.up.railway.app/auth/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      // if success status code 200
      if (response.status === 200) {
        const { access_token } = response.data.data;
        localStorage.setItem('token', access_token);

        // Redirect ke home
        nav('/');
      }
    } catch (error) {
      // if error user need to verified first
      if (error.response && error.response.status === 403) {
        const { verifiedToken } = error.response.data.data;

        // set token in cookie and redirect to page verifikasi-otp
        Cookies.set('verifiedToken', verifiedToken, {
          expires: 10 / (24 * 60),
        }); //  expired in 10 minute

        // redirect
        nav('/verifikasi-otp');
      } else {
        // do something in fron end (ex: display error message!)
        console.log(error.message);
      }
    }
  };

  // handle for reset request password (use for from send email reset password)
  const handleResetRequest = async (e) => {
    e.preventDefault();

    // Memastikan emailOrPhone terisi sebelum mengirim permintaan reset password
    if (!emailOrPhone) {
      // change with your design error or something else
      alert('Please enter your email or phone number.');
      return;
    }

    try {
      const response = await axios.post(
        'https://skypass-dev.up.railway.app/auth/reset-request',
        {
          emailOrPhone: emailOrPhone,
        }
      );

      if (response.status === 200 || response.status === 202) {
        // do something jika success, jangan direct ke reset-password dengan token dari server!
        console.log(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className='vh-100'>
      <Row className='h-100'>
        <Col className='d-flex align-items-center justify-content-center bg_color display-none'>
          <img src={logo} alt='logo' />
        </Col>
        <Col className='d-flex align-items-center justify-content-center'>
          <div className='w-75'>
            <h3 className='fw-bold'>Masuk</h3>
            <Form className='width-form mt-4' onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Contoh: johndoe@gmail.com'
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <div className='d-flex justify-content-between'>
                  <Form.Label>Password</Form.Label>
                  <Link to='/reset-password' className='txt-color fw-bold'>
                    Lupa Kata Sandi
                  </Link>
                </div>

                <Form.Control
                  type='password'
                  placeholder='Masukkan password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                type='submit'
                className='custom-button-lgn text-light w-100'
              >
                Masuk
              </Button>
              <div className='d-flex justify-content-center mt-3'>
                <Form.Text>
                  Belum punya Akun?
                  <Link to='/register' className='txt-color'>
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
