import { Container, Row, Col } from "react-bootstrap";
import "./Mission.css";
import { Reveal } from './Reveal';
import imgHero2Url from '../assets/mission-image.jpg';

const Mission = () => {
  return (
    <div className="d-flex mission-section-bg">
      <Container>
        <Reveal>
          <Row className="align-items-center justify-content-between">
            <Col xs={12} md={12} lg={6}>
               <div className="image-placeholder2">
                  <img 
                    src={imgHero2Url}
                    className="img-fluid w-100"
                    alt="Hero"
                  />
                </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="d-flex flex-column text-margin-left">
                <div className="fs-3 fw-bold500 mobile-margin">MISSION</div>
                <div className="fs-6 justify mt-3">
                  Provide world-class IT services and offer latest and innovative 
                  IT solutions to businesses, contributing to their growth, and 
                  empowering them to achieve their business goals.
                </div>
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="px-1 mission-shape" />
            </Col>
          </Row>
        </Reveal>
      </Container>
    </div>
  );
};

export default Mission;