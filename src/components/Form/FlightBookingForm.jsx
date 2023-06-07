import React, { useState } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "./FlightBookingForm.css";

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    seatClass: "economy",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions based on the filled data
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="from">
                  <Form.Label>From</Form.Label>
                  <Form.Control as="select" name="from" value={formData.from} onChange={handleInputChange}>
                    <option value="">Select Origin</option>
                    {/* List of origin countries */}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="to">
                  <Form.Label>To</Form.Label>
                  <Form.Control as="select" name="to" value={formData.to} onChange={handleInputChange}>
                    <option value="">Select Destination</option>
                    {/* List of destination countries */}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="departureDate">
                  <Form.Label>Departure Date</Form.Label>
                  <Form.Control type="date" name="departureDate" value={formData.departureDate} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="returnDate">
                  <Form.Label>Return Date</Form.Label>
                  <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group controlId="passengers">
                      <Form.Label>Passengers</Form.Label>
                      <Form.Control type="number" name="passengers" min={1} value={formData.passengers} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="seatClass">
                      <Form.Label>Seat Class</Form.Label>
                      <Form.Control as="select" name="seatClass" value={formData.seatClass} onChange={handleInputChange}>
                        <option value="economy">Economy Class</option>
                        <option value="business">Business Class</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Col className="p-2 text-center">
                  <Button type="submit" className="custom-button mt-4 text-light">
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
