import React from "react";
import { Modal, Form } from "react-bootstrap";
const ModalSearch = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      {/* Konten modal */}
      <Modal.Header closeButton>
        <Form.Control type="text" placeholder="Masukkan Nomor Penerbangan" />
      </Modal.Header>
    </Modal>
  );
};

export default ModalSearch;
