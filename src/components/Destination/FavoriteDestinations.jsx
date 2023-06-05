import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinationButton.css";

const FavoriteDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState("all");

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
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
  );
};

export default FavoriteDestinations;
