import React from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "./FlightBookingForm.css";

class FlightBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      passengers: 1,
      seatClass: "economy",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan tindakan sesuai dengan data yang diisi
  };

  render() {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="from">
                    <Form.Label>From</Form.Label>
                    <Form.Control as="select" name="from" value={this.state.from} onChange={this.handleInputChange}>
                      <option value="">Select Origin</option>
                      {/* Daftar negara asal */}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="to">
                    <Form.Label>To</Form.Label>
                    <Form.Control as="select" name="to" value={this.state.to} onChange={this.handleInputChange}>
                      <option value="">Select Destination</option>
                      {/* Daftar negara tujuan */}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="departureDate">
                    <Form.Label>Departure Date</Form.Label>
                    <Form.Control type="date" name="departureDate" value={this.state.departureDate} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="returnDate">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control type="date" name="returnDate" value={this.state.returnDate} onChange={this.handleInputChange} />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group controlId="passengers">
                        <Form.Label>Passengers</Form.Label>
                        <Form.Control type="number" name="passengers" min={1} value={this.state.passengers} onChange={this.handleInputChange} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="seatClass">
                        <Form.Label>Seat Class</Form.Label>
                        <Form.Control as="select" name="seatClass" value={this.state.seatClass} onChange={this.handleInputChange}>
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
  }
}

export default FlightBookingForm;
