import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Collapse,
  Form,
} from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

function PaymentSucces() {
  return (
    <>
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
              <div
                className="p-3 m-0"
                style={{ backgroundColor: "#73CA5C", borderRadius: "12px" }}
              >
                <Card.Body>
                  <p
                    className="text-center text-white p-0 m-0 fw-bold "
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Trimakasih atas pembayaran transaksi
                  </p>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default PaymentSucces;
