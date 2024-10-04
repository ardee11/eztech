import { Container, Col, Row } from "react-bootstrap";
import "./Value.css";

const Value = () => {
  return (
    <div className="position-relative value-section-bg img-fluid w-100">
      <Container>
        <Row className="d-flex">
          <div className="text-white d-flex title-text pt-4 mt-4 fw-bold">OUR CORE VALUES</div>
        </Row>
        <Row className="card-div d-flex">
          <Col xs={6} sm={5} md={4} lg={3}>
            <div className="value-card">
              <div className="value-container">
                <div className="icon-container">
                  <img
                    className="value-icon"
                    src="./src/assets/value-icon1.png"
                    alt="Selfless Icon"
                  />
                  <img
                    className="value-icon-hover"
                    src="./src/assets/value-icon1.gif"
                    alt="Selfless Icon Hover"
                  />
                </div>
                <div className="icon-text fs-5 fw-bold">PROGRESS</div>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={5} md={4} lg={3}>
            <div className="value-card">
              <div className="value-container">
                <div className="icon-container">
                  <img
                    className="value-icon"
                    src="./src/assets/value-icon2.png"
                    alt="Selfless Icon"
                  />
                  <img
                    className="value-icon-hover"
                    src="./src/assets/value-icon2.gif"
                    alt="Selfless Icon Hover"
                  />
                </div>
                <div className="icon-text fs-5 fw-bold">EFFICIENCY</div>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3}>
            <div className="value-card mobile">
              <div className="value-container">
                <div className="icon-container">
                  <img
                    className="value-icon"
                    src="./src/assets/value-icon3.png"
                    alt="Selfless Icon"
                  />
                  <img
                    className="value-icon-hover"
                    src="./src/assets/value-icon3.png"
                    alt="Selfless Icon Hover"
                  />
                </div>
                <div className="icon-text fs-5 fw-bold">SELFLESSNESS</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Value;