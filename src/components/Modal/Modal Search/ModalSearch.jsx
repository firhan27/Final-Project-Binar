import React from 'react';
import { Modal, Form, Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ModalSearch = ({ showModal, handleCloseModal }) => {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        handleCloseModal(false);
        navigate(`/user/history?booking_code=${e.target[0].value}`);
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            {/* Konten modal */}
            <Row>
                <Modal.Header className="px-4" closeButton />
            </Row>
            <Row>
                <Form onSubmit={handleSearch}>
                    <Modal.Body className="px-4">
                        <Form.Control type="text" name="booking_code" placeholder="Masukkan Nomor Penerbangan" />
                        <div className="d-grid mt-3">
                            <Button type="submit" style={{ backgroundColor: '#7126b5', color: 'white' }}>
                                Search
                            </Button>
                        </div>
                    </Modal.Body>
                </Form>
            </Row>
        </Modal>
    );
};

export default ModalSearch;
