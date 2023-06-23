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
import CardPesanan from "../../../components/Card/Card Pesanan/CardPesanan";
import DetailPesanan from "../../../components/Detail Pesanan/DetailPesanan";

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
      <Container className="h-100 ">
        <h3 className="my-4 fw-bold">Riwayat Pemesanan</h3>
        <Row>
          <Col md={10}>
            <Stack className="stack-back">
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
          <hr />
        </Row>
        {/* <Row>
          <Col className="text-center">
            <h2 className="txt-null-clr mt-5">Oops! Riwayat pesanan kosong!</h2>
            <h3>Anda belum melakukan pemesanan penerbangan</h3>
            <Button className="mt-3">Cari Penerbangan</Button>
          </Col>
        </Row> */}
        <Row>
          <Col md={7}>
            <h5>Maret 2023</h5>
            <CardPesanan />
          </Col>
          <Col md={5}>
            <DetailPesanan />
          </Col>
        </Row>
      </Container>
      <ModalFilter showModal={showFilterModal} handleCloseModal={handleCloseFilterModal} />
      <ModalSearch showModal={showSearchModal} handleCloseModal={handleCloseSearchModal} />
    </>
  );
};

export default RiwayatPesanan;
