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
import { ToastProvider } from "./components/ToastContext";

function App() {

  return (
    <>
    <ToastProvider>
      <NavBar />
      <Hero />
      <AboutUs />
      <Value />
      <Mission />
      <Vision />
      <Services />
      <Partners />
      <ContactUs />
      <Footer />
    </ToastProvider>
    </>
  );
}

export default App;