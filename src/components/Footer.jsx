import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/erickmaldonado1" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/EriMaldonado" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
          <Col xs={12} className="text-center">
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
