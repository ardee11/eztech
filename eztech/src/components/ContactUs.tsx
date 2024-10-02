import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Import Button
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div id="contact" className="contactus-section-bg">
        <Container>
          <Row className="d-flex align-items-center justify-content-between contact-text">
            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="bg-light message-bg">
                <div className="main">
                  <div className="d-flex">
                    Have a question?
                  </div>
                  <div className="text-accent-0 fw-bold d-flex">
                    Send us a message!
                  </div>
                </div>
                <Form>
                  <Form.Group className="margin-form" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="" />
                  </Form.Group>
                  <Form.Group className="margin-form" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                  <Form.Group className="margin-form" controlId="exampleForm.ControlInput3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="" />
                  </Form.Group>
                  <Form.Group className="margin-form" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button type="submit" className="mt-4 primary-button px-4">
                    Submit
                  </Button>
                </Form>
              </div>            
            </Col>
            <Col xs={12} sm={12}md={12} lg={6}>
              <div className="mb-5">
                <div className="mb-3">
                  <img src="./src/assets/calendar-check.svg" className="contact-images"/>
                  Monday-Friday 8:00 AM - 5:00 PM
                </div>
                <div className="mb-3">
                  <img src="./src/assets/telephone.svg" className="contact-images"/>
                  (02) 8691-9608
                </div>
                <div className="mb-3">
                  <img src="./src/assets/envelope.svg" className="contact-images"/>
                  sales@eztechit.com
                </div>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.49898549337868!2d121.02258151998126!3d14.428099010722535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x348b5c4713ba17a8!2sEZTech%20IT%20Solutions!5e0!3m2!1sen!2sph!4v1632665293335!5m2!1sen!2sph"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-100"
                ></iframe>
              </div>
              <div className="text-accent-0 fw-bold text-center mt-4 fs-3">
                Visit Us
              </div>
              <div className="text-center mt-3">
                <img src="./src/assets/geo.svg" className="contact-images"/>
                Unit 302 The Sycamore Bldg. Buencamino Street<br />Alabang, Muntinlupa City
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;