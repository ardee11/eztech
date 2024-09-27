import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; 

function NavBar() {
  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="src/assets/ezlogo.png"
              alt="EZTech Logo"
              height="69"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="ms-5">ABOUT US</Nav.Link>
              <Nav.Link href="#services" className="ms-5">OUR SERVICES</Nav.Link>
              <Nav.Link href="#partner" className="ms-5">OUR PARTNERS</Nav.Link>
              <Nav.Link href="#contact" className="ms-5">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-border"></div>
    </>
  );
}

export default NavBar;