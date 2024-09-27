import { Container } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <header className="position-relative">
      <img 
        src="src/assets/hero-main1.png"
        className="img-fluid"
        alt="Hero"
      />
      <Container>
        <div className="position-absolute top-50 translate-middle-y">
          <div className="text-white">
            <h1 className="responsive-h1 fw-bold">YOUR IT NEEDS<br/>MADE EASY</h1>
            <p className="fs-5">Providing the best fit for your company</p>
          </div>
        </div>
    </Container>
    </header>
  );
}

export default Hero;