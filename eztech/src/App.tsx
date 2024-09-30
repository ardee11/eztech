import { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Value from './components/Value';
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Partners from "./components/Partners";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import "./App.css";

function App() {

    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar visible={visible} />
      <Hero />
      <AboutUs />
      <Value />
      <Mission />
      <Vision />
      <Services />
      <Partners />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;