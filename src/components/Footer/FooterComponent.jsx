import React from "react";
import { MDBFooter, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  const iconSize = 40;

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <p>Get connected with us on social networks:</p>
        </div>

        <div>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#3b5998",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaFacebookF color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#1DA1F2",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaTwitter color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#DB4437",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaGoogle color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#E4405F",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaInstagram color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#0077B5",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaLinkedin color="white" />
          </Button>
          <Button
            className="me-4"
            style={{
              backgroundColor: "#24292e",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaGithub color="white" />
          </Button>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3"></MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
