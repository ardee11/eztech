import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="position-relative">
        <img 
          src="src/assets/services-bg.png"
          className="img-fluid w-100"
          alt="What we do"
        />
        <div className="moving-gradient" />
        <Container>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="text-center">
              <div className="text-accent-0 fs-6">
                OUR SERVICES
              </div>
              <div className="text-white fs-3 fw-bold mb-5">
                What we do
              </div>
            </div>
            <Row className="justify-content-center"> {/* 3 columns at the top */}
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon1.svg" alt="" />
                  <div className="text-white mt-3">IT Hardware and Software Solutions</div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon2.svg" alt="" />
                  <div className="text-white mt-3">Data Center Optimization Solutions</div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon3.svg" alt="" />
                  <div className="text-white mt-3">Network Security<br /> Solutions</div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4"> {/* 4 columns at the bottom */}
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon4.svg" alt="" />
                  <div className="text-white mt-3">Comprehensive Data Center Preventive Maintenance</div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon5.svg" alt="" />
                  <div className="text-white mt-3">Disaster Recovery Solutions</div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon6.svg" alt="" />
                  <div className="text-white mt-3">Enterprise Storage Backup Solutions</div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="service-item">
                  <img className="img-fluid" src="src/assets/services-icon7.svg" alt="" />
                  <div className="text-white mt-3">Systems Integration</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Services;