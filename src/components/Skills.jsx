import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import front from "../assets/img/front.png";
import node from "../assets/img/node.png";
import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";

import css from "../assets/img/css.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades Técnicas</h2>
              <br />
              <p>
                Soy un desarrollador web con experiencia en React, HTML,
                Javascript, CSS, Nodejs, Python, MySQL, MongoDB . Con
                habilidades para desarrollar soluciones creativas y escalables
                utilizando estas tecnologías. Me apasiona aprender nuevas
                tecnologías y aplicarlas para resolver problemas de manera
                eficiente y efectiva.{" "}
              </p>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={2000}
              >
                <div className="item">
                  <img className="front" src={front} alt="front" />
                  <h5>Front end</h5>
                </div>
                <div className="item">
                  <img className="node" src={node} alt="foto" />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img className="rc" src={react} alt="foto" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img className="jv" src={javascript} alt="foto" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img className="cs" src={css} alt="foto" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
              <br />
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};
