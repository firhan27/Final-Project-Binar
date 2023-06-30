import React, { useState, useEffect } from "react";
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
import axios from "axios";
import client from "../../../api/axios"

const Notifikasi = () => {
  const [notifications, setNotifications] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await client.get(`/notifications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data.data.notifications;

        setNotifications(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProfile();
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
        <h3 className="my-4 fw-bold">Notifikasi</h3>
        <Row>
          <Row className="mb-3">
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
          </Row>
          <hr className="custom-hr" />
          {notifications.length > 0 &&
            notifications.map((notif, i) => {
              const createdAt = new Date(notif.createdAt);
              const formattedDate = createdAt.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

              return (
                <Row key={i}>
                  <Col md={1} xs={2} className="d-flex justify-content-end">
                    <div>
                      <img src={notifikationsIcon} alt="notifikasiIcon" />
                    </div>
                  </Col>
                  <Col xs={8}>
                    <p className="txt-mute">
                      {notif.notif_type}
                      <br />
                      <span className="txt-dark fw-bold fs-6">{notif.title}</span>
                      <br />
                      <span className="txt-dark fw-semibold">{notif.body}</span>
                    </p>
                  </Col>
                  <Col xs={2}>
                    <p className="txt-mute">{formattedDate}</p>
                  </Col>
                  <hr className="custom-hr" />
                </Row>
              );
            })}
        </Row>
      </Container>
      <ModalFilter showModal={showFilterModal} handleCloseModal={handleCloseFilterModal} />
      <ModalSearch showModal={showSearchModal} handleCloseModal={handleCloseSearchModal} />
    </>
  );
};

export default Notifikasi;
