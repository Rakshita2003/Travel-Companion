import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Reviews from './Component/Reviews';
import List from './Component/List';
import Footer from './Component/Footer';
const App=()=> {
  return (
    <>
    <List/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
