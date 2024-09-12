import './App.css';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Slider from './components/Slider';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <AboutUs />
      <Services />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
