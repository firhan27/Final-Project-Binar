import React, { useEffect, useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import './VerifikasiOTP.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from '../../assets/image/logo.png';
import axios from 'axios';
import Cookies from 'js-cookie';

const VerifikasiOTP = () => {
  const history = useNavigate();
  const [otp, setOTP] = useState('');

  // validate user has token or not, otherwise: direct user to register
  useEffect(() => {
    // Cek apakah cookie verifyToken ada
    const verifyToken = Cookies.get('verifiedToken');

    // Jika cookie verifyToken tidak ada, redirect ke halaman register
    if (!verifyToken) {
      history('/register');
    }
  }, [history]);

  // submit otp
  const handleSubmit = async (e) => {
    e.preventDefault();

    // peripheral
    const data = {
      otp,
      verifiedToken: Cookies.get('verifiedToken'),
    };

    const url = 'https://skypass-dev.up.railway.app/auth/otp/verify';

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // clear cookie
        Cookies.remove('verifiedToken');
        // if success redirect to login
        history('/login');
      }
    } catch (error) {
      // if otp is wrong
      if (error.response && error.response.status === 400) {
        // do something in fron end (ex: display error message!)
        console.log(error.response.data.message);
      } else {
        // else for user not allowed to attempt otp
        // clear cookie
        Cookies.remove('verifiedToken');
        history('/register');
      }
    }
  };

  // resend otp (use for your button resend otp)
  const handleResendOTP = async (e) => {
    e.preventDefault();

    const url = `https://skypass-dev.up.railway.app/auth/otp/resend?token=${Cookies.get(
      'verifiedToken'
    )}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // if success
      if (response.status === 200) {
        const { verifiedToken } = response.data.data;

        // set token in cookie
        Cookies.set('verifiedToken', verifiedToken, {
          expires: 10 / (24 * 60),
        }); //  expired in 10 minute

        // success
        // do something if you want
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar bg='light' className='mb-4'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='logo' className='size-logo' />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Link to='/register'>
          <p className='fs-2 ms-4 txt-color'>
            <IoArrowBack />
          </p>
        </Link>
        <h2 className='text-center mb-5 fw-bold'>Masukkan OTP</h2>
        <div className='d-flex justify-content-center align-items-center text-center'>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Text>
                Ketik 6 digit kode yang dikirimkan ke <b>J****@gmail.com</b>
              </Form.Text>
              <div className='mt-4 mb-5'>
                <Form.Control
                  size='lg'
                  type='text'
                  maxLength='6'
                  pattern='\d{6}'
                  placeholder='Masukkan 6 digit kode'
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
                <Form.Text className='resend text-center'>
                  Kirim ulang OTP dalam 60 detik
                </Form.Text>
              </div>
            </Form.Group>
            <Button
              className='custom-button-otp text-light w-100'
              type='submit'
              onClick={handleSubmit}
            >
              Simpan
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default VerifikasiOTP;
