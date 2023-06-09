import React from "react";
import NavbarComponent from "../../components/Header/NavbarComponent";
import BannerComponents from "../../components/Body/BannerComponents";
import FlightBookingForm from "../../components/Form/FlightBookingForm";
import FavoriteDestinations from "../../components/Destination/FavoriteDestinations";
import CardDestination from "../../components/Card/Card Destinasi/CardComponent";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Col>
            <BannerComponents />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FlightBookingForm />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FavoriteDestinations />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <CardDestination />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
