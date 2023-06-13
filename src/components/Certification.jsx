import React from "react";
import g4 from "../assets/img/frontend-g4.png";
import cpython from "../assets/img/curso-python.png";
import mkt from "../assets/img/gogle-mkt.png";
import itin from "../assets/img/itin.png";
import tecnologico from "../assets/img/tecnologico.jpg";
import cisco from "../assets/img/cisco.png";
import github from "../assets/img/github.png";
import "../App.css";

function Certification() {
  return (
    <section className="academic" id="certification">
      <h2 className="section-title ">Formación académica</h2>
      <div className="courses image-container">
        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={itin} alt="itin logo" />
            </li>
            <li className="course-title">
              <h4>Ingeniería en Tecnologías de la Información</h4>
            </li>
            <li className="course-subtitle">
              <p>
                2023 - Octavo Semestre
                <br />
                En Curso ESPE
              </p>
            </li>
          </ul>
        </div>

        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={g4} alt="UFPR logo" />
            </li>
            <li className="course-title">
              <h4>Formación Frontend</h4>
            </li>
            <li className="course-subtitle">
              <p>
                2023 - ORACLE ONE <br />
                Alura Latam
              </p>
            </li>
          </ul>
        </div>

        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={cpython} alt="cpython" />
            </li>
            <li className="course-title">
              <h4>Curso profesional de Python</h4>
            </li>
            <li className="course-subtitle">
              <p>2023 - CódigoFacilito</p>
            </li>
          </ul>
        </div>
        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={github} alt="github" />
            </li>
            <li className="course-title">
              <h4>Git y Github</h4>
            </li>
            <li className="course-subtitle">
              <p>2022 - Alura Latam</p>
            </li>
          </ul>
        </div>
        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={cisco} alt="cisco" />
            </li>
            <li className="course-title">
              <h4>Introduction to Packet Tracer</h4>
            </li>
            <li className="course-subtitle">
              <p>2021- CISCO</p>
            </li>
          </ul>
        </div>
        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={tecnologico} alt="UFPR logo" />
            </li>
            <li className="course-title">
              <h4>Tecnólogo en Administración de Empresas</h4>
            </li>
            <li className="course-subtitle">
              <p>2019 - ITSHCPP</p>
            </li>
          </ul>
        </div>
        <div className="courses-box">
          <ul>
            <li className="course-img">
              <img src={mkt} alt="mkt" />
            </li>
            <li className="course-title">
              <h4>Curso Básico Marketing Digital</h4>
            </li>
            <li className="course-subtitle">
              <p>2018-Google Activate</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Certification;
