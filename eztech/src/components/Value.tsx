import { Container, Col, Row } from "react-bootstrap";
import "./Value.css";

const Value = () => {
  return (
    <div className="position-relative d-flex value-section-bg">
      <Container>
        <div className="position-absolute d-flex">
          <Row className="justify-content-between">
            <Col xs={12} md={8} lg={2}>
              <div className="value-card" />
            </Col>
            <Col xs={12} md={8} lg={2}>
              <div className="value-card" />
            </Col>
            <Col xs={12} md={8} lg={2}>
              <div className="value-card" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Value;