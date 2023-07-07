import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './detailPesanan.css';
import moment from 'moment/moment';
require('moment/locale/id');

const DetailPesanan = ({ bookings, bookingId }) => {
  const booking = bookings.filter(
    (booking) => booking.booking_code === bookingId
  );
  const data = booking[0];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Unpaid':
        return 'gray';
      case 'Issued':
        return '#73ca5c';
      case 'Cancelled':
        return 'red';
      default:
        return '#73ca5c';
    }
  };

  const dataPayment = {
    flight: {
      price: data.price,
      departure_time: data.departure_time,
      departure_date: data.departure_date,
      departure_airport: data.departure_airport_name,
      departure_terminal_name: data.departure_terminal_name,
      logo_url: data.logo_url,
      airline_name: data.airline_name,
      class: data.class_name,
      flight_number: data.flight_number,
      arrival_time: data.arrival_time,
      arrival_date: data.arrival_date,
      arrival_airport: data.arrival_airport_name,
      arrival_terminal_name: data.arrival_terminal_name,
    },
    bookingCode: data.booking_code,
    passengerTypes: {
      adults: data.adult_count,
      children: data.child_count,
      baby: data.baby_count,
    },
  };

  return (
    <Container className='my-5 row-w'>
      <Row>
        <Col>
          <div className='d-flex justify-content-between'>
            <h5 className='detail-pesanan-heading fw-bold'>Detail Pesanan</h5>
            <p
              className='status'
              style={{ backgroundColor: getStatusColor(data.status) }}
            >
              {data.status}
            </p>
          </div>
          <p>
            Booking Code: <b className='total-clr'>{data.booking_code}</b>
          </p>
          <Row>
            <Col>
              <p>
                <span className='fw-bold'>
                  {moment(data.departure_time, 'HH:mm:ss').format('HH:mm')}
                </span>
                <br />
                {moment(data.departure_date).format('DD MMMM YYYY')}
              </p>
            </Col>
            <Col className='d-flex flex-row-reverse'>
              <p className='txt-clr fw-bold'>Keberangkatan</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='fw-bold'>
                {data.departure_airport_name} - {data.departure_terminal_name}{' '}
                {data.type_flight}
              </p>
            </Col>
          </Row>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col sm={3} className='d-flex align-items-center'>
          <div>
            <img
              src={data.logo_url}
              alt={data.airline_name}
              width='60'
              height='40'
            />
          </div>
        </Col>
        <Col sm={'auto'} className='d-flex flex-column'>
          <p className='fw-bold'>
            {data.airline_name} - {data.class_name}
            <br />
            {data.flight_number}
          </p>
          <p className='fw-bold'>Informasi:</p>
          {data.passengers.map((passenger, index) => (
            <div key={index}>
              <p>
                <span className='txt-clr'>
                  Penumpang {index + 1}: {passenger.gender ? 'Mr.' : 'Ms.'}{' '}
                  {passenger.name}
                </span>
                <br />
                ID: {passenger.id}
              </p>
            </div>
          ))}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>
            <span className='fw-bold'>
              {moment(data.arrival_time, 'HH:mm:ss').format('HH:mm')}
            </span>
            <br />
            {moment(data.arrival_date).format('DD MMMM YYYY')}
          </p>
          <p className='fw-bold'>{data.arrival_airport_name}</p>
        </Col>
        <Col className='d-flex flex-row-reverse'>
          <p className='txt-clr fw-bold'>Kedatangan</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <p className='fw-bolder'>Rincian Harga</p>
        {data.adult_count > 0 ? (
          <div className='d-flex justify-content-between'>
            <p>{data.adult_count} Adults</p>
            <p>IDR {(data.price * data.adult_count).toLocaleString('id-ID')}</p>
          </div>
        ) : (
          ''
        )}

        {data.child_count > 0 ? (
          <div className='d-flex justify-content-between'>
            <p>{data.child_count} Childs</p>
            <p>IDR {(data.price * data.child_count).toLocaleString('id-ID')}</p>
          </div>
        ) : (
          ''
        )}

        {data.baby_count > 0 ? (
          <div className='d-flex justify-content-between'>
            <p>{data.baby_count} Babys</p>
            <p>IDR 0</p>
          </div>
        ) : (
          ''
        )}
        <div className='d-flex justify-content-between'>
          <p>Tax</p>
          <p>IDR {data.tax.toLocaleString('id-ID')}</p>
        </div>
      </Row>
      <hr />
      <Row>
        <Col className='d-flex justify-content-between'>
          <p className='fw-bolder'>Total</p>
          <p className='total-clr fw-bold'>
            IDR {data.total_price.toLocaleString('id-ID')}
          </p>
        </Col>

        {data.status === 'Unpaid' && (
          <Button
            type='submit'
            size='lg'
            className='custom-button-pay text-light w-100'
            as={Link}
            to='/checkout/payment'
            state={dataPayment}
          >
            Lanjut Bayar
          </Button>
        )}

        {data.status === 'Issued' && (
          <Button
            type='submit'
            size='lg'
            className='custom-button-lgn text-light w-100'
            as={Link}
            to='/'
          >
            Cetak Tiket
          </Button>
        )}
      </Row>
    </Container>
  );
};

export default DetailPesanan;
