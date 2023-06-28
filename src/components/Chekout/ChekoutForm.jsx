import React, { useState } from "react";
import { Container, Form, Card, Row, Button } from "react-bootstrap";

const CheckoutForm = ({ dataUser }) => {
  const [fullName, setFullName] = useState(dataUser.name || "");
  const [familyName, setFamilyName] = useState(dataUser.familyName || "");
  const [phoneNumber, setPhoneNumber] = useState(dataUser.phoneNumber || "");
  const [email, setEmail] = useState(dataUser.email || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  /*Passenger1*/
  const [title1, setTitle1] = useState("");
  const [fullName1, setFullName1] = useState("");
  const [familyName1, setFamilyName1] = useState("");
  const [dateOfBirth1, setDateOfBirth1] = useState("");
  const [nationality1, setNationality1] = useState("");
  const [idType1, setIdType1] = useState("");
  const [idIssuer1, setIdIssuer1] = useState("");
  const [idValidity1, setIdValidity1] = useState("");

  /*Passenger2*/
  const [title2, setTitle2] = useState("");
  const [fullName2, setFullName2] = useState("");
  const [familyName2, setFamilyName2] = useState("");
  const [dateOfBirth2, setDateOfBirth2] = useState("");
  const [nationality2, setNationality2] = useState("");
  const [idType2, setIdType2] = useState("");
  const [idIssuer2, setIdIssuer2] = useState("");
  const [idValidity2, setIdValidity2] = useState("");

  return (
    <>
      <Container>
        <Card className="rounded-0" style={{ background: "none" }}>
          <Card.Body>
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
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    className="rounded-1"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="familyName" className="p-2">
                  <Form.Label>Nama Keluarga</Form.Label>
                  <Form.Control
                    className="rounded-1"
                    type="text"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="phoneNumber" className="p-2">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    className="rounded-1"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="email" className="p-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="rounded-1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <button type="submit">Simpan</button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Card className="rounded-0 mt-5" style={{ background: "none" }}>
          <Card.Body>
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
              Isi Data Penumpang
            </h4>
            <h5
              className="mt-3 text-white p-2"
              style={{
                backgroundColor: "#303030",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "16px",
                fontWeight: "500",
                fontHeight: "24px",
              }}
            >
              Data Penumpang 1 - Adult
            </h5>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title1" className="p-2">
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
                  value={title1}
                  onChange={(e) => setTitle1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="fullName1" className="p-2">
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
                  value={fullName1}
                  onChange={(e) => setFullName1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="familyName1" className="p-2">
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
                  value={familyName1}
                  onChange={(e) => setFamilyName1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="dateOfBirth1" className="p-2">
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
                  value={dateOfBirth1}
                  onChange={(e) => setDateOfBirth1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="nationality1" className="p-2">
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
                  value={nationality1}
                  onChange={(e) => setNationality1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="idType1" className="p-2">
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
                  value={idType1}
                  onChange={(e) => setIdType1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="idIssuer1" className="p-2">
                <Form.Label
                  style={{
                    color: "#4B1979",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Negara Penerbit
                </Form.Label>
                <Form.Control
                  className="rounded-1"
                  type="text"
                  value={idIssuer1}
                  onChange={(e) => setIdIssuer1(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="idValidity1" className="p-2">
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
                  value={idValidity1}
                  onChange={(e) => setIdValidity1(e.target.value)}
                />
              </Form.Group>
            </Form>

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
              <Form.Group controlId="title2" className="p-2">
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
                  value={title2}
                  onChange={(e) => setTitle2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="fullName2" className="p-2">
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
                  value={fullName2}
                  onChange={(e) => setFullName2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="familyName2" className="p-2">
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
                  value={familyName2}
                  onChange={(e) => setFamilyName2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="dateOfBirth2" className="p-2">
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
                  value={dateOfBirth2}
                  onChange={(e) => setDateOfBirth2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="nationality2" className="p-2">
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
                  value={nationality2}
                  onChange={(e) => setNationality2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="idType2" className="p-2">
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
                  value={idType2}
                  onChange={(e) => setIdType2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="idIssuer2" className="p-2">
                <Form.Label
                  style={{
                    color: "#4B1979",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Negara Penerbit
                </Form.Label>
                <Form.Control
                  className="rounded-1"
                  type="text"
                  value={idIssuer2}
                  onChange={(e) => setIdIssuer2(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="idValidity2" className="p-2">
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
                  value={idValidity2}
                  onChange={(e) => setIdValidity2(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <Row className="px-2">
        <Card className="border-0" style={{ background: "none" }}>
          <Button
            className="mt-4 p-3 border-0 fw-bold fs-5 text-white"
            style={{
              background: "#7126B5",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
            size="lg"
          >
            Simpan
          </Button>
        </Card>
      </Row>
    </>
  );
};

export default CheckoutForm;
