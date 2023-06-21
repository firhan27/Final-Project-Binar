import React, { useState } from "react";
import { Form, Row, Col, Button, Modal, Card, Container } from "react-bootstrap";
import "./FlightBookingForm.css";
import planeVector from "../../assets/image/planeVector.png";
import dateVector from "../../assets/image/dateVector.png";
import passangerVector from "../../assets/image/passangerVector.png";

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    seatClass: "Economy",
  });

  const [showModal, setShowModal] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = (field) => {
    setActiveField(field);
    setShowModal(true);
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
                    <Form.Group controlId="from">
                      <img src={planeVector} alt="plane" className="font-button" />
                      <Form.Label>From</Form.Label>
                      <Form.Control type="text" name="from" value={formData.from} onClick={() => handleModalOpen("from")} readOnly />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="to">
                      <img src={planeVector} alt="plane" className="font-button" />
                      <Form.Label>To</Form.Label>
                      <Form.Control type="text" name="to" value={formData.to} onClick={() => handleModalOpen("to")} readOnly />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Group controlId="departureDate">
                      <img src={dateVector} alt="date" className="font-button font-size" />
                      <Form.Label>Departure Date</Form.Label>
                      <Form.Control type="text" name="departureDate" value={formData.departureDate} onClick={() => handleModalOpen("departureDate")} readOnly />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="returnDate">
                      <img src={dateVector} alt="date" className="font-button font-size" />
                      <Form.Label>Return Date</Form.Label>
                      <Form.Control type="text" name="returnDate" value={formData.returnDate} onClick={() => handleModalOpen("returnDate")} readOnly />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="passengers">
                      <img src={passangerVector} alt="passanger" className="font-button" />
                      <Form.Label>Passengers</Form.Label>
                      <Form.Control type="text" name="passengers" value={formData.passengers} onClick={() => handleModalOpen("passengers")} readOnly />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="seatClass">
                      <img src={passangerVector} alt="passanger" className="font-button" />
                      <Form.Label>Seat Class</Form.Label>
                      <Form.Control type="text" name="seatClass" value={formData.seatClass} onClick={() => handleModalOpen("seatClass")} readOnly />
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

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Flight Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeField === "from" && (
            <Form.Group controlId="from">
              <Form.Label>From</Form.Label>
              <Form.Control as="select" name="from" value={formData.from} onChange={handleInputChange}></Form.Control>
            </Form.Group>
          )}

          {activeField === "to" && (
            <Form.Group controlId="to">
              <Form.Control type="search" placeholder="Masukkan Kota atau Negara" name="to" value={formData.to} onChange={handleInputChange} />
            </Form.Group>
          )}
          {activeField === "departureDate" && <Form.Control type="date" name="departureDate" value={formData.departureDate} onChange={handleInputChange} />}
          {activeField === "returnDate" && (
            <Form.Group controlId="returnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} />
            </Form.Group>
          )}
          {activeField === "passengers" && (
            <Form.Group controlId="passengers">
              <Form.Label>Passengers</Form.Label>
              <Form.Control type="number" name="passengers" min={1} value={formData.passengers} onChange={handleInputChange} />
            </Form.Group>
          )}
          {activeField === "seatClass" && (
            <Form.Group controlId="seatClass">
              <Form.Label>Seat Class</Form.Label>
              <Form.Control as="select" name="seatClass" value={formData.seatClass} onChange={handleInputChange}>
                <option value="Economy">Economy Class</option>
                <option value="Business">Business Class</option>
              </Form.Control>
            </Form.Group>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FlightBookingForm;
