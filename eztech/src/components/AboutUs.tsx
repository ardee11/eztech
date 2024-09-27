import { Container } from "react-bootstrap"
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div
      className="bg-light d-flex about-section-bg"
    >
      <Container className="d-flex align-items-center justify-content-evenly">
      <div className="image-placeholder" />  
        <div className="d-flex flex-column about-div">
          <div className="text-accent-0 fs-5">
            ABOUT US
          </div>
          <div className="fw-bold fs-3">
            We partner with the most <br />
            trusted brands in the market.
          </div>
          <div className="fs-6 justify">
            EZTech IT Solutions is an IT Solutions provider delivering IT products 
            and providing solutions to the IT needs of numerous corporations, 
            organizations, and government agencies. Expertise and the 20-year 
            experience of its leaders with its dynamic team, led the company's 
            growth in sales, partners, manpower, and services.
          </div>
        </div>
          <div className="about-shape" />
      </Container>
    </div>
  );
}

export default AboutUs