import React, { useState } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import NavbarComponent from "../../../components/Header/NavbarComponent";
import { IoArrowBack } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import "./notifikasi.css";
import ModalFilter from "../../../components/Modal/Modal Filter/ModalFilter";
import ModalSearch from "../../../components/Modal/Modal Search/ModalSearch";
import notifikationsIcon from "../../../assets/image/notificationsIcon.png";

const Notifikasi = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleShowFilterModal = () => {
    setShowFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  const handleShowSearchModal = () => {
    setShowSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <>
      <NavbarComponent />
      <Container className="h-100 ">
        <h3 className="my-4 fw-bold">Notifikasi</h3>
        <Row>
          <Col md={10}>
            <Stack className="card">
              <Link to="/" className="text-decoration-none">
                <p className="fs-5 text-light mt-2 ms-2">
                  <IoArrowBack /> <b>Beranda</b>
                </p>
              </Link>
            </Stack>
          </Col>
          <Col md={2}>
            <div className="d-flex align-items-center">
              <Button variant="light" className="fs-6 line-btn-fltr" onClick={handleShowFilterModal}>
                <FiFilter /> <b>Filter</b>
              </Button>
              <p
                className="ms-4 mt-2 fs-4"
                onClick={handleShowSearchModal}
                style={{ cursor: "pointer" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "purple";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "";
                }}
              >
                <ImSearch />
              </p>
            </div>
          </Col>
          <hr className="custom-hr" />
          <Row>
            <Col md={1} className="d-flex justify-content-end">
              <div>
                <img src={notifikationsIcon} alt="notifikasiIcon" />
              </div>
            </Col>
            <Col md={9}>
              <p className="txt-mute ">
                Promosi
                <br />
                <span className="txt-dark fw-semibold">Dapatkan Potongan 50% Tiket!</span>
                <br />
                Syarat dan Ketentuan berlaku!
              </p>
            </Col>
            <Col md={2}>
              <p className="txt-mute">20 maret, 14:04</p>
            </Col>
          </Row>
        </Row>
      </Container>
      <ModalFilter showModal={showFilterModal} handleCloseModal={handleCloseFilterModal} />
      <ModalSearch showModal={showSearchModal} handleCloseModal={handleCloseSearchModal} />
    </>
  );
};

export default Notifikasi;
