import React from 'react';
import logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom';
const List=()=> {
  return (
    <>
    <header>
      <div className="container container-flex">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo"/>
          </div>
          <nav>
            <div className="list">
              <NavLink to="/" className="listItem"
              activeClassName="activeItem">Home</NavLink>
              <NavLink to="/about" className="listItem"
              activeClassName="activeItem">About</NavLink>
              <NavLink to="/services" className="listItem"
              activeClassName="activeItem">Services</NavLink>
              <NavLink to="/contact" className="listItem"
              activeClassName="activeItem">Contact</NavLink>
              <NavLink to="/reviews" className="listItem"
              activeClassName="activeItem">Reviews</NavLink>
            </div>
          </nav>
      </div>
    </header>
    </>
  )
}

export default List;
