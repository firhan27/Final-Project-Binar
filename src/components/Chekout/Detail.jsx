import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment/moment';

const Detail = ({ flight, passengerTypes, bookingCode = null }) => {
  // Menghitung total harga
  let totalPrice = 0;
  Object.entries(passengerTypes).forEach(([passengerType, count]) => {
    let price = flight.price * count; // Harga default
    if (passengerType === 'baby') {
      price = 0; // Set harga menjadi 0 untuk tipe "baby"
    }
    totalPrice += price;
  });

  // Menghitung pajak
  const taxRate = 0.11;
  const tax = Math.round(totalPrice * taxRate);
  const finalPrice = Math.round(totalPrice + tax);

  // Format total harga dan pajak
  const formattedTotalPrice = finalPrice.toLocaleString('id-ID');
  const formattedTax = tax.toLocaleString('id-ID');

  return (
    <Container className='mt-5'>
      {!bookingCode ? (
        <h4
          style={{
            color: '#000000',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '30px',
          }}
        >
          Detail Penerbangan
        </h4>
      ) : (
        <h4
          style={{
            color: '#000000',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '30px',
          }}
        >
          Booking Code : <span style={{ color: '#A06ECE' }}>{bookingCode}</span>
        </h4>
      )}

      <Row>
        <Col>
          <div className='mt-2'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='fw-bold'>
                {moment(flight.departure_time, 'HH:mm:ss').format('h:mm')}
              </h5>
              <h6 className='fw-bold' style={{ color: '#A06ECE' }}>
                Keberangkatan
              </h6>
            </div>
            <p className='mb-0'>
              {moment(flight.departure_date).format('DD MMMM YYYY')}
            </p>
            <p>
              {flight.departure_airport} - {flight.departure_terminal_name}
            </p>
          </div>

          <hr />

          <Row className='d-flex align-items-center'>
            <Col md={3} className=' d-flex justify-content-end pe-1 ms-4'>
              <img
                src={flight.logo_url}
                alt=''
                style={{
                  transform: 'scale(0.4)',
                  width: '150px',
                  height: 'auto',
                }}
              />
            </Col>
            <Col md='auto'>
              <h6 className='fw-bold'>
                {flight.airline_name} - {flight.class}
              </h6>
              <h6 className='fw-bold mb-4'>{flight.flight_number}</h6>
              <h6 className='fw-bold'>Informasi:</h6>
              <p className='mb-0'>
                Baggage {flight.baggage_capacity || '-'} kg
              </p>
              <p className='mb-0'>
                Cabin baggage {flight.cabin_capacity || '-'} kg
              </p>
              {flight.flight_entertainment ? (
                <p>In Flight Entertainment</p>
              ) : (
                ''
              )}
            </Col>
          </Row>

          <hr />

          <div>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='fw-bold'>
                {moment(flight.arrival_time, 'HH:mm:ss').format('h:mm')}
              </h5>
              <h6 className='fw-bold' style={{ color: '#A06ECE' }}>
                Kedatangan
              </h6>
            </div>
            <p className='mb-0'>
              {moment(flight.arrival_date).format('DD MMMM YYYY')}
            </p>
            <p className='fw-bold'>{flight.arrival_airport}</p>
          </div>

          <hr />

          <div>
            <h5 className='fw-bold'>Rincian Harga</h5>
            {Object.entries(passengerTypes).map(([passengerType, count]) => {
              let price = flight.price * count; // Default price
              if (passengerType === 'baby') {
                price = 0; // Set price to 0 for "baby" type
              }
              const formattedPrice = price.toLocaleString('id-ID');

              return (
                count > 0 && (
                  <div
                    className='d-flex justify-content-between align-items-center'
                    key={passengerType}
                  >
                    <p>
                      {count} {passengerType}
                    </p>
                    <p>IDR {formattedPrice}</p>
                  </div>
                )
              );
            })}

            {/* tax */}
            <div className='d-flex justify-content-between align-items-center'>
              <p>Tax</p>
              <p>IDR {formattedTax}</p>
            </div>
          </div>

          <hr />

          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold txt-primary'>Total</h5>
            <h4 className='fw-bold' style={{ color: '#7126B5' }}>
              IDR {formattedTotalPrice}
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
