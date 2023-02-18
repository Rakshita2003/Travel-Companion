import React from 'react';

// import { Routes,Route } from 'react-router-dom';
import Home from '../Component/Home';
import About from '../Component/About';
import Services from '../Component/Services';
import Contact from '../Component/Contact';
import Reviews from '../Component/Reviews';
// import List from './Component/List';
// import Footer from './Component/Footer';

import {NavLink} from 'react-router-dom';
import logo from '../Images/logo.png';

// import '../src/CSS/Home.css';
// import logo from '../src/Images/logo.png';
// import pic from '../src/Images/pic.png';
// import facebook from '../src/Images/FB.png';
// import twitter from '../src/Images/twitter.png';

const List =()=> {
  return (
    <>
<div>
<div className="first-page">
<div className="header">
          <span className="text11">
            {' '}
            {/* Home           About       Services     Reviews      Contact */}

            
            <NavLink exact to="/" element={<Home/>} className="listItem" activeClassName="activeItem">Home</NavLink>
            <NavLink to="/about" element={<About/>} className="listItem" activeClassName="activeItem">About</NavLink>
            <NavLink to="/services" element={<Services/>} className="listItem" activeClassName="activeItem">Services</NavLink>
            <NavLink to="/reviews" element={<Reviews/>} className="listItem" activeClassName="activeItem">Reviews</NavLink>
            <NavLink to="/contact" element={<Contact/>} className="listItem" activeClassName="activeItem">Contact</NavLink>
            
          </span>
          <img
            alt="logo7810"
            src= {logo}
            className="logo"
          />
          <button className="button1">
            <button className="king-button1">
              <span className="text12">Sign Up</span>
            </button>
          </button>
        </div>
        </div>
        </div>
      </>
      )
    }
    
    export default List;