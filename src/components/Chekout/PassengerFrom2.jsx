import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";

const PassengerForm2 = () => {
  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [idType, setIdType] = useState("");
  const [idIssuer, setIdIssuer] = useState("");
  const [idValidity, setIdValidity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data penumpang yang diisi
  };

  return (
    <Container>
      <h5
        className="text-white p-2 mt-4"
        style={{
          backgroundColor: "#303030",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          fontSize: "16px",
          fontWeight: "500",
          fontHeight: "24px",
        }}
      >
        Data Penumpang 2 - Adult
      </h5>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="p-2">
          <Form.Label
            style={{
              color: "#4B1979",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Title
          </Form.Label>
          <Form.Control
            className="rounded-1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

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

        <Form.Group controlId="dateOfBirth" className="p-2">
          <Form.Label
            style={{
              color: "#4B1979",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Tanggal Lahir
          </Form.Label>
          <Form.Control
            className="rounded-1"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="nationality" className="p-2">
          <Form.Label
            style={{
              color: "#4B1979",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Kewarganegaraan
          </Form.Label>
          <Form.Control
            className="rounded-1"
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="idType" className="p-2">
          <Form.Label
            style={{
              color: "#4B1979",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            KTP/Paspor
          </Form.Label>
          <Form.Control
            className="rounded-1"
            type="text"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="idIssuer" className="p-2">
          <Form.Label
            style={{
              color: "#4B1979",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Nama Penerbit
          </Form.Label>
          <Form.Control
            className="rounded-1"
            type="text"
            value={idIssuer}
            onChange={(e) => setIdIssuer(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="idValidity" className="p-2">
          <Form.Label
            style={{
              color: "#4B1979",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Berlaku Selajutnya
          </Form.Label>
          <Form.Control
            className="rounded-1"
            type="date"
            value={idValidity}
            onChange={(e) => setIdValidity(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PassengerForm2;
