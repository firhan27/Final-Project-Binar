import React, { useState } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "./FlightBookingForm.css";
import dateVector from "../../assets/image/dateVector.png";
import passangerVector from "../../assets/image/passangerVector.png";
import FromComponent from "./FromComponent";
import ToComponent from "./ToComponent";
import SeatClassComponent from "./SeatClassComponent";
import PassengerComponent from "./PassangerComponent";

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengersAdult: 1,
    passangerChild: 0,
    passangerInfant: 0,
    seatClass: "Economy",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container className="mt-4 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={11}>
          <Card bg="light" border="light" className="card-size">
            <h3 className="fw-bold m-4">
              Pilih Jadwal Penerbangan spesial di <span className="text-color">Tiketku!</span>
            </h3>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <FromComponent />
                  </Col>
                  <Col>
                    <ToComponent />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Group controlId="departureDate">
                      <img src={dateVector} alt="date" className="font-button font-size" />
                      <Form.Label>Departure Date</Form.Label>
                      <Form.Control type="date" name="departureDate" value={formData.departureDate} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="returnDate">
                      <img src={dateVector} alt="date" className="font-button font-size" />
                      <Form.Label>Return Date</Form.Label>
                      <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="passengers">
                      <img src={passangerVector} alt="passanger" className="font-button" />
                      <Form.Label>Passengers</Form.Label>
                      <PassengerComponent />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="passengers">
                      <img src={passangerVector} alt="passanger" className="font-button" />
                      <Form.Label>Seat Class</Form.Label>
                      <SeatClassComponent />
                    </Form.Group>
                  </Col>
                </Row>
                <Col className="p-2 text-center">
                  <Button type="button" className="custom-button mt-4 text-light w-100">
                    Cari Penerbangan
                  </Button>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FlightBookingForm;
