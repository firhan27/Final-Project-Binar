import React from "react";
import { Card, Stack } from "react-bootstrap";
import { TiLocation } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";

const CardPesanan = ({ booking }) => {
  const {
    status,
    departure_time,
    arrival_time,
    city,
    departure_date,
    arrival_date,
    arrival_city,
    departure_city,
    formatted_duration,
  } = booking;

  return (
    <Card className="card-pesanan">
      <Card.Body>
        <div>
          <p className="status">{status}</p>
        </div>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
          gap={3}
        >
          <div className="text-center">
            <p className="fw-bold">
              <TiLocation />
              {city}
            </p>
            <p>{departure_date}</p>
            <p>{departure_time}</p>
          </div>
          <div>
            <MdArrowForwardIos />
          </div>
          <div className="">
            <p>{formatted_duration}</p>
          </div>
          <div>
            <MdArrowForwardIos />
          </div>
          <div className="text-center">
            <p className="fw-bold">
              <TiLocation />
              <>
                <span>
                  {departure_city} {arrival_city}
                </span>
              </>
            </p>
            <p>{arrival_date}</p>
            <p>{arrival_time}</p>
          </div>
        </Stack>
        <hr className="hr-clr" />
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
          gap={3}
        >
          <div className="">
            <b>Booking Code:</b>
            <p>{booking.booking_code}</p>
          </div>
          <div className="">
            <b>Class:</b>
            <p>{booking.class_name}</p>
          </div>
          <div className="">
            <b>IDR {booking.total_price}</b>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CardPesanan;
