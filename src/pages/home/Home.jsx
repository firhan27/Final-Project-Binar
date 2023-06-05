import React from "react";
import NavbarComponent from "../../components/Header/NavbarComponent";
import BannerComponents from "../../components/Body/BannerComponents";
import FlightBookingForm from "../../components/Form/FlightBookingForm";
import FavoriteDestinations from "../../components/Destination/FavoriteDestinations";
import { Container, Row, Col } from "react-bootstrap";
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
        <Row>
          <Col>
            <FlightBookingForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <FavoriteDestinations />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
