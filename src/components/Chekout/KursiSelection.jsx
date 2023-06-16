import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const KursiSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState("");

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
  };

  const renderSeats = (seatLetter) => {
    const seats = [];
    for (let i = 1; i <= 9; i++) {
      const seatNumber = seatLetter + i;
      const seatStatus = seatNumber === selectedSeat ? "occupied" : "empty";
      const seatContent = seatStatus === "empty" ? "X" : seatNumber;

      seats.push(
        <Button
          key={seatNumber}
          variant={seatStatus === "occupied" ? "success" : "outline-success"}
          onClick={() => handleSeatSelection(seatNumber)}
          style={{
            margin: "2px",
            backgroundColor: seatStatus === "occupied" ? "#73CA5C" : undefined,
            borderColor: "#73CA5C",
            color: seatStatus === "occupied" ? "white" : undefined,
          }}
        >
          {seatContent}
        </Button>
      );
    }
    return seats;
  };

  return (
    <Container>
      <h4
        style={{
          color: "#000000",
          fontSize: "20px",
          fontWeight: "700",
          fontHeight: "30px",
        }}
      >
        Pilih Kursi
      </h4>
      <Row>
        <Col className="p-0 m-0">
          <Card
            className="rounded-1 mb-4 mt-2"
            style={{ backgroundColor: "#73CA5C", border: "none" }}
          >
            <Card.Body>
              <p
                className="text-center text-white p-0 m-0 "
                style={{
                  fontStyle: "normal",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                Economy - 64 Seats Available
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Container
        className="text-center"
        style={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "20px",
          color: "#8A8A8A",
        }}
      >
        <Row>
          <Col className="p-0 m-0">
            <h5>A</h5>
            {renderSeats("A")}
          </Col>
          <Col className="p-0 m-0">
            <h5>B</h5>
            {renderSeats("B")}
          </Col>
          <Col className="p-0 m-0">
            <h5>C</h5>
            {renderSeats("C")}
          </Col>
          <Col className="p-0 m-0">
            <h5>D</h5>
            {renderSeats("D")}
          </Col>
          <Col className="p-0 m-0">
            <h5>E</h5>
            {renderSeats("E")}
          </Col>
          <Col className="p-0 m-0">
            <h5>F</h5>
            {renderSeats("F")}
          </Col>
        </Row>
        <div className="text-start mt-3">
          <p>Kursi yang dipilih: {selectedSeat}</p>
        </div>
      </Container>
    </Container>
  );
};

export default KursiSelection;
