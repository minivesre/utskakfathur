import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MockupSection from './components/MockupSection';
import Conten from './components/Conten';
import Conten1 from './components/Conten1';
import Conten2 from './components/Conten2';
import Review from './components/Review';
import Footer from './components/Footer';



const Home: React.FC = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <MockupSection/>
    <Conten/>
    <Conten1/>
    <Conten2/>
    <Review/>
    <Footer/>
    </div>
  );
};

export default Home;