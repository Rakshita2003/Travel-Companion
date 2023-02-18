import React from 'react';
import List from './Component/List';
import Home from './Component/Home';
import About from './Component/About';
import Reviews from './Component/Reviews';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import '../src/CSS/Home.css';

const App=()=> {
  return (
    <>

        <List/>
        <Home/>
        <About/>
        <Reviews/>
        <Contact/>
        <Footer/>

    </>
  )
}

export default App;

