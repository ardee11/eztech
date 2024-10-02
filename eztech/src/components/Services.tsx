import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="position-relative d-flex services-section-bg">
      <div className="moving-gradient" />
      <div className="position-absolute top-50 start-50 translate-middle">
        <img src="./src/assets/globe-vector.svg" className="globe-shape img-fluid" />
      </div>
      <Container>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="text-center">
            <div className="text-accent-0 fs-6">OUR SERVICES</div>
            <div className="text-white fs-3 fw-bold mb-5">What we do</div>
          </div>
          <Row className="justify-content-center">
            {[
              { img: "src/assets/services-icon1.svg", title: "IT Hardware and Software Solutions" },
              { img: "src/assets/services-icon2.svg", title: "Data Center Optimization Solutions" },
              { img: "src/assets/services-icon3.svg", title: "Network Security Solutions" },
              { img: "src/assets/services-icon4.svg", title: "Comprehensive Data Center Preventive Maintenance" },
              { img: "src/assets/services-icon5.svg", title: "Disaster Recovery Solutions" },
              { img: "src/assets/services-icon6.svg", title: "Enterprise Storage Backup Solutions" },
              { img: "src/assets/services-icon7.svg", title: "Systems Integration" },
            ].map((service, index) => (
              <Col xs={12} sm={8} md={4} lg={3} className="text-center" key={index}>
                <div className="service-item">
                  <img className="img-fluid" src={service.img} alt="" />
                  <div className="text-title text-white mt-3">{service.title}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;