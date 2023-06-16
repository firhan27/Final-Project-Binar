import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const CheckoutForm = () => {
  const [fullName, setFullName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data pemesanan yang diisi
  };

  return (
    <Container>
      <h4
        className=""
        style={{
          color: "#000000",
          fontSize: "20px",
          fontWeight: "700",
          fontHeight: "30px",
        }}
      >
        {" "}
        Isi Data Pemesanan
      </h4>
      <h5
        className="text-white p-2 mt-3"
        style={{
          backgroundColor: "#303030",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          fontSize: "16px",
          fontWeight: "500",
          fontHeight: "24px",
        }}
      >
        Data Diri Pemesanan
      </h5>

      <div className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullName" className="p-2">
            <Form.Label
              style={{
                color: "#4B1979",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Nama Lengkap
            </Form.Label>
            <Form.Control
              className="rounded-1"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="familyName" className="p-2">
            <Form.Label
              style={{
                color: "#4B1979",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Nama Keluarga
            </Form.Label>
            <Form.Control
              className="rounded-1"
              type="text"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber" className="p-2">
            <Form.Label
              style={{
                color: "#4B1979",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Nomor Telepon
            </Form.Label>
            <Form.Control
              className="rounded-1"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email" className="p-2">
            <Form.Label
              style={{
                color: "#4B1979",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              className="rounded-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default CheckoutForm;
