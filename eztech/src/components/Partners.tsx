import { Container } from "react-bootstrap";
import "./Partners.css";
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { Reveal } from "./Reveal";
import carousel_img from '../assets/Carousel1.png';
import carousel_img2 from '../assets/Carousel2.png';
import carousel_img3 from '../assets/Carousel3.png';
import carousel_mobile from '../assets/carousel-mobile1.png';
import carousel_mobile2 from '../assets/carousel-mobile2.png';
import carousel_mobile3 from '../assets/carousel-mobile3.png';
import carousel_mobile4 from '../assets/carousel-mobile4.png';


function Partners() {
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenwidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="partner" className="partners-bg">
      <Container>
        <Reveal>
          <div className="fs-2 mb-5 text-center">
            OUR <span className="text-accent-0">PARTNERS</span>
          </div>
          {screenwidth < 767 && (
          <Carousel pause={false}>
            <Carousel.Item interval={3000}>
              <img className="carousel-image2" src={carousel_mobile} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-image2" src={carousel_mobile2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-image2" src={carousel_mobile3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="carousel-image2" src={carousel_mobile4} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
          )}

          {screenwidth > 767 && (
            <Carousel>
              <Carousel.Item interval={3000}>
                <img className="carousel-image" src={carousel_img} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="carousel-image" src={carousel_img2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="carousel-image" src={carousel_img3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          )}
        </Reveal>
      </Container>
    </div>
  );
}

export default Partners;