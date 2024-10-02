import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="position-relative text-offwhite fs-6 footer-bg">
          <Container>
            <Row>
              <Col lg={4}>
                <div>
                  <img 
                    src="./src/assets/ezlogo3.png"             
                    alt="EZTech Logo"
                    height="90" 
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} className="mt-5">
                <div className="fw-bold">
                  <img src='./src/assets/geo-alt-fill.svg' className='footer-images' />
                  <span className="ms-2">Office Address:</span>
                </div>
                <div>
                  Unit 302 The Sycamore Bldg. Buencamino Street
                  Alabang, Muntinlupa City
                </div>
              </Col>
              <Col lg={4} className="footer-text">
                <img src='./src/assets/telephone-fill.svg' className='footer-images' />
                <span className="ms-2">
                  Tel: <a href="tel:+63275091428">(02) 8691-9608</a>
                </span>
              </Col>
              <Col lg={4} className="footer-text">
                <img src='./src/assets/envelope-fill.svg' className='footer-images' />
                <span className="ms-2">
                  Email: <a href="mailto:sales@eztechit.com">sales@eztechit.com</a>
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;