import { Container, Row, Col } from "react-bootstrap";
import "./Vision.css";
import { Reveal } from "./Reveal";
import imgHero2Url from '../assets/vision-image.jpg';

const Vision = () => {
  return (
    <div className="d-flex vision-section-bg">
      <Container>
        <Reveal>
        <Row className="align-items-center justify-content-between">
          <Col>
          <div className="px-1 vision-shape" />
          </Col>
          <Col xs={12} md={12} lg={4} className="d-flex flex-column text-margin-right">
            <div className="fs-3 fw-bold500 mobile-margin2">VISION</div>
            <div className="fs-6 justify mt-3 mb-3">
              A top-notch IT Solutions Provider leading the industry in satisfying 
              the needs of businesses and organizations in the country.
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="image-placeholder3">
              <img 
                src={imgHero2Url}
                className="img-fluid w-100"
                alt="Hero"
              />
            </div>
          </Col>
        </Row>
        </Reveal>
      </Container>
    </div>
  );
};

export default Vision;
