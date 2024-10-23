import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './NavBar.css';
import eztechlogo from '../assets/ezlogo3.png';
import navtoggle from '../assets/icons/toggler-icon.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else if (!isOpen) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prevOpen => {
      const newOpen = !prevOpen;
      if (newOpen) {
        setVisible(true);
      }
      return newOpen;
    });
  };

  const scrollToSection = (event: React.MouseEvent<HTMLElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <Navbar 
      sticky="top" 
      expand="lg" 
      className={`transition-navbar ${visible ? 'navbar-visible' : 'navbar-hidden'} bg-green`}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={scrollToTop}>
          <img
            src={eztechlogo}
            alt="EZTech Logo"
            height="69"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <img 
          src={navtoggle} 
          className="navbar-toggler" 
          onClick={handleToggle} 
          aria-controls="basic-navbar-nav" 
          aria-label="Toggle navigation"
          height={40}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav className="ms-auto fs-7 fw-bold500">
            <Nav.Link href="#about" className="ms-5" onClick={(e) => scrollToSection(e, 'about')}>ABOUT US</Nav.Link>
            <Nav.Link href="#services" className="ms-5" onClick={(e) => scrollToSection(e, 'services')}>OUR SERVICES</Nav.Link>
            <Nav.Link href="#partner" className="ms-5" onClick={(e) => scrollToSection(e, 'partner')}>OUR PARTNERS</Nav.Link>
            {isOpen ? (
              <Nav.Link href="#contact" className="ms-5" onClick={(e) => scrollToSection(e, 'contact')}>CONTACT US</Nav.Link>
            ) : (
              <Button 
                href="#contact" 
                variant='success'
                className={`ms-4 contactus-button ${visible ? 'primary-button' : 'secondary-button'}`}
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                CONTACT US
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;