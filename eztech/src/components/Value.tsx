import { Container, Col, Row } from "react-bootstrap";
import "./Value.css";
import Lottie from "lottie-react";
import animationData from "../assets/lotties/value-bg2.json";

const Value = () => {
  return (
    <div className="position-relative value-section-bg img-fluid w-100">
      <Lottie 
        animationData={animationData} 
        loop 
        className="lottie-animation"
      />
      <Container>
        <Row className="d-flex">
          <div className="fw-bold500 text-white d-flex title-text pt-4 mt-4">WE VALUE</div>
        </Row>
        <Row className="card-div d-flex card-ani">
          <Col xs={6} sm={5} md={4} lg={3}>
            <div className="value-card">
              <div className="value-container">
                <div className="icon-container">
                  <img
                    className="value-icon"
                    src="./src/assets/icons/value-icon1.png"
                    alt="Progress Icon"
                  />
                  <img
                    className="value-icon-hover"
                    src="./src/assets/icons/value-icon1.gif"
                    alt="Selfless Icon Hover"
                  />
                </div>
                <div className="icon-text">PROGRESS</div>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={5} md={4} lg={3}>
            <div className="value-card">
              <div className="value-container">
                <div className="icon-container">
                  <img
                    className="value-icon"
                    src="./src/assets/icons/value-icon2.png"
                    alt="Efficiency Icon"
                  />
                  <img
                    className="value-icon-hover"
                    src="./src/assets/icons/value-icon2.gif"
                    alt="Selfless Icon Hover"
                  />
                </div>
                <div className="icon-text">EFFICIENCY</div>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3}>
            <div className="value-card mobile">
              <div className="value-container">
                <div className="icon-container">
                  <img
                    className="value-icon"
                    src="./src/assets/icons/value-icon3.png"
                    alt="Selfless Icon"
                  />
                  <img
                    className="value-icon-hover"
                    src="./src/assets/icons/value-icon3.png"
                    alt="Selfless Icon Hover"
                  />
                </div>
                <div className="icon-text">SELFLESSNESS</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Value;