import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';
import Registration from './components/registration/Registartion';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/> 
      <Cards/>
      <Registration/>
      <Footer/>
    </>
  ); 
}

export default App;