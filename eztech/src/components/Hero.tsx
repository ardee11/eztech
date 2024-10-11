import { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/hero-bg.json';

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 767);
  const lottieRef = useRef(null);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 767);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="hero-section position-relative">
      <img 
        src="src/assets/hero-main2.png"
        className="img-fluid w-100"
        alt="Hero"
      />
      {!isSmallScreen && (
        <Lottie 
          lottieRef={lottieRef}
          animationData={animationData} 
          loop={false} // Disable looping
          style={{
            position: 'absolute',
            top: 0,
            left: '-30%', 
            width: '100%', 
            height: '100%',
            opacity: 0.1,
            zIndex: 0, 
          }} 
        />
      )}
      {isSmallScreen && (
        <Lottie 
          lottieRef={lottieRef}
          animationData={animationData} 
          loop={false} // Disable looping
          style={{
            position: 'absolute',
            top: 0,
            left: '-160%', 
            width: '300%', 
            height: '100%',
            opacity: 0.1,
            zIndex: 0, 
          }} 
        />
      )}
      <Container className="position-relative">
        <Row className="align-items-center" style={{ height: '100vh' }}>
          <Col sm={12} md={8} lg={6}>
            <div className="text-container">
              <h1 className="responsive-h1 fw-bold text-white">YOUR IT NEEDS MADE EASY</h1>
              <p className="fs-5 text-white mb-5">Providing the best fit for your company</p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Hero;
