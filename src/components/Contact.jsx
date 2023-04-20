import { useState } from "react";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setStatus({ success: true, message: "Mensaje enviado con éxito" });
          console.log(result.text);
        },
        (error) => {
          setStatus({
            success: false,
            message:
              "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Contacto</h2>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="--form-control --card --flex-center --dir-column"
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Nombre"
                          name="user_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Apellido"
                          name="user_lastname"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="phone"
                          placeholder="Telefono"
                          name="user_phone"
                          required
                        />
                      </Col>

                      <textarea
                        name="message"
                        placeholder="Mensaje"
                        cols="30"
                        rows="10"
                      ></textarea>

                      <Col>
                        <button type="submit" className="--btn--btn-primary">
                          Enviar mensaje
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
