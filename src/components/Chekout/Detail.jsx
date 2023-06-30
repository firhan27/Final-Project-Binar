import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoMaskapai from "../../assets/image/logoMaskapai.png";
import { useLocation } from "react-router-dom";

const Detail = () => {
  /* const location = useLocation();
  const selectedData = location.state?.selectedData;

  if (!selectedData) {
    console.log("selectedData is null or undefined");
    return null;
  }

  console.log("data:", data);
  console.log("selectedData:", selectedData); */

  /* const location = useLocation();
  console.log(location.state?.id); */

  return (
    <Container className="mt-5">
      <h4
        style={{
          color: "#000000",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "30px",
        }}
      >
        Detail Penerbangan
      </h4>
      <Row>
        <Col>
          <div className="mt-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold">07:00</h5>
              <h6 className="fw-bold" style={{ color: "#A06ECE" }}>
                Keberangkatan
              </h6>
            </div>
            <p className="mb-0">3 Maret 2023</p>
            <p>Soekarno Hatta - Terminal 1A Domestik</p>
          </div>

          <hr />

          <Row className="d-flex align-items-center">
            <Col md={1}>
              <img src={logoMaskapai} alt="" />
            </Col>
            <Col md="auto">
              <h6 className="fw-bold">Jet Air - Economy</h6>
              <h6 className="fw-bold mb-4">JT - 203</h6>
              <h6 className="fw-bold">Informasi:</h6>
              <p className="mb-0">Baggage 20kg</p>
              <p className="mb-0">Cabin baggage 7 kg</p>
              <p>In Flight Entertainment</p>
            </Col>
          </Row>

          <hr />

          <div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold">11:00</h5>
              <h6 className="fw-bold" style={{ color: "#A06ECE" }}>
                Kedatangan
              </h6>
            </div>
            <p className="mb-0">3 Maret 2023</p>
            <p className="fw-bold">Melbourne International Airport</p>
          </div>

          <hr />

          <div>
            <h5 className="fw-bold">Rincian Harga</h5>
            <div className="d-flex justify-content-between align-items-center">
              <p>2 Adults</p>
              <p>IDR 9.550.000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>1 Baby</p>
              <p>IDR 0</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Tax</p>
              <p>IDR 300.000</p>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold txt-primary">Total</h5>
            <h4 className="fw-bold" style={{ color: "#7126B5" }}>
              IDR
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
