import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import adultVector from "../../assets/image/adultVector.png";
import childVector from "../../assets/image/childVector.png";
import infantVector from "../../assets/image/infantVector.png";
import "./FlightBookingForm.css";

const PassengerComponent = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPassengers, setSelectedPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handlePassengerChange = (event) => {
    const { name, value } = event.target;
    setSelectedPassengers((prevPassengers) => ({
      ...prevPassengers,
      [name]: parseInt(value),
    }));
  };

  const renderSelectedPassengers = () => {
    const { adults, children, infants } = selectedPassengers;
    let selectedPassengersString = "";

    if (adults > 0) {
      selectedPassengersString += ` ${adults} Dewasa`;
    }
    if (children > 0) {
      selectedPassengersString += ` ,${children} Anak`;
    }
    if (infants > 0) {
      selectedPassengersString += ` ,${infants} Bayi`;
    }

    return selectedPassengersString.trim();
  };

  const handleClick = () => {
    props.dataSelect(selectedPassengers);
    handleClose();
  };

  return (
    <>
      <Form.Control type="text" readOnly value={renderSelectedPassengers()} onClick={handleShow} />
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pilih Penumpang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="adults" className="mb-2">
              <img src={adultVector} alt="adult" className="font-button font-size img-size" />
              <Form.Label>Dewasa</Form.Label>
              <Form.Control type="number" min="0" name="adults" value={selectedPassengers.adults} onChange={handlePassengerChange} />
            </Form.Group>

            <Form.Group controlId="children" className="mb-2">
              <img src={childVector} alt="adult" className="font-button font-size img-size" />
              <Form.Label>Anak</Form.Label>
              <Form.Control type="number" min="0" name="children" value={selectedPassengers.children} onChange={handlePassengerChange} />
            </Form.Group>

            <Form.Group controlId="infants" className="mb-2">
              <img src={infantVector} alt="adult" className="font-button font-size img-size" />
              <Form.Label>Bayi</Form.Label>
              <Form.Control type="number" min="0" name="infants" value={selectedPassengers.infants} onChange={handlePassengerChange} />
            </Form.Group>
            <Button onClick={handleClick}>Ok</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PassengerComponent;
