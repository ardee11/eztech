import { Alert, Col, Container, Row } from 'react-bootstrap';
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
                  Tel: (02) 8691-9608
                </span>
              </Col>
              <Col lg={4} className="footer-text">
                <img src='./src/assets/envelope-fill.svg' className='footer-images' />
                <span className="ms-2">
                  Email: sales@eztechit.com
                </span>
              </Col>
              <Row>
                <Col lg={12} className="footer-attribute">
                <p>Images from <Alert.Link href="https://www.freepik.com/" target='_blank'>FreePik</Alert.Link> and <Alert.Link href="https://www.flaticon.com/" target='_blank'>Flaticon</Alert.Link></p>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;