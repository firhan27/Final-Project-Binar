import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComponent = () => {
  return (
    <Card style={{ width: "18rem" }} className="mt-4">
      <Link>
        <Card.Img variant="top" src="https://lombokpost.jawapos.com/wp-content/uploads/2022/02/asap-beracun-di-bangkok-menurun-namun-tetap-berbahaya_c_279837-750x500-1.jpg" />
      </Link>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
