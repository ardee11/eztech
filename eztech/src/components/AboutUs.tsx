import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about" className="bg-light d-flex about-section-bg">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={12} lg={5}>
            <div className="image-placeholder" />
          </Col>
          <Col xs={12} md={12} lg={6} className="d-flex flex-column">
            <div className="text-accent-0 fs-5 mobile-margin">ABOUT US</div>
            <div className="fw-bold fs-3 mobile-margin">
              We partner with the most trusted brands in the market.
            </div>
            <div className="fs-6 justify mt-3">
              EZTech IT Solutions is an IT Solutions provider delivering IT products 
              and providing solutions to the IT needs of numerous corporations, 
              organizations, and government agencies. Expertise and the 20-year 
              experience of its leaders with its dynamic team led the company's 
              growth in sales, partners, manpower, and services.
            </div>
          </Col>
          <div className="px-1 aboutus-shape" />
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;