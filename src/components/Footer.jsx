import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Marquee from "react-fast-marquee";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} className="logo-footer" alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/erickmaldonado1"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/EriMaldonado" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>
              Copyright 2023. All Rights Reserved <br />
              Erick Maldonado
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
