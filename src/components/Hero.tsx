import { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/hero-bg.json';
import { Reveal } from './Reveal';
import imgHero2Url from '../assets/hero-main2.png';

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
        src={imgHero2Url}
        className="img-fluid w-100"
        alt="Hero"
      />
      <Lottie 
        lottieRef={lottieRef}
        animationData={animationData} 
        loop={false}
        autoplay={false}
        style={{
          position: 'absolute',
          top: 0,
          left: isSmallScreen ? '-160%' : '-30%', 
          width: isSmallScreen ? '300%' : '100%', 
          height: '100%',
          opacity: 0.1,
          zIndex: 0, 
        }} 
      />
      <Container className="position-relative">
        <Row className="align-items-center" style={{ height: '100vh' }}>
          <Col className="mobile-layout" sm={12} md={8} lg={6}>
            <Reveal duration={0.7}>
              <h1 className="responsive-h1">YOUR IT NEEDS MADE EASY</h1>
            </Reveal>
            <Reveal duration={0.8} delay={0.7}>
              <p className="text-subhead">Providing the best fit for your company</p>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Hero;
