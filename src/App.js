import React from 'react';
import List from './Component/List';
import Home from './Component/Home';
import About from './Component/About';
import Reviews from './Component/Reviews';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import '../src/CSS/Home.css';
import Privacy from './Component/Privacy';
import Safety from './Component/Safety';
import TermsAndConditions from './Component/TermsAndConditions';

const App=()=> {
  return (
    <>

        <List/>
        <Home/>
        <About/>
        <Reviews/>
        <Contact/>
        <Footer/>


<Safety/>
<Privacy/>
<TermsAndConditions/>
    </>
  )
}

export default App;

