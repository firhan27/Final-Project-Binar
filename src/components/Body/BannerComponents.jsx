import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import banner from "../../assets/image/banner.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const BannerComponents = () => {
  return (
    <Row className="mt-4">
      <Col>
        <div id="tes">
          <Link to="/search">
            <Image src={banner} alt="banner" fluid className="img-fluid" />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default BannerComponents;
