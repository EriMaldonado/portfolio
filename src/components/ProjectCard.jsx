import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, buttonLink, LinkCode }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card">
        <div className="proj-imgbx text-center">
          <img src={imgUrl} className="img-fluid" alt="imgUrl"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br/>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark">Ver demo</button>
            </a>
            <a href={LinkCode} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark">Repositorio</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};