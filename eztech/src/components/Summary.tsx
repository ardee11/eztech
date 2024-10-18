import { Container, Col, Row } from "react-bootstrap";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="position-relative summary-section-bg img-fluid w-100">
      <Container>
        <Row className="d-flex justify-content-evenly summary-text-slideUp">
            <Col sm={12} md={2} lg={3} className="d-flex justify-content-center" >
              <div className="text-main">20
                <span className="text-sub">Years of <br />Experience</span>
              </div>
            </Col>
            <Col md={1} lg={1} className="d-flex justify-content-center">
              <div className="vertical-line"></div>
            </Col>
            <Col sm={12} md={2} lg={3} className="d-flex justify-content-center">
              <div className="text-main">25+
                <span className="text-sub">Valued<br />Customers</span>
              </div>
            </Col>
            <Col md={1} lg={1} className="d-flex justify-content-center">
              <div className="vertical-line"></div>
            </Col>
            <Col sm={12} md={2} lg={3} className="d-flex justify-content-center">
              <div className="text-main">55+
                <span className="text-sub">Trusted<br />Partners</span>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Summary;
