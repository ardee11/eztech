import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'; 
import "./ContactUs.css";
import emailjs from 'emailjs-com';
import { useToast } from "./ToastContext";

// Define the types for form data and errors
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const showToast = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true); // Start loading
      emailjs.send('service_q1h2vid', 'template_wwdohim', formData as unknown as Record<string, unknown>, 'A1jQyo0q33kwEboCM')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        showToast(`Your message has been sent!<br />Please wait we'll get back to you shortly.`);
        
        // Reset form data and errors after sending
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({}); 
        setLoading(false); // Stop loading
      }, (err) => {
        console.error('Failed to send email. Error: ', err);
        showToast('Failed to submit. Please try again.');
        setLoading(false); // Stop loading
      });
    }
  };

  return (
    <div id="contact" className="contactus-section-bg">
      <Container>
        <Row className="d-flex align-items-center justify-content-between contact-text">
          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="bg-light message-bg">
              <div className="main">
                <div className="d-flex">Have a question?</div>
                <div className="text-accent-0 fw-bold d-flex">Send us a message!</div>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="margin-form" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="margin-form" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="margin-form" controlId="formPhone">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="margin-form" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button 
                  type="submit" 
                  className="mt-4 primary-button px-4 submit-button"
                  variant='success'
                  disabled={loading} // Disable button when loading
                >
                  {loading ? 'Sending...' : 'Submit'} {/* Change button text */}
                </Button>
              </Form>
            </div>            
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="mb-5">
              <div className="mb-3">
                <img src="./src/assets/calendar-check.svg" className="contact-images" alt="Office Hours"/>
                Monday to Friday 8:00 AM - 5:00 PM
              </div>
              <div className="mb-3">
                <img src="./src/assets/telephone.svg" className="contact-images" alt="Phone"/>
                (02) 8691-9608
              </div>
              <div className="mb-3">
                <img src="./src/assets/envelope.svg" className="contact-images" alt="Email"/>
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
                title="Location Map"
              ></iframe>
            </div>
            <div className="text-accent-0 fw-bold text-center mt-4 fs-3">
              Visit Us
            </div>
            <div className="text-center mt-3">
              <img src="./src/assets/geo.svg" className="contact-images" alt="Location"/>
              Unit 302 The Sycamore Bldg. Buencamino Street<br />Alabang, Muntinlupa City
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;