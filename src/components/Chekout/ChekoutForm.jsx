import React, { useState, useEffect } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataPassenger, setDataPassenger] = useState({
    passenger1: {
      title: "",
      fullName: "",
      familyName: "",
      dateOfBirth: "",
      nationality: "",
      idType: "",
      idIssuer: "",
      idValidity: "",
    },
    passenger2: {
      title: "",
      fullName: "",
      familyName: "",
      dateOfBirth: "",
      nationality: "",
      idType: "",
      idIssuer: "",
      idValidity: "",
    },
  });
  const [setIsRequestSent] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://skypass-dev.up.railway.app/user/whoami`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data.user;
        setDataUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Token not found");
      return;
    }

    const { passenger1, passenger2 } = dataPassenger;

    if (!passenger1.surname || !passenger1.surname.trim()) {
      toast.error("fill in your personal adult 1");
      return;
    }

    if (!passenger2.surname || !passenger2.surname.trim()) {
      toast.error("fill in your personal adult 2");
      return;
    }

    const postData = {
      passengers: [
        {
          name: passenger1.fullName,
          surname: passenger1.surname,
          gender: true,
          valid_until: passenger1.idValidity,
          country_publication: passenger1.idIssuer,
          ktp_passport: passenger1.idType,
          citizenship: passenger1.nationality,
          bod: passenger1.dateOfBirth,
          passenger_type: "adult",
        },
        {
          name: passenger2.fullName,
          surname: passenger2.surname,
          gender: false,
          valid_until: passenger2.idValidity,
          country_publication: passenger2.idIssuer,
          ktp_passport: passenger2.idType,
          citizenship: passenger2.nationality,
          bod: passenger2.dateOfBirth,
          passenger_type: "adult",
        },
        /*  {
          name: "John",
          surname: "Doe",
          gender: true,
          valid_until: "2023-12-31T00:00:00.000Z",
          country_publication: "United States",
          ktp_passport: "ABCD1234",
          citizenship: "US",
          bod: "1990-01-01",
          passenger_type: "adult",
        },
        {
          name: "Jane",
          surname: "Doe",
          gender: false,
          valid_until: "2024-06-30T00:00:00.000Z",
          country_publication: "United Kingdom",
          ktp_passport: "EFGH5678",
          citizenship: "UK",
          bod: "1995-05-10",
          passenger_type: "adult",
        }, */
      ],
      information: {
        tax: 100000,
        total_price: 500000,
        flight_id: 2682,
      },
    };

    const isValidDate1 = !isNaN(
      Date.parse(dataPassenger.passenger1.dateOfBirth)
    );
    const isValidDate2 = !isNaN(
      Date.parse(dataPassenger.passenger2.dateOfBirth)
    );

    if (!isValidDate1 || !isValidDate2) {
      toast.error("Tanggal yang dimasukkan tidak valid");
      return;
    }

    try {
      const response = await axios.post(
        "https://skypass-dev.up.railway.app/booking",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setIsRequestSent(true); // Permintaan terkirim
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized: Please check your token");
        } else if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Request failed with status code 403");
        }
      } else {
        toast.error(error.message);
      }
      setIsRequestSent(false); // Permintaan gagal
    }
  };

  const handleChange = (e, passenger) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDataPassenger((prevState) => ({
      ...prevState,
      [passenger]: {
        ...prevState[passenger],
        [name]: value,
      },
    }));
  };

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
              <Form>
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
                    value={dataUser?.name}
                    disabled
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
                    value={dataUser ? dataUser.familyName : "Skypass Test"}
                    disabled
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
                    value={dataUser?.phone}
                    disabled
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
                    value={dataUser?.email}
                    disabled
                  />
                </Form.Group>
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
                  name="title"
                  value={dataPassenger.passenger1.title}
                  onChange={(e) => handleChange(e, "passenger1")}
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
                  name="fullName"
                  value={dataPassenger.passenger1.fullName}
                  onChange={(e) => handleChange(e, "passenger1")}
                />
              </Form.Group>

              <Form.Group controlId="surname1" className="p-2">
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
                  name="surname"
                  value={dataPassenger.passenger1.surname}
                  onChange={(e) => handleChange(e, "passenger1")}
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
                  name="dateOfBirth"
                  value={dataPassenger.passenger1.dateOfBirth}
                  onChange={(e) => handleChange(e, "passenger1")}
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
                  name="nationality"
                  value={dataPassenger.passenger1.nationality}
                  onChange={(e) => handleChange(e, "passenger1")}
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
                  name="idType"
                  value={dataPassenger.passenger1.idType}
                  onChange={(e) => handleChange(e, "passenger1")}
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
                  name="idIssuer"
                  value={dataPassenger.passenger1.idIssuer}
                  onChange={(e) => handleChange(e, "passenger1")}
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
                  name="idValidity"
                  value={dataPassenger.passenger1.idValidity}
                  onChange={(e) => handleChange(e, "passenger1")}
                />
              </Form.Group>

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
                  name="title"
                  value={dataPassenger.passenger2.title}
                  onChange={(e) => handleChange(e, "passenger2")}
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
                  name="fullName"
                  value={dataPassenger.passenger2.fullName}
                  onChange={(e) => handleChange(e, "passenger2")}
                />
              </Form.Group>

              <Form.Group controlId="surname2" className="p-2">
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
                  name="surname"
                  value={dataPassenger.passenger2.surname}
                  onChange={(e) => handleChange(e, "passenger2")}
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
                  name="dateOfBirth"
                  value={dataPassenger.passenger2.dateOfBirth}
                  onChange={(e) => handleChange(e, "passenger2")}
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
                  name="nationality"
                  value={dataPassenger.passenger2.nationality}
                  onChange={(e) => handleChange(e, "passenger2")}
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
                  name="idType"
                  value={dataPassenger.passenger2.idType}
                  onChange={(e) => handleChange(e, "passenger2")}
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
                  name="idIssuer"
                  value={dataPassenger.passenger2.idIssuer}
                  onChange={(e) => handleChange(e, "passenger2")}
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
                  name="idValidity"
                  value={dataPassenger.passenger2.idValidity}
                  onChange={(e) => handleChange(e, "passenger2")}
                />
              </Form.Group>

              <Card className="border-0" style={{ background: "none" }}>
                <Button
                  type="submit"
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

              {/*   {isRequestSent && (
                <p>Terima kasih, permintaan Anda berhasil terkirim!</p>
              )}
              {!isRequestSent && <p>Permintaan gagal. Silakan coba lagi.</p>} */}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CheckoutForm;
