import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinationButton.css";
import { Col, Row } from "react-bootstrap";

const FavoriteDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState("all");

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <h4>Destinasi Favorit</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-evenly mt-4">
            <div className="btn-group">
              <button className={`btn ${selectedDestination === "all" ? "btn-selected" : ""} ms-3`} onClick={() => handleDestinationClick("all")}>
                Semua
              </button>
              <button className={`btn ${selectedDestination === "asia" ? "btn-selected" : ""} ms-3`} onClick={() => handleDestinationClick("asia")}>
                Asia
              </button>
              <button className={`btn ${selectedDestination === "amerika" ? "btn-selected" : ""} ms-3`} onClick={() => handleDestinationClick("amerika")}>
                Amerika
              </button>
              <button className={`btn ${selectedDestination === "australia" ? "btn-selected" : ""} ms-3`} onClick={() => handleDestinationClick("australia")}>
                Australia
              </button>
              <button className={`btn ${selectedDestination === "eropa" ? "btn-selected" : ""} ms-3`} onClick={() => handleDestinationClick("eropa")}>
                Eropa
              </button>
              <button className={`btn ${selectedDestination === "afrika" ? "btn-selected" : ""} ms-3`} onClick={() => handleDestinationClick("afrika")}>
                Afrika
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FavoriteDestinations;
