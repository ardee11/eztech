import { Container } from "react-bootstrap";
import "./Partners.css";
import Carousel from 'react-bootstrap/Carousel';

function Partners() {
  return (
    <>
      <div className="partners-bg">
        <Container>
          <div className="fs-3 fw-bold mb-5">
            OUR PARTNERS
          </div>
          <Carousel variant="dark">
            <Carousel.Item interval={5000}>
              <img className="carousel-image" src="src/assets/Carousel1.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="carousel-image" src={"src/assets/Carousel2.png"} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img className="carousel-image" src={"src/assets/Carousel3.png"} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default Partners;