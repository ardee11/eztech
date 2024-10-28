import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";
import logo from '../assets/ezlogo.png';
import envelope_icon from '../assets/icons/envelope-fill.svg';
import telephone_icon from '../assets/icons/telephone-fill.svg';
import location_icon from '../assets/icons/geo-alt-fill.svg';
import { Reveal } from './Reveal';

const Footer = () => {
  const scrollToSection = (event: React.MouseEvent<HTMLElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="position-relative text-offwhite fs-6 footer-bg">
          <Container>
            <Reveal>
              <Row>
                <Col lg={5} className="footer-logo-container">
                  <div>
                    <img 
                      className="footer-logo"
                      src={logo}            
                      alt="EZTech Logo"
                      height="90" 
                      onClick={scrollToTop}
                    />
                  </div>
                </Col>
                <Col lg={3} className="footer-text">
                  <div>
                    <p>QUICK LINKS</p>
                    <p className="quick-links" onClick={(e) => scrollToSection(e, 'about')}>About Us</p>
                    <p className="quick-links" onClick={(e) => scrollToSection(e, 'services')}>Services</p>
                    <p className="quick-links" onClick={(e) => scrollToSection(e, 'partner')}>Partners</p>
                    <p className="quick-links" onClick={(e) => scrollToSection(e, 'contact')}>Contacts</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={5} className="footer-text mt-5">
                  <div className="">
                    <img src={location_icon} className='footer-images' />
                    <span className="ms-2">Office Address:</span>
                  </div>
                  <div>
                    Unit 302 The Sycamore Bldg. Buencamino Street<br />
                    Alabang, Muntinlupa City
                  </div>
                </Col>
                <Col lg={3} className="footer-text2 mt-5">
                  <img src={telephone_icon} className='footer-images' />
                  <span className="ms-2">
                    Tel: (02) 8691-9608
                  </span>
                </Col>
                <Col lg={4} className="footer-text3 mt-5">
                  <img src={envelope_icon} className='footer-images' />
                  <span className="ms-2">
                    Email: sales@eztechit.com
                  </span>
                </Col>
                {/* <Row>
                  <Col lg={12} className="footer-attribute">
                  <p>Image from <Alert.Link href="https://www.freepik.com/" target='_blank'>FreePik</Alert.Link> and Icons from <Alert.Link href="https://www.flaticon.com/" target='_blank'>Flaticon</Alert.Link></p>
                  </Col>
                </Row> */}
              </Row>
          </Reveal>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;