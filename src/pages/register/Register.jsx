import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import axios from 'axios';
import Cookies from 'js-cookie';

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password,
      });

      const response = await axios.post(
        'https://skypass-dev.up.railway.app/auth/register',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        const { verifiedToken } = response.data.data;

        // set token in cookie and redirect to page verifikasi-otp
        Cookies.set('verifiedToken', verifiedToken, {
          expires: 10 / (24 * 60),
        }); //  expired in 10 minute

        // redirect
        nav('/verifikasi-otp');
      }
    } catch (error) {
      // if error user already exist
      if (error.response && error.response.status === 409) {
        const { message } = error.response.data;

        // do someting with the message
        console.log(message);
      } else if (error.response && error.response.status === 400) {
        // bad request (ex: password must be at least 8 characters long)
        const { message } = error.response.data;

        // do someting with the message
        console.log(message);
      } else {
        // server or axios error
        console.log(error.response.data);
      }
    }
  };

  return (
    <Container fluid className='vh-100'>
      <Row className='h-100'>
        <Col className='d-flex align-items-center justify-content-center bg_color display-none'>
          <img src={logo} alt='logo' />
        </Col>
        <Col className='d-flex align-items-center justify-content-center '>
          <div className='w-75'>
            <h3 className='fw-bold'>Daftar</h3>
            <Form className='width-form mt-4' onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Nama Lengkap'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Contoh: johndoe@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText2'>
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Masukkan Nomor Telepon'
                  maxLength='12'
                  pattern='\d{12}'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Buat Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                type='submit'
                className='custom-button-rgs text-light w-100'
              >
                Masuk
              </Button>
              <div className='d-flex justify-content-center mt-3'>
                <Form.Text>
                  Sudah punya akun?
                  <Link to='/login' className='txt-color'>
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
