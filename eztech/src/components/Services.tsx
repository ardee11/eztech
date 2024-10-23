import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import "./Services.css";
import Lottie from "lottie-react";
import animationData from "../assets/lotties/value-bg2.json";
import { Reveal } from "./Reveal";
import service_icon1 from '../assets/icons/solution-icon1.png';
import service_icon1_2 from '../assets/icons/solution-icon1-black.png';
import service_icon2 from '../assets/icons/solution-icon2.png';
import service_icon2_2 from '../assets/icons/solution-icon2-black.png';
import service_icon3 from '../assets/icons/solution-icon3.png';
import service_icon3_2 from '../assets/icons/solution-icon3-black.png';
import service_icon4 from '../assets/icons/solution-icon4.png';
import service_icon4_2 from '../assets/icons/solution-icon4-black.png';
import service_icon5 from '../assets/icons/solution-icon5.png';
import service_icon5_2 from '../assets/icons/solution-icon5-black.png';
import service_icon6 from '../assets/icons/solution-icon6.png';
import service_icon6_2 from '../assets/icons/solution-icon6-black.png';
import service_icon7 from '../assets/icons/solution-icon7.png';
import service_icon7_2 from '../assets/icons/solution-icon7-black.png';

const Services = () => {
  const services = [
    {
      icon: service_icon1,
      icon2: service_icon1_2,
      title: "IT Hardware and Software Solutions",
      description: "We provide tailored IT hardware and software solutions to meet your business needs, ensuring optimal performance and productivity."
    },
    {
      icon: service_icon2,
      icon2: service_icon2_2,
      title: "Network Security Solutions",
      description: "Safeguard your business with our robust network security solutions. We implement advanced security protocols to protect your systems from threats, ensuring the integrity and confidentiality of your data."
    },
    {
      icon: service_icon3,
      icon2: service_icon3_2,
      title: "Data Center Optimization Solutions",
      description: "Maximize efficiency and performance in your data center with our optimization solutions. We assess your infrastructure to enhance resource utilization, reduce energy consumption, and improve overall system reliability."
    },
    {
      icon: service_icon4,
      icon2: service_icon4_2,
      title: "Comprehensive Data Center Preventive Maintenance",
      description: "Ensure the longevity and reliability of your data center with our preventive maintenance services. We conduct regular assessments and maintenance to identify and resolve potential issues before they escalate."
    },
    {
      icon: service_icon5,
      icon2: service_icon5_2,
      title: "Disaster Recovery Solutions",
      description: "Be prepared for the unexpected with our disaster recovery solutions. We develop and implement strategies to ensure business continuity, minimizing downtime and data loss in the event of a disaster."
    },
    {
      icon: service_icon6,
      icon2: service_icon6_2,
      title: "Enterprise Storage Backup Solutions",
      description: "Protect your critical data with our enterprise storage backup solutions. We offer scalable and secure backup options to safeguard your information against loss and ensure easy recovery."
    },
    {
      icon: service_icon7,
      icon2: service_icon7_2,
      title: "Systems Integration",
      description: "Streamline your operations with our systems integration services. We help you connect disparate systems and applications, enabling seamless communication and improved efficiency across your organization."
    }
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 2500,
    cssEase: "linear",
    arrows: false, 
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 900,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 2500,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2500,
        }
      }
    ]
  };

  return (
    <div id="services" className="services-section-bg">
        <Lottie 
          animationData={animationData} 
          loop 
          className="lottie-animation2" 
        />
      <Container>
        <Reveal>
          <div className="text-center mb-5">
            <div className="text-accent-0 fs-5">OUR SERVICES</div>
            <div className="text-white fs-2 fw-bold500">What we do</div>
          </div>
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="card-services service-text">
                <div className="d-flex justify-content-center text-white">
                  <img 
                    className="service-icon"
                    src={service.icon} 
                    width="56px" 
                    alt="Solution Icon"
                  />
                  <img 
                    className="service-icon-hover"
                    src={service.icon2} 
                    width="56px" 
                    alt="Solution Icon"
                  />
                </div>
                <p className="mt-4 text-center fw-bold500">
                  {service.title}
                </p>
                <hr className="mt-1 hidden-text"></hr>
                <p className="mt-4 fs-7 hidden-text desc">
                  {service.description}
                </p>
              </div>
            ))}
          </Slider>
        </Reveal>
      </Container>
    </div>
  );
};

export default Services;