import React, { useState, useEffect } from "react";
import { Container, Row, Col, Stack, Button, Card, Modal, Form } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import NavbarComponent from "../../../components/Header/NavbarComponent";
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const [dataUser, setDataUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`https://skypass-dev.up.railway.app/user/whoami`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data.data.user;
        setDataUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProfile();
  }, []);

  const openModal = () => {
    setShowModal(true);
    setNewName(dataUser?.name || "");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const updateName = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = JSON.stringify({
        name: newName,
      });

      const config = {
        method: "put",
        url: `https://skypass-dev.up.railway.app/user/${dataUser?.id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(response.data);

      // Update the name in the dataUser state
      setDataUser({ ...dataUser, name: newName });

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarComponent />
      <Container className="h-100">
        <h3 className="my-4 fw-bold">Akun</h3>
        <Row className="mb-3">
          <Col>
            <Stack className="stack-back rounded">
              <Link to="/" className="text-decoration-none">
                <p className="fs-5 text-light mt-2 ms-2">
                  <IoArrowBack /> <b>Beranda</b>
                </p>
              </Link>
            </Stack>
          </Col>
        </Row>
        <hr className="custom-hr" />
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5" className="fw-bold">
                Data Diri
              </Card.Header>
              <Card.Body>
                <p>Nama: {dataUser?.name}</p>
                <p>Nomor Telepon: {dataUser?.phone}</p>
                <p>Email: {dataUser?.email}</p>
                <Button variant="light" onClick={openModal}>
                  Ubah Nama
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Nama</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNewName">
              <Form.Label>Nama Baru</Form.Label>
              <Form.Control type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={updateName}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
