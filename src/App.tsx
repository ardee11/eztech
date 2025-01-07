// import React from 'react';
// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import AboutUs from "./components/AboutUs";
// import Value from './components/Value';
// import Mission from "./components/Mission";
// import Vision from "./components/Vision";
// import Services from "./components/Services";
// import Partners from "./components/Partners";
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import Summary from "./components/Summary";

import "./App.css";
import React from 'react';
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { ToastProvider } from "./components/ToastContext";

const Summary = React.lazy(() => import('./components/Summary'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const Value = React.lazy(() => import('./components/Value'));
const Mission = React.lazy(() => import('./components/Mission'));
const Vision = React.lazy(() => import('./components/Vision'));
const Partners = React.lazy(() => import('./components/Partners'));
const ContactUs = React.lazy(() => import('./components/ContactUs'));
const Footer = React.lazy(() => import('./components/Footer'));
const Services = React.lazy(() => import('./components/Services'));


function App() {

  return (
    <>
    <ToastProvider>
      <NavBar />
      <Hero />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Summary />
          <AboutUs />
          <Value />
          <Mission />
          <Vision />
          <Services />
          <Partners />
          <ContactUs />
          <Footer />
        </React.Suspense>
    </ToastProvider>
    </>
  );
}

export default App;