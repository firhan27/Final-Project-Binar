import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { TiLocation } from 'react-icons/ti';
import { MdArrowForwardIos } from 'react-icons/md';
import moment from 'moment/moment';
require('moment/locale/id');

const CardPesanan = ({ booking, setIdBooking }) => {
  const {
    status,
    departure_time,
    arrival_time,
    departure_date,
    arrival_date,
    arrival_city,
    departure_city,
    formatted_duration,
  } = booking;

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

  return (
    <button
      className='w-100 border-0 btn btn-light mb-3'
      onClick={() => setIdBooking(booking.booking_code)}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <Card className='card-pesanan'>
        <Card.Body>
          <div className='d-flex'>
            <p
              className='status'
              style={{ backgroundColor: getStatusColor(status) }}
            >
              {status}
            </p>
          </div>
          <Stack
            direction='horizontal'
            className='d-flex justify-content-between'
            gap={3}
          >
            <div className='text-center'>
              <p className='fw-bold'>
                <TiLocation color='' />
                {departure_city}
              </p>
              <p>{moment(departure_date).format('DD MMMM YYYY')}</p>
              <p>{moment(departure_time, 'HH:mm:ss').format('HH:mm')}</p>
            </div>
            <div>
              <MdArrowForwardIos />
            </div>
            <div className=''>
              <p>{formatted_duration}</p>
            </div>
            <div>
              <MdArrowForwardIos />
            </div>
            <div className='text-center'>
              <p className='fw-bold'>
                <TiLocation />
                <>
                  <span> {arrival_city}</span>
                </>
              </p>
              <p>{moment(arrival_date).format('DD MMMM YYYY')}</p>
              <p>{moment(arrival_time, 'HH:mm:ss').format('HH:mm')}</p>
            </div>
          </Stack>
          <hr className='hr-clr' />
          <Stack
            direction='horizontal'
            className='d-flex justify-content-between'
            gap={3}
          >
            <div className=''>
              <b>Booking Code:</b>
              <p>{booking.booking_code}</p>
            </div>
            <div className=''>
              <b>Class:</b>
              <p>{booking.class_name}</p>
            </div>
            <div className=''>
              <b>IDR {booking.total_price.toLocaleString('id-ID')}</b>
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </button>
  );
};

export default CardPesanan;
