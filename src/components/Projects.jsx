import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import principal from "../assets/img/principal.png";
import webso from "../assets/img/webso.png";
import pixabay from "../assets/img/api-pixabay.png";
import alura from "../assets/img/alura-geek.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Alura-Geek",
      description: "Development React/Javascript/Bootstrap",
      imgUrl: alura,
      buttonLink: "https://erimaldonado.github.io/alura-geek",
    },
    {
      title: "Consumo API-Pixabay",
      description: "Design & Development",
      imgUrl: pixabay,
      buttonLink: "https://erimaldonado.github.io/api-pixabay/",
    },
    {
      title: "Web Sistemas Operativos",
      description: "Design & Development",
      imgUrl: webso,
      buttonLink: "https://erimaldonado.github.io/web-so/",
    },
    {
      title: "Encriptador de texto",
      description: "Development HTML5/CSS/Javascript",
      imgUrl: principal,
      buttonLink: "https://erimaldonado.github.io/encriptador/",
    },
    {
      title: "Web Sistemas Operativos",
      description: "Design & Development",
      imgUrl: webso,
      buttonLink: "https://erimaldonado.github.io/web-so/",
    },
    {
      title: "Consumo API-Pixabay",
      description: "Design & Development",
      imgUrl: pixabay,
      buttonLink: "https://erimaldonado.github.io/api-pixabay/",
    },
   ];
  const apiprojects = [
    {
      title: "Consumo API-Pixabay",
      description: "Design & Development",
      imgUrl: pixabay,
      buttonLink: "https://erimaldonado.github.io/api-pixabay/",
    },
  ];
  const templates = [
    {
      title: "Consumo API-Pixabay",
      description: "Design & Development",
      imgUrl: pixabay,
      buttonLink: "https://erimaldonado.github.io/api-pixabay/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Proyectos</h2>
                  <p>
                    Durante mi carrera he trabajado en diversos proyectos que me
                    ha permitido adquirir habilidades en diferentes areas del
                    desarrollo web. En está sección encontraras una selección de
                    mis proyectos cada uno con su propia historia y desafíos
                    únicos
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Pages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Consumo API</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Templates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {apiprojects.map((apiproject, index) => {
                            return <ProjectCard key={index} {...apiproject} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {templates.map((template, index) => {
                            return <ProjectCard key={index} {...template} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
