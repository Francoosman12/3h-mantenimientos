import './App.css';
import { useEffect } from 'react';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Slider from './components/Slider';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div>
        <Header />
      </div>
      <div className="fade-in">
        <AboutUs />
      </div>
      <div className="fade-in">
        <Services />
      </div>
      <div className="fade-in">
        <Slider />
      </div>
      <div className="fade-in">
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.link/1f4gl1" // Reemplaza por tu número de WhatsApp
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
}

export default App;
