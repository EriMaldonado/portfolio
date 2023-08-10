import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import erick from "../assets/img/erick.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Front-End"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1gXI7zEpXMXj7XylLQo3cpBuyaEwIab-B/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Bienvenido a mi portafolio personal
                  </span>
                  <h1>
                    {`Hi! I'm Erick`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Developer", "Front-End"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p style={{ textAlign: "justify" }}>
                  Como profesional en Tecnologías de la Información, me caracterizo por ser proactivo y comprometido. Valoro el trabajo en equipo y enfrento los desafíos como oportunidades para crecer y alcanzar mis objetivos. Siempre busco ampliar mis conocimientos y mejorar mis habilidades, aprovechando al máximo las herramientas y recursos a mi disposición.
                  </p>
                  <button onClick={handleDownload}>
                    Descargar Hoja de Vida <ArrowRightCircle size={25} />
                  </button>
                  <button onClick={() => (window.location.href = "#connect")}>
                    Contacto <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img className="foto" src={erick} alt="foto" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
