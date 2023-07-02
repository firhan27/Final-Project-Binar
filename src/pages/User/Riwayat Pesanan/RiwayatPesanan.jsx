import React, { useState, useEffect } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../../../components/Header/NavbarComponent";
import "./RiwayatPenanan.css";
import ModalFilter from "../../../components/Modal/Modal Filter/ModalFilter";
import ModalSearch from "../../../components/Modal/Modal Search/ModalSearch";
import DetailPesanan from "../../../components/Detail Pesanan/DetailPesanan";
import CardPesanan from "../../../components/Card/Card Pesanan/CardPesanan";
import { useLocation } from "react-router-dom";
const RiwayatPesanan = () => {
  const location = useLocation();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [bookings, setBookings] = useState([]);
  const booking_code = location.search
    ? location.search.replace("?", "").split("=")[1]
    : null;
  console.log(booking_code);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://skypass-dev.up.railway.app/booking`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data.bookings;
        // Sort the array
        data.sort((a, b) => {
          if (a.booking_code === booking_code) {
            return -1; // booking_code should come before other elements
          } else if (b.booking_code === booking_code) {
            return 1; // booking_code should come after other elements
          }
          return 0; // No change in order for other elements
        });
        console.log(data);
        setBookings(data);
      } catch (error) {
        console.log(error); // Tambahkan baris ini untuk mencetak pesan error
      }
    };
    fetchBookings();
  }, []);

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
            <Stack className="stack-back rounded">
              <Link to="/" className="text-decoration-none">
                <p className="fs-5 text-light mt-2 ms-2">
                  <IoArrowBack /> <b>Beranda</b>
                </p>
              </Link>
            </Stack>
          </Col>
          <Col md={2}>
            <div className="d-flex align-items-center">
              <Button
                variant="light"
                className="fs-6 line-btn-fltr"
                onClick={handleShowFilterModal}
              >
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
        {bookings.length > 0 && (
          <>
            <Row>
              <Col md={7}>
                {bookings.map((booking) => (
                  <CardPesanan key={booking.booking_code} booking={booking} />
                ))}
              </Col>
              <Col md={5}>
                <DetailPesanan bookings={bookings} />
              </Col>
            </Row>
          </>
        )}
      </Container>
      <ModalFilter
        showModal={showFilterModal}
        handleCloseModal={handleCloseFilterModal}
      />
      <ModalSearch
        showModal={showSearchModal}
        handleCloseModal={handleCloseSearchModal}
      />
    </>
  );
};

export default RiwayatPesanan;
