import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./detailPesanan.css";
import { Link } from "react-router-dom";

function DetailPesanan() {
  return (
    <Container className=" my-5 row-w">
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            <h5 className="detail-pesanan-heading fw-bold">Detail Pesanan</h5>
            <p className="status">Issued</p>
          </div>
          <p>
            Booking Code: <b className="total-clr">6723y2GHK</b>
          </p>
          <p className="txt-clr fw-bold">Keberangkatan</p>
          <p>
            <span className="fw-bold">19:10</span>
            <br />5 Maret 2023
          </p>
          <p className="fw-bold">Soekarno Hatta - Terminal 1A Domestik</p>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={1} className="d-flex align-items-center">
          lg
        </Col>
        <Col>
          <p className="fw-bold">
            Jet Air - Economy <br />
            JT - 203
          </p>
          <p>
            <span className="fw-bold">Informasi: </span>
            <br /> <span className="info-clr fw-medium">Penumpang 1: Mr. Harry Potter</span>
            <br /> ID: 1234567
            <br />
            <span className="info-clr fw-medium">Penumpang 2: Miss Hermione </span>
            <br />
            ID: 789658
          </p>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col>
          <p className="txt-clr fw-bold">Kedatangan</p>
          <p>
            <span className="fw-bold">21:10</span>
            <br />5 Maret 2023
          </p>
          <p className="fw-bold">Melbourne International Airport</p>
        </Col>
        <hr />
      </Row>
      <Row>
        <p className="fw-bold">Rincian Harga</p>
        <Col>
          <p>2 Adults</p>
          <p>1 Baby</p>
          <p>Tax</p>
        </Col>
        <Col>
          <p>IDR 9.550.000</p>
          <p>IDR 0</p>
          <p>IDR 300.000</p>
        </Col>
        <hr />
      </Row>
      <Row className=" fw-bold">
        <Col>
          <p>Total</p>
        </Col>
        <Col>
          <p className="total-clr">IDR 9.850.000</p>
        </Col>
        <Button type="submit" size="lg" className="custom-button-lgn text-light w-100" as={Link} to="/">
          Cetak Tiket
        </Button>
      </Row>
    </Container>
  );
}

export default DetailPesanan;
