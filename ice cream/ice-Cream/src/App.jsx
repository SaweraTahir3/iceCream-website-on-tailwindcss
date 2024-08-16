import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Hero />}/>
          <Route path="/services" element={<Services/>}/>
         <Route path="/About" element={<Banner/>}/>
          <Route path="/imprission" element={<Testimonial/>}/>
        </Routes>
      </BrowserRouter>
      <AppStore />
    <Footer />
      
      
      
    </div>
  );
};

export default App;
