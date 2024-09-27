import { Container } from "react-bootstrap"
import "./Mission.css"

const Mission = () => {
  return (
    <div className="d-flex mission-section-bg">
      <Container className="d-flex align-items-center justify-content-end">
        <div className="d-flex flex-column mission-div">
          <div className="fw-bold fs-3">
            MISSION
          </div>
          <div className="fs-6 justify">
            Provide world-class IT services and offer latest and innovative 
            IT solutions to businesses, contributing to their growth, and 
            empowering them to achieve their business goals.
          </div>
        </div>
          <div className="mission-shape" />
      </Container>
    </div>
  );
}

export default Mission