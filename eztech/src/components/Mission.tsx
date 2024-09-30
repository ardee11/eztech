import { Container, Row, Col } from "react-bootstrap";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="d-flex mission-section-bg">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={12} lg={6}>
            <div className="image-placeholder2" />
          </Col>
          <Col xs={12} md={12} lg={4} className="d-flex flex-column">
            <div className="fs-3 fw-bold mobile-margin">MISSION</div>
            <div className="fs-6 justify mt-3">
              Provide world-class IT services and offer latest and innovative 
              IT solutions to businesses, contributing to their growth, and 
              empowering them to achieve their business goals.
            </div>
          </Col>
          <div className="px-1 mission-shape" />
        </Row>
      </Container>
    </div>
  );
};

export default Mission;