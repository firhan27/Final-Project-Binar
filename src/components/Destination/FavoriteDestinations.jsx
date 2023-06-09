import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinationButton.css";
import { Container, Col, Row } from "react-bootstrap";
import fontSearch from "../../assets/image/fontSearch.png";

const FavoriteDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState("all");

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h4>Destinasi Favorit</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-evenly mt-4 flex-wrap">
            <button className={`btn ${selectedDestination === "all" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("all")}>
              <img src={fontSearch} alt="fontSearch" className="font-image" />
              Semua
            </button>
            <button className={`btn ${selectedDestination === "asia" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("asia")}>
              <img src={fontSearch} alt="fontSearch" className="font-image" />
              Asia
            </button>
            <button className={`btn ${selectedDestination === "amerika" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("amerika")}>
              <img src={fontSearch} alt="fontSearch" className="font-image" />
              Amerika
            </button>
            <button className={`btn ${selectedDestination === "australia" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("australia")}>
              <img src={fontSearch} alt="fontSearch" className="font-image" />
              Australia
            </button>
            <button className={`btn ${selectedDestination === "eropa" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("eropa")}>
              <img src={fontSearch} alt="fontSearch" className="font-image" />
              Eropa
            </button>
            <button className={`btn ${selectedDestination === "afrika" ? "btn-selected" : ""} m-2`} onClick={() => handleDestinationClick("afrika")}>
              <img src={fontSearch} alt="fontSearch" className="font-image" />
              Afrika
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteDestinations;
