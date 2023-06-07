import React from "react";
import { Modal } from "react-bootstrap";
const ModalFilter = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Calendar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal content goes here...</p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFilter;
