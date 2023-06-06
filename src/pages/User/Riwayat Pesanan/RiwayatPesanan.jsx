import React, { useState } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import NavbarComponent from "../../../components/Header/NavbarComponent";
import { IoArrowBack } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import "./RiwayatPenanan.css";
import ModalFilter from "../../../components/Modal/Modal Filter/ModalFilter";
import ModalSearch from "../../../components/Modal/Modal Search/ModalSearch";

const RiwayatPesanan = () => {
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
      <Container>
        <h3 className="my-4">Riwayat Pemesanan</h3>
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
              <p className="ms-4 mt-2 fs-4" onClick={handleShowSearchModal}>
                <ImSearch />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalFilter showModal={showFilterModal} handleCloseModal={handleCloseFilterModal} />
      <ModalSearch showModal={showSearchModal} handleCloseModal={handleCloseSearchModal} />
    </>
  );
};

export default RiwayatPesanan;
