import React from "react";
import { Modal, Form } from "react-bootstrap";

const ModalFilter = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>From</h5>
        <Form.Control type="date" name="FromDate" />
        <h5 className="mt-4">To</h5>
        <Form.Control type="date" name="ToDate" />
      </Modal.Body>
    </Modal>
  );
};

export default ModalFilter;
