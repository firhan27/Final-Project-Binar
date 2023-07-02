import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./detailPesanan.css";

const DetailPesanan = ({ bookings }) => {
  const booking = bookings[0]; // Mengambil data booking pertama dari array bookings

  return (
    <Container className="my-5 row-w">
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            <h5 className="detail-pesanan-heading fw-bold">Detail Pesanan</h5>
            <p className="status">{booking.status}</p>
          </div>
          <p>
            Booking Code: <b className="total-clr">{booking.booking_code}</b>
          </p>
          <p className="txt-clr fw-bold">Keberangkatan</p>
          <p>
            <span className="fw-bold">{booking.departure_time}</span>
            <br />
            {booking.departure_date}
          </p>
          <p className="fw-bold">
            {booking.airport_name} - {booking.departure_terminal_name}{" "}
            {booking.type_flight}
          </p>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={1} className="d-flex align-items-center">
          lg
        </Col>
        <Col>
          <p className="fw-bold">{booking.airline_name}</p>
          <p>{booking.flight_number}</p>
        </Col>
        <Col xs={2} className="d-flex align-items-center">
          <img
            src={booking.logo_url}
            alt={booking.airline_name}
            width="40"
            height="40"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1} className="d-flex align-items-center">
          3
        </Col>
        <Col>
          <p className="fw-bold">{booking.city}</p>
          <p>{booking.airport_code}</p>
        </Col>
        <Col xs={2} className="d-flex align-items-center">
          {booking.formatted_duration}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p className="txt-clr fw-bold">Kedatangan</p>
          <p>
            <span className="fw-bold">{booking.arrival_time}</span>
            <br />
            {booking.arrival_date}
          </p>
          <p className="fw-bold">{booking.airport_name}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Harga <br />
            <span className="txt-clr fw-bold">IDR {booking.price}</span>
          </p>
        </Col>
        <Col>
          <p>
            Jumlah Penumpang <br />
            <span className="txt-clr fw-bold">
              {booking.adult_count} Dewasa, {booking.child_count} Anak,{" "}
              {booking.baby_count} Bayi
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Total <br />
            <span className="total-clr fw-bold">IDR {booking.total_price}</span>
          </p>
        </Col>

        <Button
          type="submit"
          size="lg"
          className="custom-button-lgn text-light w-100"
          as={Link}
          to="/"
        >
          Cetak Tiket
        </Button>
      </Row>
    </Container>
  );
};

export default DetailPesanan;
