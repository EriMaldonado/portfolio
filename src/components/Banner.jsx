import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      "https://drive.google.com/file/d/1bA9rn4AjANYVjK-FLcxqmAfYs5NI6ors/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={10}>
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
                    Como profesional en Tecnologías de la Información, me
                    caracterizo por mi compromiso y actitud proactiva. Considero
                    que el trabajo en equipo es fundamental para lograr
                    resultados sobresalientes. Los desafíos me motivan, los veo
                    como oportunidades para crecer y alcanzar mis metas. Me
                    esfuerzo continuamente por expandir mis conocimientos y
                    mejorar mis habilidades, aprovechando al máximo las
                    herramientas y recursos disponibles.
                  </p>
                  <button onClick={handleDownload}>
                    Descargar Hoja de Vida <ArrowRightCircle size={22} />
                  </button>
                  <button onClick={() => (window.location.href = "#connect")}>
                    Contacto <ArrowRightCircle size={22} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
