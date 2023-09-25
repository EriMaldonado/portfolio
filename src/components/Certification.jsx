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
          <img src={itin} alt="itin logo" />
          <h4>Ingeniería en Tecnologías de la Información</h4>
          <p>
            2023 - Octavo Semestre
            <br />
            En Curso ESPE
          </p>
        </div>

        <div className="courses-box">
          <img src={g4} alt="UFPR logo" />
          <h4>Formación Frontend</h4>
          <p>
            2023 - ORACLE ONE <br />
            Alura Latam
          </p>
        </div>

        <div className="courses-box">
          <img src={cpython} alt="cpython" />
          <h4>Curso profesional de Python</h4>
          <p>2023 - CódigoFacilito</p>
        </div>
        <div className="courses-box">
          <img src={github} alt="github" />
          <h4>Git y Github</h4>
          <p>2022 - Alura Latam</p>
        </div>
        <div className="courses-box">
          <img src={cisco} alt="cisco" />
          <h4>Introduction to Packet Tracer</h4>
          <p>2021- CISCO</p>
        </div>
        <div className="courses-box">
          <img src={tecnologico} alt="UFPR logo" />
          <h4>Tecnólogo en Administración de Empresas</h4>
          <p>2019 - ITSHCPP</p>
        </div>
      </div>
    </section>
  );
}

export default Certification;
