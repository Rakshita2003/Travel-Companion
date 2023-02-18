import React from 'react';
import { Routes,Route} from 'react-router-dom';
import List from './Component/List';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Reviews from './Component/Reviews';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import '../src/CSS/Home.css';
import '../src/CSS/About.css';
import '../src/CSS/Services.css';
import '../src/CSS/Reviews.css';
import '../src/CSS/Contact.css';

const App=()=> {
  return (
    <>
    <List> </List>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/footer' element={<Footer/>} />
    </Routes>
    </>
  )
}

export default App;
