import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinationButton.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import fontSearch from "../../assets/image/fontSearch.png";

const FavoriteDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState("all");

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const destinationsAsia = [
    {
      imageSrc: "https://blog.thomascook.in/wp-content/uploads/2022/08/Most-Iconic-Landmarks-in-Singapore-1024x682.jpg",
      title: "Jakarta -> Singapore",
      airline: "Lion Air",
      date: "20 - 30 Maret 2023",
      price: "IDR 950.000",
    },
  ];

  const destinationsAmerika = [
    {
      imageSrc: "https://www.roamingtheusa.com/wp-content/uploads/2021/11/statue-of-liberty-new-york-city-skyline-1024x680.jpg",
      title: "Jakarta -> New York",
      airline: "Citilink",
      date: "20 - 30 Maret 2023",
      price: "IDR 3.950.000",
    },
  ];

  const destinationsAustralia = [
    {
      imageSrc: "https://www.planetware.com/photos-large/AUS/australia-tasmania-hobart-tasman-bridge.jpg",
      title: "Jakarta -> Hobart",
      airline: "Lion Air",
      date: "20 - 30 Maret 2023",
      price: "IDR 2.950.000",
    },
  ];

  const destinationsEropa = [
    {
      imageSrc: "https://tiqets-cdn.s3.eu-west-1.amazonaws.com/wordpress/blog/wp-content/uploads/2020/09/shutterstock_1013811547.jpg",
      title: "Jakarta -> London",
      airline: "Garuda Indonesia",
      date: "20 - 30 Maret 2023",
      price: "IDR 3.950.000",
    },
  ];

  const destinationsAfrika = [
    {
      imageSrc: "https://memnon-reisen.com/wp-content/uploads/2021/11/99.jpg",
      title: "Jakarta -> Hurghada",
      airline: "Garuda indonesia",
      date: "20 - 30 Maret 2023",
      price: "IDR 3.950.000",
    },
  ];

  let displayedDestinations = [];

  if (selectedDestination === "asia") {
    displayedDestinations = destinationsAsia;
  } else if (selectedDestination === "amerika") {
    displayedDestinations = destinationsAmerika;
  } else if (selectedDestination === "australia") {
    displayedDestinations = destinationsAustralia;
  } else if (selectedDestination === "eropa") {
    displayedDestinations = destinationsEropa;
  } else if (selectedDestination === "afrika") {
    displayedDestinations = destinationsAfrika;
  } else {
    displayedDestinations = [...destinationsAsia, ...destinationsAmerika, ...destinationsAustralia, ...destinationsEropa, ...destinationsAfrika];
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="text-position">
            <h4 className="fw-bold mb-5">Destinasi Favorit</h4>
          </Col>
        </Row>
        <Row>
          <Col className="btn-position">
            <div className="d-flex justify-content-evenly mt-4 flex-wrap">
              <button className={`btn ${selectedDestination === "all" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("all")}>
                <img src={fontSearch} alt="fontSearch" className="font-image" />
                Semua
              </button>

              <button className={`btn ${selectedDestination === "asia" ? "btn-selected" : ""} m-2 me-3`} onClick={() => handleDestinationClick("asia")}>
                <img src={fontSearch} alt="fontSearch" className="font-image" />
                Asia
              </button>
              <button className={`btn ${selectedDestination === "amerika" ? "btn-selected" : ""} m-2 me-3`} onClick={() => handleDestinationClick("amerika")}>
                <img src={fontSearch} alt="fontSearch" className="font-image" />
                Amerika
              </button>
              <button className={`btn ${selectedDestination === "australia" ? "btn-selected" : ""} m-2 me-3`} onClick={() => handleDestinationClick("australia")}>
                <img src={fontSearch} alt="fontSearch" className="font-image" />
                Australia
              </button>
              <button className={`btn ${selectedDestination === "eropa" ? "btn-selected" : ""} m-2 me-3`} onClick={() => handleDestinationClick("eropa")}>
                <img src={fontSearch} alt="fontSearch" className="font-image" />
                Eropa
              </button>
              <button className={`btn ${selectedDestination === "afrika" ? "btn-selected" : ""} m-2 me-3`} onClick={() => handleDestinationClick("afrika")}>
                <img src={fontSearch} alt="fontSearch" className="font-image" />
                Afrika
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="d-flex flex-wrap justify-content-center mt-5">
        {displayedDestinations.map((destination, index) => (
          <Card key={index} style={{ width: "18rem" }} className="mt-4 mb-5 ms-2 me-2 Card-component" bg="light">
            <Link>
              <Card.Img variant="top" src={destination.imageSrc} />
            </Link>
            <Card.Body className="">
              <Card.Title className="fw-bold">{destination.title}</Card.Title>
              <Card.Text className="fw-bold text text-color">{destination.airline}</Card.Text>
              <Card.Text className="text">{destination.date}</Card.Text>
              <Card.Text className="text">
                Mulai dari <span className="fw-bold text-danger">{destination.price}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FavoriteDestinations;
