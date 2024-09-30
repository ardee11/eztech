import { Container } from "react-bootstrap";
import "./Partners.css";
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';

function Partners() {
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenwidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="partners-bg">
      <Container>
        <div className="fs-3 fw-bold mb-5 text-center">
          OUR <span className="text-accent-0">PARTNERS</span>
        </div>

        {screenwidth < 767 && (
        <Carousel variant="dark">
          <Carousel.Item interval={4000}>
            <img className="carousel-image2" src="src/assets/carousel-mobile1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="carousel-image2" src="src/assets/carousel-mobile2.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="carousel-image2" src="src/assets/carousel-mobile3.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="carousel-image2" src="src/assets/carousel-mobile4.png" alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      )}

      {screenwidth > 767 && (
        <Carousel variant="dark">
          <Carousel.Item interval={5000}>
            <img className="carousel-image" src="src/assets/Carousel1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="carousel-image" src="src/assets/Carousel2.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="carousel-image" src="src/assets/Carousel3.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      )}

      </Container>
    </div>
  );
}

export default Partners;