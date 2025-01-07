import { Container, Col, Row } from "react-bootstrap";
import "./Summary.css";
import { Reveal } from './Reveal';

const Summary = () => {
  return (
    <div className="position-relative summary-section-bg img-fluid w-100">
      <Container>
        <Row className="d-flex align-items-center justify-content-evenly">
          <Col sm={12} md={4} lg={3}>
            <Reveal duration={0.7}>
              <div className="card text-main">20
                <span className="text-sub">Years of Experience</span> 
              </div>
            </Reveal>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Reveal duration={0.7} delay={0.6}>
              <div className="card text-main">25+
                <span className="text-sub">Valued Clients</span> 
              </div>
            </Reveal>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Reveal duration={0.7} delay={1}>
              <div className="card text-main">55+
                <span className="text-sub">Trusted Partners</span> 
              </div>
            </Reveal>
          </Col>
        </Row>      
      </Container> 
    </div>
  );
}

export default Summary;
/*
const Summary = () => {
  return (
    <div className="position-relative summary-section-bg img-fluid w-100">
      <Container>
        <Row className="d-flex justify-content-evenly align-items-center">
          <Col sm={12} md={3} lg={3}>
            <Reveal duration={0.7}>
              <div className="text-main">20
                <span className="text-sub">Years of <br />Experience</span>
              </div>
            </Reveal>
          </Col>
          <Col md={1} lg={1} className="d-flex justify-content-center">
            <div className="vertical-line"></div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <Reveal duration={0.7} delay={0.5}>
              <div className="text-main">25+
                <span className="text-sub">Valued<br />Clients</span>
              </div>
            </Reveal>
          </Col>
          <Col md={1} lg={1} className="d-flex justify-content-center">
            <div className="vertical-line"></div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <Reveal duration={0.7} delay={1}>
              <div className="text-main">55+
                <span className="text-sub">Trusted<br />Partners</span>
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
*/
