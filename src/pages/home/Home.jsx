import React from "react";
import NavbarComponent from "../../components/Header/NavbarComponent";
import BannerComponents from "../../components/Body/BannerComponents";
import FromTo from "../../components/Form/FromTo";
import FavoriteDestinations from "../../components/Destination/FavoriteDestinations";
import CardDestination from "../../components/Card/Card Destinasi/CardComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
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
        <Row className="mt-5 mb-5">
          <Col>
            <FromTo />
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <FavoriteDestinations />
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <CardDestination />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
};

export default Home;
