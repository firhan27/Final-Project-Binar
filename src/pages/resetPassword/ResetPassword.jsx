import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './resetPassword.css';
import logo from '../../assets/image/logo.png';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const history = useNavigate();
  // validate user has token or not, otherwise: direct user to register
  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      history('/register');
      return;
    }

    const tokenParts = token.split('.');

    if (tokenParts.length !== 3) {
      console.log('Invalid token');
      history('/register');
      return;
    }

    try {
      atob(tokenParts[0]);
      atob(tokenParts[1]);
    } catch (error) {
      console.log('Invalid token');
      history('/register');
      return;
    }
  }, [searchParams, history]);

  // do handle submit to server (dont forget send the token)
  // const token = searchParams.get('token'); // gunakan token var ini untuk reset password

  return (
    <Container fluid className='vh-100'>
      <Row className='h-100'>
        <Col className='d-flex align-items-center justify-content-center bg_color display-none'>
          <img src={logo} alt='logo' />
        </Col>
        <Col className='d-flex align-items-center justify-content-center '>
          <div className='w-75'>
            <h3 className='fw-bold'>Reset Password</h3>
            <Form className='width-form mt-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Masukan password baru </Form.Label>
                <Form.Control type='password' placeholder='Password baru' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <div class='d-flex justify-content-between'>
                  <Form.Label>Ulangi password baru</Form.Label>
                </div>
                <Form.Control type='password' placeholder='Ulangi password' />
              </Form.Group>
              <Button
                type='submit'
                className='custom-button-rst text-light w-100'
              >
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
