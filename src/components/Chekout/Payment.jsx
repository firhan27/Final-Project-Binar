import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Collapse, Form } from "react-bootstrap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Detail from "./Detail";

const Payment = ({ formData }) => {
  const [collapseStates, setCollapseStates] = useState({
    gopay: false,
    virtualAccount: false,
    creditCard: false,
  });

  const handleCollapse = (key) => {
    setCollapseStates((prevCollapseStates) => ({
      ...prevCollapseStates,
      [key]: !prevCollapseStates[key],
    }));
  };

  const renderCollapse = (key) => {
    return (
      <Collapse in={collapseStates[key]}>
        <Container className="w-75">
          <Card className="border-0" style={{ background: "none" }}>
            <Card.Body>
              <b>Card Number</b>
              <Form.Control className="mt-1 border-0 shadow-none" placeholder="4480 0000 0000 0000" />
              <hr className="mt-1" />
              <b>Card Holder Name</b>
              <Form.Control className="mt-1 border-0 shadow-none" placeholder="John Doe" />
              <hr className="mt-1" />
              <Row>
                <Col>
                  <b>CVV</b>
                  <Form.Control className="mt-1 border-0 shadow-none" placeholder="000" />
                  <hr className="mt-1" />
                </Col>
                <Col>
                  <b>Expiry Date</b>
                  <Form.Control className="mt-1 border-0 shadow-none" placeholder="07/24" />
                  <hr className="mt-1" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Collapse>
    );
  };

  return (
    <>
      {/* notif */}
      <Container fluid className="p-0 m-0 shadow py-4">
        <Container>
          <Row className="mt-5">
            <Row className="mb-1">
              <Col className="d-flex align-items-center">
                <Button
                  className="border-0 fs-5 fw-bold"
                  style={{
                    background: "none",
                    color: "#000000",
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
                  className=" border-0 fs-5 fw-bold"
                  style={{
                    background: "none",
                    color: "#000000",
                    fontHeight: "30px",
                  }}
                >
                  {" "}
                  Bayar
                </Button>
                <FaAngleRight
                  className=""
                  size={20}
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginBottom: "-3px",
                  }}
                />
                <Button
                  className="border-0 fs-5 fw-bold"
                  style={{
                    background: "none",
                    color: "#000000",
                    fontHeight: "30px",
                  }}
                >
                  {" "}
                  Selesai
                </Button>
              </Col>
            </Row>

            <Col>
              <Card className="p-0 m-0" style={{ backgroundColor: "red", borderRadius: "12px" }}>
                <Card.Body>
                  <p
                    className="text-center text-white p-0 m-0 fw-bold "
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Selesaikan Pembayaran
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Payment */}
      <Container>
        <Row>
          <Col sm={8}>
            <h4
              className="mt-5 fw-bold fs-5"
              style={{
                color: "#000000",
                lineHeight: "30px",
              }}
            >
              Isi Data Pembayaran
            </h4>

            <Card className="border-0 mb-3 mt-3" style={{ background: "none" }}>
              <Button
                className="p-3 text-start d-flex justify-content-between align-items-center border-0 text-white "
                style={{
                  background: collapseStates.gopay ? "#7126B5" : "#3C3C3C",
                  padding: "10px 15px",
                  textAlign: "start",
                }}
                onClick={() => handleCollapse("gopay")}
                aria-expanded={collapseStates.gopay}
              >
                Gopay {collapseStates.gopay ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
              </Button>
              {renderCollapse("gopay")}
            </Card>

            <Card className="border-0 mb-3" style={{ background: "none" }}>
              <Button
                className="p-3 text-start d-flex justify-content-between align-items-center border-0 text-white"
                style={{
                  background: collapseStates.virtualAccount ? "#7126B5" : "#3C3C3C",
                  padding: "10px 15px",
                  textAlign: "start",
                }}
                onClick={() => handleCollapse("virtualAccount")}
                aria-expanded={collapseStates.virtualAccount}
              >
                Virtual Account {collapseStates.virtualAccount ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
              </Button>
              {renderCollapse("virtualAccount")}
            </Card>

            <Card className="border-0" style={{ background: "none" }}>
              <Button
                className="p-3 text-start d-flex justify-content-between align-items-center border-0 text-white"
                style={{
                  background: collapseStates.creditCard ? "#7126B5" : "#3C3C3C",
                  padding: "10px 15px",
                  textAlign: "start",
                }}
                onClick={() => handleCollapse("creditCard")}
                aria-expanded={collapseStates.creditCard}
              >
                Credit Card {collapseStates.creditCard ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
              </Button>
              {renderCollapse("creditCard")}
            </Card>

            <Card className="border-0 text-white" style={{ background: "none" }}>
              <Button
                className="mt-4 p-3 border-0 fw-bold fs-5 text-white"
                style={{
                  background: "#7126B5",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
                size="lg"
              >
                Bayar
              </Button>
            </Card>
          </Col>

          <Col sm={4}>
            <Detail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
