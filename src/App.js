import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Element from './components/Element';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Works from './components/Works';
import Loading from "./components/Loading";

function App() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000);
  }, [])

  return (
    <div className="App">
      {
        show ?
          <div>
            <Navbar />
            <Home />
            <Feature />
            <Portfolio />
            <Element />
            <About />
            <Works />
            <Testimonial />
            <Footer />
          </div>
          : <Loading/>
      } 
    </div>
  );
}

export default App;
