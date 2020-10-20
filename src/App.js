import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Price from './components/Price';
import Services from './components/Services';
import Work from './components/Work';
import './styles/App.scss';
const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <About/>
      <Work/>
      <Price/>
      <Post/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
