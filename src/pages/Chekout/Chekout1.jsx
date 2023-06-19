import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import CheckoutForm from "../../components/Chekout/ChekoutForm";
import PassengerForm from "../../components/Chekout/PassengerForm";
import PassengerForm2 from "../../components/Chekout/PassengerFrom2";
import KursiSelection from "../../components/Chekout/KursiSelection";
import Detail from "../../components/Chekout/Detail";

const Checkout = () => {
  const [timeRemaining, setTimeRemaining] = useState(900);

  useEffect(() => {
    if (timeRemaining <= 0) {
      refreshPage();
    } else {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeRemaining]);

  const refreshPage = () => {
    window.location.reload();
  };

  const handleFormSubmit = () => {
    setTimeRemaining(900); // Mengatur waktu ulang menjadi 15 menit
  };

  const handleFormChange = () => {
    setTimeRemaining(900); // Mengatur waktu ulang menjadi 15 menit
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <>
      <Container fluid className="p-0 m-0 shadow py-4">
        <Container>
          <Row className="mt-5">
            <Row className="mb-1">
              <Col className="d-flex align-items-center">
                <Button
                  className=""
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontHeight: "30px",
                  }}
                >
                  {" "}
                  Isi Data Diri
                </Button>
                <FaAngleRight
                  size={20}
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginBottom: "-3px",
                  }}
                />
                <Button
                  className=""
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontHeight: "30px",
                  }}
                >
                  {" "}
                  Bayar
                </Button>
                <FaAngleRight
                  size={20}
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginBottom: "-3px",
                  }}
                />
                <Button
                  className=""
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontHeight: "30px",
                  }}
                >
                  {" "}
                  Selesai
                </Button>
              </Col>
            </Row>

            <Col>
              <Card
                className="p-0 m-0"
                style={{ backgroundColor: "red", borderRadius: "12px" }}
              >
                <Card.Body>
                  <p
                    className="text-center text-white p-0 m-0 "
                    style={{
                      fontStyle: "normal",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Selesaikan dalam {formatTime(timeRemaining)}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col sm={8}>
            <Row className="mt-5">
              <Col>

                <Card className="rounded-0" style={{ background: "none" }}>

                <Card className="rounded-0">

                  <Card.Body>
                    <CheckoutForm
                      onSubmit={handleFormSubmit}
                      onChange={handleFormChange}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>

                <Card className="rounded-0" style={{ background: "none" }}>

                <Card className="rounded-0">

                  <Card.Body>
                    <PassengerForm
                      onSubmit={handleFormSubmit}
                      onChange={handleFormChange}
                    />
                    <PassengerForm2
                      onSubmit={handleFormSubmit}
                      onChange={handleFormChange}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>

                <Card className="rounded-0" style={{ background: "none" }}>

                <Card className="rounded-0">

                  <Card.Body>
                    <KursiSelection />
                  </Card.Body>
                </Card>
              </Col>


              <Card className="border-0" style={{ background: "none" }}>
                <Button
                  className="mt-4 p-3 border-0 text-white"

              <Card className="border-0">
                <Button
                  className="mt-4 p-3 border-0"

                  style={{
                    background: "#7126B5",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "12px",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                  size="lg"
                >
                  Simpan
                </Button>
              </Card>
            </Row>
          </Col>

          <Col sm={4}>
            <Detail />

            <Card className="border-0" style={{ background: "none" }}>
              <Button
                as={Link}
                to="/checkout/payment"
                className="mt-4 p-3 border-0 text-white"

            <Card className="border-0">
              <Button
                as={Link}
                to="/Payment"
                className="mt-4 p-3 border-0"

                style={{
                  background: "#FF0000",
                  borderRadius: "12px",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
                size="lg"
              >
                Lanjut Bayar
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
