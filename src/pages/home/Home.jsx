import React, { useEffect } from "react";
import axios from "axios";
import NavbarComponent from "../../components/Header/NavbarComponent";
import BannerComponents from "../../components/Body/BannerComponents";
import FlightBookingForm from "../../components/Form/FlightBookingForm";
import FavoriteDestinations from "../../components/Destination/FavoriteDestinations";
import CardDestination from "../../components/Card/Card Destinasi/CardComponent";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    async function getAirlinesList() {
      const options = {
        method: "GET",
        url: "https://stoplight.io/mocks/dyardh/final-project-binar/190481897/airlines",
        headers: { Accept: "application/json" },
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getAirlinesList();
  }, []);

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
