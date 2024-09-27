import { Container } from "react-bootstrap"
import "./Vision.css"

const Mission = () => {
  return (
    <div className="d-flex vision-section-bg">
      <Container className="d-flex align-items-center">
        <div className="vision-shape" />
        <div className="d-flex flex-column vision-div">
          <div className="fw-bold fs-3">
            VISION
          </div>
          <div className="fs-6 justify">
            A top-notch IT Solutions Provider leading the industry in 
            satisfying the needs of businesses and organizations in 
            the country.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mission