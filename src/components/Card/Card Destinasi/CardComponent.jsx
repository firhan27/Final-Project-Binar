import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardDestination.css";

const CardDestination = () => {
  return (
    <Card style={{ width: "18rem" }} className="mt-4 mb-5 Card-component" bg="light">
      <Link>
        <Card.Img variant="top" src="https://lombokpost.jawapos.com/wp-content/uploads/2022/02/asap-beracun-di-bangkok-menurun-namun-tetap-berbahaya_c_279837-750x500-1.jpg" />
      </Link>
      <Card.Body className="">
        <Card.Title className="fw-bold">Jakarta-Bangkok</Card.Title>
        <Card.Text className="fw-bold text text-color">AirAsia</Card.Text>
        <Card.Text className="text">20 - 30 Maret 2023</Card.Text>
        <Card.Text className="text">
          Mulai dari <span className="fw-bold text-danger">IDR 950.000</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardDestination;
