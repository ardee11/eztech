import { Container } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
    <div className="contactus-section-bg">
      <Container>
        <div className="fw-bold fs-3 d-flex justify-content-end">
          GOT A QUESTION?
        </div>
        <div className='text-accent-0 fw-bold fs-3 d-flex justify-content-end'>
          CONTACT US
        </div>
      </Container>
    </div>
    </>
  )
}

export default ContactUs